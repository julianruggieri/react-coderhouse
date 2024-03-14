

const products = [
    {

           "id": "1",
           "name": "Camiseta Coach Titular",
           "price": 47000,
           "category": "jugadores",
           "img": "https://pinchamania.caestudiantes.com.ar/wp-content/uploads/2023/06/camiseta-rayada.png",
           "stock": 20,
           "description": "Camiseta titular de jugadores de campo. Temporada 2024."
         },
         {
           "id": "2",
           "name": "Camiseta Coach Arquero Roja",
           "price": 40000,
           "category": "arqueros",
           "img": "https://pinchamania.caestudiantes.com.ar/wp-content/uploads/2023/06/2-1.png",
           "stock": 15,
           "description": "Camiseta Titular de arquero roja. Temporada 2024."
         },
         {
           "id": "3",
           "name": "Camiseta Coach Alternativa Verde",
           "price": 45000,
           "category": "jugadores",
           "img": "https://pinchamania.caestudiantes.com.ar/wp-content/uploads/2023/06/4-1.png",
           "stock": 25,
           "description": "Camiseta alternativa de jugadores de campo. Temporada 2024."
         }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}



export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}