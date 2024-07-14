import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Button, Dropdown } from "react-bootstrap";
import SingleStockTable from "./SingleStockTable";

const ChangeCryptoModal = ({ onClose }) => {
  const [selectedStockName, setSelectedStockName] = useState("");
  const { apidata } = useSelector((state) => state.data);
  const [selectedStockItem, setSelectedStockItem] = useState();

  const handleSelectStock = (selectedItem) => {
    let stockItemList = apidata.filter((stockItem) => {
      return stockItem.name === selectedItem;
    });

    setSelectedStockItem(stockItemList);
    setSelectedStockName(selectedItem);
  };

  return (
    <Modal size="xl" show={true} onHide={onClose} className="overflow-hidden">
      <Modal.Body className="px-0 stock-modal-body">
        <Dropdown onSelect={handleSelectStock} className="px-4">
          <Dropdown.Toggle variant="default" className="border px-3">
            {selectedStockName ? selectedStockName : "Select Stock"}
          </Dropdown.Toggle>

          <Dropdown.Menu className="stock-menu">
            {apidata &&
              apidata.map((entry, index) => (
                <Dropdown.Item key={entry._id} eventKey={entry.name}>
                  <img alt="" className="stock-img" src={entry.image} />{" "}
                  {entry.name}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>

        {selectedStockName &&
          selectedStockItem &&
          Object.keys(selectedStockItem).length > 0 && (
            <div className="overflow-y-auto ss-table-wrapper border-top my-3 px-4">
              <SingleStockTable selectedStockItem={selectedStockItem} />
            </div>
          )}
      </Modal.Body>
      <Modal.Footer className="">
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChangeCryptoModal;
