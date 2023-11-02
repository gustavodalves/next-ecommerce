import { useRouter } from "next/router"

function ProductPage() {
    const router = useRouter()

    return (
        <p>
            { router.query.slug }
        </p>
    )

}

export default ProductPage
