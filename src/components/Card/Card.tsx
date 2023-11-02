interface CardProps {
    children: React.ReactNode
    className?: string
}

const Card = ({ children, className = "" }: CardProps) => {
    return (
        <div className={
         `h-auto p-4 bg-white dark:bg-gray-950 ${className}`
        }>
            { children }
        </div>
    )
}

export default Card
