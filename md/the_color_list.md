## 현 상태

노마드코더 카톡 클론 챌린지 day 7

<img width="1440" alt="Screen Shot 2023-09-18 at 6 44 27 PM" src="https://github.com/riverhye/TIL/assets/77149171/13ab19ca-909d-403e-92d5-ab0605157163">

- 보라색 div 전체: color list
- 색깔별 div: color box

즉 color list 하위 요소에 color box 4개 배치.

## 원하는 방향

- 화면 크기에 상관없이 div 하나로 묶인(사진의 보라색) 이 리스트의 color box를 각각 2개씩 2줄로 배치.
- 그러다 창 크기를 줄이면 자식 요소들이 그에 맞춰 줄바꿈(wrap).

## 접근 1. 부모인 body의 width를 제한

```
body {
    margin-left: 350px;
    width: 700px;
}
```

- 중앙 정렬하려고 margin-left 설정.

<img width="1436" alt="Screen Shot 2023-09-18 at 7 12 07 PM" src="https://github.com/riverhye/TIL/assets/77149171/b38e530d-1f83-4149-8e98-77422a799c44">

- width는 무조건 왼쪽에서 시작해 오른쪽 방향으로 설정된다.
  - width가 정해지면 flex-wrap을 인식 못한다. why?
  - 전체 요소가 0~700px 사이에서 중앙 배열 됨.

### ✅ 부모의 width가 고정되면, 화면 크기 변화에 자식들이 반응하지 않는다.

why?

부모의 width=700px 이라고 딱 고정된 값을 받았으므로, 브라우저 크기를 바꾸어도 여전히 자식들에겐 부모의 width=700px이다.

하지만 부모의 width가 고정되지 않으면 자식은 브라우저 창 크기에 맞춰 부모의 크기를 인식하는 듯하다.

## 접근 2. color list에 absolute

```
body {
    margin-left: 350px;
    width: 700px;
    position: relative;
}

#color_list {
    position: absolute;
    left: 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
```

- 중앙 배열을 위해 body에 width와 margin-left 추가 설정.

<img width="1439" alt="Screen Shot 2023-09-18 at 7 04 50 PM" src="https://github.com/riverhye/TIL/assets/77149171/218c1432-8860-4348-b29d-0f34700ed626">

- 마찬가지로 wrap이 전혀 안 됨.
- position: absolute 사용 시, 새 레이어를 덧댄 것처럼 다른 차원으로 취급되어 inspect 해서 body를 살펴보아도 color list는 포함되지 않는다.
  - 이렇게 하나의 div 속 여러 div를 2x2 배열 등 나눠서 표시하려면 눈대중으로 margin을 맞추는 게 최선인가? 뭔가 center처럼 딱 맞는 방법이 있음 좋겠는데..

## 접근 3. div 더 쪼개기

row를 기준으로 div 만듦

- list_1 > box > box-inner (> h3 h5)
- list_2 > box > box-inner (> h3 h5)

<img width="1438" alt="Screen Shot 2023-09-18 at 9 09 08 PM" src="https://github.com/riverhye/TIL/assets/77149171/488ffc40-66b4-449f-a66a-3187296f5dd9">

```
#second-color-list_1 .second-color-box {
    position: relative;
}

#second-color-list_1 .second-color-box .second-color-box-inner,
#second-color-list_2 .second-color-box .second-color-box-inner {
    background-color: white;
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 15px;
}
```

- wrap도, 중앙 정렬도 모두 OK

## 정리

- 큰 화면에 다소 옹졸맞은 디스플레이를 하려면 row별로 div를 짜는 게 좋겠다.
- 부모에 속성값을 부여하면, 자식 요소들은 부모 말만 듣고 브라우저의 변화는 인지하지 않는다는 게 신기하다. 컴퓨터 운영체제에서 비롯된 이유일까?
