export type LectureMaterial = {
  pdfUrl?: string | null;
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
      { pdfUrl: "/pdfs/2026-2 초급반 1주차 - 집합과 맵, 우선순위 큐.pdf", description: "집합과 맵, 우선순위 큐" },
      { pdfUrl: "/pdfs/2026-2 중급반 1주차 (투 포인터) - 최종.pdf", description: "투 포인터" },
      { pdfUrl: "", description: "" },
    ],
  },
  {
    week: 2,
    materials: [
      { pdfUrl: "/pdfs/2026-2 초급반 2주차 - 그리디 알고리즘.pdf", description: "그리디 알고리즘" },
      { pdfUrl: "/pdfs/2026-2 중급반 2주차 (분할 정복).pdf", description: "분할 정복" },
      { pdfUrl: "", description: "" },
    ],
  },
];
