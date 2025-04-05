import { ChakraProvider } from '@chakra-ui/react';

import { Header } from '~/components/HeaderComponent/header';

function App() {
    return (
        <>
            <ChakraProvider>
                <Header />
            </ChakraProvider>
        </>
    );
}

export default App;
