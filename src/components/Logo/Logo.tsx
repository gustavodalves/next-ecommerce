import Image from "next/image"

import logo from "@/assets/logo.png"

const Logo = () => {
    return (
        <Image className="w-52" src={logo}></Image>
    )
}

export default Logo
