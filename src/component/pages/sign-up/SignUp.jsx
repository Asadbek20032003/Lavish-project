import React from 'react'
import HeroSection from '../../HeroSection';
import {homeObjThree} from "../homePage/Data";
import Pricing from '../../Pricing';


function SignUp() {
  return (
    <div>
      <Pricing />
      <HeroSection {...homeObjThree}/>
    </div>
  )
}

export default SignUp;
