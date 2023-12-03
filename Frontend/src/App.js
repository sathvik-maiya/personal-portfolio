import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import FOG from "vanta/src/vanta.fog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    FOG({
      el: "#vanta",
      highlightColor: 0x112246,
      midtoneColor: 0x10107a,
      lowlightColor: 0x1d115f,
      baseColor: 0x46468c,
      speed: 3,
      zoom: 3,
    });
  }, []);

  return (
    <>
      <div className="bg" id="vanta">
        <div style={{ zIndex: "999" }}>
          <ToastContainer autoClose={500} />
        </div>
        <Layout />
      </div>
    </>
  );
}

export default App;
