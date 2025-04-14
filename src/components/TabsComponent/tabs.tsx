import { Box, Tab, TabList, Tabs } from '@chakra-ui/react';

import styles from '~/components/TabsComponent/tabs.module.scss';

type TabsProps = {
    title: string;
};
type TabsTextProps = {
    tab: TabsProps[];
};

const TabsC: React.FC<TabsTextProps> = ({ tab }) => (
    <Box width='100%' mt='36px' display='flex' justifyContent='center'>
        <Tabs colorScheme='green' defaultIndex={2} ml='24px'>
            <Box className={styles.box}>
                <TabList width='fit-content'>
                    {tab.map((item) => (
                        <Box>
                            <Tab
                                width='max-content'
                                fontWeight='500'
                                color='#134b00'
                                fontSize='16px'
                                _selected={{
                                    color: '#2db100',
                                    borderColor: '#2db100',
                                }}
                                _focus={{ boxShadow: 'none' }}
                            >
                                {item.title}
                            </Tab>
                        </Box>
                    ))}
                </TabList>
            </Box>
        </Tabs>
    </Box>
);

export { TabsC };
