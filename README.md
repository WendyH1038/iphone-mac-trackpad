# iPhone External Trackpad for macOS

A low-latency, gesture-supported web application that converts an iPhone into a wireless external trackpad for macOS. Built with Node.js, WebSockets, and system-level OS automation.

---

## Features

* **1-Finger Control:** Cursor movement and tap-to-click functionality.
* **2-Finger Gestures:** Vertical page scrolling and browser navigation (`Cmd + [` / `Cmd + ]`).
* **3-Finger Gestures:** macOS Desktop Space switching (`Ctrl + Left/Right`) and Mission Control toggle (`Ctrl + Up/Down`).
* **Web Native:** Operates directly inside mobile Safari over a local Wi-Fi network without requiring native App Store installations.

---

## Prerequisites

* **Host:** macOS (MacBook Air / Pro)
* **Runtime:** Node.js (v18.0.0 or higher)
* **Client:** iPhone connected to the same local network as the host

---

## Quick Start Guide

### 1. Clone & Install

Open Terminal on your Mac and run the following commands:

```bash
git clone [https://github.com/WendyH1038/iphone-mac-trackpad.git](https://github.com/WendyH1038/iphone-mac-trackpad.git)
cd iphone-mac-trackpad
npm install