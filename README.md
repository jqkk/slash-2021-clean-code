## 개요

[토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code](https://www.youtube.com/watch?v=edWbHp_k_9Y) 영상에서 예시로 설명한 요구 사항을 구현해본 프로젝트입니다.

## 요구 사항

- 질문을 입력받는다.
- 질문 입력 후 완료를 누르면 팝업을 띄운다.(필요한 팝업을 순서대로 모두 띄워준다.)
   1. 현재 대기 중인 연결 전문가가 있는 경우, 질문을 받아줄 연결 전문가의 사진을 팝업으로 띄워준다.
   2. 약관 동의를 하지 않았을 경우, 약관 동의 여부 팝업을 띄워준다. 약관 동의 여부 팝업의 응답으로 취소를 눌렀으면, 질문 등록을 하지 않고, 다음 팝업을 보여주지 않는다.
   3. 질문 등록 완료 팝업을 띄워준다.
- 질문 등록이 완료되면 입력창이 초기화된다.

## 디자인 시안

[Design](https://www.figma.com/file/oDhME9M41AV9hbVPBt7BHs/slash-2021-clean-code?node-id=0%3A1&t=3D0uiDEVxqr36OIP-1)

## 실행 방법

- node js가 설치가 선행되어야 합니다.(v16.16.0)

- 만약 pnpm이 설치되어 있지 않은 경우, 아래의 명령어로 pnpm을 설치합니다.

```shell
npm i -g pnpm
```

- 아래 명령어로 실행시킬 수 있습니다.

```shell
pnpm i && pnpm dev
```

## 기술 스택

```
- typescript
- react 18
- jotai
- framer-motion
- axios
- tailwind
- twin-macro
- emotion
- msw
- husky
```

## 추가로 고려했던 사항

- framer-motion의 AnimatePresence를 적용하여 팝업이 마운트/언마운트 될 때, 부드럽게 보여지도록 처리하였습니다.
- react-query를 사용하는 것을 선호하지만 해당 프로젝트에서 사용하는 것은 오버 엔지니어링이라고 생각하여 axios를 직접 호출하는 형태로 구현하였습니다. POST call의 경우, useMutation의 onMutate, onSuccess, onError 콜백을 이용하여 컴포넌트 덩치를 줄일 수 있었지만, 현재 대기 중인 연결 전문가를 받아오는 GET call을 할 때, react-query를 적용한다고 하면, 입력 제출 버튼을 누르는 시점에 fetch 해와야 되므로, useQuery의 enabled 옵션을 사용해야하고, 이에 따른 부가 state를 정의해야하므로 더 복잡해질 수 있다고 생각하였습니다. 물론 이때는 useQuery를 사용하지 않고 직접 axios get을 하는 형태로 사용하고, 나머지는 react-query를 이용할 수 있지만, 이렇게 되면 useMutation을 사용하려고 react-query를 사용하는 꼴이 되어버립니다. 그래서 react-query를 사용하지 않고, 직접 axios를 호출하는 구현을 하였습니다.
## 해결하지 못한 이슈

- 현재 대기 중인 연결 전문가가 있는 경우, 질문 완료 Alert의 타이틀을 "질문이 등록되었어요"가 아닌 "~~에게 질문이 등록되었어요"라고 보여주고 싶었지만, 초기에 디자인 시안을 짤 때, 이를 고려하지 않고 디자인 하여 text overflow가 발생하였습니다. 그래서 현재 대기 중인 연결 전문가가 있는 경우의 Alert에 대해서도 기존과 동일하게 "질문이 등록되었어요" 타이틀을 보여주게 되었습니다.

## 폴더 구조

```
.
├── atoms
├── components
├── config
├── domains/
│   ├── api
│   ├── components
│   └── hooks
├── hooks
├── mocks
├── pages
├── styles
├── types
└── utils
```

- atoms : 도메인에 종속되지 않은 전역 상태를 정의합니다.

  - ex) theme, loading, alert

- components : 도메인에 종속되지 않은 순수한 컴포넌트를 정의합니다. 다른 프로젝트에서 해당 폴더를 떼어서 사용할 수 있을 정도의 순수성을 유지합니다.

  - ex) button, input

- config : 프로젝트에 필요한 설정들을 정의합니다.

  - config/rest : axios 관련 설정과 endpoint path가 들어있습니다.

- domains : 도메인과 연관된 요소들을 정의합니다. 이 프로젝트에서는 도메인이 단순하기 때문에 domains 하위 폴더에서 api, components, hooks로 나누어 관리하였지만, 도메인이 복잡해질 경우, 도메인 별로 폴더로 구분하도록 합니다. 도메인을 나누기 애매한 요소들(ex. Header)은 shared 폴더를 만들어 관리합니다.

  - domains/api : api 호출 로직을 작성합니다.
  - domains/components : 도메인이 주입된 혹은 연관된 컴포넌트들을 정의합니다.
  - domains/hooks : 도메인과 연관된 커스텀 훅을 정의합니다.
  - domains/atoms : 도메인과 연관된 전역 상태를 정의합니다.

- hooks : 도메인에 종속되지 않은 커스텀 훅을 작성합니다.

  - ex) useInput, useBoolean

- styles : 글로벌 스타일과 테마를 정의합니다.

- mocks : msw 관련 로직을 작성합니다.

- pages : 컴포넌트를 조합하여 페이지를 정의합니다.

- types : 타입을 정의합니다.

- utils : 어플리케이션 전체에서 사용되는 유틸 함수를 정의합니다.

## 개발 컨벤션

- 파일명/폴더명

  - 폴더 이름은 소문자로 작성합니다. 띄어쓰기 단위는 bar(-)로 표현합니다.

  - 컴포넌트 파일 이름은 파스칼 케이스로 작성합니다.

  - 커스텀 훅 파일 이름은 카멜 케이스로 작성합니다.

  - 그 외 파일은 폴더 이름과 마찬가지로 소문자와 bar(-)를 이용하여 작성합니다.

- 변수명/함수명

  - 기본적으로 변수명/함수명은 카멜 케이스로 작성합니다.

  - 타입은 파스칼 케이스로 작성합니다.

  - 컴포넌트는 파일명과 동일한 이름으로 작성합니다.

  - 되도록 하나의 파일 안에 하나의 컴포넌트만 정의합니다.

  - props의 경우 interface가 아닌 type으로 정의합니다.

  - 변수명/함수명은 해당 변수 또는 함수가 어떠한 일을 하는지 이름만 보고 알 수 있도록 최대한 자세하게 작성합니다.

- 코딩 규칙

  - 컴포넌트 정의는 표현식을 사용합니다.

  - 함수 정의 시, 표현식 사용을 지향합니다.

  - import 순서 : 외부 모듈 -> 절대 경로 -> 상대 경로

  - 하나의 함수가 한가지 일만 하도록 만들려고 노력합니다.

  - 읽기 쉬운 코드를 작성하도록 노력합니다.

  - 같은 것끼리 묶도록 노력합니다.

  - 매개 변수가 3개 이상인 함수를 정의하는 것을 지양합니다.

- 브랜치 전략
   - 기능 별로 "feature/#이슈번호" 브랜치를 따서 개발합니다.
   - 개발 중인 코드는 dev 브랜치에서 관리합니다. 기능 개발이 완료되면 feature 브랜치를 dev 브랜치에 병합합니다.
   - 배포 버전은 main 브랜치에서 관리합니다. 배포 시점에 dev 브랜치를 main 브랜치에 병합합니다.
- 커밋 메시지 규칙
   - (이모지 타입 이모지) (커밋 타입): 커밋 설명
      - :sparkles: feat : `새로운 기능 추가에 관한 커밋`
      - :bug: fix : `버그 수정에 관한 커밋`
      - :memo: docs : `문서 작성에 관한 커밋`
      - :recycle: refactor : `리팩토링 작업에 관한 커밋`
      - :truck: chore : `기타 자잘한 코드 수정에 관한 커밋`
  - stage 후, pnpm commit 명령어를 이용하면 위 구조에 맞도록 쉽게 커밋할 수 있습니다.
## 컴포넌트의 덩치를 줄일 수 있는 방법

1. custom hook을 활용한다.

2. container-presenter 패턴을 활용한다.

3. container-presenter 패턴과 custom hook을 함께 활용한다.

4. 컴포넌트를 더 높은 단계로 추상화시킨다.