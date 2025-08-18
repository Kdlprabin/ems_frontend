import { Outlet, useNavigate } from "react-router";
import "./master.layout.css"


function MasterLayout() {

  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1 className="title">National Lagubitta Bitiya Sanstha ltd</h1>
        <div>
          <nav>
            <ul>
              <li><p 
              onClick={() => navigate("/")}
              >Dashboard</p></li>
              <li><p 
              onClick={() => navigate("/staff")}
              >Staff</p></li>
              <li><p
              onClick={() => navigate("/data")}
              >Data Upload</p></li>
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
    </div>
  );
}

export default MasterLayout;