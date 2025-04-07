import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';

import exit from '~/assets/exit.svg';
import styles from '~/components/NavigationComponent/Navigation.module.scss';

type NavProps = {
    title: string;
    testId: string;
    icon: string;
    options: { option: string }[];
};

type NavTextProps = {
    navigation: NavProps[];
};

const Navigation: React.FC<NavTextProps> = ({ navigation }) => (
    <Box className={styles.box} display={{ base: 'none', md: 'block' }}>
        <nav className={styles.Navcontainer}>
            <Accordion w='230px' allowToggle>
                {navigation.map((navItem) => (
                    <AccordionItem border='none'>
                        <h2>
                            <AccordionButton data-test-id={navItem.testId} className={styles.btn}>
                                <Image src={navItem.icon} mr='12px' />
                                <Box as='span' flex='1' textAlign='left'>
                                    {navItem.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        {navItem.options.map((opt) => (
                            <AccordionPanel className={styles.option}>{opt.option}</AccordionPanel>
                        ))}
                    </AccordionItem>
                ))}
            </Accordion>
        </nav>

        <footer className={styles.footer}>
            <Box>
                <Text color='rgba(0, 0, 0, 0.24)' fontWeight='500'>
                    Версия программы 03.25
                </Text>
                <Text className={styles.text} mt='16px'>
                    Все права защищены,
                </Text>
                <Text className={styles.text}>ученический файл,</Text>
                <Text className={styles.text} mb='16px'>
                    ©Клевер Технолоджи, 2025
                </Text>
                <Flex>
                    <Image src={exit} />
                    <Text fontWeight='600' ml='6px'>
                        Выйти
                    </Text>
                </Flex>
            </Box>
        </footer>
    </Box>
);

export { Navigation };
