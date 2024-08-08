import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { useEffect, useState } from "react"
import { db } from "./data/db";
import { useCart } from "./hooks/useCart";

function App() {

    const initialState = () => {

        const localStorageCart = localStorage.getItem('cart')

        return localStorageCart ? JSON.parse(localStorageCart) : []
        
    }

    const [data] = useState(db)
    const [cart, setCart] = useState(initialState)

    const MIN_ITEMS = 1
    const MAX_ITEMS = 5

    useEffect(() => {

    localStorage.setItem('cart', JSON.stringify(cart)) 

    }, [cart])
  
  const addToCart = (item) => {

    const itemExists = cart.findIndex(guitar => guitar.id === item.id)

    if(itemExists >= 0){

      if(cart[itemExists].quantity >= MAX_ITEMS) return

      const updatedCart = [...cart]

      updatedCart[itemExists].quantity++

      setCart(updatedCart)

      console.log(cart)

    }else{

      item.quantity = 1

      setCart([...cart, item])

      console.log(cart)

    }

  }

  const removeFromCart = (id) => {

    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id ))
    
  }

  const increaseQuantity = (id) => {

    const updateCart = cart.map( item => {

        if(item.id === id){

            return{
                ...item,
                quantity: item.quantity + 1
            }

        }

        return item

    })

    setCart(updateCart)

  }

  const decraseQuantity = (id) => {

    const updateCart = cart.map(item => {
    
        if(item.id === id && item.quantity > MIN_ITEMS){

            return{

                ...item,

                quantity: item.quantity - 1
            }

        }

        return item

    })

    setCart(updateCart)

  }

  const cleanCart = () => {

    setCart([])

  }

  return (
    <>

        <Header
            cart={cart} 
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decraseQuantity={decraseQuantity}
            cleanCart={cleanCart}
        />
          
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">

              {data.map( 
                (guitar) => 
                  (<Guitar 
                    key={guitar.id} 
                    guitar={guitar}
                    setCart={setCart}
                    addToCart={addToCart}
                  />)
              )}
              
            </div>
        </main>


        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>
     
    </>
  )
}

export default App
