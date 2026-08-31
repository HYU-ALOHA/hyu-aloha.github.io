"use client";

import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import listPlugin from "@fullcalendar/react/list";
import koLocale from "@fullcalendar/react/locales/ko";
import classicThemePlugin from "@fullcalendar/react/themes/classic";
import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/classic/theme.css";
import "@fullcalendar/react/themes/classic/palette.css";
import { calendarEvents } from "./calendar-data";

export default function CalendarView() {
  const [calendarView, setCalendarView] = useState<"dayGridMonth" | "listMonth">(
    "dayGridMonth",
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateView = () => {
      setCalendarView(mediaQuery.matches ? "listMonth" : "dayGridMonth");
    };

    updateView();
    mediaQuery.addEventListener("change", updateView);

    return () => mediaQuery.removeEventListener("change", updateView);
  }, []);

  return (
    <div className={`calendar-library calendar-view-${calendarView}`}>
      <FullCalendar
        key={calendarView}
        className="fc"
        plugins={[dayGridPlugin, listPlugin, classicThemePlugin]}
        initialView={calendarView}
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
