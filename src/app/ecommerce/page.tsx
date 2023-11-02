import CatalogItem from "@/components/Catalog/Item/Item"
import Image from "next/image"

interface EcommerceLayoutProps {
    children: React.ReactNode
}

const Ecommerce= async ({ children }: EcommerceLayoutProps) => {
    const items = await fetch("https://fakestoreapi.com/products")
    const data = await items.json() as {
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
    }[]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            { data.map(item => (
                <CatalogItem key={item.id} item={item}></CatalogItem>
            )) }
        </div>
    )
}

export default Ecommerce;
