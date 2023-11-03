interface ProductImageProps {
    src: string
    alt: string
}

const ProductImage = ({ src, alt }: ProductImageProps) => {
    return (
        <div className="rounded bg-transparent h-60 w-full flex align-middle justify-center p-1 col-span-1 bg-white">
            <img alt={alt} name={alt} className="col-span-1" src={src}></img>
        </div>
    )
}

export default ProductImage
