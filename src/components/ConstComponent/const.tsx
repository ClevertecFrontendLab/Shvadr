import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { NAVIGATION } from '~/constants/nav';

import { Footer, Header, Navigation, Sidebar } from '../app';

export const Const = () => (
    <Grid
        templateRows={{ base: 'auto 1fr auto', xl: 'auto 1fr' }}
        templateColumns={{ base: '1fr', xl: '256px 1fr 240px' }}
        templateAreas={{
            base: `
                "header"
                "main"
                "footer"
            `,
            xl: `
                "header header header"
                "nav main sidebar"
                "footer footer footer"
            `,
        }}
        minH='100vh'
        overflowY={{ base: 'hidden', md: 'auto' }}
        overflowX='hidden'
    >
        <GridItem area='header'>
            <Header />
        </GridItem>

        <GridItem area='nav' display={{ base: 'none', xl: 'grid' }} mt='84px'>
            <Navigation navigation={NAVIGATION} />
        </GridItem>

        <GridItem area='main' mt='84px'>
            <Outlet />
        </GridItem>

        <GridItem area='aside' display={{ base: 'none', xl: 'grid' }} mt='84px'>
            <Sidebar />
        </GridItem>

        <GridItem area='footer' display={{ base: 'block', xl: 'none' }}>
            <Footer />
        </GridItem>
    </Grid>
);
