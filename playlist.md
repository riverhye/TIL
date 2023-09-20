## 아이콘 삽입

1. body 아래에 아래 내용 입력

<script src="https://kit.fontawesome.com/40fbb262e3.js" crossorigin="anonymous"></script>

2. 이후 Fontawesome 사이트에서 최신 버전(6.4.2)의 Free icon copy

## border 그림자

border(-top/bottom/left/right)-width

border보다 윗쪽에 정렬해야 보인다.

## 리스트 반복 시

1. ul & li 사용
2. line-style: none;

ul은 기본적으로 왼쪽에 padding이 있고, list는 block 요소인데다가 알아서 정렬이 잘 되었다.

처음엔 inline이 불편하니까 텍스트 위주의 block 요소인 heading을 썼는데 생각해보니 이름의 기능을 무시한 거라서 안 하느니만 못하다!

## 레이아웃 짜기

헷갈리면 수기로 네모박스 작성 후, 보면서 짜기.

언젠가 안 보고 척척 box 만들 날이 오겠지?

## 궁금한 점

- flex상태인 div 안에 span 같은 inline 요소가 있을 때 그걸 display:block으로 바꾸어 width를 주었는데, 이거 말고 더 좋은 방법이 있을까? 혹은 width 설정 말고 다른 방식으로 정렬 맞출 수 있을까?

- border -> border-width 순으로 써야 하는 이유가 뭘까?
