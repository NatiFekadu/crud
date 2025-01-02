const ModalForm = (isOpen, onClose, mode, onSubmit) => {
  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3>{mode === "edit" ? "Edit client" : "Client Details"}</h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <button className="btn btn-success">
              {mode === "edit" ? "save changes" : "Add client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
