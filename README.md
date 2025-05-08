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
                      <div class="smart-notice" id="notice-1" data-expiry="604800000">
                            <div>
                                This a info
                                <span class="dismiss">Dismiss</span>
                            </div>
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
            <div class="smart-notice" id="notice-2" data-expiry="604800000">
                            <div>
                                This another notice
                                <span class="dismiss">Dismiss</span>
                            </div>
                        </div>

            <div class="smart-notice" id="notice-3" data-expiry="604800000">
                            <div>
                                This another notice
                                <span class="dismiss">Dismiss</span>
                            </div>
                        </div>

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
