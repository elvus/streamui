import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export const MainBreadcrumb: React.FC<MainBreadcrumbProps> = ({ items }) => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {items.map((item, index) => {
                const isLast = item.path === items[items.length - 1].path;
                return (
                    isLast ? <Breadcrumb.Item key={index}>{item.title}</Breadcrumb.Item> :
                        <Breadcrumb.Item key={index}>
                            <Link to={item.path}>{item.title}</Link>
                        </Breadcrumb.Item>
                );

            })}
        </Breadcrumb>
    );
};
