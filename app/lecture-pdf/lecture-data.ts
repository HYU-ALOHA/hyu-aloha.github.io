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
      { pdfUrl: "/pdfs/2026-2 고급반 2주차 (센트로이드).pdf", description: "센트로이드" },
    ],
  },
  {
    week: 3,
    materials: [
      { pdfUrl: "/pdfs/2026-2 초급반 3주차 - 다이나믹 프로그래밍.pdf", description: "다이나믹 프로그래밍" },
      { pdfUrl: "/pdfs/2026-2 중급반 3주차 (분리집합, MST).pdf", description: "분리 집합, 최소 스패닝 트리" },
      { pdfUrl: "/pdfs/2026-2 고급반 3주차 (뽈모뽈모).pdf", description: "뽈모뽈모" },
    ],
  },
  {
    week: 4,
    materials: [
      { pdfUrl: "", description: "그래프 이론, DFS, BFS" },
      { pdfUrl: "", description: "이분 탐색 심화" },
      { pdfUrl: "/pdfs/Planar_Graph_Network_Flow.pdf", description: "Hawaiki 문제 풀이" },
    ],
  },
];
