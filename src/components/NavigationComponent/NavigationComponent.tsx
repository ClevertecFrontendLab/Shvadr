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
import { NavLink, useNavigate } from 'react-router';

import exit from '~/assets/exit.svg';
import styles from '~/components/NavigationComponent/Navigation.module.scss';

type NavProps = {
    title: string;
    testId: string;
    icon: string;
    options: {
        option: string;
        group: string;
        subgroup: string;
    }[];
};

type NavTextProps = {
    navigation: NavProps[];
};

const Navigation: React.FC<NavTextProps> = ({ navigation }) => {
    const navigate = useNavigate();

    return (
        <Box className={styles.box} display={{ base: 'none', md: 'block' }} pos='fixed' left='0'>
            <nav className={styles.Navcontainer}>
                <Accordion w='230px' allowToggle>
                    {navigation.map((navItem) => (
                        <AccordionItem border='none'>
                            <h2>
                                <AccordionButton
                                    data-test-id={navItem.testId}
                                    className={styles.btn}
                                    _expanded={{ bg: '#eaffc7', fontWeight: 'bold' }}
                                >
                                    <Flex onClick={() => navigate('vegan/second-courses')}>
                                        <Image src={navItem.icon} mr='12px' />
                                        <Text textAlign='left'>{navItem.title}</Text>
                                    </Flex>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            {navItem.options.map((opt) => (
                                <AccordionPanel className={styles.option}>
                                    <NavLink
                                        to={'/' + opt.group + '/' + opt.subgroup}
                                        end
                                        className={({ isActive }) =>
                                            `${styles.navItem} ${isActive ? styles.activeItem : ''}`
                                        }
                                    >
                                        <Text>{opt.option}</Text>
                                    </NavLink>
                                </AccordionPanel>
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
};

export { Navigation };
