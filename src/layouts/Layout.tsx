import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Modal from '../components/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <>
      <Header />

      <main className="container mx-auto py-16">
        <Outlet />
      </main>

      <Modal />

      <Footer />

      <ToastContainer />
    </>
  );
}
