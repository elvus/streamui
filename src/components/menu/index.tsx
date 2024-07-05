import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, Space, Typography } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from 'antd/es/layout/layout';

const { Sider } = Layout;
const { Title } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

interface MainMenuProps {
    menuItems: MenuItem[];
}

export const MainMenu: React.FC<MainMenuProps> = ({ menuItems }) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center', paddingInlineStart: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" style={{ width: 32, height: 32 }} />
                    <Space style={{ marginLeft: 16 }}>
                        <Title level={5} style={{ margin: 0, color: 'white' }}>Ant Design</Title>
                    </Space>
                </div>
            </Header>
            <Layout>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme='dark'>
                    <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={menuItems} />
                </Sider>
                <Outlet />
            </Layout>
        </Layout>
    );
};