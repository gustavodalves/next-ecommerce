import Button from "@/components/Button/Button"
import Card from "@/components/Card/Card"
import ProductPrice from "@/components/Catalog/Item/Price"
import Star from "@/components/Catalog/Item/Star"
import ProductTitle from "@/components/Catalog/Item/Title"
import ProductService from "@/service/gateways/product"

interface ProductPageProps {
    params: {
        slug: number
    }
}

async function ProductPage(props: ProductPageProps) {
    const data = await new ProductService().show(props.params.slug)
    
    return (
       <main className="flex justify-center w-full h-full">
        <Card className="rounded lg:w-9/12 w-12/12">
            <div className="flex justify-around lg:flex-row flex-col">
                <div className="p-8 bg-white">
                    <img className="rounded w-72 mx-auto" src={data.image}></img>
                </div>

                <div className="flex flex-col justify-around max-h-72">                    
                    <ProductTitle> {data.title} </ProductTitle>
                    <Star rating={4}></Star>
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
