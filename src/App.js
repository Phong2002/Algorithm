import logo from './logo.svg';
import './App.css';
import Linkedlist from './linkedlist.js'


function App() {
  const linklogo="https://phenikaa-uni.edu.vn:3600/pu/en/modules/logoen.png"
  return (
    <div className="App">
      <header className="header"><img src={linklogo} /></header>
      <Linkedlist/>
      <footer className="footer">Copyright © 2021 Lu Minh Phong</footer>
    </div>
  );
}

export default App;
