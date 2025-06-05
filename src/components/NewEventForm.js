import "./NewEventForm.css";

import { useState,useRef } from "react";

export default function NewEventForm({addEvent }) {


  const title = useRef()
  const date = useRef()



  // 清空输入框内容
  const resetForm = () => {
    title.current.value = ""
    date.current.value = ""
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title,date)

    const event = {
      title: title.current.value,
      date: date.current.value,
      id: Math.floor(Math.random()*1000) // use random number to generate ID
    }


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
            ref={title}
          />
        </label>
        <label>
          <span>Event Data:</span>
          <input 
            type="date" 
            ref={date}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
