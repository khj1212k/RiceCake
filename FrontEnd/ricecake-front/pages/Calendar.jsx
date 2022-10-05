import moment from "moment/moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css"; 


function Calendars() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar className="content"
        onChange={onChange}
        value={value}
        locale="en"
      />
      <div className="mt-4 text-gray-500">
        {moment(value).format("YYYY-MM-DD")}
      </div>
    </div>
  );
}
export default Calendars;