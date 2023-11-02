interface ProductTitleProps {
    children: React.ReactNode
}

const ProductTitle = ({ children }: ProductTitleProps) => {
    return (
        <p  className="text-violet-500 font-bold flex-basis-100"> { children } </p>
    )
}

export default ProductTitle
