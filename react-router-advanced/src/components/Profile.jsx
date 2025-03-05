import { Outlet, Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
      <Outlet /> {/* Renders ProfileDetails or ProfileSettings */}
    </div>
  );
}
