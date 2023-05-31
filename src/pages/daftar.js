import { Grid, InputBase, TextInput, Button, Center, Text, Group, Card, Checkbox, Container } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import Link from 'next/link';



export default function App() {
    return (
        <div>
            <Container>
                <div>
                    <Card withBorder>
                    <Center mb={'xl'}>
                        <Text>Daftar Qurban</Text>
                    </Center>
                    <div>                        
                        <Group spacing="xs">
                            <InputBase
                                label="Nama"
                                placeholder="Nama lengkap"
                            />
                            <TextInput
                            label="Bin/Binti"
                            placeholder="ketik nama bapak" />
                        </Group>
                        <InputBase
                            label="Alamat lengkap"
                            placeholder="ketik alamat" />
                        <InputBase
                            label="Nomor Telp/ WA"
                            placeholder="ketik WA"
                        />
                        <InputBase
                            label="qurban di hadiahkan kepada orangtua/dirisendiri/suami/istri/anak/saudara"
                            placeholder="ketik nama" />
                    </div>
                    </Card>
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
                               daftar
                            </Button>
                        </Link>
                    </center>
                </Card>

            </Container>
        </div>

    );

}