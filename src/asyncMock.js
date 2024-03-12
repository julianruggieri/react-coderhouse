

const products = [
    {

           "id": "1",
           "name": "Camiseta Coach Titular",
           "price": 47000,
           "category": "Principal",
           "img": "./assets/productos-pincha/camiseta-titular.png",
           "stock": 20,
           "description": "Clásica pizza con salsa de tomate, mozzarella y albahaca fresca."
         },
         {
           "id": "2",
           "name": "Camiseta Coach Arquero Roja",
           "price": 40000,
           "category": "Sandwiches",
           "img": "./assets/productos-pincha/camiseta-arquero.png",
           "stock": 15,
           "description": "Hamburguesa gourmet con carne de res, queso cheddar, tocino y salsa especial."
         },
         {
           "id": "3",
           "name": "Camiseta Coach Alternativa Verde",
           "price": 45000,
           "category": "Principal",
           "img": "./assets/productos-pincha/camiseta-alternativa.png",
           "stock": 25,
           "description": "Ensalada fresca con tomate, pepino, aceitunas, queso feta y aderezo de aceituna."
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