import { Grid, Card, Text, Center, Avatar, Group, UnstyledButton } from '@mantine/core';


import Link from 'next/link';


export default function Demo() {
  return (
    <Card withBorder>
      <Grid px={3}>
        <Grid.Col span={3}>
          <Center>
            <Link href={'/'}>
              <UnstyledButton>
                <Group>
                  <div>
                    <Center>
                    <Avatar src='https://cdn-icons-png.flaticon.com/512/1299/1299961.png' size={40} color="blue">BH</Avatar>
                    </Center>
                    <Center>
                    <Text size="xs" color="dimmed">home</Text>
                    </Center>
                  </div>
                </Group>
              </UnstyledButton>   
              </Link>         
          </Center>
        </Grid.Col>
        <Grid.Col span={3}>
          <Center>  
            <Link href={'/bantuan'}>       
              <UnstyledButton>
                <Group>
                  <div> 
                    <Center>                 
                    <Avatar src='https://jmitech.net/wp-content/uploads/2017/05/Help-Desk-Image.png' size={40} color="blue">BH</Avatar>
                    </Center>  
                    <Center>
                    <Text size="xs" color="dimmed">bantuan</Text>   
                    </Center>               
                  </div>
                </Group>
              </UnstyledButton>    
              </Link>          
          </Center>
        </Grid.Col>
        <Grid.Col span={3}>
          <Center>
           <Link href={'/hubungi'}>
              <UnstyledButton>
                <Group>
                  <div>  
                    <Center>                 
                      <Avatar src='https://e7.pngegg.com/pngimages/861/183/png-clipart-telephone-computer-icons-free-content-teapot-outline-text-telephone-call.png' size={40} color="blue">BH</Avatar>
                      </Center> 
                      <Center>
                      <Text size="xs" color="dimmed">hubungi kami</Text>    
                      </Center>                
                  </div>
                </Group>
              </UnstyledButton>
              </Link>
          </Center>
        </Grid.Col>
        <Grid.Col span={3}>
          <Center>
            <Link href={'/akun'}>
            <UnstyledButton>
              <Group>
                <div>   
                  <Center>            
                  <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoj357d1rp4l5FOhCh2_kbiyZXQnUpOUP_JWkW0DwUiretUrchRSMclap_mL8niZzuRXM&usqp=CAU' size={40} color="blue">BH</Avatar>
                  </Center> 
                  <Center>
                  <Text size="xs" color="dimmed">user</Text>   
                  </Center>             
                </div>
              </Group>
            </UnstyledButton>
            </Link>
          </Center>
        </Grid.Col>


      </Grid>


    </Card>

  );
}