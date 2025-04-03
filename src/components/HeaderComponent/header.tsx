import { HamburgerIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, Icon, Image, Text, Wrap, WrapItem } from '@chakra-ui/react';

import avatar from '~/assets/EK.png';
import face from '~/assets/faceIcon.svg';
import flag from '~/assets/flagIcon.svg';
import friends from '~/assets/friendsIcon.svg';
import logo from '~/assets/Group.svg';
import name from '~/assets/yee-daa.svg';
import styles from '~/components/HeaderComponent/header.module.scss';

function Header() {
    return (
        <header>
            <Flex justify='space-between' align='center' className={styles.container}>
                <span>
                    <Wrap>
                        <Image src={logo} />
                        <Image src={name} className={styles.logoName} />
                        <Box className={styles.breadcrumbs}>Тут будут хлебные крошки</Box>
                    </Wrap>
                </span>
                <span>
                    <Wrap mr='80px' className={styles.user}>
                        <WrapItem>
                            <Avatar
                                size='md'
                                bg='red.500'
                                name='Екатерина Константинопольская'
                                src={avatar}
                            />
                        </WrapItem>
                        <span>
                            <Box fontWeight='500' fontSize='18px'>
                                Екатерина Константинопольская
                            </Box>
                            <Box fontSize='14px'>@bake_and_pie</Box>
                        </span>
                    </Wrap>
                    <Flex align='center' display={{ base: 'flex', md: 'none' }}>
                        <Image src={flag} />
                        <Text className={styles.text}>185</Text>
                        <Image src={friends} />
                        <Text className={styles.text}>589</Text>
                        <Image src={face} />
                        <Text className={styles.text}>587</Text>
                        <Icon as={HamburgerIcon} w='24px' h='24px' className={styles.hamburger} />
                    </Flex>
                </span>
            </Flex>
        </header>
    );
}

export { Header };
