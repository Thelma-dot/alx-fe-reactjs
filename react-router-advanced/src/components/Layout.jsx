import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/blog/1">Sample Blog Post</Link></li>
        </ul>
      </nav>

      {/* Render Nested Routes Here */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
