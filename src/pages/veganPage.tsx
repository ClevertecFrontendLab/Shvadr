import { Box, Flex } from '@chakra-ui/react';

import { Kitchen } from '~/components/KitchenComponent/kitchen';
import { OnVeganPage } from '~/components/OnVeganPageComponent/onVeganPage';
import { Search } from '~/components/SearchComponent/search';
import { TabsC } from '~/components/TabsComponent/tabs';
import { BAKE } from '~/constants/kitchen';
import { TABS } from '~/constants/tabs';
import { VEGANPAGE } from '~/constants/vegan';

import styles from './main.module.scss';

export const VeganPage = () => (
    <div>
        <Flex>
            <Flex className={styles.main}>
                <Flex align='center' flexDirection='column'>
                    <div className={styles.title}>Веганская кухня</div>
                    <Box
                        textAlign='center'
                        fontSize={{ base: '14px', md: '16px' }}
                        fontWeight='500'
                        color='rgba(0, 0, 0, 0.48)'
                        m='16px 0'
                        width={{ base: '100%', md: '696px' }}
                    >
                        Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                        попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.
                    </Box>
                    <Search />
                    <TabsC tab={TABS} />
                    <OnVeganPage vegan={VEGANPAGE} />
                </Flex>
                <Kitchen kitchen={BAKE} />
            </Flex>
        </Flex>
    </div>
);
