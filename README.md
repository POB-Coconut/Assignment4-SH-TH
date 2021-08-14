# Wanted Front-end onBoarding # 4

## 💬 프로젝트 개요

 코드와 결과물을 분석해서 앞으로 어떻게 하면 더 큰 규모의 프로그램을 만들어 나갈 수 있을지 코드 리뷰
 
## Review Link 

🔗 Notion Link : https://five-pedestrian-462.notion.site/3-ffe7fa112c97472f8a6a09b2ff92de6f

## 😀 프로젝트 Memebers

| 이름   | GitHub                                    | 담당                                                           |
| ------ | ----------------------------------------- | -------------------------------------------------------------- |
| 남택훈 | [tech-hoon](https://github.com/tech-hoon) | Admin/User: 관리자/일반사용자 컴포넌트, 권한 관리                          |
| 이상훈 | [simoniful](https://github.com/simoniful) | Login/Singup: input, form 커스텀 훅, 유효성 검증               |

## 🐱‍👤 협업 Tool

- Slack, Git-Hub, Notion

### 1. 기본 요구 사항

- 실제 프로덕트라고 가정하고 리뷰한다.
- 확장 가능성에 주안점을 둔다.
- 좋은 점, 나쁜 점에 대해 솔직하게 반응한다.
- 본인의 개발 경험 중심으로 풀어나간다.
- 버그 발견 시, 추측이 아닌 구체적 방법을 제시한다.

### 2. 프로젝트 구조
```html
📦src
 ┣ 📂components
 ┃ ┣ 📂Books
 ┃ ┃ ┣ 📜Book.js
 ┃ ┃ ┣ 📜Pagination.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Form
 ┃ ┃ ┣ 📜Fieldset.js
 ┃ ┃ ┣ 📜Radio.js
 ┃ ┃ ┗ 📜Select.js
 ┃ ┣ 📂Loading
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂SearchForm
 ┃ ┃ ┣ 📜IconFilter.js
 ┃ ┃ ┣ 📜LinkToFilter.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂Stack
 ┃ ┃ ┗ 📜index.js
 ┣ 📂hooks
 ┃ ┣ 📜useForm.js
 ┃ ┗ 📜useSync.js
 ┣ 📂pages
 ┃ ┣ 📂Filters
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Main
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Result
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📜index.js
 ┣ 📂store
 ┃ ┣ 📜books.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜search.js
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜api.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜setupTests.js
```

## Reference

- 이 프로젝트는 [원티드](https://www.wanted.co.kr/)의 과제전형을 참조하여 학습목적으로 만들었습니다.
- 이 프로젝트에서 사용하고 있는 data는 원티드 측에서 제공받았습니다.

