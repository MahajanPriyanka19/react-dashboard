import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Widget from "../components/Widget";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
        {/* <div className="p-4">
          <ThemeToggle />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
