import { SimpleGrid, UnstyledButton, Group, Avatar, Text, NavLink, Card, Container, Button, Center, Badge, Grid } from '@mantine/core';

import Link from 'next/link';



export default function Demo() {
    return (

        <div>
            <Container>
                <SimpleGrid cols={1}>

                    <div><Text>Pilih hewan Qurban</Text></div>
                    <div>
                        <Card withBorder>
                            <Link href={'/sapipatungan'}>
                                <UnstyledButton>
                                    <Group>
                                        <Avatar src='https://img.lovepik.com/original_origin_pic/19/01/09/d0f75c3dd935ab90b82f434e91fc270f.png_wh860.png' size={80} color="blue">BH</Avatar>
                                        <div>
                                            <Text>Sapi Patungan</Text>
                                            <Text size="xs" color="dimmed">Free biaya potong</Text>
                                        </div>
                                    </Group>
                                </UnstyledButton>
                            </Link>
                        </Card>
                    </div>

                    <div>
                        <Card withBorder>
                            <Link href={'/sapifamily'}>
                                <UnstyledButton>
                                    <Group>
                                        <Avatar src='https://img.lovepik.com/free-png/20210924/lovepik-cattle-png-image_401318231_wh1200.png' size={80} color="blue">BH</Avatar>
                                        <div>
                                            <Text>Sapi Family</Text>
                                            <Text size="xs" color="dimmed">Free biaya potong</Text>
                                        </div>
                                        <div><Text size="xs" color="dimmed">akan dikenakan biaya 1.500.000 jika membeli sapi diluar saat pemotongan tiba
                                            </Text></div>
                                    </Group>
                                </UnstyledButton>
                            </Link>
                        </Card>
                    </div>
                    <div>
                        <Card withBorder>
                            <Link href={'/kambing'}>
                                <UnstyledButton>
                                    <Group>
                                        <Avatar src='https://w7.pngwing.com/pngs/515/412/png-transparent-black-and-white-goat-goat-sheep-goat-image-file-formats-animals-cow-goat-family.png' size={80} color="blue">BH</Avatar>
                                        <div>
                                            <Text>Kambing/Domba</Text>
                                            <Text size="xs" color="dimmed">dikenakan biaya pemotongan Rp. 200.000</Text>
                                        </div>
                                    </Group>
                                </UnstyledButton>
                            </Link>
                        </Card>
                    </div>

                    <div>
                <Card>
                    <Grid columns={24}>
                        <Grid.Col span={12}>
                            <div style={{ width: 180 }}>
                                <Link href={''}>
                                    <Badge variant="filled" fullWidth>
                                        pilih qurban
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
                </SimpleGrid>
            </Container>
        </div>
    )
}