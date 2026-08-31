export type LectureMaterial = {
  pdfUrl: string;
  description: string;
};

export type LectureWeek = {
  week: number;
  materials: [LectureMaterial, LectureMaterial, LectureMaterial];
};

// materials 순서: 초급반, 중급반, 고급반
export const lectureWeeks: LectureWeek[] = [
  {
    week: 1,
    materials: [
      { pdfUrl: "/pdfs/week-1-1.pdf", description: "그리디 알고리즘 기초" },
      { pdfUrl: "/pdfs/week-1-2.pdf", description: "그리디 알고리즘 응용" },
      { pdfUrl: "/pdfs/week-1-3.pdf", description: "그리디 알고리즘 심화" },
    ],
  },
  {
    week: 2,
    materials: [
      { pdfUrl: "/pdfs/week-2-1.pdf", description: "완전 탐색 기초" },
      { pdfUrl: "/pdfs/week-2-2.pdf", description: "완전 탐색 응용" },
      { pdfUrl: "/pdfs/week-2-3.pdf", description: "완전 탐색 심화" },
    ],
  },
  {
    week: 3,
    materials: [
      { pdfUrl: "/pdfs/week-3-1.pdf", description: "자료구조 기초" },
      { pdfUrl: "/pdfs/week-3-2.pdf", description: "자료구조 응용" },
      { pdfUrl: "/pdfs/week-3-3.pdf", description: "자료구조 심화" },
    ],
  },
  {
    week: 4,
    materials: [
      { pdfUrl: "/pdfs/week-4-1.pdf", description: "동적 계획법 기초" },
      { pdfUrl: "/pdfs/week-4-2.pdf", description: "동적 계획법 응용" },
      { pdfUrl: "/pdfs/week-4-3.pdf", description: "동적 계획법 심화" },
    ],
  },
];
