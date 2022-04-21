import React, { useState } from 'react'
import Pagination from '../Pagination'

const Discover = ({inputValue}) => {
  
  return (
      <div className="discover">
        <h1 style={{
          textAlign:'center',
          fontFamily:'Algerian'
        }}> Discover Events </h1> 
        <Pagination itemsPerPage={5} param={{value:inputValue,code: "US"}} />

        {/* <script src="https://ticketmaster-api-staging.github.io/products-and-docs/widgets/event-discovery/1.0.0/lib/main-widget.js"></script> */}
      </div>
  )
}

export default Discover
