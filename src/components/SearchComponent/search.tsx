import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
    Text,
} from '@chakra-ui/react';

import styles from '~/components/SearchComponent/search.module.scss';

import { FiltersIcon } from '../Icons/FiltersIcon';

function Search() {
    return (
        <div className={styles.container}>
            <Flex>
                <Button
                    variant='outline'
                    mr='12px'
                    h={{ base: '32px', md: '48px' }}
                    w={{ base: '32px', md: '48px' }}
                    borderColor='rgba(0, 0, 0, 0.48)'
                >
                    <FiltersIcon color='black' />
                </Button>
                <InputGroup>
                    <Input
                        placeholder='Название или ингредиент...'
                        _placeholder={{ color: '#134b00' }}
                        className={styles.input}
                        w={{ base: '100%', lg: '458px' }}
                        h={{ base: '32px', md: '48px' }}
                    />
                    <InputRightElement
                        mt={{ base: '-3px', md: '5px' }}
                        mr={{ base: '0', md: '5px' }}
                    >
                        <SearchIcon />
                    </InputRightElement>
                </InputGroup>
            </Flex>
            <Flex
                alignItems='center'
                mt='18px'
                justifyContent='space-between'
                display={{ base: 'none', md: 'flex' }}
            >
                <Flex>
                    <Text fontSize='16px' fontWeight='500'>
                        Исключить мои аллергены
                    </Text>
                    <Switch m='4px 0 0 12px' alignSelf='center' />
                </Flex>
                <Box>
                    <Select placeholder='Выберите из списка...' className={styles.select}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>
            </Flex>
        </div>
    );
}

export { Search };
