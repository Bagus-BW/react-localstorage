import { Link, Route, Routes } from "react-router-dom";
import Albums from "./pages/Albums";
import Galleries from "./pages/Galleries";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Register from "./pages/Register";
import Users from "./pages/Users";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div className="App">

      <div className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link text-white" to={'/'}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={'/post'}>Post</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={'/users'}>Users</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={'/galeries'}>Galeries</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={'/albums'}>Albums</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={'/login'}>Login</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={'/register'}>Register</Link></li>
          </ul>
        </div>
      </div>

      <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path="/post" element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          } />
          <Route path="/users" element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          } />
          <Route path="/galeries" element={
            <PrivateRoute>
              <Galleries />
            </PrivateRoute>
          } />
          <Route path="/albums" element={
            <PrivateRoute>
              <Albums />
            </PrivateRoute>
          } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
