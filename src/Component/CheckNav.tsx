
import { Link } from "react-router-dom";

const CheckNav = () => {
  

  return (
    <div className="max-w-[1640px] mx-auto flex flex-col items-center p-4 mb-[-80px] border-b border-[#000] ">
      {/*left side */}
      
      
      <Link to={'/'}><img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1721162448/Soft_uetxnj.jpg " className="w-[150px] rounded-full" alt="logo" /></Link>
       
      
      
      <div className=" flex flex-col items-center  ">
      <h1 className="text-3xl font-semibold "><i>Gift Card Checker</i></h1>
        <p className="text-center text-sm">Verify your gift card balance conveniently with our online service.</p>
    
      </div>
      
      
    </div>
  );
};

export default CheckNav;
