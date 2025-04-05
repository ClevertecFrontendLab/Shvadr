import { EditIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';

import face from '~/assets/faceIcon.svg';
import flag from '~/assets/flagIcon.svg';
import friends from '~/assets/friendsIcon.svg';
import styles from '~/components/SidebarComponent/Sidebar.module.scss';

function Sidebar() {
    return (
        <div className={styles.container}>
            <Flex display={{ base: 'none', md: 'flex' }} flexDirection='column' align='center'>
                <Flex mb='32px' mt='24px'>
                    <Image src={flag} />
                    <Text className={styles.text}>185</Text>
                </Flex>

                <Flex mb='32px'>
                    <Image src={friends} />
                    <Text className={styles.text}>589</Text>
                </Flex>

                <Flex mb='32px'>
                    <Image src={face} />
                    <Text className={styles.text}>587</Text>
                </Flex>

                <Box pos='fixed' bottom='52px'>
                    <Flex justify='center' align='center' h='48px' className={styles.write}>
                        <Icon as={EditIcon} w='24px' h='24px' color='#ffffd3' />
                    </Flex>
                    <Box fontSize='12px' textAlign='center'>
                        Записать рецепт
                    </Box>
                </Box>
            </Flex>
        </div>
    );
}

export { Sidebar };
