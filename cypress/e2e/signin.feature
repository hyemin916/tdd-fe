Feature: 로그인 페이지

  Background:
    Given 나는 로그인 페이지에 접속했다

  Scenario: 사용자가 로그인에 성공한다
    When 나는 올바른 로그인 정보를 입력한다
    When 나는 로그인 버튼을 클릭한다
    Then 나는 로그인에 성공하여 차트페이지를 보아야 한다

  Scenario: 사용자가 로그인에 실패한다
    When 나는 잘못된 로그인 정보를 입력한다
    When 나는 로그인 버튼을 클릭한다
    Then 나는 로그인에 실패하여 오류 메세지를 보아야 한다
