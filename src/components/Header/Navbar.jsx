import { Space, Button } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';

const Navbar = () => {
  const { isAuth, handleLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/auth/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Todos</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className ="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to ="/about" className="nav-link" >About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" >Contact</Link>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Space>
             {isAuth ? (
               <>
                 <Button type="primary" className="bg bg-info" onClick={() => navigate('/dashboard')}>
                   Dashboard
                 </Button>
                 <Button type="primary" size="large" danger onClick={handleLogoutClick}>
                   Logout
                 </Button>
               </>
             ) : (
               <>
                 <Button type="primary" className="bg bg-success" onClick={() => navigate('/auth/login')}>
                   Login
                 </Button>
                 <Button type="primary" className="bg bg-info" onClick={() => navigate('/auth/register')}>
                   Register
                 </Button>
               </>
             )}
           </Space>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;