import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { NAVIGATION } from '~/constants/nav';

import { Footer, Header, Navigation, Sidebar } from '../app';

export const Const = () => (
    <Grid
        templateRows={{ base: 'auto 1fr auto', md: 'auto 1fr' }}
        templateColumns={{ base: '1fr', md: '256px 1fr 240px' }}
        templateAreas={{
            base: `
                "header"
                "main"
                "footer"
            `,
            md: `
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

        <GridItem area='nav' display={{ base: 'none', lg: 'grid' }}>
            <Navigation navigation={NAVIGATION} />
        </GridItem>

        <GridItem area='main'>
            <Outlet />
        </GridItem>

        <GridItem area='aside' display={{ base: 'none', lg: 'grid' }}>
            <Sidebar />
        </GridItem>

        <GridItem area='footer' display={{ base: 'flex', lg: 'none' }}>
            <Footer />
        </GridItem>
    </Grid>
);
