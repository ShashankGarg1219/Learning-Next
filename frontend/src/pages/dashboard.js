'use client';

import MyNavbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Chart from '../components/Chart';

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">
      <MyNavbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full p-4">
          <Card />
          <Chart/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
