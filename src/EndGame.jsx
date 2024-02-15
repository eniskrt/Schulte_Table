import React from 'react'
import { Button, Container } from 'react-bootstrap'

const EndGame = ({setShowGame, endTime}) => {
    // console.log("endGame",endTime);

    const convertToMinute = (time) => { 
        const min = Math.floor(time / 60);
        const sec = time % 60;
      
        return `${min} Dakika ${sec} Saniye`;
      };
     
    
  return (
    <Container className='text-center'>
            <h4>Schulte Table</h4>
            <p style={{width:"350px",transform:"translateX(-50px)"}}>
                {convertToMinute(endTime)}'de tamamladınız. Tekrar deneyerek skorunuzu arttırabilirsiniz
            </p>
          <Button className='w-100 bg-success border-0' onClick={()=>setShowGame(true)}>Tekrar Dene</Button>
    </Container>
  )
}

export default EndGame