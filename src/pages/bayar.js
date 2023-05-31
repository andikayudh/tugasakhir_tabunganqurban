import { InputBase, TextInput, Button,  Grid,  Autocomplete, Container, Card, Badge, Text } from '@mantine/core';
import Link from 'next/link';

export default function Demo() {
      return (
            <div>   
                  <Container>   
                <div>form pembayaran</div>         
                        <Grid>
                              <Grid.Col>
                                    <TextInput label="nama" placeholder="fulan" />
                              </Grid.Col>
                        </Grid>
                        <Grid>
                              <Grid.Col>
                                    <TextInput label="alamat" placeholder="fulan" />
                              </Grid.Col>
                        </Grid>
                        <Grid>
                              <Grid.Col span={4}>
                                    <Autocomplete
                                          label="No registrasi"
                                          placeholder="Ketik NoReg"
                                          data={['SKA01', 'SKA02', 'SKA03','SKA04', 'SKA05', 'SKA06', 'SKA07']} />
                              </Grid.Col>
                              <Grid.Col span={3}>
                                    <Autocomplete
                                          label="Pilih kelompok"
                                          placeholder="Pilih salah satu"
                                          data={['Sapi Patungan', 'Sapi Family', 'Kambing/Domba']} />                                    
                              </Grid.Col>
                              <Grid.Col span={3}>
                                    <Autocomplete
                                          label="bayaran via"
                                          placeholder="Pilih salah satu"
                                          data={['cash', 'transfer bank', 'via indomart', 'via alfamart']}
                                    />
                              </Grid.Col>
                        </Grid>
                        <Grid>
                              <Grid.Col>
                                    <TextInput label="nominal" placeholder="ketik nominal" />
                              </Grid.Col>
                        </Grid>
                        <Grid></Grid>
                        <Grid>
                              <Grid.Col>
                                    <TextInput label="berita" placeholder="ketik berita 18 karakter" />
                              </Grid.Col>
                        </Grid>
                        <div>
                              <Text>
                                    jika sudah benar lakukan pembayaran atau silakan kembali ke menu utama
                              </Text>
                        </div>
                        <div>
                <Card>
                    <Grid columns={24}>
                        <Grid.Col span={12}>
                            <div style={{ width: 210 }}>
                                <Link href={'/buktiupload'}>
                                    <Badge variant="filled" fullWidth>
                                        bayar
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


