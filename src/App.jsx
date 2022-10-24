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

  const addNewKoder = (e) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-screen bg-gray-300">
      <div className="flex flex-col items-center text-center space-y-4 pt-10 text-lg w-[400px] mx-auto">
        <form
          onSubmit={(event) => addNewKoder(event)}
          className="flex flex-col text-left w-full space-y-4"
        >
          <label className="flex justify-between">
            Nombre
            <input name="name" type="text" />
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
          {koders.map(({ name, email, age, generation }) => (
            <li key={name}>
              <article className="bg-white rounded-lg shadow px-4 py-3">
                <p>
                  <span className="font-bold">Nombre:</span> {name}
                </p>
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
