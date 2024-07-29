// import Loading from "./Loading";
import { useState, useEffect } from 'react';

import Loading from './Loading';

// import React from "react";
const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 200000);
  }, []);
  return (
    <div>
      {loading ? (<Loading/>) :
        (<div>Thanking you for using this application for Card Checking</div>)
      }
    </div>
  );
};

export default Success;
