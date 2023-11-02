"use client"

import Button from "@/components/Button/Button"
import ProductImage from "./Image"
import ProductPrice from "./Price"
import ProductCatalogRoot from "./Root"
import Star from "./Star"
import ProductTitle from "./Title"
import { useRouter } from "next/navigation"

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
    const router = useRouter()
    return (
        <ProductCatalogRoot>
            <ProductImage src={item.image} />
            <ProductTitle> { item.title } </ProductTitle>
            <Star rating={4}></Star>
            <ProductPrice value={item.price} />
            <Button onClick={() => router.push(`ecommerce/product/${item.id}`)}> Buy </Button>
        </ProductCatalogRoot>
    )
}

export default CatalogItem
