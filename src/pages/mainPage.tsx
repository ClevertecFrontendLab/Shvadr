/* import { useNavigate } from "react-router"; */
import { Flex } from '@chakra-ui/react';

import { Search } from '~/components/SearchComponent/search';

import styles from './main.module.scss';

export const MainPage = () => (
    /* const navigate = useNavigate(); */
    <div>
        <Flex justify='center'>
            <Flex className={styles.main}>
                <div className={styles.title}>Приятного аппетита!</div>
                <Search />
            </Flex>
        </Flex>
    </div>
);
