import React, { Component } from 'react'
import { Carousel } from '@mantine/carousel';
import { Text, Card, Image, AspectRatio } from '@mantine/core';



export default class MyCarousel extends Component {
  render() {
    
    return (
      <div>
       

       <AspectRatio ratio={550 / 300} maw={300} mx="auto">

        <Carousel>
        <Carousel.Slide>
      <Image
        src="http://mvadmin.jagadtani.id/uploads/filemanager/20210526-DSC09385%20(Large).jpg"
        alt="Panda"
      />
      </Carousel.Slide>
      <Carousel.Slide>
      <Image
        src="http://mvadmin.jagadtani.id/uploads/filemanager/20210526-DSC09247%20(Large).jpg"
        alt="Panda"
      />
      </Carousel.Slide>
      <Carousel.Slide>
      <Image
        src="http://mvadmin.jagadtani.id/uploads/filemanager/20210526-DSC09247%20(Large).jpg"
        alt="Panda"
      />
      </Carousel.Slide>
      <Carousel.Slide>
      <Image
        src="http://mvadmin.jagadtani.id/uploads/filemanager/3%20-%20Sapi%20Madura.jpg"
        alt="Panda"
      />
      </Carousel.Slide>
      <Carousel.Slide>
      <Image
        src="http://mvadmin.jagadtani.id/uploads/filemanager/20210526-DSC09331%20(Large).jpg"
        alt="Panda"
      />
      </Carousel.Slide>
      </Carousel>
    </AspectRatio>
      </div>
    )
  }
}
