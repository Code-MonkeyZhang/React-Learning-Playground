import React from "react";
import ReactDOM from "react-dom";
import styles from "./EventList.module.css";

export default function EventList({ events, handleClick }) {
  return (
    <div className="event-list">
      {events.map((events, index) => (
        <div className={styles.card} key={events.id}>
          <h2>
            {index} - {events.title}
            <button onClick={() => handleClick(events.id)}>Delete Event</button>
          </h2>
        </div>
      ))}
    </div>
  );
}
