const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { mouse, keyboard, Key, Point } = require('@nut-tree-fork/nut-js');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const MOVE_SENSITIVITY = 1.5;
const SCROLL_SPEED = 2.0;

io.on('connection', (socket) => {
  console.log('📱 Phone connected!');

  // 1-Finger: Move Mouse Cursor
  socket.on('move', (data) => {
    mouse.getPosition().then((currentPos) => {
      const newX = currentPos.x + Math.round(data.dx * MOVE_SENSITIVITY);
      const newY = currentPos.y + Math.round(data.dy * MOVE_SENSITIVITY);
      mouse.setPosition(new Point(newX, newY)).catch(() => {});
    });
  });

  // 2-Finger: Vertical Scroll
  socket.on('scroll', (data) => {
    const scrollAmount = Math.round(data.dy * SCROLL_SPEED);
    if (scrollAmount > 0) {
      mouse.scrollUp(scrollAmount).catch(() => {});
    } else if (scrollAmount < 0) {
      mouse.scrollDown(Math.abs(scrollAmount)).catch(() => {});
    }
  });

  // 1-Finger Tap: Left Click
  socket.on('click', async () => {
    await mouse.leftClick();
  });

  // 2-Finger Horizontal Swipe: Chrome/Browser Back & Forward
  socket.on('nav-page', async (dir) => {
    try {
      if (dir === 'back') {
        await keyboard.pressKey(Key.LeftCmd, Key.LeftBracket);
        await keyboard.releaseKey(Key.LeftBracket, Key.LeftCmd);
      } else if (dir === 'forward') {
        await keyboard.pressKey(Key.LeftCmd, Key.RightBracket);
        await keyboard.releaseKey(Key.RightBracket, Key.LeftCmd);
      }
    } catch (err) {
      console.error('Page nav error:', err);
    }
  });

  // 3-Finger Gestures: Desktop Spaces & Mission Control
  socket.on('switch-window', async (dir) => {
    try {
      if (dir === 'left') {
        // Move to Left Space
        await keyboard.pressKey(Key.LeftControl, Key.Left);
        await keyboard.releaseKey(Key.Left, Key.LeftControl);
      } else if (dir === 'right') {
        // Move to Right Space
        await keyboard.pressKey(Key.LeftControl, Key.Right);
        await keyboard.releaseKey(Key.Right, Key.LeftControl);
      } else if (dir === 'up') {
        // Mission Control (Ctrl + Up)
        await keyboard.pressKey(Key.LeftControl, Key.Up);
        await keyboard.releaseKey(Key.Up, Key.LeftControl);
      } else if (dir === 'down') {
        // App Windows / Exit Mission Control (Ctrl + Down)
        await keyboard.pressKey(Key.LeftControl, Key.Down);
        await keyboard.releaseKey(Key.Down, Key.LeftControl);
      }
    } catch (err) {
      console.error('3-finger gesture error:', err);
    }
  });
});
const os = require('os');

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const PORT = 3000;
server.listen(PORT, () => {
  const ip = getLocalIP();
  console.log(`\nTrackpad running!`);
  console.log(`On your iPhone, open Safari and go to: http://${ip}:${PORT}\n`);
});