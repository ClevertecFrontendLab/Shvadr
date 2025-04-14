import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router';

import AppRoute from './rout';

function App() {
    return (
        <>
            <ChakraProvider>
                <BrowserRouter>
                    <AppRoute />
                </BrowserRouter>
            </ChakraProvider>
        </>
    );
}

export default App;
