import { Outlet, useNavigate } from "react-router";
import "./master.layout.css"


function MasterLayout() {

  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>EMS Banking</h1>
        <div>
          <nav>
            <ul>
              <li><p 
              onClick={() => navigate("/dashboard")}
              >Dashboard</p></li>
              <li><p 
              onClick={() => navigate("/staff")}
              >Staff</p></li>
              <li><p 
              onClick={() => navigate("/login")}
              >Login</p></li>
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