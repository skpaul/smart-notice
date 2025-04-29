/*
**SmartNotice.js** is a tiny, reusable JavaScript library to show user notifications, tips, or onboarding messages just once — with a smart auto-reset after a custom duration.

<div id="tip-1">
  <p>👋 Welcome to the app</p>
  <button onclick="SmartNotice.dismiss('tip-1', 604800000)">Got it</button> <!-- 7 days -->
</div>

<div id="tip-2">
  <p>🚀 Try our new feature</p>
  <button onclick="SmartNotice.dismiss('tip-2', 86400000)">Dismiss</button> <!-- 1 day -->
</div>

<script>
  SmartNotice.init('tip-1', 604800000); // 7 days
  SmartNotice.init('tip-2', 86400000);  // 1 day
</script>

*/

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
  