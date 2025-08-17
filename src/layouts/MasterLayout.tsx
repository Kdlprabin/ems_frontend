import { Outlet } from "react-router";


function MasterLayout() {
  return (
    <div>
      <header>
        <h1>EMS Banking</h1>
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