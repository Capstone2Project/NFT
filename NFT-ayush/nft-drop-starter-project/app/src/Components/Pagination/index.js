import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { fetchItems } from '../../utility/getEvents';
import Items from '../children/DisplayDiscovery';
import styles from './pagination.module.css';


function PaginatedItems({ itemsPerPage = 5,param }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
 
  useEffect(async () => {
      if(param){
        await fetchItems("*", 'US', 1, 5,param);
      }

}, [param]);


  const handlePageClick = (event) => {
    const newOffset = event.selected + 1;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div style={{
      }}>
      </div>
      <div style={{
        height: '300px',
      }}>
        {
          currentItems && currentItems.length == 0 &&
          <h1>Data Not Found</h1>
        }
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          containerClassName={styles.pagination} /* as this work same as bootstrap class */
          subContainerClassName={{ ...styles.pagination, ...styles.pages }} /* as this work same as bootstrap class */
          activeClassName={styles.active}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>

  );
}

export default React.memo(PaginatedItems);