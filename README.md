# AI 마케팅스쿨 랜딩페이지

거상스쿨 AI 마케팅스쿨 16기 공식 랜딩페이지 — 모바일 반응형 최종 완성본

---

## 파일 구조

```
/
├── index.html          ← 메인 랜딩페이지 (모바일 반응형 포함)
├── support.js          ← DC 런타임 (필수)
├── images/             ← 이미지 폴더 (22개)
│   ├── logo.png
│   ├── ai-tools-new.png
│   ├── roadmap-v2.jpg
│   ├── month1-roadmap-new.jpg
│   ├── month2-roadmap-new.jpg
│   ├── month3-roadmap-new.jpg
│   ├── result-graph-new.jpg
│   ├── flywheel-detail.png
│   ├── instructor-photo.jpg
│   ├── instructor-books-v2.jpg
│   └── week1~week12 이미지 12개
└── README.md
```

---

## GitHub 업로드 방법

### 방법 A: 웹 업로드

1. [github.com](https://github.com) → 로그인
2. **New repository** 클릭
3. Repository name: `ai-marketing-school`
4. **Public** 선택 → **Create repository**
5. **uploading an existing file** 클릭
6. ZIP 압축 해제 후 모든 파일/폴더를 드래그 앤 드롭
7. **Commit changes** 클릭

### 방법 B: Git CLI

```bash
git init
git add .
git commit -m "AI 마케팅스쿨 랜딩페이지 최종 배포"
git branch -M main
git remote add origin https://github.com/[유저명]/[저장소명].git
git push -u origin main
```

---

## Vercel 배포 방법

1. [vercel.com](https://vercel.com) → GitHub 계정 연동
2. **Add New Project** → 업로드한 GitHub 저장소 선택
3. 아래 설정값 입력 후 **Deploy** 클릭

---

## Vercel 배포 설정값

| 설정 항목 | 입력값 |
|-----------|--------|
| **Framework Preset** | Other (None) |
| **Build Command** | *(비워두기)* |
| **Output Directory** | . (점 하나) |
| **Root Directory** | / |

---

## 모바일 반응형 최종 점검 완료

- ✅ 320px, 360px, 375px, 390px, 430px 전 너비 정상 표시
- ✅ word-break:keep-all 적용 — 한 글자씩 세로 떨어짐 없음
- ✅ 모든 4열/3열 그리드 → 모바일 1열 전환
- ✅ 커리큘럼 썸네일 정사각형(aspect-ratio:1/1) 유지
- ✅ 통계 영역 모바일 최적화 (70px→24px)
- ✅ 다운로드 배너 모바일 세로 레이아웃
- ✅ CTA 버튼 전체 폭 + 48px 이상 터치 영역
- ✅ 좌우 오버플로 없음 (overflow-x:hidden)
- ✅ 이미지 경로 정상 (images/ 폴더)
- ✅ 신청 버튼 링크 정상 작동

---

## 기술 스택

- HTML5 + CSS3 반응형
- Vanilla JavaScript (React 기반 런타임)
- Google Fonts (Noto Sans KR)
- Font Awesome 6.4.0 (CDN)
- 정적 호스팅 (Vercel / Cloudflare Pages 지원)

---

© 2026 거상스쿨. All rights reserved.
문의: 권현임 교육팀장 010-5795-8075
