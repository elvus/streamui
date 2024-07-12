type BreadcrumbItem = {
    title: string;
    path: string;
};

type MainBlockProps = {
    children: React.ReactNode,
    breadcrumb?: BreadcrumbItem[],
    title?: string
    button?: React.ReactNode
    props?: any
}

type MainBreadcrumbProps = {
    items: BreadcrumbItem[];
};