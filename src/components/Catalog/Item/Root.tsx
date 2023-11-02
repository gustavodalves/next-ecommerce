import Card from "@/components/Card/Card"

interface ProductTitleProps {
    children: React.ReactNode
}

const ProductCatalogRoot = ({ children }: ProductTitleProps) => {
    return (
        <Card className="flex flex-col justify-between rounded">
                { children }
        </Card>
    )
}

export default ProductCatalogRoot
