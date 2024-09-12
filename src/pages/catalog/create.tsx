import React from "react";
import { MainBlock } from "../../components";
import { Form, GetProp, message, Tabs, UploadFile, UploadProps } from "antd";
import { MoviesForm, TvShowForm } from "./forms";

interface CatalogValues {
    title: string;
    type: string;
    release_year: number;
    genre: string[];
    rating: number;
    description: string | "";
    cast: string[] | [];
    season: number;
    duration_minutes: number;
    file_path: string;
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export const CatalogCreate: React.FC = () => {
    const [form] = Form.useForm();
    const [_formValues, setFormValues] = React.useState<CatalogValues>();
    const [fileList, setFileList] = React.useState<UploadFile[]>([]);
    const [uploading, setUploading] = React.useState<boolean>(false);

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        beforeUpload: (file: FileType) => {
            setFileList((prev) => [...prev, file]);
            return false;
        },
        fileList,
        onRemove: (file: UploadFile) => {
            setFileList((prevList) => prevList.filter((item) => item.uid !== file.uid)); // Remove file from state
        }
    }

    const handleUpload = async () => {
        if (fileList.length === 0) {
            message.error('Please select at least one file before uploading.');
            return;
        }

        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('file', file as any);
        });

        try {
            // Send the files using fetch or axios
            setUploading(true);
            const response = await fetch('http://192.168.31.204/v1/stream/app/upload', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyNTUwMDY0OCwianRpIjoiOGFhMmQ2ZjYtYzM3Yi00ODFhLWI5MTMtODUzZmNjNzUzYzJmIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjY2Y2JhMjM0MGIzYmI3NGQ3NzE1ZDNhMCIsIm5iZiI6MTcyNTUwMDY0OCwiY3NyZiI6IjYyNDIzOGMyLWUxMmQtNGU3OS1hNWU5LTA4MDY0ZWYxOTc0ZCIsImV4cCI6MTcyNTUwMTU0OH0.c9_fQSVP6bMMsGMYOXBkEnZSmwmC9eGtHxAdr3qzVh4',
                },
                body: formData,
            });

            if (response.ok) {
                message.success('Files uploaded successfully.');
                setFileList([]); // Clear file list after successful upload
            } else {
                console.log('Upload failed:', response.json());
                message.error('Upload failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            message.error('An error occurred during the upload.');
        } finally {
            setUploading(false);
        }
    };

    const onCreate = async (values: CatalogValues) => {
        console.log('Received values of form: ', values);
        await handleUpload();
        setFormValues(values)
    }

    return (
        <MainBlock title="Add Catalog" showBreadcrumb={true}>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Movie" key="1">
                    <MoviesForm form={form} onCreate={onCreate} props={props} saving={uploading} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tv Show" key="2">
                    <TvShowForm form={form} onCreate={onCreate} props={props} />
                </Tabs.TabPane>
            </Tabs>
        </MainBlock>
    )
}