import { RootCategory, SubCategory } from './enum';

// prettier-ignore
const category = {
  [RootCategory.DESIGN]: { id: 1, name: '디자인', parent: null, depth: 0 },
  [RootCategory.IT_PROGRAMMING]: { id: 2, name: 'IT·프로그래밍', parent: null, depth: 0 },
  [RootCategory.VIDEO_PHOTO_SOUND]: { id: 3, name: '영상·사진·음향', parent: null, depth: 0 },
  [RootCategory.MARKETING]: { id: 4, name: '마케팅', parent: null, depth: 0 },
  [RootCategory.DOC_WRITING]: { id: 5, name: '문서·글쓰기', parent: null, depth: 0 },
}

// prettier-ignore
const subCategory = {
  [SubCategory.LOGO_BRANDING]: { id: 101, name: '로고·브랜딩', parent: 1, depth: 1 },
  [SubCategory.DETAIL_EVENT_PAGE]: { id: 102, name: '상세·이벤트 페이지', parent: 1, depth: 1 },
  [SubCategory.CARD_PRINT_PROMOTION]: { id: 103, name: '명함·인쇄·홍보물', parent: 1, depth: 1 },
  [SubCategory.PPT_INFOGRAPHIC]: { id: 104, name: 'PPT·인포그래픽', parent: 1, depth: 1 },
  [SubCategory.WEB_MOBILE]: { id: 105, name: '웹·모바일 디자인', parent: 1, depth: 1 },
  [SubCategory.PACKAGE]: { id: 106, name: '패키지 디자인', parent: 1, depth: 1 },
  [SubCategory.ILLUST_CARICATURE]: { id: 107, name: '일러스트·캐리커쳐', parent: 1, depth: 1 },
  [SubCategory.WEBTOON_CHARACTER_EMOTICON]: { id: 108, name: '웹툰·캐릭터·이모티콘', parent: 1, depth: 1 },
  [SubCategory.BLOG_SNS_THUMBNAIL]: { id: 109, name: '블로그·SNS·썸네일', parent: 1, depth: 1 },
  [SubCategory.PHOTOSHOP_FILE_TRANSLATION]: { id: 110, name: '포토샵·파일변환', parent: 1, depth: 1 },
  [SubCategory.PRODUCT_3D_PRINTING]: { id: 111, name: '제품·3D프린팅', parent: 1, depth: 1 },
  [SubCategory.SPACE]: { id: 112, name: '공간디자인', parent: 1, depth: 1 },
  [SubCategory.BOOK_ALBUM]: { id: 113, name: '북·앨범디자인', parent: 1, depth: 1 },
  [SubCategory.CALLIGRAPHY_FONT]: { id: 114, name: '캘리그라피·폰트', parent: 1, depth: 1 },
  [SubCategory.VR_METABUS_GAME]: { id: 115, name: 'VR·메타버스·게임', parent: 1, depth: 1 },
  [SubCategory.CLOTHING]: { id: 116, name: '의류디자인', parent: 1, depth: 1 },
  [SubCategory.SIGN_CONSTRUCTION]: { id: 117, name: '간판·시공', parent: 1, depth: 1 },
  [SubCategory.DESIGN_ETC]: { id: 118, name: '기타', parent: 1, depth: 1 },
  [SubCategory.PLANNING]: { id: 201, name: '기획', parent: 2, depth: 1 },
  [SubCategory.WORDPRESS]: { id: 202, name: '워드프레스', parent: 2, depth: 1 },
  [SubCategory.WEB]: { id: 203, name: '웹사이트 개발', parent: 2, depth: 1 },
  [SubCategory.SHOPPING_MALL_COMMERCE]: { id: 204, name: '쇼핑몰·커머스', parent: 2, depth: 1 },
  [SubCategory.MOBILE]: { id: 205, name: '모바일 앱', parent: 2, depth: 1 },
  [SubCategory.PROGRAM]: { id: 206, name: '프로그램 개발', parent: 2, depth: 1 },
  [SubCategory.EMBEDDED]: { id: 207, name: '임베디드HW·SW', parent: 2, depth: 1 },
  [SubCategory.GAME]: { id: 208, name: '게임', parent: 2, depth: 1 },
  [SubCategory.DATABASE]: { id: 209, name: '데이터베이스', parent: 2, depth: 1 },
  [SubCategory.DATA_ANALYZE_REPORT]: { id: 210, name: '데이터분석·리포트', parent: 2, depth: 1 },
  [SubCategory.BLOCKCHAIN]: { id: 211, name: '블록체인', parent: 2, depth: 1 },
  [SubCategory.SECURITY]: { id: 212, name: '보안', parent: 2, depth: 1 },
  [SubCategory.SERVER_HOSTING]: { id: 213, name: '서버·호스팅', parent: 2, depth: 1 },
  [SubCategory.QA_TEST]: { id: 214, name: 'QA·테스트', parent: 2, depth: 1 },
  [SubCategory.SUPPORT]: { id: 215, name: '기술지원', parent: 2, depth: 1 },
  [SubCategory.FILE_TRANSFORM]: { id: 216, name: '파일변환', parent: 2, depth: 1 },
  [SubCategory.CHATBOT]: { id: 217, name: '챗봇', parent: 2, depth: 1 },
  [SubCategory.IT_ETC]: { id: 218, name: '기타', parent: 2, depth: 1 },
  [SubCategory.VIDEO_SHOOTING]: { id: 301, name: '영상촬영·편집', parent: 3, depth: 1 },
  [SubCategory.YOUTUBE]: { id: 302, name: '유튜브 제작', parent: 3, depth: 1 },
  [SubCategory.ONLINE_LIVE]: { id: 303, name: '온라인 생중계', parent: 3, depth: 1 },
  [SubCategory.DRONE_SHOOTING]: { id: 304, name: '드론 촬영', parent: 3, depth: 1 },
  [SubCategory.ANIMATION]: { id: 305, name: '애니메이션', parent: 3, depth: 1 },
  [SubCategory.VR_3D]: { id: 306, name: '3D·VR', parent: 3, depth: 1 },
  [SubCategory.INTRO_LOGO]: { id: 307, name: '인트로·로고', parent: 3, depth: 1 },
  [SubCategory.VIDEO_TRANSLATION]: { id: 308, name: '영상 자막', parent: 3, depth: 1 },
  [SubCategory.VIDEO_TEMPLATE]: { id: 309, name: '영상 템플릿', parent: 3, depth: 1 },
  [SubCategory.PHOTO_SHOOTING]: { id: 310, name: '사진촬영', parent: 3, depth: 1 },
  [SubCategory.PHOTO_VIDEO_EDIT]: { id: 311, name: '사진·영상 보정', parent: 3, depth: 1 },
  [SubCategory.VOICE]: { id: 312, name: '성우', parent: 3, depth: 1 },
  [SubCategory.MUSIC_SOUND]: { id: 313, name: '음악·사운드', parent: 3, depth: 1 },
  [SubCategory.MODEL_MC_CONCERT]: { id: 314, name: '모델·MC·공연', parent: 3, depth: 1 },
  [SubCategory.STUDIO_RENTAL]: { id: 315, name: '스튜디오 렌탈', parent: 3, depth: 1 },
  [SubCategory.VIDEO_PHOTO_SOUND_ETC]: { id: 316, name: '기타', parent: 3, depth: 1 },
  [SubCategory.BLOG]: { id: 401, name: '블로그 마케팅', parent: 4, depth: 1 },
  [SubCategory.CAFE]: { id: 402, name: '카페 마케팅', parent: 4, depth: 1 },
  [SubCategory.SNS]: { id: 403, name: 'SNS 마케팅', parent: 4, depth: 1 },
  [SubCategory.SHOPPING_MALL_STORE]: { id: 404, name: '쇼핑몰·스토어', parent: 4, depth: 1 },
  [SubCategory.EXPERIENCE]: { id: 405, name: '체험단·기자단 대행', parent: 4, depth: 1 },
  [SubCategory.WEB_TRAFFIC]: { id: 406, name: '웹 트래픽', parent: 4, depth: 1 },
  [SubCategory.PRESS_PROMOTION]: { id: 407, name: '언론홍보', parent: 4, depth: 1 },
  [SubCategory.ADVERTISE_AGENCY]: { id: 408, name: '종합광고대행', parent: 4, depth: 1 },
  [SubCategory.SEARCH_OPTIMIZE]: { id: 409, name: '검색최적화·SEO', parent: 4, depth: 1 },
  [SubCategory.MAP_ENROLLMENT]: { id: 410, name: '지도등록·홍보', parent: 4, depth: 1 },
  [SubCategory.APP_MARKETING]: { id: 411, name: '앱마케팅', parent: 4, depth: 1 },
  [SubCategory.LIVE_COMMERCE]: { id: 412, name: '라이브커머스', parent: 4, depth: 1 },
  [SubCategory.PERSONNAL_INFLUENCER]: { id: 413, name: '개인 인플루언서', parent: 4, depth: 1 },
  [SubCategory.KEYWORD_BANNER]: { id: 414, name: '키워드·배너광고', parent: 4, depth: 1 },
  [SubCategory.PORTAL_QNA]: { id: 415, name: '포털질문·답변', parent: 4, depth: 1 },
  [SubCategory.MARKETTING_CONSULTING]: { id: 416, name: '마케팅 컨설팅', parent: 4, depth: 1 },
  [SubCategory.VIDEO_MARKETING]: { id: 417, name: '영상 마케팅', parent: 4, depth: 1 },
  [SubCategory.OFFLINE_AD]: { id: 418, name: '오프라인광고', parent: 4, depth: 1 },
  [SubCategory.OVERSEA_MARKETTING]: { id: 419, name: '해외마케팅', parent: 4, depth: 1 },
  [SubCategory.BRAND_MARKETTING]: { id: 420, name: '브랜드마케팅', parent: 4, depth: 1 },
  [SubCategory.MARKETTING_ETC]: { id: 421, name: '기타', parent: 4, depth: 1 },
  [SubCategory.COMPANY_NAME]: { id: 501, name: '기업명·네이밍', parent: 5, depth: 1 },
  [SubCategory.PRODUCT_COPYWRITING]: { id: 502, name: '제품 카피라이팅', parent: 5, depth: 1 },
  [SubCategory.AD_COPYWRITING]: { id: 503, name: '광고 카피라이팅', parent: 5, depth: 1 },
  [SubCategory.MARKETTING_WORD]: { id: 504, name: '마케팅 글작성', parent: 5, depth: 1 },
  [SubCategory.ARTICLE]: { id: 505, name: '보도자료', parent: 5, depth: 1 },
  [SubCategory.SPECIALITY_EXPERT]: { id: 506, name: '산업별 전문 글작성', parent: 5, depth: 1 },
  [SubCategory.TYPING_VIDEO]: { id: 507, name: '타이핑(영상)', parent: 5, depth: 1 },
  [SubCategory.TYPING_DOC]: { id: 508, name: '타이핑(문서)', parent: 5, depth: 1 },
  [SubCategory.BOOK_SCENARIO]: { id: 509, name: '책·시나리오', parent: 5, depth: 1 },
  [SubCategory.THESIS]: { id: 510, name: '논문', parent: 5, depth: 1 },
  [SubCategory.CORRECTION]: { id: 511, name: '교정·교열 첨삭', parent: 5, depth: 1 },
  [SubCategory.WORD_TEMPLATE]: { id: 512, name: '맞춤양식', parent: 5, depth: 1 },
  [SubCategory.DOC_WRITING_ETC]: { id: 513, name: '기타', parent: 5, depth: 1 },
}

const childrenRel = {
  [RootCategory.DESIGN]: [
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,
    116, 117, 118
  ],
  [RootCategory.IT_PROGRAMMING]: [
    201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215,
    216, 217, 218
  ],
  [RootCategory.VIDEO_PHOTO_SOUND]: [
    301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315,
    316
  ],
  [RootCategory.MARKETING]: [
    401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415,
    416, 417, 418, 419, 420, 421
  ],
  [RootCategory.DOC_WRITING]: [
    501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513
  ]
};

const rootCategories = [
  RootCategory.DESIGN,
  RootCategory.IT_PROGRAMMING,
  RootCategory.VIDEO_PHOTO_SOUND,
  RootCategory.MARKETING,
  RootCategory.DOC_WRITING
];

export const allCategories = rootCategories.map(item => {
  const subCategories = childrenRel[item];
  return {
    ...category[item],
    children: subCategories.map(subItem => subCategory[subItem as SubCategory])
  };
});
