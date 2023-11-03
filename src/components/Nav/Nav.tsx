import Card from "../Card/Card"
import Logo from "../Logo/Logo"

interface NavProps {}

interface Item {
    name: string, route: string
}

const items: Item[] = {}

export const Nav = (

) => {
    return (
        <nav className="top-0 left-0 w-full">
            <Card>
                <Logo></Logo>
                <ul>
                    <li></li>
                </ul>
            </Card>
        </nav>
    )
}
