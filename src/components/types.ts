type BreadcrumbItem = {
    title: string;
    path: string;
};

type MainBlockProps = {
    children: React.ReactNode,
    breadcrumb?: BreadcrumbItem[],
    title?: string
}

type MainBreadcrumbProps = {
    items: BreadcrumbItem[];
};