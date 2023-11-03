import CatalogItem from "@/components/Catalog/Item/Item"
import ProductService from "@/service/gateways/product"

export const revalidate = 60

const Ecommerce= async () => {
    const data = await new ProductService().index()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            { data.map(item => (
                <CatalogItem key={item.id} item={item}></CatalogItem>
            )) }
        </div>
    )
}

export default Ecommerce;
