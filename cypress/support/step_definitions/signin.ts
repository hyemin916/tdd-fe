import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { RouteHandler } from 'cypress/types/net-stubbing';

import { SIGN_IN } from '../../../src/consts/message';

const mockSignInApiResponse = (option: RouteHandler) => {
  cy.intercept('POST', 'http://localhost:8080/api/auth/signin', option);
};

Given('나는 로그인 페이지에 접속했다', function () {
  cy.visit('http://localhost:3000/signin');
});

When(/^나는 올바른 로그인 정보를 입력한다$/, function () {
  mockSignInApiResponse({ fixture: 'signInResponse' });
  cy.getByTestId('username').type('hyemin');
  cy.getByTestId('password').type('123');
});

When(/^나는 로그인 버튼을 클릭한다$/, function () {
  cy.getByTestId('login-button').click();
});

Then(/^나는 로그인에 성공하여 차트페이지를 보아야 한다$/, function () {
  cy.url().should('include', '/chart');
});

When(/^나는 잘못된 로그인 정보를 입력한다$/, function () {
  mockSignInApiResponse({ statusCode: 400 });
  cy.getByTestId('username').type('hyemin');
  cy.getByTestId('password').type('wrong');
});

Then(/^나는 로그인에 실패하여 오류 메세지를 보아야 한다$/, function () {
  cy.getByTestId('error-message').should('contain', SIGN_IN.authFailed);
});
