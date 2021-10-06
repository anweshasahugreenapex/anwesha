

import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'

const Posts = ({ posts, loading }) => {

  const columns=[
    { dataField:'id',text:'id',sort:true},
    { dataField:'albumId',text:'albumId'},
    { dataField:'title',text:'title',sort:true}
  ]

  if (loading) {
    return <h2>loading...</h2>;
  }
  return (

   < BootstrapTable bootstrap4 keyField='id' columns={columns} data={posts}/>
 
  );
};
export default Posts;
