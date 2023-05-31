import { Container, SimpleGrid, Text, NativeSelect, Card, Button, Center, Grid, Badge,  Date, Checkbox, Table } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { Indicator } from '@mantine/core';
import Link from 'next/link';


const elements = [

    { pilih: <Checkbox />, reg: 'SA1-1', qurban: 'sapi A', nama: 'fulan', alamat: 'GSBR 1A blok D no 12A ', bayar: '0', kurang: '4.000.000' },
    { pilih: <Checkbox />, reg: 'SA1-1', qurban: 'sapi A', nama: 'fulan', alamat: 'GSBR 1A blok D no 12A ', bayar: '0', kurang: '4.000.000' },
    { pilih: <Checkbox />, reg: 'SA1-1', qurban: 'sapi A', nama: 'fulan', alamat: 'GSBR 1A blok D no 12A ', bayar: '0', kurang: '4.000.000' },
    { pilih: <Checkbox />, reg: 'SA1-1', qurban: 'sapi A', nama: 'fulan', alamat: 'GSBR 1A blok D no 12A ', bayar: '0', kurang: '4.000.000' },



];

const rows = elements.map((element) => (
    <tr key={element.name}>
        <td>{element.pilih}</td>
        <td>{element.reg}</td>
        <td>{element.qurban}</td>
        <td>{element.nama}</td>
        <td>{element.alamat}</td>
        <td style={{ textAlign: 'right' }}>{element.kurang}</td>

    </tr>
));

const App = () => {

    return (
        <div>
            <SimpleGrid cols={1}>
                <div><Text>List calon pengqurban Sapi</Text></div>


                <div></div>
            </SimpleGrid>
            <Center>


            </Center>
            <Table verticalSpacing="xs" fontSize="xs" striped highlightOnHover withBorder withColumnBorders>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>pilih</th>
                        <th style={{ textAlign: 'center' }}>No reg</th>
                        <th style={{ textAlign: 'center' }}>qurban</th>
                        <th style={{ textAlign: 'center' }}>nama </th>
                        <th style={{ textAlign: 'center' }}>alamat</th>
                        <th style={{ textAlign: 'right' }}>kurang</th>

                    </tr>
                </thead>
                <tbody>{rows}</tbody>
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

