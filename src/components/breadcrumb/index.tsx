import { Breadcrumb } from 'antd';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../../constants';

export const MainBreadcrumb: React.FC = () => {
    const getBreadcrumb = (item: any) => {
        if (item.children) {
            return [
                {
                    title: item.label,
                    path: item.to,
                }
            ].concat(item.children.map(getBreadcrumb).flat(Infinity));
        }

        return {
            title: item.label,
            path: item.to
        }
    }

    const breadcrumbs: any = useMemo(() => { return menuItems.map(getBreadcrumb).flat(Infinity) }, []);
    const currentPath = location.pathname;
    const currentSegment = currentPath.split('/').slice(1);
    const filteredBreadcrumbs: any = useMemo(() => {
        return breadcrumbs.filter((crumb: { path: string | string[] }) => {
            return currentSegment.some((_segment: string, index: number) => {
                const pathToCheck = `/${currentSegment.slice(0, index + 1).join('/')}`;
                return crumb.path === pathToCheck;
            });
        });
    }, [breadcrumbs, currentSegment]);

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {filteredBreadcrumbs.map((item: any, index: any) => {
                const isLast = item.path === filteredBreadcrumbs[filteredBreadcrumbs.length - 1].path;
                return (
                    isLast ? <Breadcrumb.Item key={index}>{item.title}</Breadcrumb.Item> :
                        <Breadcrumb.Item key={index}>
                            <Link to={item.path || '/'}>{item.title}</Link>
                        </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );
};
