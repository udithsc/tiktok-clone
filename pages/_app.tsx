import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh]">
      <NavBar />
      <SideBar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
