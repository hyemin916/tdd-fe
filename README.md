## TDD-FE

react와 함께 TDD 해보기

### day 1(1h 20m)

- 테스트 환경 세팅하다가 시간 다감

### day 2

- 무엇을 테스트할 것인가?
    - 어차피 브라우저로 확인해야 하는 UI(색깔, 위치, 텍스트, UI 존재 여부(should exist) 등)를 TDD로 작성하는 것은 메리트가 없다
    - 사용자 액션이 필요한 UI는 테스트 코드의 메리트가 조금 있다
    - 액션 -> 모델 -> 뷰에서 테스트할 것은? 어떤 액션이 발생했을 때 모델이 원하는 대로 변하였나
    - 액션은 무엇인지 알겠는데, 리액트 앱에서 모델은 정확히 뭐지?
- 사용자 액션이 필요없는 UI 또한 테스트 코드를 작서앟지 않더라도, 브라우저를 활용해 TDD해보기
    - 브라우저 확인 -> 코드 작성 -> 브라우저 확인 -> 리팩토링 -> 브라우저 확인