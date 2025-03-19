# React + Vue microfrontend architecture

This project demonstrates a microfrontend architecture using React as the host application and Vue as a remote microfrontend and includes routing between the two applications. The applications communicate using Module Federation via Vite.

## 🚀 Getting Started

1️⃣ Install Dependencies

### Install dependencies for both apps

```
cd react-host && npm install
cd vue-remote && npm install
```

2️⃣ Start the Applications

### Start Vue remote microfrontend first

```
cd vue-remote
npm run dev
```

✅ Vue will be available at: http://localhost:5002

### Start React host microfrontend application

```
cd react-host
npm run dev
```

✅ React will be available at: http://localhost:5001

Now, navigate to http://localhost:5001 in your browser, and the React app should load, dynamically integrating the Vue microfrontend where necessary.
