import { ChakraProvider } from '@chakra-ui/react';

import { Footer } from '~/components/FooterComponent/footer';
import { Header } from '~/components/HeaderComponent/header';
import { Sidebar } from '~/components/SidebarComponent/SidebarComponent';

function App() {
    return (
        <>
            <ChakraProvider>
                <Header />
                <Sidebar />
                <Footer />
            </ChakraProvider>
        </>
    );
}

export default App;
