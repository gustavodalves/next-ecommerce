import Fetch from "../fetch"

interface Item {
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

class ProductService {
    fetch = new Fetch()

    async show(id: number) {
        return await this.fetch.request(`https://fakestoreapi.com/products/${id}`) as Item
    }

    async index() {
        return await this.fetch.request(`https://fakestoreapi.com/products/`) as Item[]
    }
}

export default ProductService
