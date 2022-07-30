import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAEpW1BiJI-H1vurcSDuqsdBkWXxIPBzwQ",
//   authDomain: "coderhouse-ecommmerce.firebaseapp.com",
//   projectId: "coderhouse-ecommmerce",
//   storageBucket: "coderhouse-ecommmerce.appspot.com",
//   messagingSenderId: "831041375496",
//   appId: "1:831041375496:web:85157f9bcd79748f83f0bd",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
