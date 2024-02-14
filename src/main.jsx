import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./sections/header";
import Main from "./sections/mainSection";
import Footer from "./sections/footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
