import React, { useState } from "react";
const emailRegexPattern = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

const initialKoders = [
  {
    name: "Rodrigo",
    email: "rodrgio@kodemia.com",
    // age: 20,
    // generation: 21,
  },
  {
    name: "Emanuel",
    email: "emanuel@kodemia.com",
    // age: 20,
    // generation: 21,
  },
  {
    name: "Héctor",
    email: "hector@kodemia.com",
    // age: 20,
    // generation: 21,
  },
];

function App() {
  const [koders, setKoders] = useState(initialKoders);
  const [error, setError] = useState("");

  const form = {
    name: {
      inputName: "name",
      hasErrors: (value) => {
        const isEmpty = value === "";
        const isRepeated = koders.some((koder) => koder.name === value);

        return isEmpty || isRepeated;
      },
    },
    email: {
      inputName: "email",
      hasErrors: (value) => {
        const isEmail = emailRegexPattern.test(value);

        return !isEmail;
      },
    },
    emailConfirmation: {
      inputName: "email-confirmation",
      hasErrors: (value, email) => {
        const doNotMatch = value !== email;
        return doNotMatch;
      },
    },
  };

  const addNewKoder = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get(form.name.inputName);
    const email = formData.get(form.email.inputName);
    const emailConfirmation = formData.get(form.emailConfirmation.inputName);
    const nameHasErrors = form.name.hasErrors(name);
    const emailHasErrors = form.email.hasErrors(email);
    const emailConfirmationHasErrors = form.emailConfirmation.hasErrors(
      emailConfirmation,
      email
    );

    if (nameHasErrors) {
      return setError("Name is already in list or empty");
    }

    if (emailHasErrors) {
      return setError("Email input not valid");
    }

    if (emailConfirmationHasErrors) {
      return setError("Emails do not match");
    }

    setError("");

    setKoders([...koders, { name, email }]);
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
            <input name={form.name.inputName} type="text" />
          </label>
          <label className="flex justify-between">
            Correo
            <input name={form.email.inputName} type="text" />
          </label>
          <label className="flex justify-between">
            Confirmar correo
            <input name={form.emailConfirmation.inputName} type="text" />
          </label>
          {/* <label className="flex justify-between">
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
                <p>
                  <span className="font-bold"> Correo:</span> {email}
                </p>
                {/* <p>
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
