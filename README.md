# AI 마케팅스쿨 16기 랜딩페이지

## 파일 구조

```
/
├── index.html        # 메인 페이지
├── style.css         # 스타일시트 (애니메이션, 호버 효과 등)
├── script.js         # 네비게이션 스크롤 인터랙션
├── assets/           # 이미지 및 아이콘
│   ├── logo.png
│   └── a-3_투명.png
├── README.md
└── .gitignore
```

## 배포 방법 (Vercel)

1. 이 폴더 전체를 GitHub 저장소에 업로드
2. [vercel.com](https://vercel.com) 접속 후 로그인
3. **New Project** → GitHub 저장소 선택
4. Framework Preset: **Other** 선택
5. **Deploy** 클릭

> Vercel은 `index.html`이 루트에 있으면 자동으로 정적 사이트로 인식합니다.

## 로컬 실행

```bash
# 간단한 로컬 서버 실행 (Python)
python3 -m http.server 8080

# 또는 Node.js npx serve
npx serve .
```

브라우저에서 `http://localhost:8080` 접속
