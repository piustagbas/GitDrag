import CheckCard from '../Component/CheckCard';
import CheckNav from '../Component/CheckNav';
import Footer from '../Component/Footer';
import { useEffect, useState } from "react";
import Successful from './Successful';


const Home = () => {
  const [loading, setLoading] = useState(true);
  

   useEffect(() => {
    setTimeout(() => setLoading(false),1500)
   },[]);
    
  return (
    <div>
      {loading ? (<Successful/>) : (
        <div className='w-full h-screen '>
     

        <CheckNav />
        
        <CheckCard />
        <Footer />
        
      </div>
      )}
    </div>
  );
};

export default Home;
