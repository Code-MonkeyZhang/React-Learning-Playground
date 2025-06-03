import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("mario");
  const [events, setEvents] = useState([
    { title: "Mario's Birthday Bash", id: 1 },
    { title: "Browser's live stream", id: 2 },
    { title: "Race on moo moo farm", id: 3 },
  ]);

  const handleClick = (id) => {
    console.log(id);
    setEvents(
      events.filter((event) => {
        return id !== event.id;
      })
    );
  };

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}> change name </button>
      {events.map((events, index) => (
        <div key={events.id}>
          <h2>
            {index} - {events.title}
            <button onClick={() => handleClick(events.id)}>
              Deletet Event
            </button>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
