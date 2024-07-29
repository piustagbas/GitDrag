
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Loading from "./Pages/Loading";
import Success from "./Pages/Success";
import Page404 from "./Pages/Page404";
import Successful from "./Pages/Successful";
import InputHolder1 from "./Component/InputHolder1";
import InputHolder2 from "./Component/InputHolder2";
import InputHolder3 from "./Component/InputHolder3";
import InputHolder4 from "./Component/InputHolder4";
import InputHolder5 from "./Component/InputHolder5";
import InputHolder6 from "./Component/InputHolder6";
import InputHolder7 from "./Component/InputHolder7";
import InputHolder8 from "./Component/InputHolder8";
import InputHolder9 from "./Component/InputHolder9";
import InputHolder10 from "./Component/InputHolder10";
import InputHolder11 from "./Component/InputHolder11";




function App() {
  

  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="inputholder1" element={<InputHolder1 />} />
            <Route path="inputholder2" element={<InputHolder2 />} />
            <Route path="inputholder3" element={<InputHolder3 />} />
            <Route path="inputholder4" element={<InputHolder4 />} />
            <Route path="inputholder5" element={<InputHolder5 />} />
            <Route path="inputholder6" element={<InputHolder6 />} />
            <Route path="inputholder7" element={<InputHolder7 />} />
            <Route path="inputholder8" element={<InputHolder8 />} />
            <Route path="inputholder9" element={<InputHolder9 />} />
            <Route path="inputholder10" element={<InputHolder10 />} />
            <Route path="inputholder11" element={<InputHolder11 />} />
            <Route path="loading" element={<Loading />} />
            <Route path="success" element={<Success />} />
            <Route path="successful" element={<Successful />} />
            <Route path={"*"} element={<Page404 />} />
          
          </Routes>
        </BrowserRouter>
  )
}

export default App
