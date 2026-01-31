import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col pitch-lines-bg grain-overlay">
      <Navbar />
      <main className="flex-1 pt-16 relative z-[1]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
