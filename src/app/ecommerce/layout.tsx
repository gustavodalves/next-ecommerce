import { Nav } from "@/components/Nav/Nav"

interface EcommerceLayoutProps {
    children: React.ReactNode
}

const EcommerceLayout = ({ children }: EcommerceLayoutProps) => {
    return (
        <div>
            <Nav />
            <div className="p-4">
            { children }
            </div>
        </div>
    )
}

export default EcommerceLayout;
