import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, category, price, img, desription, stock}) =>{

    return(
        <article>
            <img src={img}/>
            <h3>categoria:{category}</h3>
            <h3>{name}</h3>
            <h4>${price}</h4>
            <h4>descripcion:{desription} </h4>
            <ItemCount stock={stock}></ItemCount>
        </article>
    )
}

export default ItemDetail