export const categoryMock = [
  {
    id: 1,
    name: '디자인',
    parent: null,
    depth: 0,
    children: [
      { id: 101, name: '로고·브랜딩', parent: 1, depth: 1 },
      { id: 102, name: '상세·이벤트 페이지', parent: 1, depth: 1 },
      { id: 103, name: '명함·인쇄·홍보물', parent: 1, depth: 1 },
      { id: 104, name: 'PPT·인포그래픽', parent: 1, depth: 1 },
      { id: 105, name: '웹·모바일 디자인', parent: 1, depth: 1 }
    ]
  },
  {
    id: 2,
    name: 'IT·프로그래밍',
    parent: null,
    depth: 0,
    children: [
      { id: 201, name: '기획', parent: 2, depth: 1 },
      { id: 202, name: '워드프레스', parent: 2, depth: 1 }
    ]
  },
  {
    id: 3,
    name: '영상·사진·음향',
    parent: null,
    depth: 0,
    children: [
      { id: 301, name: '영상촬영·편집', parent: 3, depth: 1 },
      { id: 302, name: '유튜브 제작', parent: 3, depth: 1 },
      { id: 303, name: '온라인 생중계', parent: 3, depth: 1 },
      { id: 304, name: '드론 촬영', parent: 3, depth: 1 },
      { id: 305, name: '애니메이션', parent: 3, depth: 1 },
      { id: 306, name: '3D·VR', parent: 3, depth: 1 }
    ]
  }
];
