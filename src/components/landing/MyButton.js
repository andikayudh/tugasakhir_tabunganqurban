import { UnstyledButton, Group, Avatar, Text, SimpleGrid, Center, } from '@mantine/core';

import Link from 'next/link';

export default function MyButton() {
  return (

    <SimpleGrid cols={3}>
      <div>
        <Center>
        <Link href={'/pilih'}>
        <UnstyledButton>
          <Group>
            <Center>
              <div>
                <Center>
                <Avatar src='http://ibnujuraimi.ponpes.id/wp-content/uploads/2018/12/pendaftaran-png-5.png' size={70} color="blue">BH</Avatar>
                </Center>
                <Center>
                <Text size="xs" color="red">daftar</Text>
                </Center>
              </div>
            </Center>
          </Group>
        </UnstyledButton>
        </Link>
        </Center>
      </div>
      <div>
        <Center>
          <Link href={'/pilih'}>
          <UnstyledButton>
            <Group>
              <div>
                <Center>
                <Avatar src='https://cdn-icons-png.flaticon.com/512/682/682011.png' size={70} color="blue">BH</Avatar>
                </Center>
                <Center>
                <Text size="xs" color="red">pilih hewan</Text>
                </Center>
              </div>
            </Group>
          </UnstyledButton>
          </Link>
        </Center>
      </div>
      <div>
      <Center>
        <Link href={'/listpengqurban'}>
        <UnstyledButton>
        <Group>
          <div>
            <Center>
            <Avatar src='https://cdn-icons-png.flaticon.com/512/4108/4108843.png' size={70} color="blue">BH</Avatar>
            </Center>
            <Center>
            <Text size="xs" color="red">bayar angsuran</Text>
            </Center>
          </div>
        </Group>
      </UnstyledButton>
      </Link>
      </Center>
      </div>
      <div>
        

      </div>



    </SimpleGrid>








  );
}