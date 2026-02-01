# rn-smart-modal-toast 🚀

A highly customizable, lightweight, and professional toast notification library for React Native. Support for themes, progress bars, gestures, and more.

![Demo](rn-smart-toast.gif)

[![npm version](https://img.shields.io/npm/v/rn-smart-modal-toast.svg?style=flat-square)](https://www.npmjs.com/package/rn-smart-modal-toast)
[![npm downloads](https://img.shields.io/npm/dm/rn-smart-modal-toast.svg?style=flat-square)](https://www.npmjs.com/package/rn-smart-modal-toast)
[![license](https://img.shields.io/npm/l/rn-smart-modal-toast.svg?style=flat-square)](https://github.com/pareshchavda/rn-smart-modal-toast/blob/main/LICENSE)

## ✨ Features

- 🎨 **Theming Support**: Light, Dark, and Colored themes.
- ⏳ **Progress Bar**: Visual feedback for toast duration.
- 🖐️ **Gestures**: Smooth swipe-to-dismiss support (Spring physics).
- 🛠️ **Fully Customizable**: Customize colors, icons, animations, and styles.
- 📱 **Responsive**: Works perfectly on both iOS and Android.
- 🚀 **High Performance**: Optimized `Animated` API with native driver support.
- 📦 **Zero Config**: Easy to set up and use.

## 📦 Installation

```bash
npm install rn-smart-modal-toast
# or
yarn add rn-smart-modal-toast
```

Required dependencies:
```bash
yarn add react-native-gesture-handler
```

## 🚀 Quick Start

1. **Wrap your app with `ToastProvider`**:

```tsx
import { ToastProvider } from 'rn-smart-modal-toast';

export default function App() {
  return (
    <ToastProvider>
      <YourMainComponent />
    </ToastProvider>
  );
}
```

2. **Trigger toasts anywhere**:

```tsx
import { toast } from 'rn-smart-modal-toast';

// Simple toast
toast('Hello World!');

// Success toast with title
toast.success('Successfully saved!', {
  title: 'Success',
  theme: 'colored',
});

// Dark theme toast
toast.dark('User logged out', {
  description: 'See you again soon!',
  position: 'bottom',
});
```

## 📖 API Reference

### Toast Options

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `type` | `success` \| `error` \| `warning` \| `info` \| `dark` \| `light` | `info` | The style of the toast. |
| `title` | `string` | `undefined` | Optional title. |
| `description`| `string` | `undefined` | Optional description / message subtext. |
| `theme` | `light` \| `dark` \| `colored` | `colored` | Visual theme. |
| `duration` | `number` | `3000` | Auto-close delay (ms). Use `0` to disable. |
| `position` | `top` \| `bottom` \| `center` | `top` | Screen position. |
| `showProgressBar`| `boolean` | `true` | Show/hide the progress bar. |
| `swipeEnabled` | `boolean` | `true` | Enable swipe-to-dismiss gesture. |
| `animationType`| `slide` \| `fade` \| `zoom` \| `bounce` | `slide` | Entry animation. |
| `useModal` | `boolean` | `false` | Show toast inside a Modal (useful for overlays). |
| `onPress` | `function` | `undefined` | Callback when toast is clicked. |

### Helper Methods

- `toast.success(message, options)`
- `toast.error(message, options)`
- `toast.warn(message, options)`
- `toast.info(message, options)`
- `toast.dark(message, options)`
- `toast.light(message, options)`
- `toast.dismiss(id)` - Dismiss a specific toast or all if no ID provided.
- `toast.update(id, message, options)` - Update an existing toast.

## 🎨 Advanced Examples

### Toast with Progress Bar Disabled
```tsx
toast.info("No progress bar here", { showProgressBar: false });
```

### Sticky Toast
```tsx
toast.warn("I will stay until you swipe me", { duration: 0 });
```

### Positioning & Animations
```tsx
toast.error("Bottom Bounce!", { 
  position: 'bottom', 
  animationType: 'bounce' 
});
```

### Custom Styling
```tsx
toast('Custom Styled', {
  style: { backgroundColor: '#6366f1', borderRadius: 20 },
  textStyle: { fontWeight: 'bold', color: '#fff' },
  icon: <MyCustomIcon />,
});
```

## 📄 License

MIT © [pareshchavda](https://github.com/pareshchavda)
