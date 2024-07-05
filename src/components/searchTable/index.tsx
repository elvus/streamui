import { Col, Row, Space, Table } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import { strings } from "../../constants";

export const SearchTable: React.FC<TableProps> = ({ columns, dataSource, props }) => {
    return (
        <>
            <Space direction="vertical" style={{ width: '100%', marginBottom: 16}}>
                <Row justify="end">
                    <Col xs={{ span: 32, offset: 1 }} lg={{ span: 4, offset: 2 }}>
                        <Search size="middle" placeholder={strings.searchPlaceholder} enterButton />
                    </Col>
                </Row>
            </Space>
            <Table
                columns={columns}
                dataSource={dataSource}
                {...props}
            />
        </>
    )
}