import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';

import styles from '~/components/BlogsComponent/blogs.module.scss';

import { RightArrowIcon } from '../Icons/RightArrowIcon';

type BlogsProps = {
    avatar: string;
    name: string;
    user: string;
    text: string;
};
type BlogsTextProps = {
    blogs: BlogsProps[];
};

const Blogs: React.FC<BlogsTextProps> = ({ blogs }) => (
    <Box
        backgroundColor='#c4ff61'
        borderRadius='16px'
        p={{ base: '12px', md: '24px' }}
        m='35px 20px'
    >
        <Flex align='center' justify='space-between' mb='20px'>
            <Text className={styles.title}>Кулинарные блоги</Text>
            <Button
                backgroundColor='#c4ff61'
                alignItems='center'
                display={{ base: 'none', lg: 'flex' }}
            >
                <Text mr='8px'>Все авторы</Text>
                <RightArrowIcon color='black' />
            </Button>
        </Flex>
        <Flex justify='space-between' flexDirection={{ base: 'column', md: 'row' }}>
            {blogs.map((item) => (
                <Box
                    backgroundColor='#fff'
                    borderRadius='8px'
                    p='16px'
                    width={{ base: '100%', md: '32%' }}
                    mb={{ base: '12px', md: '0' }}
                >
                    <Flex>
                        <Avatar
                            size='md'
                            bg='gray.500'
                            name={item.name}
                            src={item.avatar}
                            mr='12px'
                        />
                        <Box>
                            <Text className={styles.name}>{item.name}</Text>
                            <Text className={styles.user}>{item.user}</Text>
                        </Box>
                    </Flex>
                    <Flex className={styles.text}>{item.text}</Flex>
                </Box>
            ))}
        </Flex>
        <Flex justify='center' display={{ base: 'flex', lg: 'none' }}>
            <Button backgroundColor='#c4ff61' alignItems='center' mt={{ base: '0', md: '12px' }}>
                <Text mr='8px'>Все авторы</Text>
                <RightArrowIcon color='black' />
            </Button>
        </Flex>
    </Box>
);

export { Blogs };
