import { Container, SimpleGrid, Grid, Image, Card, Checkbox, Text, Center, Button, Badge } from '@mantine/core'
import React from 'react'
import Link from 'next/link'

export default function tes() {
  return (
    <div>
      <div>
        <Center>
          <Text>Pilih sapi untuk keluarga</Text>
        </Center>
      </div>

      <Container>
        <SimpleGrid cols={1}>
          <div>
            <Card withBorder>
              <Grid columns={24}>
                <Grid.Col span={6}>
                  <Image
                    width={100}
                    height={100}
                    fit="contain"
                    src="https://pict.sindonews.net/dyn/850/pena/news/2020/07/31/171/119376/berikan-sapi-limosin-ke-rutan-wanita-anwar-kepedulian-pemerintah-untuk-wabin-adi.jpg"
                  />
                </Grid.Col>
                <Grid.Col span={5}>
                  <Text fz="xs">
                    BB : 300 kg
                    LB : 200 cm
                  </Text >
                </Grid.Col>
                <Grid.Col span={5}>
                  <Text fz="xs">
                   35.000.000
                  </Text>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Text fz="xs">
                  
                  </Text>
                </Grid.Col>
                <Grid.Col span={4}><Text fz="xs"> SAPI FAMILY A</Text><Checkbox /></Grid.Col>
              </Grid>
            </Card>
          </div>
          <div>
            <Card withBorder>
              <Grid columns={24}>
                <Grid.Col span={6}>
                  <Image
                    width={100}
                    height={100}
                    fit="contain"
                    src="https://pict.sindonews.net/dyn/850/pena/news/2020/07/31/171/119376/berikan-sapi-limosin-ke-rutan-wanita-anwar-kepedulian-pemerintah-untuk-wabin-adi.jpg"
                  />
                </Grid.Col>
                <Grid.Col span={5}>
                  <Text fz="xs">
                    BB : 300 kg
                    LB : 200 cm
                  </Text >
                </Grid.Col>
                <Grid.Col span={5}>
                  <Text fz="xs">
                    32.000.000
                  </Text>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Text fz="xs">
                  
                  </Text>
                </Grid.Col>
                <Grid.Col span={4}><Text fz="xs"> SAPI FAMILY B</Text><Checkbox /></Grid.Col>
              </Grid>
            </Card>
          </div>
          <div>
            <Card withBorder>
              <Grid columns={24}>
                <Grid.Col span={6}>
                  <Image
                    width={100}
                    height={100}
                    fit="contain"
                    src="https://pict.sindonews.net/dyn/850/pena/news/2020/07/31/171/119376/berikan-sapi-limosin-ke-rutan-wanita-anwar-kepedulian-pemerintah-untuk-wabin-adi.jpg"
                  />
                </Grid.Col>
                <Grid.Col span={5}>
                  <Text fz="xs">
                    BB : 300 kg
                    LB : 200 cm
                  </Text >
                </Grid.Col>
                <Grid.Col span={5}>
                  <Text fz="xs">
                    28.000.000
                  </Text>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Text fz="xs">
                    
                  </Text>
                </Grid.Col>
                <Grid.Col span={4}><Text fz="xs"> SAPI FAMILY C</Text><Checkbox /></Grid.Col>
              </Grid>
            </Card>
          </div>
        </SimpleGrid>

        
        <div>
                <Card>
                    <Grid columns={24}>
                        <Grid.Col span={12}>
                            <div style={{ width: 180 }}>
                                <Link href={'/daftar'}>
                                    <Badge variant="filled" fullWidth>
                                        pilih & daftar
                                    </Badge>
                                </Link>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <div style={{ width: 180 }}>
                                <Link href={'/'}>
                                    <Badge variant="filled" fullWidth>
                                        kembali
                                    </Badge>
                                </Link>
                            </div>
                        </Grid.Col>
                    </Grid>
                </Card>
        </div>
      </Container>




    </div>
  )
}
