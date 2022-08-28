import Global from "./styles/Global";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Global />
      <ToastContainer />
      <Routes />
    </div>
  );
}

export default App;
