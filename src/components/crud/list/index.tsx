import { Table } from "antd";
import React from "react";

export const MainList: React.FC<TableProps> = ({ columns, dataSource }) => {
    return (
        <Table
            columns={columns}
            dataSource={dataSource}
        />
    )
}