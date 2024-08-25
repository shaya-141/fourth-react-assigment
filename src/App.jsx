import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import searchImg from './src/assets/searchblack.png';
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Productsection from './components/Productsection'
import { data } from 'autoprefixer'

function App() {

  const [products , setProducts] = useState([]);
  const [searchproduct, setsearchproduct] = useState([])
  const [category, setcategory] = useState("All")
  const [minprice, setminprice] = useState(0)
  const [maxprice, setmaxprice] = useState(100)





  useEffect(()=>{
    // fetch('https://dummyjson.com/products')
    fetch('https://fakestoreapi.com/products')
      .then((res)=> res.json())
      .then((data)=> {
        setProducts(data) 
        setsearchproduct(data)
        console.log("api agaya",data);
        
      })

      // console.log("data", data.products)
      
  },[])

 

   
  const handlecategory = (e)=>{
    console.log("category", e.target.value);
    let cat = e.target.value

    console.log(cat);
    

    let res = products.filter((product)=>{
      return product.category.toLowerCase() === cat.toLowerCase() 
    })
    // console.log("res",res);  
    setsearchproduct(res)
    if (cat === "All") {
      setsearchproduct(products)
      console.log("alll   hofafa");
      console.log(products);
      
      
    }

  }
  const handleprice = (e) =>{
    console.log(e.target.value);
    const max = e.target.value
    // console.log(value);
    
    setmaxprice(max)

    const pricefilter = products.filter((product)=>{
        return product.price >= minprice && product.price <= maxprice;
    })

    setsearchproduct(pricefilter)
    
}




    
   const handleSearch = (e) => {
      const input = e.target.value.toLowerCase(); // Convert input to lowercase
      
      if (input !== "") {
        
        const result = products.filter((product) => {
          // Assuming product.title is the field you want to search
          return product.title.toLowerCase().indexOf(input) !== -1;
        });
        setsearchproduct(result);
      }
      
      if (input == "") {
          setsearchproduct(products)
      }
      
    };
  
  
  
  console.log(products);
  return (
    <>
        <Navbar searchFunctionality={handleSearch}></Navbar>
        <section id='container'>
        <Sidebar categoryfunc={handlecategory} pricefunc={handleprice} max = {maxprice}>
          
        </Sidebar>
        <Productsection productsArray={searchproduct}></Productsection>
        </section>
    </>
  )
}

export default App
