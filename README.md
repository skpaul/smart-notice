# 🚀 smart-notice.js

**smart-notice.js** is a tiny, reusable JavaScript library to show user notifications, tips, or onboarding messages just once — with a smart auto-reset after a custom duration.

🧠 Smart by name, smart by storage.

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Size](https://img.shields.io/bundlephobia/min/smartnotice.js?label=minified)

---

## ✨ Features

- 🔁 One-time notices with auto-reset timer.
- 📦 Zero dependencies.
- ⚡ Tiny (~1KB).
- 📅 Expiry-based logic using `localStorage`.
- 🧩 Works with multiple notices independently.
- 🧼 Cleanup functions provided.

---

## 📦 Installation

### ✅ Option 1: CDN or Local `<script>`

```html
<script src="smart-notice.js"></script>
```

### ✅ Option 2: Module Import

```javascript
import SmartNotice from './smart-notice.js';
```

---

## 🔥 Usage

First, add your notification/tip/alert element in HTML:

```html
<div id="notice-1" class="notice">
  <p>💡 This is a smart tip. Dismiss to hide it for 30 days.</p>
  <button onclick="SmartNotice.dismiss('notice-1', 2592000000)">Dismiss</button>
</div>
```

Then initialize it in JavaScript:

```html
<script>
  // 2592000000ms = 30 days
  SmartNotice.init('notice-1', 2592000000);
</script>
```

---

## 🧩 Multiple Example Notices

You can manage multiple notices independently.

```html
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
```

Each alert remembers **its own** dismissal time.

---

## 📘 API Reference

### `SmartNotice.init(id, autoResetMs)`

- Show notice if not dismissed or if dismissal expired.
- **Parameters**:
  - `id` → (string) HTML element ID
  - `autoResetMs` → (optional) Time in milliseconds after which it should show again

---

### `SmartNotice.dismiss(id, autoResetMs)`

- Hide the notice and save dismissal timestamp in `localStorage`.
- **Parameters**:
  - `id` → (string) Notice ID
  - `autoResetMs` → (optional) Expiry time override in ms

---

### `SmartNotice.reset(id)`

- Clear dismissal info for a specific notice.

```javascript
SmartNotice.reset('notice-1');
```

---

### `SmartNotice.clearAll()`

- Remove all SmartNotice-related dismissal data.

```javascript
SmartNotice.clearAll();
```

---

## 💡 Tips

- Use **meaningful IDs** like `"first-time-tip"`, `"feature-promo"`, etc.
- If you **omit** `autoResetMs`, dismissal will be **permanent** until manual reset.
- **DevTip**: Use DevTools → Application → `localStorage` → clear specific keys during testing.
- Call `SmartNotice.clearAll()` if you want to reset *everything* (like a "Reset Notices" button).

---

## 📄 License

MIT License © [YourNameHere]

---

## 🙌 Contributing

Contributions, suggestions, and PRs are warmly welcome!  
Let’s make **user onboarding and tips** smart, lightweight, and beautiful.
