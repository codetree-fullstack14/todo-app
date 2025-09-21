# 📝 ToDo 앱 프로젝트 정리

# 📝 To Do List App (Express + MongoDB)

부트캠프 미션으로 진행한 프로젝트입니다.  
**백엔드 개발 기초**를 학습하며, **Express**와 **MongoDB**를 활용해 간단한 **To Do 리스트 애플리케이션**을 구현했습니다.  

본 프로젝트를 통해 **프론트엔드와 백엔드의 연동 구조**를 이해하고,  
웹 애플리케이션의 전체적인 구성을 경험할 수 있었습니다.  

---

## 📚 습득 역량

- ⚙️ **Express** 서버 설정 및 REST API 구성  
- 🗄️ **MongoDB**를 활용한 데이터 관리  
- ⚛️ **React** 컴포넌트 구조 이해  
- 🌐 서버 사이드 렌더링(SSR)과 라우팅 기초  
- ✨ 기본적인 **CRUD 기능 구현**

---

## 📂 결과물

- 🖼️ **전체 페이지 화면 설계서**  
- 📑 **DB 스키마 구조 문서**  
- 🔗 **To Do 앱 구현 결과물 레포지토리**  

---

## 🚀 실행 방법

# 서버 실행
cd server
npm install
npm start

# 클라이언트 실행
cd client
npm install
npm start

## 1. 프로젝트 개요

- **프로젝트명:** To Do 리스트 웹 애플리케이션
- **사용 기술:** React, Express.js, MongoDB, Node.js
- **개발 목적:**  
  단순 프론트엔드 구현에서 나아가 **백엔드 개발 기초**를 학습하기 위해 **Express**와 **MongoDB**를 활용한 To Do 리스트 애플리케이션을 제작했습니다.  
  이를 통해 **프론트엔드–백엔드 연결 구조**를 이해하고, 전체적인 웹 애플리케이션 구성을 직접 경험하는 것을 목표로 하였습니다.

---

## 2. 주요 학습 및 습득 역량

- ⚙️ Express 서버 설정 및 RESTful API 구성
- 🗄️ MongoDB를 활용한 데이터 저장 및 조회
- ⚛️ React 컴포넌트 구조 설계 및 상태 관리
- ✨ CRUD 기능 구현 (생성, 조회, 수정, 삭제)
- 🔄 프론트엔드–백엔드 간 통신 흐름 이해
- 🌐 서버 사이드 라우팅과 클라이언트 사이드 렌더링 개념 파악 (SSR은 미구현)

---

## 3. 기능 및 화면 구성

### 🏠 메인 페이지 (/)
- 상단 입력창 + 추가 버튼
- 할 일 목록 표시 (체크박스, 삭제 버튼 포함)
- “완료된 목록 보기” 버튼 → `/completed` 이동

### ✅ 완료 페이지 (/completed)
- 완료된 항목만 표시
- 체크 해제 시 미완료로 변경
- “전체 목록 보기” 버튼 → `/` 이동

### 🧩 구성 컴포넌트
- **App** : 메인 엔트리포인트, 전체 라우팅 관리  
- **App.js** : 할 일 목록 렌더링 (완료/미완료 포함)  
- **Form.js** : 새로운 할 일을 추가하는 입력 폼  
- **Completed.js** : 완료된 항목만 필터링하여 렌더링  

---

## 4. 데이터베이스 스키마

**Collection: todos**
- `_id` : ObjectId (자동 생성)  
- `text` : String (할 일 내용)  
- `completed` : Boolean (완료 여부)  
- `order` : Number (정렬 순서)  
- `createdAt` : Date (생성 시간)  

---

## 5. API 명세

- `GET /api/todos` : 전체 목록 조회  
- `POST /api/todos` : 새 할 일 추가  
- `PUT /api/todos/:id` : 특정 항목 수정  
- `PUT /api/todos/order` : 여러 항목 순서 수정  
- `DELETE /api/todos/:id` : 특정 항목 삭제  
- `DELETE /api/todos` : 전체 항목 삭제  

---

## 6. 구현 흐름

1. 서버 실행 후 MongoDB 연결  
2. 클라이언트 → API 호출 (할 일 데이터 불러오기)  
3. 입력 폼을 통한 할 일 추가 (POST)  
4. 체크박스로 완료 상태 업데이트 (PUT)  
5. 삭제 버튼으로 항목 삭제  
   - 개별 삭제 (DELETE /:id)  
   - 전체 삭제 (DELETE /api/todos)  
6. `/completed` 라우트에서 완료 항목만 필터링  

---

## 7. 구현 기능 요약

- **Create:** 할 일 추가  
- **Read:** 목록 조회  
- **Update:** 완료 상태 토글  
- **Delete:** 항목 삭제  
- **추가 기능:**  
  - 완료/미완료 필터링  
  - `/completed` 경로에서 완료 항목만 렌더링  
  - 페이지 간 이동: 클라이언트 사이드 라우팅  

---

## 8. 구현 결과 및 한계

- **현재 구현:** 클라이언트 사이드 렌더링 (CSR)  
  - React + React Router 기반 화면 전환  
  - 장점: 빠른 인터랙션, 풍부한 UX  
  - 단점: SEO 불리, 초기 로딩 지연  

- **서버 사이드 렌더링(SSR): 미구현**  
  - ReactDOMServer, hydration 관리 필요  
  - 학습 목적상 복잡도가 높아 제외  

- **향후 개선 방향**  
  - Next.js를 활용한 SSR/SSG/CSR 적용  
  - SEO 최적화 및 초기 로딩 속도 개선  

---

## 9. 결과물

- **GitHub:** [codetree-fullstack14/todo-app](https://github.com/codetree-fullstack14/todo-app)
