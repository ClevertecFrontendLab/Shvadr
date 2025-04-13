import { Box, Button, Card, CardBody, Flex, Grid, Image, Text } from '@chakra-ui/react';

import like from '~/assets/faceIcon.svg';
import save from '~/assets/flagIcon.svg';
import styles from '~/components/OnVeganPageComponent/onVeganPage.module.scss';

type VeganProps = {
    title: string;
    text: string;
    image: string;
    group: string;
    groupIcon: string;
    likes: string;
    saved: string;
};
type VeganTextProps = {
    vegan: VeganProps[];
};

const OnVeganPage: React.FC<VeganTextProps> = ({ vegan }) => (
    <Box ml='20px' mr='20px' mt='32px' mb='40px'>
        <Grid className={styles.container}>
            {vegan.map((item) => (
                <Card mb='14px' mr={{ base: '0', md: '20px' }}>
                    <CardBody padding='0'>
                        <Box className={styles.grid}>
                            <Flex>
                                <Image
                                    src={item.image}
                                    objectFit='cover'
                                    borderBottomLeftRadius='8px'
                                    borderTopLeftRadius='8px'
                                    width='100%'
                                />
                            </Flex>
                            <Flex
                                flexDir='column'
                                justify='space-between'
                                p={{ base: '10px 5px', md: '20px 24px' }}
                            >
                                <Flex justify='space-between' align='center'>
                                    <Flex className={styles.group}>
                                        <Image src={item.groupIcon} />
                                        <Text fontSize='14px' ml={{ base: '2px', xl: '9px' }}>
                                            {item.group}
                                        </Text>
                                    </Flex>
                                    <Flex h='12px' align='center' className={styles.nums}>
                                        <Flex mr='12px'>
                                            <Image src={save} mr='6px' />
                                            <Text className={styles.green}>{item.saved}</Text>
                                        </Flex>
                                        <Flex>
                                            <Image src={like} mr='6px' />
                                            <Text className={styles.green}>{item.likes}</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Flex flexDir='column'>
                                    <Text className={styles.cardTitle}>{item.title}</Text>
                                    <Text className={styles.cardText}>{item.text}</Text>
                                </Flex>
                                <Flex alignSelf='end' mt='24px'>
                                    <Button
                                        variant='outline'
                                        borderColor='rgba(0, 0, 0, 0.92)'
                                        h='32px'
                                        className={styles.save}
                                    >
                                        <Image src={save} />
                                        <Text ml='10px' display={{ base: 'none', xl: 'block' }}>
                                            Сохранить
                                        </Text>
                                    </Button>
                                    <Button
                                        ml='8px'
                                        backgroundColor='rgba(0, 0, 0, 0.92)'
                                        color='#fff'
                                        h='32px'
                                        className={styles.cook}
                                    >
                                        Готовить
                                    </Button>
                                </Flex>
                            </Flex>
                        </Box>
                    </CardBody>
                </Card>
            ))}
        </Grid>
        <Flex justify='center'>
            <Button backgroundColor='#b1ff2e' data-test-id='juiciest-link-mobile'>
                <Text mr='9px'>Загрузить еще</Text>
            </Button>
        </Flex>
    </Box>
);

export { OnVeganPage };
