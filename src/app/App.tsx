import { ChakraProvider } from '@chakra-ui/react';

import { Footer } from '~/components/FooterComponent/footer';
import { Header } from '~/components/HeaderComponent/header';

function App() {
    return (
        <>
            <ChakraProvider>
                <Header />
                <Footer />
            </ChakraProvider>
        </>
    );
}

export default App;
