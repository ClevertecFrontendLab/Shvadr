import { Box, Button, Card, CardBody, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router';

import like from '~/assets/faceIcon.svg';
import save from '~/assets/flagIcon.svg';
import styles from '~/components/JuisiestComponent/juisiest.module.scss';

import { RightArrowIcon } from '../Icons/RightArrowIcon';

type JuisiestProps = {
    title: string;
    text: string;
    image: string;
    group: string;
    groupIcon: string;
    likes: string;
    saved: string;
    recomendation: boolean;
    recName: string;
    recImg: string;
};
type JuisiestTextProps = {
    juisiest: JuisiestProps[];
};

const Juisiest: React.FC<JuisiestTextProps> = ({ juisiest }) => (
    <Box ml='20px' mr='20px'>
        <Flex justify='space-between' mb='14px' align='center'>
            <Text className={styles.title}>Самое сочное</Text>
            <Flex display={{ base: 'none', xl: 'flex' }}>
                <NavLink to='/juiciest' data-test-id='juiciest-link'>
                    <Button backgroundColor='#b1ff2e' mr={{ base: '0', md: '20px' }}>
                        <Text mr='9px'>Вся подборка</Text>
                        <RightArrowIcon color='#000' />
                    </Button>
                </NavLink>
            </Flex>
        </Flex>
        <Grid className={styles.container}>
            {juisiest.map((item) => (
                <Card
                    mb='14px'
                    mr={{ base: '0', md: '20px' }}
                    borderTop='1px solid rgba(0, 0, 0, 0.08)'
                    borderRadius='8px'
                    width='100%'
                >
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
                            {item.recomendation && (
                                <Flex
                                    pos='absolute'
                                    bottom='20px'
                                    left='10px'
                                    backgroundColor='#d7ff94'
                                    borderRadius='4px'
                                    p='2px 8px'
                                    display={{ base: 'none', xl: 'flex' }}
                                >
                                    <Image src={item.recImg} />
                                    <Text fontSize='14px' ml='8px'>
                                        {item.recName} рекомендует
                                    </Text>
                                </Flex>
                            )}
                            <Flex
                                flexDir='column'
                                justify='space-between'
                                p={{ base: '8px', lg: '20px 24px' }}
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
                                        h={{ base: '24px', xl: '32px' }}
                                        className={styles.save}
                                        p={{ base: '0 5px', xl: 'auto' }}
                                        minW={{ base: '12px', xl: 'auto' }}
                                    >
                                        <svg
                                            width='12'
                                            height='12'
                                            viewBox='0 0 12 12'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M5.99985 3.3075C7.0401 2.23875 9.64035 4.11 5.99985 6.51525C2.35935 4.11 4.9596 2.2395 5.99985 3.309V3.3075Z'
                                                fill='black'
                                            />
                                            <path
                                                d='M1.5 1.5C1.5 1.10218 1.65804 0.720644 1.93934 0.43934C2.22064 0.158035 2.60218 0 3 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V11.625C10.5 11.6928 10.4815 11.7594 10.4467 11.8176C10.4118 11.8758 10.3618 11.9234 10.302 11.9554C10.2422 11.9874 10.1748 12.0026 10.1071 11.9994C10.0393 11.9961 9.97372 11.9746 9.91725 11.937L6 9.82575L2.08275 11.937C2.02628 11.9746 1.96067 11.9961 1.89292 11.9994C1.82516 12.0026 1.7578 11.9874 1.698 11.9554C1.6382 11.9234 1.5882 11.8758 1.55334 11.8176C1.51847 11.7594 1.50004 11.6928 1.5 11.625V1.5ZM3 0.75C2.80109 0.75 2.61032 0.829018 2.46967 0.96967C2.32902 1.11032 2.25 1.30109 2.25 1.5V10.9245L5.79225 9.063C5.8538 9.02204 5.92607 9.00019 6 9.00019C6.07393 9.00019 6.1462 9.02204 6.20775 9.063L9.75 10.9245V1.5C9.75 1.30109 9.67098 1.11032 9.53033 0.96967C9.38968 0.829018 9.19891 0.75 9 0.75H3Z'
                                                fill='black'
                                            />
                                        </svg>
                                        <Text ml='10px' display={{ base: 'none', xl: 'block' }}>
                                            Сохранить
                                        </Text>
                                    </Button>
                                    <Button
                                        ml='8px'
                                        backgroundColor='rgba(0, 0, 0, 0.92)'
                                        color='#fff'
                                        h={{ base: '24px', xl: '32px' }}
                                        w={{ base: '70px', xl: '87px' }}
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
        <Flex display={{ base: 'flex', xl: 'none' }} justify='center'>
            <NavLink to='/juiciest'>
                <Button backgroundColor='#b1ff2e' data-test-id='juiciest-link-mobile'>
                    <Text mr='9px'>Вся подборка</Text>
                    <RightArrowIcon color='#000' />
                </Button>
            </NavLink>
        </Flex>
    </Box>
);

export { Juisiest };
