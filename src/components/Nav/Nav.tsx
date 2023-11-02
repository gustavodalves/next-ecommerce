import Logo from "../Logo/Logo"

interface NavProps {}

interface Item {
    name: string, route: string
}

const items: Item[] = {}

export const Nav = (

) => {
    return (
        <nav className="bg-gray-900 top-0 left-0 w-full">
            <Logo></Logo>
            <ul>
                <li></li>
            </ul>
        </nav>
    )
}
