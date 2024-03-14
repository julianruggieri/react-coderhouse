import { Link } from "react-router-dom"

const Item = ({id, name, category, price, img}) =>{

    return(
        <article style={{display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",backgroundColor:"violet", padding:20}}>
            <h3>Categoría: {category}</h3>
            <h3>{name}</h3>
            <img src={img} style={{height:750,padding:10} }/>
            <h4 style={{fontSize:20}}>${price}</h4>
            <Link style={{fontSize:20, color:"white"}} to={`/item/${id}`}>Ver detalle</Link>
        </article>
    )
}

export default Item