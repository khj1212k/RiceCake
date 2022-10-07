import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useAtom } from "jotai";
import dateAtom from "../stores/dateAtom";
import authAtom from "../stores/authAtom";
function Calendars() {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useAtom(dateAtom);
  const [diaries, setDiaries] = useState();
  const [loginUser, setAuth] = useAtom(authAtom);
  const [marks, setMarks] = useState([]);
  useEffect(() => {
    setDate(moment(value).format("YYYY-MM-DD"));
  }, [value]);
  useEffect(() => {
    const userId = loginUser.userId;
    const getUrl = "http://localhost:8090/diaries/" + userId;
    fetch(getUrl)
      .then((response) => response.json())
      .then((data) => {
        setDiaries(data);
        const dates = [];
        data.forEach((diary) => {
          dates.push(diary.diaryDate.substr(0, 10));
          setMarks(dates);
        });
      });
  }, [marks]);
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