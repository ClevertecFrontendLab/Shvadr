import { ChakraProvider } from '@chakra-ui/react';

import { Footer } from '~/components/FooterComponent/footer';
import { Header } from '~/components/HeaderComponent/header';
import { Main } from '~/components/MainComponent/mainComponent';

function App() {
    return (
        <>
            <ChakraProvider>
                <Header />
                <Main />
                <Footer />
            </ChakraProvider>
        </>
    );
}

export default App;
