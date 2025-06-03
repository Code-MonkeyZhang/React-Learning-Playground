import "./App.css";
import { useState } from "react";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Mario's Birthday Bash", id: 1 },
    { title: "Browser's live stream", id: 2 },
    { title: "Race on moo moo farm", id: 3 },
  ]);

  console.log(showEvents);

  const handleClick = (id) => {
    console.log(id);
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  return (
    <div className="App">
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}

      {showEvents &&
        events.map((events, index) => (
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
