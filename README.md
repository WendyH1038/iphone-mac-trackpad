# iPhone External Trackpad for macOS 

A low-latency wireless trackpad app that turns an iPhone into a trackpad for your Mac using Node.js, WebSockets, and system automation. Built for the Stardance Challenge!

## Features

* **1-Finger Control**: Smooth cursor movement and tap-to-click.
* **2-Finger Gestures**: Natural vertical scrolling for pages and documents.
* **Web Native**: Runs straight inside mobile Safari over local Wi-Fi—no App Store downloads needed.


## AI Usage Disclosure

* **What was done by AI:**
  * Assisting with terminal command syntax, repository scaffolding, and git setup.
  * Debugging module installation errors and native binding issues with `@nut-tree-fork/nut-js`.
* **What was done by me:**
  * Core project scoping, feature selection, and architectural decisions.
  * Designing, testing, and refining the frontend touch-event logic in `index.html`.
  * Identifying the bug, and conducting hardware testing on local devices.

## Prerequisites

* **Host**: macOS (MacBook)
* **Runtime**: Node.js (v18.0.0 or higher)
* **Client**: iPhone connected to the exact same local Wi-Fi network as your Mac

## Quick Start Guide

### 1. Check / Install Node.js
Ensure Node.js is installed on your Mac:
```bash
node -v

```

*(If not installed, download the LTS version from [nodejs.org](https://nodejs.org/) or install via Homebrew with `brew install node`).*

### 2. Clone & Install

Open Terminal on your Mac and run:

```bash
git clone [https://github.com/WendyH1038/iphone-mac-trackpad.git](https://github.com/WendyH1038/iphone-mac-trackpad.git)
cd iphone-mac-trackpad
npm install

```

### 3. Grant Accessibility Permissions

To allow Node.js and `@nut-tree-fork/nut-js` to control your Mac's cursor:

1. Open **System Settings** on your Mac.


2. Go to **Privacy & Security > Accessibility**.


3. Toggle the switch **ON** for **Terminal** (or **VS Code** if running from inside VS Code's embedded terminal).



### 4. Start the Server

In your Mac Terminal, run:

```bash
node server.js

```

The terminal will display your Mac's local IP address and port (e.g., `http://192.168.x.x:3000`).

### 5. Connect Your iPhone

1. Ensure your iPhone is on the **same Wi-Fi network** as your Mac.
2. Open **Safari** on your iPhone.
3. Type the full local URL displayed in your terminal into the address bar (e.g., `http://192.168.x.x:3000`) and press **Go**.
4. The status badge will turn green (**"Connected to Mac"**) and you can start controlling your Mac cursor right away!


## 📜 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

