import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { NAVIGATION } from '~/constants/nav';

import { Footer, Header, Navigation, Sidebar } from '../app';

export const Const = () => (
    <Grid
        templateRows={{ base: 'auto 1fr auto', lg: 'auto 1fr' }}
        templateColumns={{ base: '1fr', lg: '256px 1fr 240px' }}
        templateAreas={{
            base: `
                "header"
                "main"
                "footer"
            `,
            lg: `
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

        <GridItem area='nav' display={{ base: 'none', lg: 'grid' }} mt='84px'>
            <Navigation navigation={NAVIGATION} />
        </GridItem>

        <GridItem area='main' mt='84px'>
            <Outlet />
        </GridItem>

        <GridItem area='aside' display={{ base: 'none', lg: 'grid' }} mt='84px'>
            <Sidebar />
        </GridItem>

        <GridItem area='footer' display={{ base: 'block', lg: 'none' }}>
            <Footer />
        </GridItem>
    </Grid>
);
