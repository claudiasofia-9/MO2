import { connect } from 'react-redux';
import React from 'react';
import './products.css';
import Card from '../Card/Card.jsx'

import { Card } from "../Card/Card.jsx";

export function Products({ list }) {
   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'>HENRY MARKET</h1>

         <div className='productsList'>
            {list.map((product, idx) => (
             <Card 
               name={product.name}
               price={product.price} 
               id={product.if} 
               key={idx} 
             />
             ))}
         </div>
         </div>
      </>
   );
}

export function mapStateToProps(state) {
   return {
      list: state.list
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);
