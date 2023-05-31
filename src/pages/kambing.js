import { Container, Image, Checkbox, Table, rows, Text, Card, Grid, Button, Badge } from '@mantine/core';
import { useEffect } from 'react';
import { MyHeader, MyCard, MyButton, MyInput, MyIcon, MyFooter } from '../components/landing';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';




const App = () => {
  return (
    <div>

      <Text>Harga Kambing dan Domba + ongkos pemotongan 200.000</Text>
      <Card withBorder>
        <Table verticalSpacing="xs" fontSize="xs" striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr >
              <th >Jenis Kambing</th>
              <th >kg</th>
              <th >Harga</th>
              <th style={{ textAlign: "center" }}>pilih</th>

            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tr>
            <td>Kambing Istimewa A</td>
            <td>+/- 60</td>
            <td>6.000.000</td>
            <th style={{ textAlign: "center" }}><Checkbox /></th>
          </tr>
          <tr>
            <td>Kambing Istimewa B</td>
            <td>+/- 55</td>
            <td>5.500.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>Kambing Istimewa C</td>
            <td>+/- 50</td>
            <td>4.000.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>Kambing Super A</td>
            <td>+/- 45</td>
            <td>3.500.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>Kambing Super B</td>
            <td>+/- 40</td>
            <td>3.000.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>Kambing Super C</td>
            <td>+/- 35</td>
            <td>2.500.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>Kambing Standar A</td>
            <td>+/- 30</td>
            <td>2.000.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>Kambing Standar B</td>
            <td>+/- 25</td>
            <td>1.500.000</td>
            <td><Checkbox /></td>
          </tr>

        </Table>
      </Card>
      <Card withBorder>
        <Table verticalSpacing="xs" fontSize="xs" withBorder withColumnBorders>
          <thead>
            <tr>
              <th >Jenis domba</th>
              <th >kg</th>
              <th >Harga</th>
              <th >pilih</th>

            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tr>
            <td>domba Istimewa A</td>
            <td>+/- 60</td>
            <td>6.000.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>domba Istimewa B</td>
            <td>+/- 55</td>
            <td>5.500.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>domba Istimewa C</td>
            <td>+/- 50</td>
            <td>4.000.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>domba Super A</td>
            <td>+/- 45</td>
            <td>3.500.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>domba Super B</td>
            <td>+/- 40</td>
            <td>3.000.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>domba Super C</td>
            <td>+/- 35</td>
            <td>2.500.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>domba Standar A</td>
            <td>+/- 30</td>
            <td>2.000.000</td>
            <td><Checkbox /></td>
          </tr>
          <tr>
            <td>domba Standar B</td>
            <td>+/- 25</td>
            <td>1.500.000</td>
            <td><Checkbox /></td>
          </tr>

        </Table>
      </Card>

      <div>
                <Card>
                    <Grid columns={24}>
                        <Grid.Col span={12}>
                            <div style={{ width: 200 }}>
                                <Link href={'/daftar'}>
                                    <Badge variant="filled" fullWidth>
                                    pilih & daftar
                                    </Badge>
                                </Link>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <div style={{ width: 200 }}>
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