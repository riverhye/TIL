## HTML

### 1. 정의

HTML은 HyperText Markup Lanuage의 약어이다.

- 텍스트 밖을 넘나드는
- 마크업으로 된
- 언어

로 쪼개어보면 직관적으로 이해할 수 있다.

먼저 `텍스트 밖을 넘나든다`는 건 화면에 단순히 표시되는 게 아니라 지금 화면(웹페이지)에서 다른 웹페이지로 이동이 가능하다는 말이다. 이걸 한 마디로 축약할 수 있다. `링크`.

그럼 이 링크는 어떻게 사용하는가? 마크업 언어로 쓴다. 마크업은 상대적으로 아리송하니까 우리에게 친숙한 `언어`부터 살펴보자.

언어란 문자에 담긴 의미표현이다. 그런데 개개인이 다른 의미를 부여한 게 아니라 `사회적으로 통일된 약속`을 전제로 한다. '컵'을 말하면, 각자 떠올리는 색, 모양을 비롯한 디자인은 다를 수 있어도 컵의 기능적 의미와 역할엔 동의하듯이. 그래야 언어의 목적인 `원활한 의사소통`이 가능하기 떄문이다.

html의 언어는 문서 구조를 명기하는 것이 목표인데 `태그` 등을 사용한 마크업 언어로 문서의 구조를 나타낸다. html의 요소를 살펴본 후, 태그로 이루어진 전체구조가 어떻게 생겼는지 살펴보자.

## 2. element

![](https://developer.mozilla.org/en-US/docs/Glossary/Element/anatomy-of-an-html-element.png)

- 큼지막하게 Tag & Attribute & Content로 이루어졌다.
- 태그를 열어 태그명을 작성`<p>`하고
- 태그 자체로 설명이 불충분해서 보조 역할이 필요하거나 별칭으로 치환할 때엔 속성(attribute) `class="nice"`도 태그명 다음에 작성

=> `<p class="nice">`

- content(내용이 될 텍스트) 작성 `Hello world!`
- 태그 닫기 `</p>`

=> `<p class="nice">Hello world!</p>`

> cf. 일부 태그는 스스로 여닫는다.

- `<img />`, `<input />`, `<a />`

### 2.1. VSCode에서 html 만들기

- VSCode에서 확장자 `.html`로 파일 생성 후, `!` 입력

![](./img/html%20_structure.png)

### 2.2. html의 두 파트 : `<head>`와 `<body>`

### 2.2.1. `<head>`

- To configure document

- content가 아니기 때문에 웹 페이지에선 텍스트나 이미지 등으로 보이지 않지만, document의 metadata(데이터를 설명하는 데이터)를 포함한다.

ex.

`<meta>`

- 문서에서 허용하는 문자 집합 설정(charset), 메타데이터의 author(name, content)에 관한 정보를 기입하는 등의 역할.
- 구글 같은 검색엔진에서 혹은 카카오톡에서 어떤 화면으로 보여줄 것인지도 설정할 수 있다. (og:image, og:description)

```
<meta charset="utf-8" />
<meta name="author" description="me" />
```

`<title>`

- 문서 상단에 쓰인 제목

```
<head>
  <meta charset="utf-8" />
  <meta name="author" description="me" />
  <title>document</title>
</head>
```

### 2.2.2.`<body>`

- 스크린에 보일 content를 담는다.

- `<br>` 줄바꿈
- `<hr>` 구분선

- `<a>`

  - anchor(link)는 일부 속성값(링크 주소)이 필수.

  ex.

  ```
  <a href="address.com" target="_blank"/>
  ```

- `<img>`

  - 마찬가지로 이미지 소스를 가져올 주소 속성 필수.

  ex.

  ```
  <img src="screenshot.jpg" alt="day1_timetable" />
  ```

### 2.3. `<form>`과 `<input>`

- input type은 text가 기본이지만 써주는 게 관례.
- radio와 checkbox는 name과 value를 속성으로 기입해야 제기능(복수 선택 불가 / 복수 선택 가능)을 한다.

```
<form>
  <input type="text" name="username" value="name" />
  <input type="password" name="pw" value="pw" />
  <input type="checkbox" name="hobby" value="hobby" />
  <input type="radio" name="gender" value="gender" />
</form>
```

그외에도 다양한 tag가 있는데 하나씩 다 기억할 분량이 아니므로 때에 따라 검색하면 된다.

[html tag](https://developer.mozilla.org/ko/docs/Web/HTML/Element)

두 태그에서 보이듯 html은 중첩(Nesting)으로 적기 때문에 부모-자식 관계가 성립한다.

## 3. 주석 처리

`<!-- 여기는 주석 -->`

단축키로는 `Cmd(Ctrl) + /`

## 4. semantic

- 태그 중에서는 `태그명만 읽어도 그 역할과 기능을 알 수 있는 것`과 그렇지 않은 것이 있다. 전자를 시맨틱 구조를 갖췄다고 보아, 최대한 시맨틱하게 작성하기를 권장한다. `태그 가독성`도 높아지고 훨씬 더 `깔끔하게 코드를 정리`할 수 있다.

- 그외에 중요한 2가지 이유가 더 있다.

### 4.1. SEO(Search Engine Optimization)

- 검색엔진은 html 태그를 분석해 웹사이트에 노출한다.
- 이때 non-semantic 태그인 `<div>`로 코드를 채우기보다는 `<nav>`, `<section>`, `<header>`, `<footer>` 등 의미를 이해할 수 있는 시맨틱 태그를 쓰는 게 좋다.

### 4.2. 유지보수성

- 웹사이트 서버를 유지, 보수할 때 온통 논시맨틱 태그로 가득한 환경에서는 특정 요소를 찾기 매우 어렵다.
- 그러므로 최대한 시맨틱 태그를 활용하자.

## 생각

- 무엇이 필요한지 때에 따라 정확히 검색하는 능력이 중요한 것 같다. 어찌보면 단순 암기가 거의 필요 없는 분야 아닐까? 그간 배운 학습방법 중 가장 오래된 것이 암기였는데 자꾸 써보고 확인하는 작업이 훨씬 중요한 모양이다. 그래서 개인 프로젝트를 계속 만들어보라는가보다.

### 프로젝트 기획 초안

- 요즘 이것저것 챙길 일이 많아서 할 일 체크하는 게 힘겨웠다. 메모장에 대충 써갈기다보니 아쉬운 게 많아 만들고 싶은 게 생겼다. 아이폰 기본 메모장과 투두메이트, 리마인드가 적절히 섞인 버전이랄까?
  - **기본 홈화면** : 1주일 간의 투두 리스트가 네모 박스로 7개 쭈루룩 나열
    - 날짜 박스 클릭 시, 전체 화면으로 커져서 오늘 할 일을 기입할 수 있다.
    - 오른쪽 상단 `W` 클릭 시 `ㅁ월ㅇ째주`로 이동 가능
    - 하단 `routine` 클릭 시 반복 투두 설정해둔 거 선택 가능
      - 반복 투두는 `+` 클릭 시 입력 가능
    - 박스 안 투두 리스트가 많아지면 레이아웃을 어떻게?
  - **달력 아이콘** : 월별 보기. 반복 체크한 투두 리스트만 색깔로 표시?
  - 투두 작성 시 왼쪽 상단부터 채워지다가 특정 개수가 넘어가면 column으로 나눠진다.
  - 체크한 건 가장 아래로 내려가고 회색으로 바뀐다.
  - 리스트마다 시간 설정이 가능하고, 내용물 상단에 작게 표시된다.
    - 반복 투두도 적용
  - 각각의 리스트는 block이라서 드래그로 순서 바꿀 수 있음.
