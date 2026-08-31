"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import koLocale from "@fullcalendar/react/locales/ko";
import classicThemePlugin from "@fullcalendar/react/themes/classic";
import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/classic/theme.css";
import "@fullcalendar/react/themes/classic/palette.css";
import { calendarEvents } from "./calendar-data";

export default function CalendarView() {
  return (
    <div className="calendar-library">
      <FullCalendar
        className="fc"
        plugins={[dayGridPlugin, classicThemePlugin]}
        initialView="dayGridMonth"
        initialDate="2026-08-01"
        locale={koLocale}
        initialEvents={calendarEvents}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        dayHeaderFormat={{ weekday: "short" }}
        dayHeaderClass={(day) => {
          if (day.date.getDay() === 0) return "aloha-sunday";
          if (day.date.getDay() === 6) return "aloha-saturday";
          return "";
        }}
        dayCellClass={(day) => {
          if (day.date.getDay() === 0) return "aloha-sunday";
          if (day.date.getDay() === 6) return "aloha-saturday";
          return "";
        }}
        dayCellTopContent={(day) => day.dayNumberText.replace("일", "")}
        dayMaxEvents={3}
        fixedWeekCount={false}
        height="auto"
        eventDisplay="block"
        displayEventTime={false}
      />
    </div>
  );
}
