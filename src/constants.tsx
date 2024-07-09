import { HomeOutlined, ShopOutlined, ContactsOutlined, TeamOutlined, MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Home } from './pages/home';
import { SchoolsList } from './pages/schools';
import { StudentsList } from './pages/students';
import { TeachersList } from './pages/teachers';

export const menuItems = [
    { key: '/', icon: <HomeOutlined />, label: 'Home', to: '/', component: <Home /> },
    { key: '/schools', icon: <ShopOutlined />, label: 'Schools', to: '/schools', component: <SchoolsList /> },
    { key: '/students', icon: <ContactsOutlined />, label: 'Students', to: '/students', component: <StudentsList /> },
    { key: '/teachers', icon: <TeamOutlined />, label: 'Teachers', to: '/teachers', component: <TeachersList /> },
    {
        key: 'sub1',
        label: 'Navigation One',
        icon: <MailOutlined />,
        children: [
            { key: '/option5', label: 'Option 5', to: '/option5' },
            { key: '/option6', label: 'Option 6', to: '/option6' },
            { key: '/option7', label: 'Option 7', to: '/option7' },
            { key: '/option8', label: 'Option 8', to: '/option8' },
        ],
    },
    {
        key: 'sub2',
        label: 'Navigation Two',
        icon: <AppstoreOutlined />,
        children: [
            { key: '/option9', label: 'Option 9', to: '/option9' },
            { key: '/option10', label: 'Option 10', to: '/option10' },
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    { key: '/option11', label: 'Option 11', to: '/option11' },
                    { key: '/option12', label: 'Option 12', to: '/option12' },
                ],
            },
        ],
    },
];

export const strings = {
    searchPlaceholder: 'Search...'
}