"use client"

import Image from "next/image"

import logo from "@/assets/logo.png"

import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter()
    return (
        <Image alt="logo" className="w-52 cursor-pointer" src={logo} onClick={() => router.push("/ecommerce")}></Image>
    )
}

export default Logo
