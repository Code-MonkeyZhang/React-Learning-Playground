import "./App.css";
import { useState } from "react";
import Title from "./components/title";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Mario's Birthday Bash", id: 1 },
    { title: "Browser's live stream", id: 2 },
    { title: "Race on moo moo farm", id: 3 },
  ]);

  console.log(showModal);

  const handleClick = (id) => {
    console.log(id);
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <Title title="Event in your Area" subtitle={subtitle} />
      <Title title="Another Title" subtitle={subtitle} />

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

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>

      {showEvents &&
        events.map((events, index) => (
          <div key={events.id}>
            <h2>
              {index} - {events.title}
              <button onClick={() => handleClick(events.id)}>
                Delete Event
              </button>
            </h2>
          </div>
        ))}
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>10% Coupon Code!!</h2>
          <p>Use the Code Ninja10 at the checkout</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
