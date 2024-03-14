import Item from "../Item/Item"


const ItemList = ({products})=>{
    return (

        <section style={{display:"flex",padding:20}}>
            { 
            products.map(product => {
                 return <Item key={product.id}{... product}></Item>
                 }
            )
            }
            


        </section>
    )
}

export default ItemList