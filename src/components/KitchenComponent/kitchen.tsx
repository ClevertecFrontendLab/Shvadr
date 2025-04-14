import { Box, Button, Card, CardBody, Flex, Grid, Image, Text } from '@chakra-ui/react';

import like from '~/assets/faceIcon.svg';
import save from '~/assets/flagIcon.svg';
import styles from '~/components/KitchenComponent/kitchen.module.scss';

type KitchenProps = {
    title: string;
    text: string;
    bigCards: {
        title: string;
        text: string;
        group: string;
        groupIcon: string;
        saved: string;
        likes: string;
    }[];
    smallCards: {
        title: string;
        groupIcon: string;
    }[];
};
type KitcheTextProps = {
    kitchen: KitchenProps[];
};

const Kitchen: React.FC<KitcheTextProps> = ({ kitchen }) => (
    <Box width={{ base: '100%', xl: '94%' }}>
        {kitchen.map((item) => (
            <Grid className={styles.container}>
                <Flex
                    justify='space-between'
                    m={{ base: '8px 16px 16px 5px', md: '24px 0' }}
                    className={styles.one}
                >
                    <Text className={styles.title}>{item.title}</Text>
                    <Text className={styles.text}>{item.text}</Text>
                </Flex>

                <Flex flexDirection={{ base: 'column', md: 'row' }}>
                    <Flex flexDirection={{ base: 'column', md: 'row' }}>
                        {item.bigCards.map((big) => (
                            <Card
                                className={styles.bigCard}
                                borderTop='1px solid rgba(0, 0, 0, 0.08)'
                                borderRadius='8px'
                            >
                                <CardBody padding='16px'>
                                    <Text className={styles.bigTitle}>{big.title}</Text>
                                    <Text className={styles.bigText}>{big.text}</Text>
                                    <Flex mt='24px' justify='space-between'>
                                        <Flex backgroundColor='#ffffd3' borderRadius='6px'>
                                            <Image src={big.groupIcon} mr='8px' ml='8px' />
                                            <Text mr='8px' className={styles.group}>
                                                {big.group}
                                            </Text>
                                        </Flex>
                                        <Flex align='center' fontSize='12px'>
                                            <Flex>
                                                <Image src={save} mr='8px' />
                                                <Text className={styles.green}>{big.saved}</Text>
                                            </Flex>
                                            <Flex>
                                                <Image src={like} mr='8px' ml='16px' />
                                                <Text className={styles.green}>{big.likes}</Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </CardBody>
                            </Card>
                        ))}
                    </Flex>

                    <Flex flexDir='column' height='100%' w='100%' justify='space-between'>
                        {item.smallCards.map((small) => (
                            <Card
                                className={styles.smallCard}
                                borderTop='1px solid rgba(0, 0, 0, 0.08)'
                                borderRadius='8px'
                            >
                                <CardBody padding='12px'>
                                    <Flex justify='space-between'>
                                        <Flex>
                                            <Image src={small.groupIcon} mr='8px' />
                                            <Text className={styles.smallText}>{small.title}</Text>
                                        </Flex>
                                        <Button
                                            className={styles.btn}
                                            borderColor='#2db100'
                                            color='#2db100'
                                            variant='outline'
                                            h='24px'
                                            maxW='70px'
                                            minW='70px'
                                            fontSize='12px'
                                        >
                                            Готовить
                                        </Button>
                                    </Flex>
                                </CardBody>
                            </Card>
                        ))}
                    </Flex>
                </Flex>
            </Grid>
        ))}
    </Box>
);

export { Kitchen };
