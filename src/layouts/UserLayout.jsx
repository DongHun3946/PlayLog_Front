import { Outlet } from 'react-router-dom';
import Header from 'layouts/Header';

const UserLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
};

export default UserLayout;