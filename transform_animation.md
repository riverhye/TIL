# CSS 챌린지 : animation, transform, transition

### Description On Animation

- 양끝 circle은 반원 포물선을 그리며 서로의 자리를 대체
  - 오른쪽 circle -> 시계 반대방향 포물선 -> 왼쪽 circle 자리
  - 왼쪽 circle -> 시계 방향 포물선 -> 오른쪽 circle 자리
  - 1초 동안 동작 -> 반복
- 막대bar는 각 막대에 delay가 있어 차례로 크기가 커지기
  - 1초 동안 동작 -> 반복
- 기본적으로 flexbox 형태

<img width="592" alt="Screen Shot 2023-09-20 at 12 22 32 AM" src="https://github.com/riverhye/TIL/assets/77149171/c5bef61a-cfaf-463c-b09a-46e872cb0a99">

## 1. circle

### 1.1 Keypoint

반원 형태로 움직임을 만드려면
`transform: rotate() translate() rotate()`
순서대로.

### 1.2. Solve process

- circle은 from - to 애니메이션 형태로 가능할 것 같았다.

- 직선으로 위를 찍고 아래로 내려오는 ^ 형태는 구현할 수 있었는데, 어떻게 해야 원처럼 부드럽게 될런지 감이 안 잡혔다.

그래서 rotate에 대한 mdn 자료를 찾아봤는데, Translate과 rotate의 순서를 바꾸면 위치가 달라짐을 발견했다.

<img width="804" alt="Screen Shot 2023-09-20 at 12 27 59 AM" src="https://github.com/riverhye/TIL/assets/77149171/bcae637b-d86c-4317-baba-0eb97ce79cbe">

지금 보니 확실히 rotate translate로 병기해야 하는 게 맞는 듯 싶다.

근데 처음 봤을 땐 오히려 translate부터 써보자는 생각이 들었다. 여태 rotate translate 조합으로 선 형태의 움직임은 만들었으나, 포물선 모양은 안 나왔어서.

별다른 방법을 얻지 못해서 비슷한 포물선 animation을 검색해 코드를 카피하여 내 것과 비교했다.

### 1.3. 아쉬운 점

- 구현되는 것을 확인하며 완성은 했지만, 어떤 원리로 포물선이 생긴 건지 모르겠다.
  - 오->왼으로 향하는 반원은 가운데가 TranslateY이고 왼->오는 Translate이다.
- 좀 더 높이가 큰 포물선을 그리고 싶은데 그러려면 단계를 여럿으로 쪼개면 되는 것일까? 0% 20% 40% 100% 이런 식으로.

### 1.4. 알게된 점

- rotate는 X,Y 값을 병기하지 않고 그냥 `rotate(60deg)`만 해도 X축 기준으로 움직인다.
- flex-direction이 column인 상태라, transform의 X축과 Y축이 반대로 작동하는 것 같다.

## 2. bar

### 2.1. Keypoint

각 요소별 animation-delay .1s 차등 설정

### 2.2. Solve Process

scale로 1 -> 1.5 등으로 변환하하는 건 알아차렸는데, 중구난방으로 움직였다. transition-delay를 써서 전혀 delay가 되지 않았던 것.

여기서 힌트를 다시 읽어보니 animation-delay였다. 여긴 왜 transition이 전혀 작동하지 않을까? 오늘 새싹 수업에서는 transition-delay로 모든 걸 해결해서인지 헷갈렸다.

> 둘의 차이를 짧게 정리하자면 이렇다.

**animation-delay**

@keyframes을 사용한 animation의 동작 수행 시간에 영향

**transition-delay**

특정 상태(ex. hover, active)일 때의 동작 수행 시간에 영향

### 2.3. 아쉬운 점

- 써클과 바의 타이밍이 동일하지 않다. 써클은 딱 1초 간격으로 시작과 끝이 보이는데, 후자가 약간 느리다.
  - bar의 transition-delay, animation-delay, transition 지속시간 다 건드려 봤는데 답을 찾지 못했다.... 어떻게 해야 딱! 딱! 떨어지는 마무리가 생길까?
  - tranisition-delay는 엉뚱한 걸 건드린 셈이다. 이건 animation 효과에 관한 문제다.
  - circle에도 animation-delay를 넣으니 해결됐다!!! 생각해보니 bar에는 각 요소들이 차등 delayed여서 결국 .4s간 밀려났다!
    - 하지만 타이밍이 계속 안 맞아서 고생고생하다가 최적의 조합 발견 : **circle 둘은 .2s 딜레이 && bar들은 함수타이밍 ease(기본값)**

### 2.4. 알게된 점

- 절대 못 풀 것 같은 문제를 어느새 얼결에 풀었다. 인강으로 함 정리하며 듣고+새싹에서 재탕하며 빈틈 메우고+인강 챌린지에서 또 메우고+스스로 채우는 과정을 반복하면 여러모로 무장이 되는 것 같다. 잘해보자!
- 물론 여전히 아쉬운 점과 부족한 점이 있지만 그것들이 있기에 공부할 방향이 생기는 것 같다. 적어도 내가 뭘 모르는지는 아니까!

# To Do

1. naver header button `position: absolute;` 분석

2. flexbox layout w/gyeongju

3. learning mate 운영방식 고민
