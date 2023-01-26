# Mercury

백오피스 프론트엔드 프로젝트  
개발서버: https://dev-mercury.ktown4u.io  
운영서버: https://mercury.ktown4u.io

## requirements

```shell
node v16
```

## 디펜던시 설치

```shell
yarn install
```

## 빌드 및 실행

### 빌드

```shell
yarn build # production 모드 빌드
yarn build --mode staging # staging 모드 빌드
yarn build --mode development # development 모드 빌드
```

`dist` 디렉토리에 빌드된 파일이 생성됩니다.

### 개발 모드로 실행

```shell
yarn dev
```

### 빌드된 앱 로컬에서 테스트

```shell
yarn build
yarn serve
```

## 환경변수
- `.env` 모든 상황에서 사용될 환경 변수
- `.env.[mode]` 특정 모드에서만 사용될 환경 변수
- 특정 모드에 대한 환경변수(`.env.[mode]`)는 일반적인 환경 변수(`.env`)보다 높은 우선순위를 가짐

## 기타

### formatting & linting

```shell
yarn lint
```

### 타입체크

```shell
yarn tc
```
