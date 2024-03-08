import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import UserHome from '../Home/UserHome';

function Loadd() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? <Loading/> : <UserHome/>}
    </div>
  );
}

export default Loadd;