import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents)=>{
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    console.log(id);
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
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
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>

      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent = {addEvent}/>
        </Modal>
      )}
    </div>
  );
}

export default App;
