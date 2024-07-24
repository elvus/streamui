import React from "react";
import { MainBlock, SearchTable } from "../../components";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

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
        }, {
            title: "Students",
            path: "/students"
        }]} button={<Link to="/students/option1"><Button type="primary" size='middle' icon={<PlusSquareOutlined />}>New</Button></Link>}>
            <SearchTable columns={columns} dataSource={dataSource} />
        </MainBlock>
    )
}