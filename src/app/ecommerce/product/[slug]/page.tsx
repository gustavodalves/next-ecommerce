import Button from "@/components/Button/Button"
import Card from "@/components/Card/Card"
import ProductPrice from "@/components/Catalog/Item/Price"
import Star from "@/components/Catalog/Item/Star"
import ProductTitle from "@/components/Catalog/Item/Title"
import ProductService from "@/service/gateways/product"

import Image from "next/image"

interface ProductPageProps {
    params: {
        slug: number
    }
}

export const revalidate = 60

async function ProductPage(props: ProductPageProps) {
    const data = await new ProductService().show(props.params.slug)
    
    return (
       <main className="flex justify-center w-full h-full">
        <Card className="rounded lg:w-9/12 w-12/12">
            <div className="flex justify-around lg:flex-row flex-col">
                <div className="p-8 bg-white">
                    <Image width={300} height={300} alt={data.title} className="rounded w-72 mx-auto" src={data.image}></Image>
                </div>

                <div className="flex flex-col justify-around text-center lg:text-left gap-2">                    
                    <ProductTitle> {data.title} </ProductTitle>

                    <div className="mx-auto lg:mx-0">
                        <Star rating={4}></Star>
                    </div>
                    <ProductPrice value={data.price}></ProductPrice>

                    <p className="max-w-2xl"> {data.description} </p>

                    <Button> Buy </Button>
                </div>
            </div>
        </Card>
       </main>
    )

}

export default ProductPage
