import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

const Page404 = () => {
    return ( 
        <div className="w-full h-screen bg-white flex flex-col ">
            
            <TbError404 className="mx-auto mt-[200px] w-[100px] h-[100px]  "/>
        
        
        <h1 className="text-xl font-bold text-center mt-4 text-slate-700 ">
           Page not Found 
    
        </h1>
        <Link to="/" className="mx-auto"><button className=" mx-auto my-5 py-2 px-4 text-lg text-[#5294ae] bg-white hover:bg-[#5294ae] border-2 border-[#5294ae] hover:text-white rounded-full">
          Go back Homepage
        </button></Link>
      </div>
     );
}
 
export default Page404;