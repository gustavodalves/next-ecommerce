interface EcommerceLayoutProps {
    children: React.ReactNode
}

const EcommerceLayout = ({ children }: EcommerceLayoutProps) => {
    return (
        <div className="p-4">
            <nav></nav>
            { children }
        </div>
    )
}

export default EcommerceLayout;
