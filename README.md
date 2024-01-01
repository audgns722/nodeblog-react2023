# 프로젝트 개요

이 프로젝트는 React, Node.js, MongoDB, AWS S3, Firebase 등을 활용하여 블로그를 제작한 프로젝트입니다.

## 개발 환경

React v18.1.0
Node.js v18.0.0
MongoDB v5.0.6
AWS S3
Firebase

## 설치

클라이언트 (CLIENT)

```
npx create-react-app .
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install axios
npm install http-proxy-middleware
npm install @emotion/css
npm install @emotion/react
npm install @emotion/styled
npm install sass
npm install firebase
npm install react-redux
npm install @reduxjs/toolkit
npm install react-avatar
npm install moment --save
```

서버 (SERVER)

```
npm init -y
npm install express
npm install nodemon --save
npm install path --save
npm install mongoose --save
npm install multer --save
npm install aws-sdk@2.348.0
npm install multer-s3 --save // 2.10.0 ver
```

## 프로젝트 구성

<details>
<summary>📦 client</summary>

```
📦client
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📂scss
 ┃ ┃ ┃ ┣ 📂section
 ┃ ┃ ┃ ┣ 📂setting
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📜Main.jsx
 ┃ ┃ ┣ 📂post
 ┃ ┃ ┃ ┣ 📜PostArea.jsx
 ┃ ┃ ┃ ┣ 📜PostDetail.jsx
 ┃ ┃ ┃ ┣ 📜PostImage.jsx
 ┃ ┃ ┃ ┣ 📜PostList.jsx
 ┃ ┃ ┃ ┣ 📜PostModify.jsx
 ┃ ┃ ┃ ┗ 📜PostWrite.jsx
 ┃ ┃ ┣ 📂reple
 ┃ ┃ ┃ ┣ 📜RepleArea.jsx
 ┃ ┃ ┃ ┣ 📜RepleContent.jsx
 ┃ ┃ ┃ ┣ 📜RepleList.jsx
 ┃ ┃ ┃ ┗ 📜RepleWrite.jsx
 ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┣ 📜UserJoin.jsx
 ┃ ┃ ┃ ┣ 📜UserLogin.jsx
 ┃ ┃ ┃ ┗ 📜UserPage.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┗ 📜Home.jsx
 ┃ ┣ 📂reducer
 ┃ ┃ ┣ 📜store.js
 ┃ ┃ ┗ 📜userSlice.js
 ┃ ┣ 📜App.js
 ┃ ┣ 📜firebase.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜setupProxy.js
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

</details>

<details>
<summary>📦 server</summary>

```
📦server
 ┣ 📂config
 ┃ ┣ 📜dev.js
 ┃ ┣ 📜key.js
 ┃ ┗ 📜production.js
 ┣ 📂image
 ┣ 📂model
 ┃ ┣ 📜Counter.js
 ┃ ┣ 📜Post.js
 ┃ ┣ 📜Reple.js
 ┃ ┗ 📜User.js
 ┣ 📂router
 ┃ ┣ 📜post.js
 ┃ ┣ 📜reple.js
 ┃ ┗ 📜user.js
 ┣ 📂util
 ┃ ┗ 📜upload.js
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

</details>

## 프로젝트 상세 설명

1. 클라이언트 (CLIENT) 설정

- 라우팅을 위한 react-router-dom.
- 서버 통신을 위한 axios.
- 프록시 설정을 위한 http-proxy-middleware.
- 스타일링을 위한 @emotion/css, @emotion/react, @emotion/styled, sass.
- 사용자 인증 및 데이터베이스 연동을 위한 firebase.
- 상태 관리를 위한 react-redux, @reduxjs/toolkit.
- 프로젝트 구조
  - 컴포넌트, 스타일, 유틸리티 등으로 구성된 디렉토리 구조 설정.
  - 각 컴포넌트는 기능별로 분리하여 관리.

2. 서버 (SERVER) 설정

- Node.js 서버 설정 및 필수 패키지 설치
- express를 통한 서버 생성 및 기본 설정.
- 서버 자동 재시작을 위한 nodemon.
- 파일 경로 해석을 위한 path.
- 데이터베이스 연동을 위한 mongoose.
- 파일 업로드를 위한 multer, multer-s3.
- AWS S3와 연동을 위한 aws-sdk.
- 서버 주요 기능
  - express를 사용하여 RESTful API 구현.
  - MongoDB 연결 및 스키마 정의(mongoose 사용).
  - 사용자 인증, 게시물 관리, 파일 업로드 등의 라우트 및 컨트롤러 구현.
  - CORS 문제 해결을 위한 미들웨어 설정.

3. 주요 기능 및 구현 과정

- 라우팅 및 페이지 구성
- react-router-dom을 사용하여 클라이언트 측 라우팅 설정.
- 메인 페이지, 게시물 목록, 게시물 작성, 사용자 프로필 등의 페이지 구현.
- API 통신 및 데이터 관리
- axios를 사용하여 클라이언트와 서버 간의 HTTP 통신 구현.
- redux 및 @reduxjs/toolkit를 사용한 상태 관리.
- 사용자 인증 및 파일 업로드
- firebase를 사용한 사용자 인증 및 관리.
- multer 및 multer-s3를 사용하여 파일 업로드 및 AWS S3와의 통합.
- react-avatar 사용(추가필요)
- moment 사용(추가필요)

## 참고

1. React와 Redux를 사용한 상태 관리
   - Provider 컴포넌트
     - Provider는 react-redux 라이브러리에서 제공되는 컴포넌트입니다.
     - React 애플리케이션에서 Redux 스토어를 사용할 수 있게 해줍니다.
     - Provider는 애플리케이션의 최상위 컴포넌트로 사용되어, Redux 스토어를 애플리케이션의 모든 컴포넌트에 전달합니다.
   - Redux 스토어
     - 스토어(store)는 Redux에서 상태(state)를 보유하고 관리하는 중앙 저장소입니다.
     - 애플리케이션의 전체 상태를 한 곳에서 관리하여, 상태 관리의 복잡성을 줄이고 예측 가능하게 합니다.
   - Redux의 역할
     - Redux는 React와 함께 사용되는 상태 관리 라이브러리입니다.
     - 다양한 컴포넌트 간의 상태 공유 및 업데이트를 효율적으로 관리할 수 있도록 도와줍니다.
     - Redux를 통해 애플리케이션의 상태가 일관되고, 오류가 적으며, 운영이 용이해집니다.
2. Mongoose와 MongoDB의 상호작용
   - .populate 메소드
     - .populate는 Mongoose에서 사용되는 메소드입니다.
     - MongoDB에서 참조된 다른 컬렉션의 데이터를 가져오는 데 사용됩니다.
     - 특정 필드에 저장된 참조(일반적으로 ObjectId)를 실제 문서로 대체합니다.
     - SQL의 Join과 유사합니다.
     - 다른 컬렉션(테이블)에서 관련 데이터를 결합하여, 보다 풍부한 쿼리 결과를 제공합니다.

## 트러블 슈팅

<details>
<summary>클라이언트에서 text를 보내려는데 undefined 메시지 출력</summary>

- 문제 상황
  클라이언트 측에서 서버로 텍스트 데이터를 전송하려 할 때, 서버 측에서 해당 데이터를 undefined로 받는 문제가 발생
- 원인
  이 문제의 주요 원인은 서버 측에서 body-parser 미들웨어를 사용하지 않아 발생합니다. body-parser는 클라이언트에서 오는 HTTP 요청의 본문을 파싱하여 서버에서 사용할 수 있는 형태로 변환하는 역할을 합니다.
- 해결 방법
  Express 4.16.0 이상 버전에서는 body-parser가 내장되어있습니다.
  ```javascript
  // server index.js
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  ```

</details>
<details>
<summary>git 업로드 과정에서 client파일의 git캐시파일문제</summary>

- 해결 방법
  git rm --cached . -rf 명령어를 사용합니다.  
   이 명령어는 현재 디렉토리와 하위 디렉토리에 있는 모든 파일을 Git 추적 목록에서 제거합니다.

</details>

## 프로젝트 결과

이 프로젝트를 통해 React, Node.js, MongoDB, AWS S3, Firebase를 사용하여 블로그를 구현하는 방법을 학습할 수 있습니다.

## 향후 계획

사용자 인증 및 권한 관리 기능 추가
마이페이지 추가(프로필이미지 변경가능)(완료)
댓글 기능 추가 (완료)
검색 기능 추가 (완료, 최신순 인기순 (sort))
이 프로젝트는 개인 학습 목적으로 제작되었습니다.

## 배포하기

heroku CLI 설치
`npm install -g heroku` 설치
터미널에서 실행(heroku login)로그인
