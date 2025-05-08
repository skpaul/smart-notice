const SmartNotice = (() => {
    const storageKeyPrefix = 'smart-notice:';
  
    // Get current timestamp in milliseconds
    const now = () => new Date().getTime();
  
    // Check if the notice should be shown
    function shouldShow(id) {
      const stored = localStorage.getItem(storageKeyPrefix + id);
      if (!stored) return true;
      try {
        const data = JSON.parse(stored);
        return now() > data.expiresAt;
      } catch (e) {
        return true; // Fail-safe: show if JSON parse fails
      }
    }
  
    // Save dismissed state to localStorage
    function dismiss(id, expiryMs) {
      const expiresAt = now() + parseInt(expiryMs || 0, 10);
      localStorage.setItem(storageKeyPrefix + id, JSON.stringify({ expiresAt }));
    }
  
    // Initialize all notices on the page
    function initAll() {
      document.querySelectorAll('.smart-notice').forEach(notice => {
        const id = notice.id || null;
        const expiry = notice.dataset.expiry;
  
        if (!id) return; // Skip if no ID set
  
        if (shouldShow(id)) {
          notice.classList.add('show');
  
          // Attach event to internal dismiss button
          const dismissBtn = notice.querySelector('.dismiss');
          if (dismissBtn) {
            dismissBtn.addEventListener('click', () => {
              dismiss(id, expiry);
              notice.classList.add('hide');
              setTimeout(() => {
                notice.style.display = 'none';
              }, 600); // Matches CSS transition
            });
          }
        } else {
          notice.style.display = 'none';
        }
      });
    }
  
    return {
      initAll,
      dismiss
    };
  })();
  
  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    SmartNotice.initAll();
  });
  
