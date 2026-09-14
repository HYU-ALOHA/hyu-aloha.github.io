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

function getLocalDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function CalendarView() {
  const [calendarView, setCalendarView] = useState<"dayGridMonth" | "listMonth" | null>(null);
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateView = () => {
      setCalendarView(mediaQuery.matches ? "listMonth" : "dayGridMonth");
    };
    const updateToday = () => setToday(getLocalDate());

    updateView();
    updateToday();
    mediaQuery.addEventListener("change", updateView);
    const dateCheckInterval = window.setInterval(updateToday, 60_000);

    return () => {
      mediaQuery.removeEventListener("change", updateView);
      window.clearInterval(dateCheckInterval);
    };
  }, []);

  if (!calendarView || !today) {
    return <div className="calendar-library" aria-label="캘린더 불러오는 중" />;
  }

  return (
    <div className={`calendar-library calendar-view-${calendarView}`}>
      <FullCalendar
        key={calendarView}
        className="fc"
        plugins={[dayGridPlugin, listPlugin, classicThemePlugin]}
        initialView={calendarView}
        now={today}
        timeZone="local"
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
