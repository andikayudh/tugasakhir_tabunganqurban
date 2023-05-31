import { Card, Grid, Text, } from "@mantine/core";
import Link from "next/link";


export default function App() {
  return (
    <div>

      

        <Grid>
          <Grid.Col span={6}>
            <Text
              color={'green'}
              size={'sm'}>almuttaqin community</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Link href={'/pilih'}>
              <Text
                color={'green'}
                size={'sm'}
                ta="right">Registrasi</Text>
            </Link>
          </Grid.Col>
        </Grid>
      
    </div>
  );

}