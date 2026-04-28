import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <>
      <div id="app-container" className="bg-gray-100 h-screen flex w-full">
        <div
          id="layout-wrapper"
          className="flex flex-row flex-1 w-full overflow-hidden"
        >
          <Sidebar/>
          <div
            id="main-content"
            className="flex-1 flex flex-col overflow-y-auto"
          >
            <Header/>
            <div id="dashboard-wrapper" className="">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
