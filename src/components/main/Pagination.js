import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPosts / postsPerPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      <div>
        {pageNumbers.map(number => (
          <div key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;