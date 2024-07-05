import { Col, Row, Space, Table } from "antd";
import Search from "antd/es/input/Search";
import React, { useCallback, useMemo, useState } from "react";
import { strings } from "../../constants";

export const SearchTable: React.FC<TableProps> = ({ columns, dataSource, props }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const debouncedSearch = useCallback(debounce(handleSearch, 300), []);

    const filteredDataSource = useMemo(() => {
        return dataSource.filter((item) =>
            Object.values(item).some((value) =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [dataSource, searchTerm]);

    return (
        <>
            <Space direction="vertical" style={{ width: '100%', marginBottom: 16 }}>
                <Row justify="end">
                    <Col xs={{ span: 32, offset: 1 }} lg={{ span: 4, offset: 2 }}>
                        <Search
                            size="middle"
                            placeholder={strings.searchPlaceholder}
                            onChange={debouncedSearch}
                            enterButton
                        />
                    </Col>
                </Row>
            </Space>
            <Table
                columns={columns}
                dataSource={filteredDataSource}
                {...props}
            />
        </>
    )
}

const debounce = (func: Function, wait: number) => {
    let timeout: any;
    return function executedFunction(...args: any) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
