# 🥇RiceCake🥇

## 🚄:프로젝트 소개
: 매일 밥을 먹듯이 쓰는 나만의 달콤한 일기와 케이크처럼 특별한 나만의 글 조각들을 작성하고 하나의 단편선 케이크을 만들 수 있는 서비스

## 🍬:팀원 소개 및 담당 역할 
😄김성훈 - backend & frontend
            (user정보 담당 : user FE, 로그인, 로그아웃, 회원가입, 아이디/비밀번호 찾기, 회원가입 메일 전송 등 user BE)
            
😄김형준 - backend & frontend
            (story mode, diary mode 담당 : diary FE, 수정, 삭제, 입력 등 story/diary BE, calendar)
            
😄신지수 - backend & frontend
            (story mode, diary mode 담당 : story FE, 수정, 삭제, 입력 등 diary BE, calendar)
            

## ☺️:도메인 용어 정의
:sunglasses: users : 사용자

:books: storylist : 사용자가 작성한 글의 모음(Cake)

:green_book: story : 사용자가 작성한 글(A piece of cake)

:notebook: diary : 사용자의 일기(Rice)


## DB ERD or 테이블 구조도
![data table](https://user-images.githubusercontent.com/108638803/194300916-6c86d45d-23e7-4b0e-9929-f7060222da0f.png)

![h2](https://user-images.githubusercontent.com/108638803/194301943-414599f0-b307-4328-82e9-17a127d3cb00.png)


## :interrobang:개발 및 실행 환경
:wrench:Back-end

-java : openjdk 11.0.16.1<br>
-spring : 2.7.4

:computer:Front-end

-next : 12.3.1<br>
-react : 18.2.0<br>
-tailwind : 3.1.8<br>
-react-calendar : 3.9.0<br>

## 요구사항
<p>
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white"/>
<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"/>
<img src="https://img.shields.io/badge/Miro-F7C922?style=for-the-badge&logo=Miro&logoColor=050036"/>
</p>
<p>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"  width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="50" height="50" />
</p>

## 🪗:진행 간 규칙
1) 밥먹으면서 일 얘기 금지
2) 어? 금지
  
## :book:API Document
https://documenter.getpostman.com/view/23511779/2s83zfQ5A8#intro

## 🤢:트러블슈팅(에러 내역, 어떻게 해결했는지)
:x:문제 : UserController에서 User정보 없을 시 null로 프론트에 넘겨주면 프론트에서 읽어오지 못하는 문제 발생<br>
:o:해결 : User 정보 없을시 id를 '' 공백 String으로 반환하여 문제 해결

:x:문제 : id 중복검사 시 id값이 바로 세팅되지 않는 문제 발생<br>
:o:해결 : useEffect 사용하여 id값이 변경될 때 마다 id값 바로 적용된 후 id 중복검사 하도록하여 문제 해결

:x:문제 : 스토리, 다이어리 Response 응답 시 User와 순환 참조되는 문제<br>
:o:해결 : 스토리, 다이어리 Response에 있는 User 객체를 userId로 변경하여 string으로 반환하도록 하여 문제 해결

:x:문제 : react-calendar css 수정 적용 불가 문제<br>
:o:해결 : 프로젝트에 node-modules에 있는 react-calendar css가 아닌 사용자 정의 react-calendar css 파일을 만들어서 사용자 정의 css 파일만 import해서 문제 해결




## :rainbow:느낀점
