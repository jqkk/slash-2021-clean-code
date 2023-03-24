## 요구 사항

-

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

## 고려했던 사항

- 

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

- 브랜치 관리
   - 기능별로 
- 커밋 메시지 규칙
   - feat

## 컴포넌트의 덩치를 줄일 수 있는 방법

1. custom hook을 활용한다.

2. container-presenter 패턴을 활용한다.

3. container-presenter 패턴과 custom hook을 함께 활용한다.

4. 컴포넌트를 더 높은 단계로 추상화시킨다.