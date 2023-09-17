# 개발자도구로 웹페이지 구경

SeSac 수업에서 개발자도구로 애플 홈페이지의 css요소들을 삭제해 본 게 인상적이었다. 뼈대인 html은 아주 단순하고 투박했는데, hyepertext라는 명칭대로 다른 요소를 링크로 덧댈 수 있기에 무궁무진한 것 같다.

그래서 많은 이들이 사용하는 웹페이지는 어떤 식으로 변수명을 설정하고, 영역을 나누고, 작동하는지 복습 겸 살펴보았다.

## NAVER 홈화면

### 1. 헤더

![](https://velog.velcdn.com/images/riverhye/post/5c6d5b7f-5e76-4afc-a153-fe8606b80c8e/image.png)

    <div id="header" role="banner">

- 헤더 부분에 따로 `<header>`태그를 쓰지 않고(페이지 전체가 다 div이다), div에 클래스명을 header로 주었다.
- div에`role`이라는 속성이 있는 모양이다.
  - role: 위젯, 구조 및 동작에 대한 정보를 전달하여 접근성을 높인다. 명확한 구조와 의미를 부여하는 속성.
  - div는 시맨틱 태그가 아니라서 'header'라는 변수명으로 개발자끼리는 의미구조 명시가 되지만, 컴퓨터가 이해하는 정보가 아니므로 SEO를 위해 속성을 추가한 것 같다.
- 헤더의 content는 1280x262이고, margin이 좌우 72.5px이다.

  - 창 width를 줄이면 content값이 아닌 margin이 줄어든다.
    => `box-sizing: content-box;`
    css 설정 헷갈리지 않게 모든 요소가 content-box 기준일 것으로 예상한다.

### 1.1. 좌측 버튼 영역(바로가기 메뉴)

```
<button id="topAsideButton" type="button" class="btn_menu" aria-haspopup="menu" aria-expanded="false">
<span class="blind">확장 영역</span>
    ::after
</button>
```

- 버튼에 `:hover`했을 때

![](https://velog.velcdn.com/images/riverhye/post/6cb440fd-619a-44ee-94a7-ff01946642f0/image.png)

```
<div class="tooltiip_box"> ~ </div>
```

'바로가기'라는 메시지 창이 아래에 생긴다. 아마 위에 적은 div에 써있을 것 같은데 클릭을 하면 호버를 벗어나므로 확인할 수가 없다..

어떻게 짰을지 내가 아는 범위 한에서 작성해봤다.

```
<span class="btn_hover_msg">바로가기</span>
```

```
#header .header_innder .menu_area
.btn_hover_msg {
    padding: 10px 15px;
    border: 1px solid green;
    border-radius: 20%;
}
```

위에 뾰족한 말풍선은 아이콘으로 추가하면 된다고 들었는데 방법은 아직 모르겠다.

### 1.1.2.버튼의 `aria-expanded=true`일 경우

![](https://velog.velcdn.com/images/riverhye/post/e31a6a8d-1be8-4986-bae6-2b6b39304d25/image.png)

1. 그 아래 layer_box라는 클래스의 aria-hidden=false로 바뀌며, 개발자도구 창에서 보인다.
2. 가상 요소 속성자 `::before`과 `::after` 모두 존재한다.
   (디폴트는 후자만 존재)

```
#header .header_inner
.menu_area .btn_menu[aria-expanded=true]::before {
    content: "";
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #e7eced;
}
```

즉 버튼에 동그란 회색칠이 `::before`의 역할 같다.

<hr>
`position:absolute`에 대한 공부 후 내용 추가.
