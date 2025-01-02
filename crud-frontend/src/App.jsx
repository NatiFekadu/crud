import { useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("Add new client");
    } else {
      console.log("Modal Mode Edit");
    }
  };
  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} />
      <Table handleOpen={handleOpen} />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        mode={modalMode}
      />
    </>
  );
}

export default App;
