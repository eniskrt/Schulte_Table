import { useEffect, useState, forwardRef } from "react";

const Timer = forwardRef (({finishedTime}, ref) => {

    const [timer, setTimer] = useState(0);


    // console.log("ref",ref.current?.innerText);
    // console.log(ref.current?.innerText);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setTimer(prev => prev + 1);
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);
      
      
      
     
  return (
    <div className='timer'>Timer : <span ref={ref}>{timer}</span> s</div>
  )
})

export default Timer