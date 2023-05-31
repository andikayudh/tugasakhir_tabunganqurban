import { Text, Grid, Button, Container, Card, Center, Badge } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { MyFooter } from '../components/landing';
import Link from 'next/link';



export default function Demo() {
    return (

        <div>
            <Container>                
            <div>
                upload bukti transfer
            </div>
            <Card withBorder>
            <Dropzone
                onDrop={() => { }}
                accept={IMAGE_MIME_TYPE}
                sx={(theme) => ({
                    minHeight: 120,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 0,
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

                    '&[data-accept]': {
                        color: theme.white,
                        backgroundColor: theme.colors.blue[6],
                    },

                    '&[data-reject]': {
                        color: theme.white,
                        backgroundColor: theme.colors.red[6],
                    },
                })}
            >
                <Text align="center"> Drag images here or click to select files</Text>
            </Dropzone>
            </Card>
            <div>
                <Card>
                    <Grid columns={24}>
                        <Grid.Col span={12}>
                            <div style={{ width: 210 }}>
                                <Link href={'/thanks'}>
                                    <Badge variant="filled" fullWidth>
                                        upload
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
            
            </Container>
        </div>
    );
}