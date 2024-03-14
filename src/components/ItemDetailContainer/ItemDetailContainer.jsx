
import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {

        getProductById(itemId)
        .then(result =>{
            setProduct(result)

        })

    },[])
    

    return(
        <main>


            <h1>detalle del producto</h1>
            <ItemDetail {...product}></ItemDetail>
            
        </main>

    )
}

export default ItemDetailContainer