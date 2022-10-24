import React, { useState } from "react";

const initialKoders = [
  {
    name: "Rodrigo",
    // email: "rodrgio@kodemia.com",
    // age: 20,
    // generation: 21,
  },
  {
    name: "Emanuel",
    // email: "emanuel@kodemia.com",
    // age: 20,
    // generation: 21,
  },
  {
    name: "Héctor",
    // email: "hector@kodemia.com",
    // age: 20,
    // generation: 21,
  },
];

function App() {
  const [koders, setKoders] = useState(initialKoders);
  const [newKoderName, setNewKoderName] = useState("");
  const [error, setError] = useState("");

  const addNewKoder = (e) => {
    e.preventDefault();
    const nameAlreadyExists = koders.some(
      (koder) => koder.name === newKoderName
    );

    if (nameAlreadyExists) {
      setError("Name already in list");
      return;
    } else {
      setError();
    }

    setKoders([...koders, { name: newKoderName }]);
  };

  const handleNewNameChange = (e) => {
    const newName = e.target.value;
    setNewKoderName(newName);
  };

  const deleteKoder = (name) => {
    setKoders(koders.filter((koder) => koder.name !== name));
  };

  return (
    <main className="min-h-screen bg-gray-300">
      {error && (
        <article className="mx-auto bg-red-500 text-red-900 w-max p-4 rounded-md">
          {error}
        </article>
      )}
      <div className="flex flex-col items-center text-center space-y-4 pt-10 text-lg w-[400px] mx-auto">
        <form
          onSubmit={(event) => addNewKoder(event)}
          className="flex flex-col text-left w-full space-y-4"
        >
          <label className="flex justify-between">
            Nombre
            <input
              name="name"
              type="text"
              value={newKoderName}
              onChange={(event) => handleNewNameChange(event)}
            />
          </label>
          {/* <label className="flex justify-between">
            Correo
            <input name="email" type="text" />
          </label>
          <label className="flex justify-between">
            Confirmar correo
            <input name="confirm-email" type="text" />
          </label>
          <label className="flex justify-between">
            Edad
            <input name="age" type="number" />
          </label>
          <label className="flex justify-between">
            Generación
            <select name="generation" id="">
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
            </select>
          </label> */}
          <input
            className="bg-purple-500 rounded-md py-3 text-purple-900 cursor-pointer"
            type="submit"
            value="Añadir Koder"
          />
        </form>
        <ul className="flex flex-col space-y-5 text-left">
          {koders.map(({ name, email, age, generation }, index) => (
            <li key={name}>
              <article className="bg-white rounded-lg shadow px-4 py-3">
                <section className="flex justify-between">
                  <p>
                    <span className="font-bold">Nombre:</span> {name}
                  </p>
                  <button
                    className="ml-4 cursor-pointer"
                    onClick={() => deleteKoder(name)}
                  >
                    X
                  </button>
                </section>
                {/* <p>
                  <span className="font-bold"> Correo:</span> {email}
                </p>
                <p>
                  <span className="font-bold">Edad:</span> {age}
                </p>
                <p>
                  <span className="font-bold">Generación:</span> {generation}
                </p> */}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
