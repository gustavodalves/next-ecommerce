import Image from "next/image"

import logo from "@/assets/logo.png"
import Link from "next/link"

const Logo = () => {
    return (
        <Link href={"/ecommerce"}>
            <Image alt="logo" className="w-52 cursor-pointer" src={logo}></Image>
        </Link>
    )
}

export default Logo
