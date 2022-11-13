import React from 'react';
import { useState, useEffect } from 'react';

function UseRWD() {
  const [device, setDevice] = useState('mobile');
  const handleRWD = () => {
    if (window.innerWidth > 990) setDevice('PC');
    else if (window.innerWidth > 768) setDevice('tablet');
    else setDevice('mobile');
  };

  useEffect(() => {
    window.addEventListener('resize', handleRWD);
    return () => {
      window.removeEventListener('resize', handleRWD);
    };
  }, []);
  return device;
  // return <div>UseRWD</div>;
}

export default UseRWD;
