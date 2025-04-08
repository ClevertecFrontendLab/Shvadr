import { Flex } from '@chakra-ui/react';

import { NAVIGATION } from '~/constants/nav';

import { Navigation } from '../NavigationComponent/NavigationComponent';
import { Search } from '../SearchComponent/search';
import { Sidebar } from '../SidebarComponent/SidebarComponent';
import styles from './main.module.scss';

function Main() {
    return (
        <Flex>
            <Navigation navigation={NAVIGATION} />
            <div className={styles.main}>
                <div className={styles.title}>Приятного аппетита!</div>
                <Search />
            </div>
            <Sidebar />
        </Flex>
    );
}

export { Main };
