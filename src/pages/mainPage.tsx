/* import { useNavigate } from "react-router"; */
import { Flex } from '@chakra-ui/react';

import { Juisiest } from '~/components/JuisiestComponent/juisiest';
import { Kitchen } from '~/components/KitchenComponent/kitchen';
import { Search } from '~/components/SearchComponent/search';
import { JUISIEST } from '~/constants/juisiest';
import { VEGAN } from '~/constants/kitchen';

import styles from './main.module.scss';

export const MainPage = () => (
    /* const navigate = useNavigate(); */
    <div>
        <Flex>
            <Flex className={styles.main}>
                <Flex align='center' flexDirection='column'>
                    <div className={styles.title}>Приятного аппетита!</div>
                    <Search />
                    <Juisiest juisiest={JUISIEST} />
                </Flex>
                <Kitchen kitchen={VEGAN} />
            </Flex>
        </Flex>
    </div>
);
