interface ProductPriceProps {
    value: number
}

const ProductPrice = ({ value }: ProductPriceProps) => {
    return (
        <p className="text-violet-950 font-extrabold"> ${ value.toFixed(2) }</p>
    )
}

export default ProductPrice
