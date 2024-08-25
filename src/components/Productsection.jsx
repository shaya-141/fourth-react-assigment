import React from 'react';

function ProductSection({ productsArray }) {
  return (
    <section id="products">
        {
        productsArray.map((product, index) => (
          <div id='pro' className="card h-[360px] bg-[#ffffff] border w-72 m-4 p-2 relative rounded-md" key={index}>
            <img src={product.image} className='h-[210px] w-[100%] p-8 ' alt={product.title} />
            <div>
              <h2 className='ml-1 mt-4'>{product.title.slice(0,30)}</h2>
              <h4 className='ml-1 mt-2'>Price: <span className='text-[#f9333b]'>{product.price}$</span></h4>
              <button className='w-[110px] h-12 border bg-black text-white   absolute bottom-3 ml-1  px-2 py-2 rounded-md'>Add Cart</button>
            </div>
          </div>
        ))
      }
    </section>
  );
}

export default ProductSection;
