import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import myPicture from "../../../themes/DefaultTheme/images/my-picture.png"
import { Auto } from "styled-icons/crypto";
import { Divide } from "styled-icons/fa-solid";
const Header = ({ siteTitle }) => (
  
  <header
    style={{
      background: `#d48f2f`,
      marginBottom: `1.45rem`,
      textAlign:`center`
      
    }}
        
  >
  
    <div 
      style={{
        margin: `10px`,
      
        padding: `0.8rem 0rem 3.5rem 0rem` ,
       
        
      }}
    >
    <div>
    <img src={myPicture} alt="Mehdi" height="100px" align="left" />
    </div>   
         
         
      <h1 style={{ margin:0}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            
            
                        
          }}
        >
          {siteTitle}
        </Link>
      </h1>
     
    </div>
   
    
      
  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


