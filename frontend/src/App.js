import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "./components/DataTable";
import ChangeCryptoModal from "./components/ChangeCryptoModal";
import { Container, Button } from "react-bootstrap";

const App = () => {
  const [showStockModal, setShowStockModal] = useState(false);
  return (
    <Container>
      <h2 className="my-3">Real-Time Price Data</h2>
      <Button variant="primary" onClick={() => setShowStockModal(true)}>
        Select Stock
      </Button>
      {showStockModal && (
        <ChangeCryptoModal onClose={() => setShowStockModal(false)} />
      )}
      <DataTable />
    </Container>
  );
};

export default App;
