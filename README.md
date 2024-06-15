# 🦁한국외국어대학교 멋쟁이사자처럼 미니프로젝트 2팀 프론트엔드 레포지토리🦁

<div align="center">
  
![header](https://capsule-render.vercel.app/api?type=waving&height=300&color=0:FCE6F1,50:F48B9F,100:FCE6F1&text=[%20🎀%20네컷일기%20]&desc=2024%20한국외대%20멋쟁이사자처럼%20미니프로젝트%20최우수상%20&descAlignY=56&descAlign=50&fontAlign=51&fontAlignY=40&fontSize=50&fontColor=ffffff)

<b>[ 🎀 내 손안의 인생네컷 일기장: 네컷일기 ] </b><br>
<b>🏆 2024 한국외대 멋쟁이사자처럼 <미니프로젝트> 최우수상 수상</b> 🏆<br>

<b>💻 배포 사이트</b> : https://4cutsdiary.klr.kr
<br>

<img src="https://github.com/hufslion-12th/team2-front/assets/118183190/9b5a90fc-2a53-4aa6-9b3c-38801573b70c" width="70%"/>



### 🌸 Developers 🌸
|FE 팀장 | FE | FE |
| :---: | :---: | :---: |
|  <img style="width: 200px;" src="https://github.com/hufslion-12th/team2-front/assets/118183190/8a916879-16c8-4707-80f6-a5fa981bdf5a" />  | <img style="width: 200px;" src="https://github.com/hufslion-12th/team2-front/assets/118183190/40e8c272-9b88-46ba-9144-51c0d5b3dd8a" /> | <img style="width: 200px;" src="https://github.com/hufslion-12th/team2-front/assets/118183190/de41cbc4-14bc-4d05-abcf-9ea5bf997b7b" /> |
|한국외국어대학교|한국외국어대학교|한국외국어대학교|
|환경학과 21|융합인재학부 24|GBT학부 19|
|김현아|김규린|조윤해|
|   [@wiseah](https://github.com/wiseah)   |  [@grace0404](https://github.com/grace0404)     |   [@yunhaecho](https://github.com/yunhaecho)   |

### 🛠️ Tech 🛠
<img src="https://skillicons.dev/icons?i=react,styledcomponents,spring,mysql,docker,nginx,aws,jenkins" alt=""/>
<br>
</div>

<br>

### 🔖 소개
  - QR코드로 인생네컷 사진을 다운 받아 글과 함께 일기를 쓸 수 있는 서비스로, 사용자가 특별한 순간을 기록하고 그 순간을 사진과 함께 간직할 수 있도록 기획 및 개발되었습니다.
  - 지금 바로 '네컷일기'를 이용하여 소중한 순간을 기록해보세요!

### 🎯 목표
  - 사용자가 인생네컷을 쉽게 다운로드하고 이를 바탕으로 일기를 작성할 수 있도록 하여, 일상 속 소중한 순간을 간편하게 기록하도록 돕는 것이 주된 목표입니다.
  - QR코드 스캔을 통해 간편하게 사진을 업로드 할 수 있고 직관적인 인터페이스를 제공합니다.

### 🔗 주요 기능

  #### 1️⃣ QR 스캔 / 직접추가하기로 사진 추가
  - QR 코드를 스캔하여 인생네컷을 찍은 후 바로 일기 작성을 할 수 있습니다.
  - 이미 있는 사진을 업로드하고 싶다면 직접추가하기를 통해 갤러리에 있는 사진을 추가하여 일기 작성도 가능합니다.

  #### 2️⃣ 일기 작성
  - 다운로드한 사진을 첨부하여 일기를 작성할 수 있습니다.


  #### 3️⃣ 추억별 앨범 분리
  - 앨범 생성을 통해 모임별, 추억별로 개별화된 앨범을 만들 수 있습니다.
  - 개별화된 앨범을 통해 다양한 추억별로 일기를 모아볼 수 있습니다.

  #### 4️⃣ 소셜 공유기능
  - 작성한 일기를 링크로 공유가능합니다.


<br>


----
# 🔥 협업룰

## 개발 환경 세팅

- Node.js 18+를 설치합니다.
- 터미널을 열고 `npm install`을 입력하여 패키지를 모두 설치합니다.
- `npm run start` 명령어로 개발 서버를 실행합니다.

## Commit Convention

커밋 요약은 "(type): (content)" 형식으로 작성합니다.

type은 영어 소문자로 작성하며, content는 한국어로 명확하게 작성합니다. 요약이 너무 길어지면 세부적인 내용은 커밋 설명에 풀어적고 요약은 간결하게 수정합니다.

| type     | 설명                                                                      | 예시                                                               |
| -------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| feat     | 새로운 기능 추가                                                          | feat: 로그인 페이지 구현                                           |
| fix      | 버그 수정                                                                 | fix: 320px보다 작은 기기에서 "다음" 버튼이 잘리는 문제 수정        |
| docs     | 문서 수정                                                                 | docs: README.md에 커밋 컨벤션 추가                                 |
| style    | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우                         | style: 모든 따옴표를 쌍따옴표로 수정                               |
| refactor | 코드 리팩토링                                                             | refactor: axios request를 axios instance를 이용해서 중복 코드 정리 |
| test     | 테스트 코드 구현                                                          | test: postLogin, postRegister 함수의 테스트 케이스 추가            |
| chore    | 패키지 매니저 수정, 빌드 CI/CD 설정 수정, 깃허브 설정 수정 등 잡다한 일들 | chore: package.json에 redux 패키지 추가                            |

## PR Convention

PR 제목은 커밋 요약과 동일하게 "(type): (content)" 형식으로 작성하며, 내용은 다음을 포함하여 작성합니다.

### Changes 📝

이 PR에서 작업한 사항을 적어주세요.

### Screenshot 📷 (선택)

작업한 사항을 스크린샷으로 찍을 수 있다면 (예: 신규 페이지 구현, 새로운 컴포넌트 구현) 스크린샷을 찍어서 올려주세요. 반드시 올릴 필요는 없습니다!

### To do Next ➡️

<!-- 다음에 진행할 업무에 대해서 적어주세요. -->

다음 진행할 업무를 작성합니다.
