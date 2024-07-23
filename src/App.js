import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/Homepage/Home'
import Firstpage from './components/firstpage/Firstpage';
import Account from './components/login/Account';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Firstpage />} />
        <Route exact path="/Login" element={<Account />} />
        <Route exact path="/Home" element={<Home />} />
        
      </Routes>
    </Router>
  );
}



export default App;
