# AI 마케팅스쿨 랜딩페이지

거상스쿨 AI 마케팅스쿨 16기 공식 랜딩페이지입니다.

---

## 파일 구조

```
deploy/
├── index.html          ← 메인 랜딩페이지
├── support.js          ← DC 런타임 (필수)
├── images/             ← 이미지 폴더
│   ├── logo.png
│   ├── ai-tools-new.png
│   ├── roadmap-v2.jpg
│   ├── month1-roadmap-new.jpg
│   ├── month2-roadmap-new.jpg
│   ├── month3-roadmap-new.jpg
│   ├── result-graph-new.jpg
│   ├── instructor-photo.jpg
│   ├── instructor-books-v2.jpg
│   ├── flywheel-detail.png
│   ├── week1-notion.jpg ~ week12-vibecoding.jpg
└── README.md
```

---

## GitHub 업로드 방법

### 방법 A: GitHub 웹사이트에서 직접 업로드

1. [github.com](https://github.com) 접속 → 로그인
2. **New repository** 클릭
3. Repository name 입력 (예: `ai-marketing-school`)
4. **Public** 선택 → **Create repository** 클릭
5. **uploading an existing file** 클릭
6. `deploy/` 폴더 안의 모든 파일과 `images/` 폴더 전체를 드래그 앤 드롭
7. **Commit changes** 클릭

### 방법 B: Git CLI 사용

```bash
git init
git add .
git commit -m "AI 마케팅스쿨 랜딩페이지 배포"
git branch -M main
git remote add origin https://github.com/[유저명]/[저장소명].git
git push -u origin main
```

---

## Vercel 배포 방법

1. [vercel.com](https://vercel.com) 접속 → GitHub 계정 연동
2. **Add New Project** → GitHub 저장소 선택
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

## 기술 스택

- HTML5 + CSS3 (반응형)
- Vanilla JavaScript (React 기반 DC 런타임)
- Google Fonts (Noto Sans KR)
- Font Awesome 6.4.0 (CDN)
- 정적 호스팅 최적화

---

© 2026 거상스쿨. All rights reserved.
