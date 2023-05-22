import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDyk-oJSaT2AyLceQdpnXBbWs8kHNqk_A8",
  authDomain: "drjamesteela.firebaseapp.com",
  projectId: "drjamesteela",
  storageBucket: "drjamesteela.appspot.com",
  messagingSenderId: "256017104406",
  appId: "1:256017104406:web:50e805a1288aaa99a07f37",
  measurementId: "G-30WQWPEHP6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);