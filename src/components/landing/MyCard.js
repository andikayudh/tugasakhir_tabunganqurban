import { Card, Text,  Image, AspectRatio} from '@mantine/core';

export default function MyCard() {
  return (

    <Card
      shadow="xs"
      p="xs"
      component="a"
      href="https://www.youtube.com/shorts/ySDp0wAEcDg"
      target="_blank"
    >
      <AspectRatio ratio={720 / 100} maw={300} mx="auto">
        <Image
          src="https://alikhlascrm.or.id/wp-content/uploads/2022/02/taqurtext1-1.png"
          title="Google map"
          frameBorder="0"
        />
      </AspectRatio>

      <Text weight={500} size="xs" mt="xs">
        Yayasan Dkm Al Muttaqin
      </Text>

      <Text mt="xs" color="red" size="sm">
      "Maka laksanakanlah sholat karena Tuhanmu, dan berkurbanlah (sebagai ibadah untuk mendekatkan diri kepada Allah)." (QS. Al-Kautsar: 2)


      </Text>
    </Card>
  );
}

