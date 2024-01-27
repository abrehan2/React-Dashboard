// IMPORTS -
import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination,
} from "react-table";

function TableHOC<T extends object>(
  columns: Column<T>[],
  data: T[],
  containerClassName: string,
  heading: string,
  size: number,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: size,
      },
    };

    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
      useTable(options, useSortBy, usePagination);

    return (
      <>
        <div className={containerClassName}>
          <h2 className="heading">{heading}</h2>

          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
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
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  };
}

export default TableHOC;
