
// SmartNotice.js
const SmartNotice = (function () {
    const storagePrefix = 'smartNotice:';
  
    function getKey(id) {
      return `${storagePrefix}${id}`;
    }
  
    function now() {
      return Date.now();
    }
  
    function init(id, autoResetMs) {
      const el = document.getElementById(id);
      if (!el) return;
  
      const data = localStorage.getItem(getKey(id));
      if (data) {
        try {
          const parsed = JSON.parse(data);
          if (parsed.dismissedAt && (!autoResetMs || now() - parsed.dismissedAt < autoResetMs)) {
            el.style.display = 'none';
            return;
          }
        } catch (e) {
          console.warn('Invalid notice data', e);
        }
      }
  
      el.style.display = '';
    }
  
    function dismiss(id, autoResetMs) {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
  
      const data = {
        dismissedAt: now(),
        autoResetMs: autoResetMs || null,
      };
  
      localStorage.setItem(getKey(id), JSON.stringify(data));
    }
  
    function reset(id) {
      localStorage.removeItem(getKey(id));
    }
  
    function clearAll() {
      Object.keys(localStorage)
        .filter((key) => key.startsWith(storagePrefix))
        .forEach((key) => localStorage.removeItem(key));
    }
  
    return {
      init,
      dismiss,
      reset,
      clearAll
    };
  })();
  
