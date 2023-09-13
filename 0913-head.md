html은 크게 두 파트로 나뉜다.

- head
- body

### 1. head

- To configure document

- content가 아니기 때문에 웹 페이지에선 텍스트나 이미지 등으로 보이지 않지만, document의 metadata(데이터를 설명하는 데이터)를 포함한다.

### 1.1 `<title>`

html 문서 전체의 title 설정한다.

ex.
![title](<Screen Shot 2023-09-13 at 10.05.12 AM.png>)

### 1.2 favicon

`<title>` 옆의 아이콘.

`.ico`, `.gif`, `.png` 확장자 모두 작동한다.

```
<link rel="shortcut sizex="72x72" icon" href="icon.png" />
```

웹 사이트의 shortcut을 홈화면에 저장할 때 나타나는 아이콘도 favicon이다.

### 1.3 `<meta>`

문서에서 허용하는 문자 집합 설정(charset), 메타데이터의 author(name, content)에 관한 정보를 기입하는 등의 역할.

```
<meta charset="utf-8" />
<meta name="author" description="me" />
```

구글 같은 검색엔진에서 혹은 카카오톡에서 어떤 화면으로 보여줄 것인지도 설정할 수 있다. (og:image, og:description)

그외에도 다양한 tag가 있는데 하나씩 다 기억할 분량이 아니므로 때에 따라 검색하면 된다.

[html Element by. mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
