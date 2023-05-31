import React from 'react'
import { Badge, Grid } from '@mantine/core';
import Link from 'next/link';

const MyBadge = () => {
    return (
        <div>
            <Grid columns={24}>
                <Grid.Col span={12}>
                    <div style={{ width: 200 }}>
                        <Link href={'/listpengqurban'}>
                        <Badge variant="filled" fullWidth>
                            lihat list pengqurban
                        </Badge>
                        </Link>
                    </div>
                </Grid.Col>
                <Grid.Col span={12}>
                <div style={{ width: 210 }}>
                    <Link href={'/listkelompok'}>
                        <Badge variant="filled" fullWidth>
                            lihat kelompok pengqurban
                        </Badge>
                        </Link>
                    </div>
                </Grid.Col>
            </Grid>



           
        </div>
    )
}

export default MyBadge
