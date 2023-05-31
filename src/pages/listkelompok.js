import { Container, SimpleGrid, Text, NativeSelect, Card, Button, Center, Grid, Date, Checkbox, Badge } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { Indicator } from '@mantine/core';
import Link from 'next/link';
import { Table } from '@mantine/core';

const elements = [

    { reg: 'SA1-1', qurban: 'sapi A', kelompok: '1', nama: 'fulan', harga: '4.500.000', bayar: '0', kurang: '4.000.000' },
    { reg: 'SA1-2', qurban: 'sapi A', kelompok: '1', nama: 'bulan', harga: '4.500.000', bayar: '1.000.000', kurang: '3.500.000' },
    { reg: 'SA1-3', qurban: 'sapi A', kelompok: '1', nama: 'dulan', harga: '4.500.000', bayar: '4.500.000', kurang: '0' },
    { reg: 'SA1-4', qurban: 'sapi A', kelompok: '1', nama: 'gulan', harga: '4.500.000', bayar: '4.500.000', kurang: '0' },
    { reg: 'SA1-5', qurban: 'sapi A', kelompok: '1', nama: 'gulan', harga: '4.500.000', bayar: '4.500.000', kurang: '0' },
    { reg: 'SA1-6', qurban: 'sapi A', kelompok: '1', nama: 'julan', harga: '4.500.000', bayar: '2.500.000', kurang: '1.000.000' },
    { reg: 'SA1-7', qurban: 'sapi A', kelompok: '1', nama: 'julan', harga: '4.500.000', bayar: '2.500.000', kurang: '1.000.000' },


];

const rows = elements.map((element) => (
    <tr key={element.name}>
       
        <td>{element.qurban}</td>
        <td>{element.kelompok}</td>
        <td>{element.nama}</td>
        <td style={{ textAlign: 'right' }}>{element.alamat}</td>
        <td style={{ textAlign: 'right' }}>{element.bayar}</td>
        <td style={{ textAlign: 'right' }}>{element.kurang}</td>

    </tr>
));

const App = () => {

    return (
        <div>
            <SimpleGrid cols={1}>
                <div><Text>daftar calon pengqurban Sapi</Text></div>


                <div></div>
            </SimpleGrid>
            <Center>


            </Center>
            <Table verticalSpacing="xs" fontSize="xs" striped highlightOnHover withBorder withColumnBorders>
                <thead>
                    <tr>
                       
                        <th style={{ textAlign: 'center' }}>qurban</th>
                        <th style={{ textAlign: 'center' }}>kelompok </th>
                        <th style={{ textAlign: 'center' }}>nama </th>
                        <th style={{ textAlign: 'center' }}>alamat</th>
                        <th style={{ textAlign: 'center' }}>hadiah kpd</th>
                        <th style={{ textAlign: 'right' }}>kurang</th>

                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>

            <div>
            <div>
                <Card>
                    <Grid columns={24}>
                        <Grid.Col span={12}>
                            <div style={{ width: 200 }}>
                                <Link href={'/bayar'}>
                                    <Badge variant="filled" fullWidth>
                                        bayar angsuran
                                    </Badge>
                                </Link>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <div style={{ width: 200}}>
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
        </div>

    );
}

export default App;

