import { HomeOutlined, ShopOutlined, ContactsOutlined, TeamOutlined, MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Home } from './pages/home';
import { SchoolsList } from './pages/schools';
import { StudentsList } from './pages/students';
import { TeachersList } from './pages/teachers';

export const menuItems = [
    { key: '0', icon: <HomeOutlined />, label: 'Home', to: '/', component: <Home /> },
    { key: '1', icon: <ShopOutlined />, label: 'Schools', to: '/schools', component: <SchoolsList /> },
    { key: '2', icon: <ContactsOutlined />, label: 'Students', to: '/students', component: <StudentsList /> },
    { key: '3', icon: <TeamOutlined />, label: 'Teachers', to: '/teachers', component: <TeachersList /> },
    {
        key: '4',
        label: 'Navigation One',
        icon: <MailOutlined />,
        children: [
            { key: '5', label: 'Option 5', to: '/option5', component: <Home /> },
            { key: '6', label: 'Option 6', to: '/option6', component: <Home /> },
            { key: '7', label: 'Option 7', to: '/option7', component: <Home /> },
            { key: '8', label: 'Option 8', to: '/option8', component: <Home /> },
        ],
    },
    {
        key: '5',
        label: 'Navigation Two',
        icon: <AppstoreOutlined />,
        component: <Home />,
        children: [
            { key: '9', label: 'Option 9', to: '/option9', component: <Home /> },
            { key: '10', label: 'Option 10', to: '/option10', component: <Home /> },
            {
                key: 'sub3',
                label: 'Submenu',
                component: <Home />,
                children: [
                    { key: '11', label: 'Option 11', to: '/option11', component: <Home /> },
                    { key: '12', label: 'Option 12', to: '/option12', component: <Home /> },
                ],
            },
        ],
    },
];

export const strings = {
    searchPlaceholder: 'Search...'
}