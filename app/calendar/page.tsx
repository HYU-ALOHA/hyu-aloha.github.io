import type { Metadata } from "next";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "캘린더 | ALOHA",
  description: "한양대학교 알고리즘 동아리 ALOHA의 일정입니다.",
};

export default function CalendarPage() {
  return (
    <main className="site-shell calendar-page">
      <SiteHeader />

      <section className="calendar-content" aria-labelledby="calendar-title">
        <div className="calendar-heading">
          <div>
            <p className="calendar-eyebrow">ALOHA SCHEDULE</p>
            <h1 id="calendar-title">캘린더</h1>
          </div>

        </div>
      </section>
    </main>
  );
}
