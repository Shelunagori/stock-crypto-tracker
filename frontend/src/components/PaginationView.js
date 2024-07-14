import { useState } from "react";
import { Pagination } from "react-bootstrap";

const PaginationView = () => {
  const [activePageNumber, setActivePageNumber] = useState(1);
  const handlePageNumber = (number) => {
    setActivePageNumber(number);
  };

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePageNumber}
        onClick={() => handlePageNumber(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex py-3 align-items-center justify-content-center">
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default PaginationView;
