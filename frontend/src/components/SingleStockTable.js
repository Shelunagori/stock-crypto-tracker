import { Table } from "react-bootstrap";

const SingleStockTable = ({ selectedStockItem }) => {
  return (
    <Table hover className="my-3 single-stock-table">
      <thead>
        <tr>
          <th className="stock-index">#</th>
          <th>Date</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {selectedStockItem &&
          selectedStockItem[0].prices.map((priceItem, index) => {
            return (
              <>
                <tr key={priceItem._id}>
                  <td className="stock-index">{index + 1}</td>
                  <td>{new Date(priceItem.last_updated).toLocaleString()}</td>
                  <td>{priceItem.current_price}</td>
                </tr>
              </>
            );
          })}
      </tbody>
    </Table>
  );
};

export default SingleStockTable;
