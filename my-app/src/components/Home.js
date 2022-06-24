import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Home.css'

export default function Home() {
  return (
   
   <>
   <div>
  <Carousel>
    <Carousel.Item>
    <img
      className=""
      src="Photo/114.jpg"
      alt="First slide" height={600} width={1600}
    />
    <Carousel.Caption>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block "
      src="Photo/112.jpg"
      alt="Second slide" height={670} width={1600}
    />
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block"
      src="Photo\111.jpg.jpg"
      alt="Third slide" height={670} width={1600}
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
    </div>
    
    <div><footer className='footer'>
    <p>Contact:9329343110;<br/>Email:guptabharti02@gmail. <br/> 2021&copy; copyrights
    <br/></p>
    </footer>
    </div>
  </>
 
 
 )
}
