import React from "react";
import { MainBlock, SearchTable } from "../../components";
import { Button } from "antd";

export const SchoolsList: React.FC = () => {
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
        <MainBlock title="Schools" breadcrumb={[{
            title: "Home",
            path: "/"
        },{
            title: "Schools",
            path: "/schools"
        }]} button={<Button type="primary" size='middle'>New</Button>}>
            <SearchTable columns={columns} dataSource={dataSource} />
        </MainBlock>
    )
}