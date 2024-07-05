import React from "react";
import { MainBlock, MainList } from "../../components";

export const TeachersList: React.FC = () => {
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
        <MainBlock title="Teachers" breadcrumb={[
            {
                title: "Home",
                path: "/"
            },
            {
                title: "Teachers",
                path: "/teachers"
            }
        ]}>
            <MainList
                columns={columns}
                dataSource={dataSource}
            />
        </MainBlock>
    )
}