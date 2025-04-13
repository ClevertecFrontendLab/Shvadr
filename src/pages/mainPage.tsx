/* import { useNavigate } from "react-router"; */
import { Flex } from '@chakra-ui/react';

import { Carousel } from '~/components/CarouselComponent/carousel';
import { Juisiest } from '~/components/JuisiestComponent/juisiest';
import { Kitchen } from '~/components/KitchenComponent/kitchen';
import { Search } from '~/components/SearchComponent/search';
import { CAROUSEL } from '~/constants/carousel';
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
                    <Carousel carousel={CAROUSEL} />
                    <Juisiest juisiest={JUISIEST} />
                </Flex>
                <Kitchen kitchen={VEGAN} />
            </Flex>
        </Flex>
    </div>
);
