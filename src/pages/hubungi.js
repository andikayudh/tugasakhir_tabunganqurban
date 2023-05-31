import React from 'react'
import { Text, Center, Button } from '@mantine/core'
import Link from 'next/link'



const bantuan = () => {
  return (
    <div>
      <Text>Hubungi kami </Text>


      <div>
            <Center>
              <Link href="/">
                <Button>kembali</Button>
              </Link>
            </Center>
          </div>
    </div>

    
  )
}

export default bantuan
