import { Container, Image, SimpleGrid } from '@mantine/core';
import { useEffect } from 'react';
import { MyHeader, MyCard, MyButton, MyInput, MyIcon, MyFooter } from '../components/landing';
import { Router, useRouter } from 'next/router';




export default function sapi() {

  return (
    <div>
      <Container>
      <SimpleGrid cols={1}>

      <div>
        <MyHeader />
      </div>
      <div>
        <MyCard />
      </div>
      <div>
        <MyButton />
      </div>

        
        <div>
          <MyFooter />
        </div>
        </SimpleGrid>
      </Container>
    </div>
  )
}
