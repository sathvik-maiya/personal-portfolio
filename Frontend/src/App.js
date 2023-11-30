import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { BiSolidHeart } from "react-icons/bi";
import FOG from "vanta/src/vanta.fog"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(()=>{
     FOG({
      el: "#vanta",
    mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0x112246,
  midtoneColor: 0x10107a,
  lowlightColor: 0x1d115f,
  baseColor: 0x46468c,
  blurFactor: 0.59,
  speed: 2,
  zoom: 3
     })
  },[])


  return (
    <>
      <div className="bg" id="vanta">
        <ToastContainer  />
        <Layout />
        <div className="pb-3 ms-3">
          <p className="text-center text-white">
            Copyright @<span>sathvikvmaiya</span> 2023{" "}
            <BiSolidHeart color="red" />
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
