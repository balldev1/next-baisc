import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
        <nav>
            <div className="logo">
                <Link href="/">
                    <Image src="/4.png" width={180} height={100} alt="logo"/>
                </Link>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Product</Link>
        </nav>
    )
}