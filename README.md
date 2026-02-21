# 🔔 RemindMe

A simple PWA reminder app that sends you notifications on a schedule. Set tasks like "Drink water", "Stand up & stretch", or anything else — and get notified right on time.

## Features

- ✅ **Custom reminders** — set any task with any frequency (minutes or hours)
- 🔔 **Browser notifications** — works on Android, iPhone (via PWA), and desktop
- 📲 **Installable PWA** — add to your home screen for native-app feel
- 🎯 **Quick presets** — one-tap setup for common reminders (water, stretch, posture, etc.)
- 🔊 **Sound alerts** — audio notification chime
- 📊 **Stats dashboard** — track active reminders and notifications sent today
- ⏸ **Pause/resume** — toggle reminders on and off
- 💾 **Offline support** — works even without internet once loaded

## Deploy to Railway

### Option 1: GitHub → Railway (Recommended)

1. Push this folder to a GitHub repo:
   ```bash
   cd reminder-app
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create remindme --public --push
   ```

2. Go to [railway.com/new](https://railway.com/new)
3. Click **"Deploy from GitHub repo"**
4. Select your `remindme` repo
5. Railway auto-detects Node.js and deploys! 🚀
6. Click **"Generate Domain"** in Settings → Networking to get your public URL

### Option 2: Railway CLI

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

## Usage

1. Open the deployed URL on your phone
2. Tap **"Enable Notifications"** to allow push notifications
3. **iPhone users**: Tap Share → "Add to Home Screen" for full notification support
4. **Android users**: You'll see an "Install RemindMe" banner — tap it
5. Add reminders using the **+** button or quick presets
6. Keep the app/tab open and you'll get notified on schedule!

## Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Vanilla HTML/CSS/JS (no framework)
- **Notifications**: Web Notification API + Service Worker
- **Storage**: localStorage (client) + in-memory (server)
