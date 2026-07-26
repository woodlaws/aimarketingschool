# AI마케팅스쿨 공식 홈페이지 (배포 패키지)

HOME(모집 랜딩페이지) + 학습지원센터 9개 페이지가 하나의 사이트로 통합된 버전입니다.

---

## 파일 구조

```
/
├── index.html          ← 사이트 전체 (HOME + 학습지원센터 9페이지)
├── support.js          ← 런타임 (필수, 삭제하면 페이지가 안 보입니다)
├── og-image.png        ← 카카오톡·SNS 공유 썸네일
├── favicon.ico         ← 파비콘 (16/32/48 멀티 사이즈)
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-48x48.png
├── apple-touch-icon.png ← iOS 홈화면 아이콘 (180px, 흰 배경)
├── icon-192.png / icon-512.png
├── site.webmanifest    ← PWA 아이콘 메타
├── vercel.json         ← 클린 URL rewrite (필수, 삭제하면 /support 새로고침 시 404)
├── robots.txt
├── sitemap.xml
├── llms.txt            ← AI 검색(GEO/AEO)용 사이트 요약
├── images/             ← 이미지 22개
└── README.md
```

---

## 페이지 주소

| 페이지 | 주소 |
|---|---|
| HOME (모집 랜딩) | `/` |
| 학습지원센터 메인 | `/support` |
| 수강 준비물 | `/preparation` |
| 첫 수업 체크리스트 | `/checklist` |
| 자료·녹화본 | `/resources` |
| 네이버 카페 안내 | `/cafe` |
| 줌 라이브 안내 | `/zoom` |
| 과제 안내 | `/homework` |
| 주차별 로드맵 | `/roadmap` |
| FAQ | `/faq` |

상단 메뉴 "학습지원센터 ▼" 에서 8개 하위 페이지로 이동합니다. (모바일은 햄버거 메뉴 안 아코디언)

---

## GitHub 업로드

### 방법 A: 웹 업로드
1. github.com 로그인 → **New repository**
2. Repository name: `ai-marketing-school` → **Public** → **Create repository**
3. **uploading an existing file** 클릭
4. ZIP 압축 해제 후 파일과 `images` 폴더를 전부 드래그 앤 드롭
5. **Commit changes**

### 방법 B: Git CLI
```bash
git init
git add .
git commit -m "AI마케팅스쿨 공식 홈페이지 + 학습지원센터"
git branch -M main
git remote add origin https://github.com/[유저명]/[저장소명].git
git push -u origin main
```

---

## Vercel 배포 설정값

| 설정 항목 | 입력값 |
|---|---|
| Framework Preset | Other (None) |
| Build Command | *(비워두기)* |
| Output Directory | . (점 하나) |
| Root Directory | / |
| Install Command | *(비워두기)* |

`vercel.json` 이 모든 경로를 `index.html` 로 rewrite 하므로 `/support` 같은 주소를 직접 열거나 새로고침해도 404가 나지 않습니다. (# 없는 클린 URL 구조)

배포 후 **Settings → Domains** 에서 `www.aimarketing.school` 연결.

---

## 배포 후 점검 목록

- [ ] HOME 히어로·커리큘럼·강사·수강 안내·FAQ 정상 표시
- [ ] 상단 "학습지원센터 ▼" 드롭다운 8개 메뉴 이동 확인
- [ ] 주소창에 `#` 이 붙지 않는지 확인 (`/support`, `/resources` 등)
- [ ] `/support` 직접 접속 + 새로고침 시 404 안 나는지 확인
- [ ] 모바일 햄버거 → 학습지원센터 아코디언 펼침 확인
- [ ] 첫 수업 체크리스트 체크 저장 확인
- [ ] 페이지 소스보기에서 naver / google verification 메타 확인
- [ ] robots.txt, sitemap.xml, llms.txt 접속 확인
- [ ] 브라우저 탭에 G 로고 파비콘 표시 확인 (캐시 때문에 강력 새로고침 필요할 수 있음)
- [ ] /favicon.ico, /favicon-32x32.png, /apple-touch-icon.png 직접 접속 확인

---

## 아직 채워야 할 항목 ([링크 입력 예정])

- 구글 드라이브 자료실 링크 — /resources
- 유튜브 녹화본 재생목록 링크 — /resources, /roadmap
- 네이버 카페 링크 — /cafe
- 각 페이지 캡처 이미지 (점선 박스 자리)

---

© 2026 거상스쿨. All rights reserved.
문의: 권현임 교육팀장 010-5795-8075
