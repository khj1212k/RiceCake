import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useAtom } from "jotai";
import dateAtom from "../stores/dateAtom";

function Calendars() {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useAtom(dateAtom);

  useEffect(() => {
    setDate(moment(value).format("YYYY-MM-DD"));
  }, [value]);

  return (
    <div>
      <Calendar
        className="content"
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
