import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { Static } from '~/app/static';
import { NAVIGATION } from '~/constants/nav';

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathParts = location.pathname.split('/').filter(Boolean);

    const breadcrumbs = pathParts.map((_, index) => {
        const path = `/${pathParts.slice(0, index + 1).join('/')}`;
        const isLast = index === pathParts.length - 1;

        if (Static[path]) {
            return (
                <BreadcrumbItem key={path} isCurrentPage={isLast}>
                    <BreadcrumbLink as={Link} to={path} fontWeight={isLast ? 'bold' : 'normal'}>
                        {Static[path]}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            );
        }

        let breadcrumbLabel = '';
        NAVIGATION.forEach((navItem) => {
            if (`/${navItem.group}` === path) {
                breadcrumbLabel = navItem.title;
            }
            navItem.options.forEach((link) => {
                if (`/${navItem.group}/${link.subgroup}` === path) {
                    breadcrumbLabel = link.option;
                }
            });
        });

        if (breadcrumbLabel) {
            return (
                <BreadcrumbItem key={path} isCurrentPage={isLast}>
                    <BreadcrumbLink as={Link} to={path} fontWeight={isLast ? 'bold' : 'normal'}>
                        {breadcrumbLabel}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            );
        }

        return null;
    });

    return (
        <Breadcrumb fontSize='sm' separator='›'>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs}
        </Breadcrumb>
    );
};
