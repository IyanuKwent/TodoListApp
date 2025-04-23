# 📋 React Native To-Do List App (Expo + FastAPI)

A fully functional and stylish To-Do List mobile app built using React Native (Expo) with a FastAPI backend. Supports light/dark themes, task editing, and persistent API data integration.

---

-  Add new tasks
-  Toggle task completion (tap entire task box)
-  Edit tasks inline
-  Delete tasks
-  Toggle between light and dark mode
-  Persistent backend using FastAPI (hosted on Render)

---

##  Tech Stack

- **Frontend**: React Native (Expo)
- **Backend**: FastAPI (deployed on Render)
- **Icons**: Ionicons (via `@expo/vector-icons`)
- **API Calls**: Axios

---

##  Installation & Running Locally

### Prerequisites

- Node.js
- Expo CLI
- Android Studio (optional for emulator testing)
- Physical Android device with Expo Go app (for testing)

### 1. Clone the repository

git clone https://github.com/IyanuKwent/TodoListApp.git
cd todo-react-native
2. Install dependencies

npm install
3. Run the app

npx expo start
Scan the QR code using the Expo Go app on your Android device.

🔨 Building the APK
To generate a standalone APK:

npx expo build:android
Choose APK when prompted.

Once the build is complete, Expo will give you a link to download the .apk file.

🌐 Backend (FastAPI)
Your app connects to a live FastAPI backend hosted on Render.

Backend Base URL

https://backend-fastapi-obja.onrender.com


📁 Project Structure

├── App.js
├── components
│   ├── TaskInput.js
│   └── TaskItem.js
├── screens
│   └── HomeScreen.js
├── services
│   └── api.js
├── utils
    └── theme.js

🌙 Theme Support
Toggle between light and dark mode using the theme switch icon in the header.

All components (TaskInput, TaskItem, etc.) are responsive to the theme change.

🧪 Coming Soon
User authentication (JWT)

Task due dates

Task categories

Push notifications

📜 License
MIT License. Feel free to use, modify, and share!

👤 Author
Ian Kent T. Olandria
[BSIT - USTP, 3rd Year]


---

Let me know if you'd like to include deployment instructions for the FastAPI backend or a badge (like version, licens