interface ProductImageProps {
    src: string
}

const ProductImage = ({ src }: ProductImageProps) => {
    return (
        <div className="rounded bg-transparent h-60 w-full flex align-middle justify-center p-1 col-span-1 bg-white">
            <img className="col-span-1" src={src}></img>
        </div>
    )
}

export default ProductImage
