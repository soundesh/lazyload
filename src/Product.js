import React from 'react'

const Product = ({height,author,url}) => {
    console.log(author)
  return (
    <div>
        <p>product author:{author}</p><br/>
        <p>product height:{height}</p><br/>
        <img src={url}/><br/>
    </div>
  )
}

export default Product