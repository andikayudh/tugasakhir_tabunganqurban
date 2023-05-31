import { Grid, InputBase, TextInput, Button, Center, Text, Group, Card, Checkbox, Container } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import Link from 'next/link';



export default function App() {
    return (
        <div>
            <Container>
                <div>
                    <Center mb={'xl'}>
                        <Text>Isi Biodata</Text>
                    </Center>
                    <div>
                        <TextInput
                            label="nama"
                            placeholder="ketik nama lengkap" />
                        <Group spacing="xs">
                            <InputBase
                                label="Tempat lahir"
                                placeholder="Tempat lahir"
                            />
                            <DatePicker placeholder="tanggal, bulan, tahun" label="Tanggal lahir" withAsterisk />;
                        </Group>
                        <InputBase
                            label="Alamat lengkap"
                            placeholder="ketik alamat" />
                        <InputBase
                            label="Nomor Telp/ WA"
                            placeholder="ketik WA"
                        />
                        <InputBase
                            label="Email"
                            placeholder="ketik email" />
                    </div>
                </div>
                <div>
                    <Card withBorder>
                        <Checkbox
                            label="Menyetujui bahwa infaq yang telah di sumbangakan akan di kelola oleh yayasan DKM Al Muttaqin dan akan di gunakan sebaik baiknya dana kepentingan umat khusuhnya warga GSBR"
                        />
                        <Checkbox
                            label="Menyetujui bahwa pengelolalan infaq saat ini di gunakan untuk kepentingan pembangunan Masjid Almuttaqin GSBR, bantuan kemanusiaan dilingkungan GSBR dan untuk membantu operasional kegiatan di Masjid ALmuttaqin GSBR "
                        />
                    </Card>
                </div>
                <Card withBorder>
                    <center>
                        <Link href={'/wa'} >
                            <Button>
                                Registrasi
                            </Button>
                        </Link>
                    </center>
                </Card>

            </Container>
        </div>

    );

}