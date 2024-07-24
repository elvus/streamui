import { HomeOutlined, ShopOutlined, ContactsOutlined, TeamOutlined, FormOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Home } from './pages/home';
import { SchoolsList } from './pages/schools';
import { StudentsList } from './pages/students';
import { TeachersList } from './pages/teachers';
import { DemoForm, ModalForm } from './pages/forms';

export const menuItems = [
    { key: '/', icon: <HomeOutlined />, label: 'Home', to: '/', component: <Home /> },
    { key: '/schools', icon: <ShopOutlined />, label: 'Schools', to: '/schools', component: <SchoolsList /> },
    { 
        key: '/students', 
        icon: <ContactsOutlined />, 
        label: 'Students', 
        to: '/students', 
        component: <StudentsList />,
        children:[
            { key: '/students/option1', label: 'Option 1', to: '/students/option1', show: false },
        ] 
    },
    { key: '/teachers', icon: <TeamOutlined />, label: 'Teachers', to: '/teachers', component: <TeachersList /> },
    {
        key: 'sub1',
        label: 'Forms',
        icon: <FormOutlined />,
        children: [
            { key: '/demoform', label: 'Form Demo', to: '/demoform', show: true, component: <DemoForm /> },
            { key: '/modalform', label: 'Modal Form', to: '/modalform', show: true, component: <ModalForm /> },
            { key: '/option7', label: 'Option 7', to: '/option7', show: true },
            { key: '/option8', label: 'Option 8', to: '/option8', show: true },
        ],
    },
    {
        key: 'sub2',
        label: 'Navigation Two',
        icon: <AppstoreOutlined />,
        children: [
            { key: '/option9', label: 'Option 9', to: '/option9', show: true },
            { key: '/option10', label: 'Option 10', to: '/option10', show: true },
            {
                key: 'sub3',
                label: 'Submenu',
                show: true,
                children: [
                    { key: '/option11', label: 'Option 11', to: '/option11', show: true },
                    { key: '/option12', label: 'Option 12', to: '/option12', show: true },
                ],
            },
        ],
    },
];

export const strings = {
    searchPlaceholder: 'Search...'
}