import { useState } from "react";

function Register() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleAddUser(e) {
    e.preventDefault();

    if (!name || !email) return;

    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  }

  function handleDeleteUser(id) {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registro de usuarios</h2>

      <form onSubmit={handleAddUser} className="row g-3 mb-4">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-md-5">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <button className="btn btn-success w-100">
            Registrar
          </button>
        </div>
      </form>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center">
                  No hay usuarios registrados
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Register;