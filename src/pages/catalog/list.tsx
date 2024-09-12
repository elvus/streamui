import React, { useEffect } from "react";
import { MainBlock, SearchTable } from "../../components";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const CatalogList: React.FC = () => {
    const [dataSource, setDataSource] = React.useState<any[]>([]);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyNDg5NDQ0MiwianRpIjoiYTc4Y2ZiMTEtYzIwMi00YjZkLTlkYjUtMmI3NzE3YzgwNjdiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjY2Y2JhMjM0MGIzYmI3NGQ3NzE1ZDNhMCIsIm5iZiI6MTcyNDg5NDQ0MiwiY3NyZiI6IjVjM2M4MDViLWJlYzUtNDUxNC04MGYyLTQ5ZmQ2ZGNiOWRjNiIsImV4cCI6MTcyNDg5NTM0Mn0.BCZYVdorOHmS4tO7Ody6-9_CaFMXsPSGk48Z9HGsPac");
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://192.168.31.204/v1/stream/app/content", requestOptions);
            const data = await response.json();
            setDataSource(data.catalog.map((item: any) =>{
                return {
                    key: item.id,
                    id: item.id,
                    title: item.title,
                    category: item.category,
                }
            }))
        }

        fetchData().catch((error) => {
            console.error('Catalog error!', error);
        });
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Link to="/catalog/delete">Delete</Link>
            ),
        }
    ];
    return (
        <MainBlock title="Movies" button={<Link to="/catalog/add"><Button type="primary" size="middle" icon={<PlusSquareOutlined />}>Add</Button></Link>}>
            <SearchTable columns={columns} dataSource={dataSource} />
        </MainBlock>
    )
}