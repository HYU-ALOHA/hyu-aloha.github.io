import type { Metadata } from "next";
import SiteHeader from "../components/site-header";
import { lectureWeeks } from "./lecture-data";

export const metadata: Metadata = {
  title: "강의자료 | ALOHA",
  description: "한양대학교 알고리즘 동아리 ALOHA의 주차별 강의자료입니다.",
};

const lectureLevels = ["초급반", "중급반", "고급반"] as const;

function PdfIcon() {
  return (
    <svg
      className="pdf-icon"
      viewBox="0 0 40 44"
      aria-hidden="true"
      fill="none"
    >
      <path d="M8 2H27L37 12V42H8V2Z" stroke="currentColor" strokeWidth="2" />
      <path d="M27 2V12H37" stroke="currentColor" strokeWidth="2" />
      <rect x="13" y="20" width="26" height="15" fill="white" stroke="currentColor" strokeWidth="2" />
      <text x="16" y="31" fill="currentColor" fontSize="8" fontWeight="800">PDF</text>
    </svg>
  );
}

function PdfCardContent({ level, isAvailable }: {
  level: string;
  isAvailable: boolean;
}) {
  return (
    <>
      <PdfIcon />
      <h3>{level}</h3>
      <span className="download-label">
        {isAvailable ? "다운로드" : "준비 중"}
      </span>
    </>
  );
}

export default function LecturePdfPage() {
  return (
    <main className="site-shell lecture-page">
      <SiteHeader />

      <div className="lecture-content">
        <h1 className="sr-only">강의자료</h1>

        {lectureWeeks.map((lecture) => (
          <section className="lecture-week" key={lecture.week}>
            <h2>{lecture.week}주차</h2>

            <div className="lecture-grid">
              {lecture.materials.map((material, materialIndex) => {
                const level = lectureLevels[materialIndex];
                const pdfUrl = material.pdfUrl?.trim();
                const isAvailable = Boolean(pdfUrl && !pdfUrl.startsWith("#"));

                return (
                  <article className="lecture-item" key={`${lecture.week}-${level}`}>
                    {isAvailable ? (
                      <a
                        className="pdf-card"
                        href={pdfUrl}
                        download
                        aria-label={`${lecture.week}주차 ${level} ${material.description} PDF 다운로드`}
                      >
                        <PdfCardContent level={level} isAvailable />
                      </a>
                    ) : (
                      <div className="pdf-card is-disabled" aria-disabled="true">
                        <PdfCardContent level={level} isAvailable={false} />
                      </div>
                    )}
                    <p>{material.description}</p>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
