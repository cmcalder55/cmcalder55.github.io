// src/App.js
// Homepage

import AppRouter from './routers/AppRouter';
// import logo from './logo.svg';
// import './App.css';

// export default function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default function App() {
  return (
    <div>
      {/* You can add a navbar, header, footer, etc., here */}
      <AppRouter />
    </div>
  );
}