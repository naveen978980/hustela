import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          padding: 16px 24px;
          background-color: #ffffff;
          color: #1976d2;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .navbar h1 {
          font-size: 24px;
          font-weight: bold;
          color: #2c3e50;
          margin: 0;
        }

        .nav-links {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .nav-links a {
          position: relative;
          font-size: 16px;
          text-decoration: none;
          color: #333;
          font-weight: 500;
          padding: 6px 12px;
        }

        .nav-links a::after,
        .nav-links a::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: rgb(0,51,102);
background: linear-gradient(159deg, rgba(0,51,102,1) 0%, rgba(15,82,186,1) 100%);
          left: 0;
          transform: scaleX(0);
          transition: transform 0.4s ease-out;
        }

        .nav-links a::after {
          bottom: -2px;
          transform-origin: right;
        }

        .nav-links a::before {
          top: -2px;
          transform-origin: left;
        }

        .nav-links a:hover::after,
        .nav-links a:hover::before {
          transform: scaleX(1);
        }

        @media (max-width: 600px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-links {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      <nav className="navbar">
        <h1>RozgarYojna</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/Show">Show</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}
