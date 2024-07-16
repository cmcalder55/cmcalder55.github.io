// src/App.js
// Homepage

import AppRouter from "./routers/AppRouter";
import './App.css';
import "@fontsource/fira-code"; // Defaults to weight 400

export default function App() {
  return (
    <div>
      {/* You can add a navbar, header, footer, etc., here */}
      <AppRouter />
    </div>
  );
};
