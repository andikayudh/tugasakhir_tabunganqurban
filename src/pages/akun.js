import React from 'react'
import { Card, Container, SimpleGrid, Grid, Text, Group, Stack, Badge, Center, UnstyledButton, Avatar } from '@mantine/core'
import { MyHeader } from '../components/landing'
import MyFooter from '../components/landing/MyFooter'
import Link from 'next/link'

export default function akun() {
  return (
    <div>
    
                <SimpleGrid cols={1}>
                    <Card withBorder>
                        <div><MyHeader /></div>
                    </Card>
                    <Card withBorder>
                        <div>
                            <Link href={'daftar'}>
                                <UnstyledButton>
                                    <Group>
                                        <Avatar radius={'xl'} src='https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-simple-registration-design-icon-image_2291733.jpg' size={40} color="blue">BH</Avatar>
                                        <div>
                                            <Text>daftar</Text>                                            
                                        </div>
                                    </Group>
                                </UnstyledButton>
                                </Link>
                        </div>
                        <div>
                           <Link href={'/'}> 
                            <UnstyledButton>
                                    <Group>
                                        <Avatar radius={'xl'} src ='https://simg.nicepng.com/png/small/364-3640881_id-curly-hair-male-student-icon-cartoon.png' size={40} color="blue">BH</Avatar>
                                        <div>
                                            <Text>masuk</Text>                                            
                                        </div>
                                    </Group>
                                </UnstyledButton>
                                </Link>
                            <div>
                               <Link href={'/transaksi'}>
                                <UnstyledButton>
                                    <Group>
                                        <Avatar radius={'xl'} src='https://www.kagetweb.com/img/data/blog/payment-meth.png' size={40} color="blue">BH</Avatar>
                                        <div>
                                            <Text>lihat transaksi</Text>                                            
                                        </div>
                                    </Group>
                                </UnstyledButton>
                                </Link>
                            </div>
                        </div>
                    </Card>
                    <Card withBorder>
                        <div>
                           <Link href={'/sapipatungan'}>
                            <UnstyledButton>
                                    <Group>
                                        <Avatar src='https://w7.pngwing.com/pngs/424/485/png-transparent-head-brown-cow-horns-animal-mounted-mount.png' size={40} color="blue">BH</Avatar>
                                        <div>
                                            <Text>sapi Patungan</Text>                                            
                                        </div>
                                    </Group>
                                </UnstyledButton>
                                </Link>
                        </div>
                        <div>
                        <Link href={'/sapifamily'}>
                            <UnstyledButton>
                                    <Group>
                                        <Avatar src='data:image/jpeg;base64,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' size={40} color="blue">BH</Avatar>
                                        <div>
                                            <Text>sapi family</Text>                                            
                                        </div>
                                    </Group>
                                </UnstyledButton>
                                </Link>
                        </div>
                        <div>
                        <Link href={'/kambing'}>
                            <UnstyledButton>
                                    <Group>
                                        <Avatar src='https://image.gambarpng.id/png/gambar-transparent-idul-adha-selamat-kambing-illu-Satwa-senang_28606.png' size={40} color="blue">BH</Avatar>
                                        <div>
                                            <Text>kambing</Text>                                            
                                        </div>
                                    </Group>
                                </UnstyledButton>
                                </Link>
                        </div>
                    </Card>
                    <Card withBorder>
                        <div>
                           <Link href={'/listpengqurban'}>
                            <UnstyledButton>
                                    <Group>
                                        <Avatar radius={'xl'} src='https://img.freepik.com/vector-premium/metafora-gestion-dinero-transacciones-financieras_82574-9780.jpg?w=2000' size={40} color="blue">BH</Avatar>
                                        <div>
                                            <Text>daftar calon pengqurban</Text>                                            
                                        </div>
                                    </Group>
                                </UnstyledButton>
                                </Link>
                        </div>
                        <div>
                        <Link href={'/listkelompok'}>
                            <UnstyledButton>
                                    <Group>
                                        <Avatar radius={'xl'} src='https://archive.org/download/icon-daftar-hitam-1/Icon%20Daftar_hitam1.png' size={40} color="blue">BH</Avatar>
                                        <div>
                                            <Text>daftar kelompok pengqurban</Text>                                            
                                        </div>
                                    </Group>
                                </UnstyledButton>
                                </Link>
                        </div>
                    </Card>
                </SimpleGrid>

                <Card withBorder>
                <div><MyFooter /></div>
                </Card>



           
    </div>
  )
}
