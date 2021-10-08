import React from "react";

//function to show page numbers
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  //  for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
  for (let i = 1; i <= Math.ceil(totalPosts / 200); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="page-item">
            <a
              onClick={() => paginate(pageNumber)}
              href="#"
              className="page-link"
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
