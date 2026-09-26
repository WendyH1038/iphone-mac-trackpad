# 📱 iPhone External Trackpad for macOS

Turn any iPhone into a low-latency, gesture-supported external trackpad for your MacBook using Node.js, WebSockets, and `@nut-tree-fork/nut-js`.

![Trackpad Demo](demo.gif) <!-- Add a short screen recording or photo here if you have one! -->

## 🚀 Features

- **1-Finger:** Smooth cursor movement & tap-to-click.
- **2-Finger:** Inverse vertical page scrolling + Chrome Back/Forward page navigation.
- **3-Finger:** macOS Desktop Space switching (Left/Right) & Mission Control (Up/Down).
- **Zero App Store Installs:** Runs directly in Safari via local Wi-Fi.

---

## 🛠️ Prerequisites

- **MacBook** (macOS)
- **Node.js** (v18+ recommended)
- **iPhone** connected to the same Wi-Fi network as your Mac.

---

## 📦 Quick Start Guide

### 1. Clone & Install
Open Terminal on your Mac and run:

\`\`\`bash
git clone https://github.com/YOUR_GITHUB_USERNAME/external-trackpad.git
cd external-trackpad
npm install
\`\`\`

### 2. Grant macOS Permissions
Because this project controls hardware inputs, macOS requires Accessibility permissions:
1. Open **System Settings** → **Privacy & Security** → **Accessibility**.
2. Enable the switch for **Terminal** (or **iTerm** / **VS Code**).

### 3. Start the Server
\`\`\`bash
node server.js
\`\`\`

### 4. Connect Your iPhone
1. Look at the terminal output to find your local IP address (or check **System Settings → Wi-Fi → Details**).
2. Open Safari on your iPhone and visit: `http://<YOUR-MAC-IP>:3000`
3. *(Optional)* Tap **Share** → **Add to Home Screen** for a full-screen, native app experience!

---

## 🛠️ Built With

- **Node.js & Express** - Backend server
- **Socket.io** - Low-latency real-time touch streaming
- **@nut-tree-fork/nut-js** - System-level OS automation
- **HTML5 Touch Events** - Touch gesture recognition