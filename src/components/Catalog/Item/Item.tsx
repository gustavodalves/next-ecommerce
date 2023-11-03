import Button from "@/components/Button/Button"
import ProductImage from "./Image"
import ProductPrice from "./Price"
import ProductCatalogRoot from "./Root"
import Star from "./Star"
import ProductTitle from "./Title"
import Link from "next/link"

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
            <ProductImage alt={item.title} src={item.image} />
            <ProductTitle> { item.title } </ProductTitle>
            <Star rating={4}></Star>
            <ProductPrice value={item.price} />
            <Link className="w-100 block" href={`ecommerce/product/${item.id}`}> <Button> Buy </Button> </Link>
        </ProductCatalogRoot>
    )
}

export default CatalogItem
