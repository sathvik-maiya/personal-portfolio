import Layout from "./components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="bg" >
        <div style={{ zIndex: "999" }}>
          <ToastContainer autoClose={500} />
        </div>
        <Layout />
      </div>
    </>
  );
}

export default App;
