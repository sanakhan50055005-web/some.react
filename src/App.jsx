import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import { ConfigProvider } from "antd";
import Routes from "./Routes";
import Header from './components/Header';
import Footer from './components/Footer';
import ScreenLoader from './components/Misc/ScreenLoader';
import { useAuth } from './context/Auth';

const App = () => {
  const { isAppLoading } = useAuth();

  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" }, components: { Button: { controlOutline: 0, controlOutlineWidth: 0 } } }}>
        {isAppLoading && <ScreenLoader />}
        <Header />
        <Routes />
        <Footer />
      </ConfigProvider>
    </>
  );
};

export default App;