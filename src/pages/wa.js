import React from 'react'
import { BackgroundImage, Center, Text, Box, Image, Container, Button, Card, Badge, Grid, Notification } from '@mantine/core';

import Link from 'next/link';
export default function wa() {
    return (
        <div>
            <Container>
                <Center>
                    <Image
                        width={300}

                        src="http://tk1.barunawatijakbar.sch.id/wp-content/uploads/2021/04/otp-wa-edit.png"
                    >



                    </Image>
                </Center>
            </Container>
            <div>
                <Center>
                    <Notification>
                    <Text color={'red'}>
                        tunggu beberapa saat untuk mendapatkan konfirmasi nomor register dari kami, atau cek di lihat list pengqurban 
                    </Text>
                    </Notification>
                </Center>
            </div>
            <div>
                <Card>
                    <Grid columns={24}>
                        <Grid.Col span={12}>
                            <div style={{ width: 210 }}>
                                <Link href={'/listpengqurban'}>
                                    <Badge variant="filled" fullWidth>
                                        menu list pengqurban
                                    </Badge>
                                </Link>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <div style={{ width: 210 }}>
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
        </div>
    )
}
