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
  };
  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("Add new client");
    } else {
      console.log("Update client");
    }
  };
  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} />
      <Table />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
