
import { Link } from "react-router-dom";
import { BiArrowToTop } from "react-icons/bi";

const CheckCard = () => {

  const data  = [
    {
      id: 1,
      name: 'Steam',
      category: 'Gift Card',
      image: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1720873164/IMG_3267_bfkjkw.webp',
      link : '/inputholder1',
      
    },
    {
      id: 2,
      name: 'Apple',
      category: 'Gift Card',
      image: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1720873164/IMG_3263_tixzbb.jpg',
      link : '/inputholder2',
    },
    {
      id: 3,
      name: 'Playstation',
      category: 'Gift Card',
      image: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1720873164/IMG_3265_p0cvlz.jpg',
      link : '/inputholder3',
    },
    {
      id: 4,
      name: 'Ebay',
      category: 'Gift Card',
      image: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1720873164/IMG_3261_oh7eoa.webp',
      link : '/inputholder4',
      
    },
    {
      id: 5,
      name: 'Sephora',
      category: 'Gift Card',
      image: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1720873164/IMG_3266_byiddt.jpg',
      link : '/inputholder5',
      
    },
    {
      id: 6,
      name: 'Amazon',
      category: 'Gift Card',
      image: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1720873163/IMG_3260_ssvoz9.png',
      link : '/inputholder6',
      
    },
    {
      id: 7,
      name: 'Razer Gold',
      category: 'Gift Card',
      image: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1720873163/IMG_3270_kejec8.jpg',
      link : '/inputholder7',
    },
    {
      id: 8,
      name: 'Google Play',
      category: 'Gift Card',
      image: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1720873163/IMG_3262_w477ol.webp',
      link : '/inputholder8',
      
    },
    {
      id: 9,
      name: 'Visa',
      category: 'Gift Card',
      image: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720873163/IMG_3268_dxrkpm.jpg',
      link : '/inputholder9',
    
    },
    {
      id: 10,
      name: 'Xbox',
      category: 'Gift Card',
      image: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1721244034/IMG_3739_p83jqc.png',
      link : '/inputholder10',
      
    },
    {
      id: 11,
      name: 'Vanilla',
      category: 'Gift Card',
      image: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1721244035/IMG_3738_y0whqn.jpg',
      link : '/inputholder11',
      
    },
    
  ];
  


  return (
    <div className="max-w-[1640px] px-4 py-12">
      
       
        {/* <Link to={'inputholder'}><div className="bg-[url('https://res.cloudinary.com/dyjo2mvqb/image/upload/v1720873164/IMG_3267_bfkjkw.webp')] bg-cover bg-center hover:opacity-25 bg-no-repeat h-[180px] w-[340px]"></div></Link> */}
{/**Category */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-10">
        {data?.map((item) => (
          <div
            className=" flex flex-col justify-between items-center"
            key={item.id}
          >
            <Link className="hover:opacity-25" to={item.link}><img className="w-[350px] h-[180px] sm:h-[150px] rounded-lg object-center object-contain hover:bg-gray-200 " src={item.image} alt={item.name} /></Link>
            
            
          </div>
        ))}
        </div>
    
      
        <div className=' bottom-4 left-3 sm:left-6 '>
  <a href="#top"> <BiArrowToTop  width={40} className='bg-gray-600 p-2 rounded-full mb-4 text-gray-300 text-4xl' /></a>
   

</div>
    </div>
  );
};

export default CheckCard;
