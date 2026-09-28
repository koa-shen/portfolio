(() => {
  const storageKey = 'portfolio-theme';
  const root = document.documentElement;
  const systemScheme = window.matchMedia('(prefers-color-scheme: light)');
  const validPreferences = new Set(['system', 'light', 'dark']);
  const favicon = document.querySelector('#siteFavicon');

  let preference = 'system';
  try {
    const storedPreference = localStorage.getItem(storageKey);
    if (validPreferences.has(storedPreference)) preference = storedPreference;
  } catch {
    // Keep the system preference when browser storage is unavailable.
  }

  const applyPreference = () => {
    const theme = preference === 'system'
      ? (systemScheme.matches ? 'light' : 'dark')
      : preference;
    root.dataset.theme = theme;
    if (favicon) {
      favicon.href = theme === 'light'
        ? 'assets/favicon-light.svg?v=5'
        : 'assets/favicon.svg?v=5';
    }
  };

  applyPreference();
  systemScheme.addEventListener('change', () => {
    if (preference === 'system') applyPreference();
  });

  const bindControl = () => {
    const control = document.getElementById('themePreference');
    if (!control) return;

    control.value = preference;
    control.addEventListener('change', () => {
      preference = control.value;
      applyPreference();
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // The selection remains active for this page when storage is unavailable.
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindControl, { once: true });
  } else {
    bindControl();
  }
})();