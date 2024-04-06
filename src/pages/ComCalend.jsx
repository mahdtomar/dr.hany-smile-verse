import { Calendar,dateFnsLocalizer } from 'react-big-calendar';
import { format } from 'date-fns';
import { parse } from 'date-fns';
import { startOfWeek } from 'date-fns';
import { getDay } from 'date-fns';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React ,{useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
const locales ={
  "en-US":require("date-fns/locale/en-US")
}
const localizer =dateFnsLocalizer({
  format,parse,startOfWeek,getDay,locales
});
const events =[{
  title:"Big Meeting",
  allDay:true,
  start:new Date(2024,6,0) ,
  end:new Date(2024,6,0),
},
{
  title:"Vacation",
  start: new Date(2024,6,1),
  end:new Date(2024,6,3),
},
{
  title:"Conference",
  start: new Date(2024,6,5),
  end:new Date(2024,6,10),
}]
function CalendarComp() {
  const[newEvent,setNewEvent] =useState({title:"",start:"",end:""})
  const[allEvents,setAllEvents] =useState(events)
  const handleAddEvent=()=>{
    setAllEvents([...allEvents,newEvent])
  }
  return (
    <div className="App">
      <h1>Calendar</h1>
      <p>Add New Event</p>
      <div>
        <input type='text' placeholder='Add Title' value={newEvent.title} onChange={(e)=>setNewEvent({...newEvent,title:e.target.value})}/>
        <DatePicker placeholderText="Start Date" selected={newEvent.start} onChange={(start)=>setNewEvent({...newEvent,start})} />
        <DatePicker placeholderText="Start Date" selected={newEvent.end} onChange={(end)=>setNewEvent({...newEvent,end})} />
<button onClick={handleAddEvent}>Add Event</button>
      </div>
       <Calendar 
       style={{height:"100vh",margin:"20px"}}
      localizer={localizer}
      // events={events}
      events={allEvents}
      startAccessor="start"
      endAccessor="end"
    />
    </div>
  );
}

export default CalendarComp;
