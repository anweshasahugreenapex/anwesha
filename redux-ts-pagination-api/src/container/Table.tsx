import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../components/redux/FetchAPI";
import { AppState } from "../components/redux/reducer";
import { useMemo } from "react";
import { column } from "../components/Types/Types";
import { useTable, usePagination } from "react-table";

function TableContainer() {
  const [post, setpost] = useState<number>(1);
  const storeState = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const row = storeState.data;
  const data = useMemo(() => row, [row]);
  const columns = React.useMemo(
    (): column[] => [
      {
        columnHead: "Title",
        accessor: "title",
      },
      {
        columnHead: "URL",
        accessor: "url",
      },
      {
        columnHead: "Created At",
        accessor: "created_at",
      },
      {
        columnHead: "Author",
        accessor: "author",
      },
    ],
    [post]
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    gotoPage,
    pageCount,
    pageOptions,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex } = state;

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPosts(post));
    }, 1000);
    const interval = setInterval(() => {
      setpost(post + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [post]);

  useEffect(() => {
    setPageSize(10);
    gotoPage(pageCount - 1);
  }, [pageCount]);

  return (
    <div>
      {row.length ? (
        <div>
          <table {...getTableProps()} className="table table-bordered">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} scope="col">
                      {column.render("columnHead")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()} scope="row">
                          {cell.render("Cell")}{" "}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {`<- previous`}
            </button>
            <span>
              page {pageIndex + 1} of {pageOptions.length}
            </span>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {` next ->`}
            </button>
          </div>
        </div>
      ) : (
        <h3>LOADING...</h3>
      )}
    </div>
  );
}

export default TableContainer;
