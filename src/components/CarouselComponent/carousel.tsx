import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { useRef } from 'react';

import like from '~/assets/faceIcon.svg';
import save from '~/assets/flagIcon.svg';
import styles from '~/components/CarouselComponent/carousel.module.scss';

type CarouselProps = {
    title: string;
    text: string;
    image: string;
    group: string;
    groupIcon: string;
    likes: string;
    saved: string;
};
type CarouselTextProps = {
    carousel: CarouselProps[];
};

const Carousel: React.FC<CarouselTextProps> = ({ carousel }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <Box
            mt={{ base: '32px', md: '64px' }}
            mb={{ base: '32px', md: '40px' }}
            overflow='hidden'
            w='100%'
            pos='relative'
        >
            <Flex mb='14px' align='center'>
                <Text className={styles.title}>Новые рецепты</Text>
            </Flex>

            <IconButton
                aria-label='Left'
                icon={<ArrowBackIcon color='white' />}
                onClick={scrollLeft}
                position='absolute'
                left='0'
                top='50%'
                bg='black'
                zIndex='1'
                display={{ base: 'none', md: 'block' }}
            />

            <Flex
                ref={carouselRef}
                overflowX='auto'
                overflowY='hidden'
                w='99%'
                sx={{
                    scrollSnapType: 'x mandatory',
                    scrollBehavior: 'smooth',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    scrollbarWidth: 'none',
                }}
            >
                {carousel.map((item) => (
                    <Card
                        ml='12px'
                        minW={{ base: '160px', md: '300px' }}
                        className={styles.card}
                        borderBottom='1px solid rgba(0, 0, 0, 0.08)'
                        borderRadius='8px'
                    >
                        <CardBody padding='0'>
                            <Box>
                                <Flex>
                                    <Image
                                        src={item.image}
                                        objectFit='cover'
                                        borderTopRightRadius='8px'
                                        borderTopLeftRadius='8px'
                                        width='100%'
                                    />
                                </Flex>
                                <Flex
                                    flexDir='column'
                                    justify='space-between'
                                    h={{ base: '88px', md: '180px' }}
                                    p={{ base: '8px', md: '16px 24px 20px 24px' }}
                                >
                                    <Flex flexDir='column'>
                                        <Text className={styles.cardTitle}>{item.title}</Text>
                                        <Text className={styles.cardText}>{item.text}</Text>
                                    </Flex>
                                    <Flex justify='space-between' align='center'>
                                        <Flex className={styles.group}>
                                            <Image src={item.groupIcon} />
                                            <Text fontSize='13px' ml={{ base: '2px', xl: '9px' }}>
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
                                </Flex>
                            </Box>
                        </CardBody>
                    </Card>
                ))}
            </Flex>

            <IconButton
                aria-label='Left'
                icon={<ArrowForwardIcon color='white' />}
                onClick={scrollRight}
                position='absolute'
                right='0'
                top='50%'
                bg='black'
                zIndex='1'
                display={{ base: 'none', md: 'block' }}
            />
        </Box>
    );
};

export { Carousel };
