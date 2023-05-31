import React from 'react'
import { Image, Text, Container, Card, Center, Grid, Button, Badge, Alert } from '@mantine/core'
import Link from 'next/link'

export default function thanks() {
    return (
        <div>
            <Container>
                <Alert>
                <Image src='https://image.slidesharecdn.com/buktitransaksi-210527084536/85/bukti-transaksi-1-320.jpg?cb=1674809894'></Image>
                <Text>terima kasih sudah mengupload bukti transkasi, silakan kembali ke menu utama atau lihat transaksi</Text>
                </Alert>
            </Container>

            <div>
                <Card>
                    <Grid columns={24}>
                        <Grid.Col span={12}>
                            <div style={{ width: 210 }}>
                                <Link href={'/transaksi'}>
                                    <Badge variant="filled" fullWidth>
                                        lihat transaksi
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
