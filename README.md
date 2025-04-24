# 📋 React Native To-Do List App (Expo + FastAPI)

A fully functional and stylish To-Do List mobile app built using React Native (Expo) with a FastAPI backend. Supports light/dark themes, task editing, and persistent API data integration.

---

### ✅ Features

- ✔️ Add new tasks  
- ✔️ Toggle task completion (tap entire task box)  
- ✔️ Edit tasks inline  
- ✔️ Delete tasks  
- ✔️ Toggle between light and dark mode  
- ✔️ Persistent backend using FastAPI (hosted on Render)  

---

## 🛠️ Tech Stack

- **Frontend**: React Native (Expo)
- **Backend**: FastAPI (deployed on Render)
- **Icons**: Ionicons (via `@expo/vector-icons`)
- **API Calls**: Axios

---

## 🚀 Installation & Running Locally

### 📦 Prerequisites

- Node.js
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (optional for emulator testing)
- Physical Android device with Expo Go app (for testing)

---

### 📥 1. Clone the repository

```bash
git clone https://github.com/IyanuKwent/TodoListApp.git
cd TodoListApp
```

---

### 📦 2. Install dependencies

```bash
npm install
```

---

### ▶️ 3. Run the app

```bash
npx expo start
```

Scan the QR code using the Expo Go app on your Android device.

---

## 📱 Building the APK (Using EAS Build)

Make sure you’re logged into your Expo account before continuing:

```bash
npx expo login
```

Then run the following to build the APK:

```bash
npx expo install eas-cli
npx eas build:configure
npx eas build -p android --profile preview
```

After the build finishes, you'll receive a download link for your `.apk` file.

More info: [https://docs.expo.dev/build/android](https://docs.expo.dev/build/android)

---

## 🌐 Backend (FastAPI)

Your app connects to a live FastAPI backend hosted on Render.

**Backend Base URL**  
`https://backend-fastapi-obja.onrender.com`

---

## 📁 Project Structure

```
├── App.js
├── components
│   ├── TaskInput.js
│   └── TaskItem.js
├── screens
│   └── HomeScreen.js
├── services
│   └── api.js
├── utils
│   └── theme.js
```

---

## 🌙 Theme Support

Toggle between light and dark mode using the theme switch icon in the header.

All components (TaskInput, TaskItem, etc.) are responsive to the theme change.

---

## 🧪 Coming Soon

- 🔐 User authentication (JWT)
- ⏰ Task due dates
- 🗂️ Task categories
- 🔔 Push notifications

---

## 📜 License

MIT License. Feel free to use, modify, and share!

---

## 👤 Author

**Ian Kent T. Olandria**  
BSIT - USTP, 3rd Year
