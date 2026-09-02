import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-10">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p>© 2026 Simple Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
