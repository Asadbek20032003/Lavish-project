import React from 'react'
import HeroSection from '../../HeroSection';
import {homeObjOne} from "../homePage/Data";
import Pricing from '../../Pricing';


function Products() {
  return (
    <div>
           <HeroSection {...homeObjOne}/>
      <Pricing />
   
    </div>
  )
}

export default Products;
