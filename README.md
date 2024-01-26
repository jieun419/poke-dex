# 포켓몬 도감
![스크린샷 2024-01-06 오후 6 14 56](https://github.com/jieun419/poke-dex/assets/109754988/406a46ef-a8a7-477a-9493-0f473d3b9832)
- 포켓몬 리스트를 확인하고 카드 클릭 시 원하는 포켓몬의 정보를 알 수 있습니다.
- **`작업 기간 :`** 23.09 - 진행 중
- **`배포 링크 :`** [링크](https://je-poke-dex.vercel.app/)
- **`Figma 구상도 :`** [디자인 시안](https://www.figma.com/file/1Gmg1R2fYyPPrbyeWpOkWa/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90?type=design&node-id=0%3A1&mode=design&t=hblSPKcI41uNVdQo-1)
- **`Stack` :** Vite, React, TypeScript, React Query, Redux Toolkit, Styled Components

## 설명
포켓몬 API를 알게되어 작업을 진행하게 되었습니다.
`React Query`는 물론 무한 스크롤링, 다크모드, axios를 공부하기 위해 제작하게 되었습니다.

- 포켓몬을 20개씩 확인할 수 있습니다.
- 스크롤할 경우 20개씩 포켓몬을 확인할 수 있습니다.
- 특정 포켓몬 클릭 시 포켓몬 정보를 확인할 수 있습니다.
- 다크모드/라이트모드로 확인이 가능합니다.

## 작업 사항
![스크린샷 2024-01-27 오전 2 17 04](https://github.com/jieun419/poke-dex/assets/109754988/c06b7535-ab0d-4d7e-ba73-26d8e9afcf51)
- 최적화를 위한 코드 스플리팅
- 이미지 태그에 `loading='lazy'` 추가
- 메인화면 데이터가 없을 경우 로딩화면 연결 `Lazy`, `Suspense`
- 카드 컴포넌트에 포켓몬 데이터가 없을 경우 `스켈레톤` 보이도록 작업
- Redux Toolkit, localStorage를 활용해 다크모드/라이트모드 값을 저장
  - 새로고침해도 테마 유지되도록 작업 
- Axios, useQuery를 활용해 포켓몬 데이터 불러 오기
- `scrollHeight`, `scrollTop`, `clientHeight`요소를 활용해 무한 스크롤 구현

## 관련 링크
[기능][다크모드 구현하기](https://velog.io/@crg1050/다크모드-구현-하기-react-reduxToolkit-styled-components)

## 작업 화면
|Main|Detail|
|------|---|
|![스크린샷 2024-01-06 오후 6 15 25](https://github.com/jieun419/poke-dex/assets/109754988/d2fe1651-8b5d-4fe6-bac6-07425c1bd1bb)|![스크린샷 2024-01-06 오후 6 15 20](https://github.com/jieun419/poke-dex/assets/109754988/7b58dee0-aadf-40fe-83c8-c5b9a1b47f4d)|
|- 상단 로고와 검색버튼, 다크 모드 버튼<br>- 검색창(작업 전)<br>- 포켓몬 리스트를 확인 할 수 있다.|- 포켓몬 카드 클릭 시 상세 정보를 확인할 수 있다.|

|Dark Mode|Dark Mode Detail|
|------|---|
|![스크린샷 2024-01-06 오후 6 15 31](https://github.com/jieun419/poke-dex/assets/109754988/4b719a4f-e2c7-4df9-bdf7-2946c8c4e429)|![스크린샷 2024-01-06 오후 6 20 59](https://github.com/jieun419/poke-dex/assets/109754988/0f1e2b91-aa1e-4489-b47e-cbe24f6baa94)|
|- 다크 모드의 화면|- 다크 모드의 화면|

### Git Commit( feat: “커밋 내용” )

```
init: 초기 세팅을 했을 경우
setup: 폴더 혹은 전체적인 구조의 변경이 있을 경우
feat: 새로운 기능을 추가할 경우
fix: 버그를 고친 경우
docs: 문서를 수정한 경우
style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
refactor: 프로덕션 코드 리팩토링
test: 테스트 추가, 테스트 리팩토링 (코드 변경 X)
chore: 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우 (코드 변경 X)
design: CSS 등 사용자 UI 디자인 변경
comment: 필요한 주석 추가 및 변경
rename: 파일 혹은 폴더명을 수정하는 경우
remove: 사용하지 않는 파일 혹은 폴더를 삭제하는 경우
```
