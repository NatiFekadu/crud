const Table = () => {
  const clients = [
    {
      id: "1",
      name: "John Doe",
      email: "John.Doe@gmail.com",
      job: "Software Engineer",
      rate: "100",
      isActive: true,
    },
    {
      id: "2",
      name: "John Doe",
      email: "John.Doe@gmail.com",
      job: "Software Engineer",
      rate: "100",
      isActive: true,
    },
    {
      id: "3",
      name: "John Doe",
      email: "John.Doe@gmail.com",
      job: "Software Engineer",
      rate: "100",
      isActive: false,
    },
  ];
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="hover">
          {clients.map((client) => (
            <tr key={client.id}>
              <th>{client.id}</th>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.job}</td>
              <td>{client.rate}</td>
              <td>
                <button
                  className={` btn rounded-full w-20 ${
                    client.isActive
                      ? ` btn-primary`
                      : ` btn-outline btn-primary`
                  }`}
                >
                  {client.isActive ? "Active" : "Inactive"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
