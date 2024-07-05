import React from "react";
import { MainBlock, MainList } from "../../components";

export const StudentsList: React.FC = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <MainBlock title="Students" breadcrumb={[{
            title: "Home",
            path: "/"
        },{
            title: "Students",
            path: "/students"
        }]}>
            <MainList
                columns={columns}
                dataSource={dataSource}
            />
        </MainBlock>
    )
}