import {
  TableBody,
  TableRow,
  TableCell,
  Table,
} from "@material-ui/core";

import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <Table>
        <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>albumid</TableCell>
            <TableCell>title</TableCell>
        </TableRow>
     
        {posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell style={{ marginLeft: "35px" }}> {post.id}</TableCell>
            <TableCell style={{ marginLeft: "35px" }}> {post.albumId}</TableCell>
            <TableCell style={{ marginLeft: "35px" }}> {post.title}</TableCell>
          </TableRow>
        ))}
      
    </Table>
  );
};
export default Posts;
