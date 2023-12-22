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
client
```
📦server
 ┣ 📂config
 ┃ ┣ 📜dev.js
 ┃ ┣ 📜key.js
 ┃ ┗ 📜production.js
 ┣ 📂image
 ┃ ┣ 📜1702434089226_moviemock.png
 ┃ ┗ 📜1702434222047_reactportmock.png
 ┣ 📂model
 ┃ ┣ 📜Counter.js
 ┃ ┣ 📜Post.js
 ┃ ┗ 📜User.js
 ┣ 📂router
 ┃ ┣ 📜post.js
 ┃ ┗ 📜user.js
 ┣ 📂util
 ┃ ┗ 📜upload.js
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

server
```
server
 📦server
 ┣ 📂config
 ┃ ┣ 📜dev.js
 ┃ ┣ 📜key.js
 ┃ ┗ 📜production.js
 ┣ 📂image
 ┣ 📂model
 ┃ ┣ 📜Counter.js
 ┃ ┣ 📜Post.js
 ┃ ┗ 📜User.js
 ┣ 📂router
 ┃ ┣ 📜post.js
 ┃ ┗ 📜user.js
 ┣ 📂util
 ┃ ┗ 📜upload.js
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

## 프로젝트 제작 과정

### 제작과정

Express 프레임워크를 사용하여 서버 생성
MongoDB 연결
CORS 설정
body-parser를 사용하여 요청 데이터 처리
MongoDB에 게시물 저장
React Router를 사용하여 라우팅 구현
Axios를 사용하여 서버와 통신
react-redux를 사용하여 상태 관리 구현
emotion 라이브러리를 사용하여 CSS 스타일 적용
글쓰기 작업
react-avatar 사용
moment 사용


## 참고
Provider (세션체크?) : Provider는 React 애플리케이션에서 Redux 스토어를 사용할 수 있도록 하는 react-redux 라이브러리에서 제공되는 컴포넌트입니다. Redux 스토어는 전역 상태를 관리하는 중앙 저장소로 사용되며, Provider는 애플리케이션의 최상위 컴포넌트로 둘러싸져야 합니다.   
"store"는 상태(state)를 보유하고, 상태에 대한 업데이트를 관리하는 중앙 저장소입니다. 
Redux는 React와 함께 사용되는 상태 관리 라이브러리로, 애플리케이션의 전체 상태를 한 곳에서 효율적으로 관리할 수 있게 해줍니다.
.populate("author")는 Mongoose에서 사용되는 메소드로, 특히 MongoDB에서 참조된 다른 컬렉션의 데이터를 가져오는 데 사용됩니다. 이 메소드는 특정 필드에 대한 참조된 문서를 실제 문서로 대체합니다. sql의 join

## 트러블슈팅
클라이언트에서 text를 보내려는데 undefined 메시지 출력: body-parser 미들웨어를 사용하지 않아 발생한 문제 해결
트러블슈팅 부분에 git rm --cached . -rf 명령어를 추가하여 .gitignore 파일에 지정된 파일을 제외하고 .git 캐시를 삭제합니다.

## 프로젝트 결과
이 프로젝트를 통해 React, Node.js, MongoDB, AWS S3, Firebase를 사용하여 블로그를 구현하는 방법을 학습할 수 있습니다.
서버 config .env 환경변수 설정


## 향후 계획
사용자 인증 및 권한 관리 기능 추가
마이페이지 추가(프로필이미지 변경가능)
댓글 기능 추가 (완료)
검색 기능 추가 (완료, 최신순 인기순 (sort))
기타
이 프로젝트는 개인 학습 목적으로 제작되었습니다.

## 추가 정리
서버 제작 과정에서 body-parser 미들웨어 사용 항목을 추가하여 요청 데이터를 처리하는 방법을 상세히 설명했습니다.
