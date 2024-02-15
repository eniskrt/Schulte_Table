import React from 'react'
import { Button, Container } from 'react-bootstrap'

const HomePage = ({setShowGame}) => {
  return (
    <Container className='text-center'>
            <h1>Schulte Table</h1>
            <p style={{width:"350px",transform:"translateX(-50px)"}}>Karşınıza 1'den 25'e kadar sayılar gelecektir. Bu sayıları en kısa süre içersinde 1'den başlayarak 25'e kadar tıklamanız gerekmektedir. Bu tablo dikkat dağınıklığınızı azaltmak ve odaklanmanız amacıyla üretilmiştir.</p>
          <Button className='w-100 bg-success border-0' onClick={()=>setShowGame(false)}>Başla</Button>
    </Container>
  )
}

export default HomePage