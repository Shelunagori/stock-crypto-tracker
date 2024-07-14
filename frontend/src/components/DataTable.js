import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
//import PaginationView from "./PaginationView";
import { fetchData } from "../store/actions/dataActions";

const DataTable = () => {
  const dispatch = useDispatch();
  const { apidata, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Table className="stock-table mt-4">
        <thead>
          <tr>
            <th className="table-decimal">#</th>
            <th className="name-th-td">Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {apidata &&
            apidata.map((entry, index) => (
              <tr key={entry._id}>
                <td className="table-decimal">{index + 1}</td>
                <td className="name-th-td">
                  <img alt="" className="stock-img" src={entry.image} />
                  {entry.name}
                </td>
                <td>{entry.symbol}</td>
                <td>{entry.prices[0].current_price}</td>
                <td>
                  {new Date(entry.prices[0].last_updated).toLocaleString(
                    "en-US",
                    {
                      hour12: true,
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                      millisecond: "numeric",
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    }
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {/* <PaginationView />  */}
    </>
  );
};

export default DataTable;
