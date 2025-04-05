import { EditIcon, SearchIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, HStack, Icon, Wrap, WrapItem } from '@chakra-ui/react';

import avatar from '~/assets/EK.png';
import styles from '~/components/FooterComponent/footer.module.scss';
import { HomeIcon } from '~/components/Icons/HomeIcon';

function Footer() {
    return (
        <footer data-test-id='footer'>
            <Flex
                justify='space-around'
                align='center'
                className={styles.container}
                display={{ base: 'flex', md: 'none' }}
            >
                <Box>
                    <Flex justify='center' align='center' h='40px' className={styles.home}>
                        <HStack>
                            <HomeIcon color='#ffffd3' />
                        </HStack>
                    </Flex>
                    <Box fontSize='12px' textAlign='center'>
                        Главная
                    </Box>
                </Box>

                <Box>
                    <Flex justify='center' align='center' h='40px'>
                        <Icon as={SearchIcon} w='24px' h='24px' />
                    </Flex>
                    <Box fontSize='12px' textAlign='center'>
                        Поиск
                    </Box>
                </Box>

                <Box>
                    <Flex justify='center' align='center' h='40px'>
                        <Icon as={EditIcon} w='24px' h='24px' />
                    </Flex>
                    <Box fontSize='12px' textAlign='center'>
                        Записать
                    </Box>
                </Box>

                <Box>
                    <Flex justify='center' align='center'>
                        <Wrap className={styles.user}>
                            <WrapItem>
                                <Avatar
                                    size='md'
                                    bg='gray.500'
                                    name='Екатерина Константинопольская'
                                    src={avatar}
                                />
                            </WrapItem>
                        </Wrap>
                    </Flex>
                    <Box fontSize='12px' textAlign='center'>
                        Мой профиль
                    </Box>
                </Box>
            </Flex>
        </footer>
    );
}

export { Footer };
