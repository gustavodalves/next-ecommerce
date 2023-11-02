import Button from "@/components/Button/Button"
import ProductImage from "./Image"
import ProductPrice from "./Price"
import ProductCatalogRoot from "./Root"
import Star from "./Star"
import ProductTitle from "./Title"

interface ItemCatalogProps {
    item: {
        id: number,
        title: string
        price: number
        description: string
        category: string
        image: string
        rating: {
            rate: number
            count: number
        }
    }
}

const CatalogItem = ({ item }: ItemCatalogProps) => {
    return (
        <ProductCatalogRoot>
            <ProductImage src={item.image} />
            <ProductTitle> { item.title } </ProductTitle>
            <Star rating={4}></Star>
            <ProductPrice value={item.price} />
            <Button> Buy </Button>
        </ProductCatalogRoot>
    )
}

export default CatalogItem
