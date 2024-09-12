import { Col, Row, Space, Table } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import { SEARCH_PLACEHOLDER } from "../../../strings";

export const MainList: React.FC<TableProps> = ({ columns, dataSource }) => {
    return (
        <>
            <Space direction="vertical" style={{ width: '100%', marginBottom: 16}}>
                <Row justify="end">
                    <Col xs={{ span: 32, offset: 1 }} lg={{ span: 4, offset: 2 }}>
                        <Search size="middle" placeholder={SEARCH_PLACEHOLDER} enterButton />
                    </Col>
                </Row>
            </Space>
            <Table
                columns={columns}
                dataSource={dataSource}
            />
        </>
    )
}