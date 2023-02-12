import { AppBar } from '../';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
