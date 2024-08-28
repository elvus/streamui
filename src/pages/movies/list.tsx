import React from "react";
import { MainBlock, SearchTable } from "../../components";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const MoviesList: React.FC = () => {
    const dataSource = [{}]

    const columns = [
        {
            title: 'Movie',
            dataIndex: 'movie',
            key: 'movie',
        },
        {
            title: 'Director',
            dataIndex: 'director',
            key: 'director',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
        },
    ];
    return (
        <MainBlock title="Movies" showBreadcrumb={true} button={<Link to="/movies/add"><Button type="primary" size="middle" icon={<PlusSquareOutlined />}>Add</Button></Link>}>
            <SearchTable columns={columns} dataSource={dataSource} />
        </MainBlock>
    )
}