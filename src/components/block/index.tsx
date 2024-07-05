import { Card, Layout, theme } from "antd"
import { MainBreadcrumb } from "../breadcrumb"

const { Content, Footer } = Layout;

export const MainBlock: React.FC<MainBlockProps> = ({ children, breadcrumb, title }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Content style={{ margin: '0 16px' }}>
                <MainBreadcrumb items={breadcrumb ? breadcrumb : []} />
                {title &&
                    <Card title={title}>
                        {children}
                    </Card>
                }
                {!title &&
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                }
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    )
}