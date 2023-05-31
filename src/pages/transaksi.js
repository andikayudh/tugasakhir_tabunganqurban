import { Container, SimpleGrid, Text, NativeSelect, Card, Button, Center, Grid, Date, Checkbox, Badge } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { Indicator } from '@mantine/core';
import Link from 'next/link';
import { Table } from '@mantine/core';







const App = () => {

  return (
    <div>
      <SimpleGrid cols={1}>
        <div><Text>detail transaksi (hanya bisa dilihar user)</Text></div>


        <div></div>
      </SimpleGrid>
      <Center>


      </Center>
      <Table verticalSpacing="xs" fontSize="xs" striped highlightOnHover withBorder withColumnBorders>
        <thead>
              


        <tr>
        <td><th style={{ textAlign: 'center' }}>No register</th></td>
      </tr>
      <tr>
      <td><th style={{ textAlign: 'center' }}>Nama</th></td>
      </tr>
      <tr>
      <td><th style={{ textAlign: 'center' }}>Alamat</th></td>
      </tr>
      <tr>
      <td><th style={{ textAlign: 'center' }}>No Wa</th></td>
      </tr>
      <tr>
      <td><th style={{ textAlign: 'center' }}>qurban di hadiahkan kepada </th></td>
      </tr>
      <tr>
      <td><th style={{ textAlign: 'center' }}>jenis qurban yang di pilih</th></td>
        </tr>
        <tr>
        <td><th style={{ textAlign: 'center' }}>type</th></td>
        </tr>
        <tr>
        <td><th style={{ textAlign: 'center' }}>nomor urut peserta</th></td>
        </tr>
        <tr>
        <td><th style={{ textAlign: 'center' }}>Harga</th></td>
        </tr>
        
        <tr>
        <td><th style={{ textAlign: 'center' }}>Angsuran 1</th></td>
        <td><th style={{ textAlign: 'center' }}>tanggal</th></td>
        <td><th style={{ textAlign: 'center' }}>nominal</th></td>
        </tr>
        <tr>
        <td><th style={{ textAlign: 'center' }}>Angsuran 2</th></td>
        <td><th style={{ textAlign: 'center' }}>tanggal</th></td>
        <td><th style={{ textAlign: 'center' }}>nominal</th></td>
        </tr>
        <tr>
        <td><th style={{ textAlign: 'center' }}>Angsuran 3</th></td>
        <td><th style={{ textAlign: 'center' }}>tanggal</th></td>
        <td><th style={{ textAlign: 'center' }}>nominal</th></td>
        </tr>

        </thead>
      </Table>

      



      <div>
                <Card>
                    <Grid columns={24}>
                        <Grid.Col span={12}>
                            <div style={{ width: 210 }}>
                                <Link href={'/bayar'}>
                                    <Badge variant="filled" fullWidth>
                                        menu pembayaran
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

  );
}

export default App;

