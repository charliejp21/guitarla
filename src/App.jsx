import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { useState } from "react"
import { db } from "./data/db";

function App() {

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  const MIN_ITEMS = 1
  const MAX_ITEMS = 5
  
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
              
                <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="./public/img/guitarra_02.jpg" alt="imagen guitarra"/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-black fs-4 fw-bold text-uppercase">SRV</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                        <p className="fw-black text-primary fs-3">$299</p>
                        <button 
                            type="button"
                            className="btn btn-dark w-100 "
                        >Agregar al Carrito</button>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="./public/img/guitarra_03.jpg" alt="imagen guitarra"/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-black fs-4 fw-bold text-uppercase">Borland</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                        <p className="fw-black text-primary fs-3">$299</p>
                        <button 
                            type="button"
                            className="btn btn-dark w-100 "
                        >Agregar al Carrito</button>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="./public/img/guitarra_04.jpg" alt="imagen guitarra"/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-black fs-4 fw-bold text-uppercase">Vai</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                        <p className="fw-black text-primary fs-3">$299</p>
                        <button 
                            type="button"
                            className="btn btn-dark w-100 "
                        >Agregar al Carrito</button>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="./public/img/guitarra_05.jpg" alt="imagen guitarra"/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-black fs-4 fw-bold text-uppercase">Thompson</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                        <p className="fw-black text-primary fs-3">$299</p>
                        <button 
                            type="button"
                            className="btn btn-dark w-100 "
                        >Agregar al Carrito</button>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="./public/img/guitarra_06.jpg" alt="imagen guitarra"/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-black fs-4 fw-bold text-uppercase">White</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                        <p className="fw-black text-primary fs-3">$299</p>
                        <button 
                            type="button"
                            className="btn btn-dark w-100 "
                        >Agregar al Carrito</button>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="./public/img/guitarra_07.jpg" alt="imagen guitarra"/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-black fs-4 fw-bold text-uppercase">Cobain</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                        <p className="fw-black text-primary fs-3">$299</p>
                        <button 
                            type="button"
                            className="btn btn-dark w-100 "
                        >Agregar al Carrito</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="./public/img/guitarra_08.jpg" alt="imagen guitarra"/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-black fs-4 fw-bold text-uppercase">Dale</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                        <p className="fw-black text-primary fs-3">$299</p>
                        <button 
                            type="button"
                            className="btn btn-dark w-100 "
                        >Agregar al Carrito</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="./public/img/guitarra_09.jpg" alt="imagen guitarra"/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-black fs-4 fw-bold text-uppercase">Krieger</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                        <p className="fw-black text-primary fs-3">$299</p>
                        <button 
                            type="button"
                            className="btn btn-dark w-100 "
                        >Agregar al Carrito</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="./public/img/guitarra_10.jpg" alt="imagen guitarra"/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-black fs-4 fw-bold text-uppercase">Campbell</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                        <p className="fw-black text-primary fs-3">$299</p>
                        <button 
                            type="button"
                            className="btn btn-dark w-100 "
                        >Agregar al Carrito</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="./public/img/guitarra_11.jpg" alt="imagen guitarra"/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-black fs-4 fw-bold text-uppercase">Reed</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                        <p className="fw-black text-primary fs-3">$299</p>
                        <button 
                            type="button"
                            className="btn btn-dark w-100 "
                        >Agregar al Carrito</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="./public/img/guitarra_12.jpg" alt="imagen guitarra"/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-black fs-4 fw-bold text-uppercase">Hazel</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                        <p className="fw-black text-primary fs-3">$299</p>
                        <button 
                            type="button"
                            className="btn btn-dark w-100 "
                        >Agregar al Carrito</button>
                    </div>
                </div>
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
