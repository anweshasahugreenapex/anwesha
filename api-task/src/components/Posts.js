import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.css";

const Posts = ({ posts, loading }) => {
  const columns = [
    { dataField: "id", text: "id", sort: true },
    { dataField: "albumId", text: "albumId" },
    { dataField: "title", text: "title", sort: true, filter: textFilter() },
  ];

  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <div>
      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={posts}
        filter={filterFactory()}
      />
    </div>
  );
};
export default Posts;
