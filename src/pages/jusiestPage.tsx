import { Flex } from '@chakra-ui/react';

import { Kitchen } from '~/components/KitchenComponent/kitchen';
import { OnJuisiestPage } from '~/components/OnJuiciestPageComponent/onJuiciestPage';
import { Search } from '~/components/SearchComponent/search';
import { JUISIESTPAGE } from '~/constants/juisiest';
import { VEGAN } from '~/constants/kitchen';

import styles from './main.module.scss';

export const JuiciestPage = () => (
    <div>
        <Flex>
            <Flex className={styles.main}>
                <Flex align='center' flexDirection='column'>
                    <div className={styles.title}>Самое сочное</div>
                    <Search />
                    <OnJuisiestPage juisiest={JUISIESTPAGE} />
                </Flex>
                <Kitchen kitchen={VEGAN} />
            </Flex>
        </Flex>
    </div>
);
