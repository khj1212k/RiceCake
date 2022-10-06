import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useAtom } from "jotai";
import dateAtom from "../stores/dateAtom";

function Calendars() {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useAtom(dateAtom);
  // const [diary, setDiary] = useState();
  // const [marks, diaryDate] = useState(diary.date);

  const marks = ["2022-10-15", "2022-10-17", "2022-11-01", "2022-12-25"];

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
        calendarType="US"
        tileClassName={({ date, view }) => {
          if (marks.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return "dot";
          }
        }}
      />
      <div className="mt-4 text-xs text-gray-500">
        {moment(value).format("YYYY-MM-DD")}
      </div>
    </div>
  );
}
export default Calendars;
