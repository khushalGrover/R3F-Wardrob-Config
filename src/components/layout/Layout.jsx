import Sidebar from "./Sidebar";
import Scene from "../../scene/Scene";

export default function Layout() {
  return (
    <div className="h-screen flex bg-neutral-900 text-white">
      <Sidebar />
      <div className="flex-1">
        <Scene />
      </div>
    </div>
  );
}
