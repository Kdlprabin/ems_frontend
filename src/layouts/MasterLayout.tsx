import { Outlet } from "react-router";
import "./master.layout.css"


function MasterLayout() {
  return (
    <div>
      <header>
        <h1>EMS Banking</h1>
        <div>
          <nav>
            <ul>
              <li><a href="/">Dashboard</a></li>
              <li><a href="/staff">Staff</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 EMS Banking</p>
      </footer>
    </div>
  );
}

export default MasterLayout;