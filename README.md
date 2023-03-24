## 요구 사항
- 

## 실행 방법
- 

## 기술 스택
```
- Typescript
- React 18
- jotai
- framer-motion
- axios
- tailwind
- twin-macro
- emotion
- msw
- husky
```

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

- components : 도메인에 종속되지 않은 순수한 컴포넌트를 정의합니다. 다른 프로젝트에서 해당 폴더를 떼어서 사용할 수 있을 정도의 순수함을 유지합니다. 
   - ex) button, input

- config : 프로젝트에 필요한 설정들을 정의합니다.
   - config/rest : axios 관련 설정과 endpoint path가 들어있습니다.

- domains : 도메인과 연관된 요소들을 정의합니다. 이 프로젝트에서는 도메인이 단순하기 때문에 domains 하위 폴더에서 api, components, hooks로 나누어 관리하였지만, 도메인이 복잡해질 경우, 도메인 별로 폴더로 구분하도록 합니다.
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

- utils : 각종 유틸 함수들을 정의합니다.