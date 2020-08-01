import React, { useContext, useState, useEffect } from "react"
import "./AllProducts.css"
import ProductCard from "./ProdCard"
import Cart from "../pages/Cart"
import {store} from '../store/context'

const Home = () => {

    const context =  useContext(store)
    const {dispatch} = context
    
    const [datacsv, setDatacsv] = useState([])
    const [page, setPage] = useState(0)
  
  useEffect(()=> {
    console.log("Context", context)
    setDatacsv(context.state.data.slice(page*10, (page+1)*10))
  },[context, page]);

  const handleAddFunc = (product) => {
    dispatch({type: "CART_ADD", payload: product})
  }

  const handlePrevious = () =>{
    setPage(page-1)
    setDatacsv(context.state.data.slice(page*10, (page+1)*10))
  } 

  const handleNext = () =>{
    setPage(page+1)
    setDatacsv(context.state.data.slice(page*10, (page+1)*10))
  }
    return (
      <div style={{ marginTop: "80px" }}>
       
        <div className="container">
          <div className="elements">
            {datacsv.length>0 &&
            datacsv.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                addFunc={handleAddFunc}
              />
            ))}
          </div>

        </div>
        <div style={{display:'flex', justifyContent:'center', width:'100vw', margin:'1%'}}>
          {page>0 &&
            <button onClick={handlePrevious}>Previous</button>
          } 
          {page<context.state.data.length &&
            <button onClick={handleNext}>Next</button>
          }
        </div>
        <hr />
        <div className="credits text-center">
          <p>
            <a
              href="http://jasonwatmore.com/post/2017/03/14/react-pagination-example-with-logic-like-google"
              target="_top"
            >
              Please Contact Us for your any of the Query
            </a>
          </p>
          <p>
            <a href="http://jasonwatmore.com" target="_top">
              aravindhalahalli.81@gmail.com
            </a>
          </p>
        </div>
        
      </div>
    );
  }


export default Home;
