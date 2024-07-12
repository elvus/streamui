import { Card, Layout } from "antd"
import { MainBreadcrumb } from "../breadcrumb"

const { Content, Footer } = Layout;

export const MainBlock: React.FC<MainBlockProps> = ({ children, breadcrumb, title, button }) => {
    return (
        <Layout>
            <Content style={{ margin: '0 16px' }}>
                <MainBreadcrumb items={breadcrumb ? breadcrumb : []} />
                <Card title={title} extra={button}>
                    {children}
                </Card>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    )
}