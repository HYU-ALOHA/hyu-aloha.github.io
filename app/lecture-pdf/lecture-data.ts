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
      { pdfUrl: "#", description: "집합과 맵, 우선순위 큐" },
      { pdfUrl: "#", description: "투 포인터" },
      { pdfUrl: "#", description: "" },
    ],
  }
];
