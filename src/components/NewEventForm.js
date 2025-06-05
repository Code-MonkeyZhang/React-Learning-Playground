import "./NewEventForm.css";

import { useState } from "react";

export default function NewEventForm({addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // 清空输入框内容
  const resetForm = () => {
    setTitle('')
    setDate('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random()*1000) // use random number to generate ID
    }

    console.log(event)
    addEvent(event)
    resetForm()
  }

  return (
    <div>
      <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
          <span>Title</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value = {title}  
          />
        </label>
        <label>
          <span>Event Data:</span>
          <input 
            type="date" 
            onChange={(e) => setDate(e.target.value)}
            value={date} 
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
