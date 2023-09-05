import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  // input text stored in useref cause useref have current element
  const nameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name: name, email: email };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) =>
      res.json().then((data) => {
        // set data in a new variable for that we can replicate new value with cppying users values
        const addedUser = data;
        const newUser = [...users, addedUser];
        setUsers(newUser);
      })
    );
    nameRef.current.value = "";
    emailRef.current.value = "";
    e.preventDefault();
  };

  return (
    <>
      <h1>Node Explore Client Site</h1>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="name" />
        <input ref={emailRef} type="email" placeholder="email" />
        <input type="submit" value="Submit" />
      </form>
      <div>
        {users.map((user) => (
          <div key={user.key}>
            <h4>{user.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
