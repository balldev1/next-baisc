import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Detail.module.css"

export async function getStaticPaths(){
    const res = await fetch("https://dummyjson.com/products?limit=10")
    const data = await res.json()
    const paths = data.products.map((item)=>{
        return{
            params:{id:String(item.id)}
        }
    })
    return{
        paths,
        fallback:false
    }
}
export async function getStaticProps({params}){
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/"+id)
    const data = await res.json()
    return{
        props:{product:data}
    }
}

export default function ProductDetail({product}){
    return(
        <>
            <Head>
                <title>{product.title}</title>
            </Head>
            <div className={styles.container}>
                    <div>
                        <Image src={product.thumbnail} width={500} height={300} alt={product.title}/>
                    </div>
                    <div className={styles.detail}>
                        <h1>Product : {product.title}</h1>
                        <h2>Price : ${product.price}</h2>
                        <h2>Category : {product.category}</h2>
                        <h3>brand : {product.brand}</h3>
                        <h4>description : {product.description}</h4>
                        <h4>Rating : {product.rating}/5</h4>
                    </div>
            </div>
        </>
    )
}