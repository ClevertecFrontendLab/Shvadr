import { Flex } from '@chakra-ui/react';

import { NAVIGATION } from '~/constants/nav';

import { Navigation } from '../NavigationComponent/NavigationComponent';
import { Sidebar } from '../SidebarComponent/SidebarComponent';

function Main() {
    return (
        <Flex>
            <Navigation navigation={NAVIGATION} />
            <div>main</div>
            <Sidebar />
        </Flex>
    );
}

export { Main };
