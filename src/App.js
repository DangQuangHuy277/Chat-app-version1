import './App.css';
import './style/Sidebar.css';
import './style/SidebarChat.css';
import './style/Chat.css';
import './style/Login.css';
import Login from './pages/Login'
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const ProtectedRoute = ({ children }) => {
  const auth = sessionStorage.getItem('authenticated');
    if (auth !== "true") {
      return <Navigate to="/login" />;
    }
    return children;
  }

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
