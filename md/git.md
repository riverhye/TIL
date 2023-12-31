## What is Git?

SCM(Source Control Management)이다. 파일 소스를 트랙킹하여 추가/수정/삭제 등 모든 업데이트를 기록 관리한다.

사용자는 파일의 히스토리를 확인할 수 있다.

## GitHub는?

택배가 언제 오나 위치 추적하다가 옥천hub, 곤지암hub 등을 흔히 마주친다. 그곳에 온갖 물류가 한데 모인다. 마찬가지로 여러 가지 파일을 한데 모은 저장소라고 이해했다.

다만 원격 저장소라서 GitHub에 파일을 올리면 로컬(내 PC)이 아닌 클라우드 서버에 저장된다. 로컬 파일을 Github 같은 원격 저장소에 올리는 방법은 두 가지다.

1. 직접 GitHub 레파토지에 파일 업로드
2. GitBash나 Terminal을 통해 레파지토리를 clone하여 `add - commit - push` 과정 거치기

## 1. Git 초기설정

- Github 계정 필요
- 아래 내용을 GitBash(or Terminal)에 작성

```
cd Desktop
mkdir github
cd github
git config --global init.defaultBranch main
git config --global user.name “프로필 이름”
git config --global user.email “이메일 주소”
git config --global --list
```

`cd Desktop`

- Change Directory to Desktop
- 바탕화면(앞으로 파일 만들어 넣을 폴더 장소) 이동

`mkdir github`

- Make Directory named github
- 바탕화면에 `github`라는 폴더 생성

`git config --global`

- config: 설정 변경
  configure
- global: ALL

`git config --global --list`

- See all list inserted

## 2. Github Repository Clone

1. Github에서 레파지토리 생성
   - README.md 파일 생성 체크
2. 해당 레파지토리 링크 `< > Code` 복사
3. GitBash/Terminal에 `git clone 링크주소` 입력

## 3. Local에서 Github로

1. **작업공간** (ex. VSCode)
   작업공간에서 파일 작성 후 저장.

`git add` 입력

cf)

    git add .(띄어쓰기 주의) : 현재 존재하는 모든 파일 추가
    git add./README.md : 특정 파일 추가

이후 `git status`을 입력하면 add한 파일의 현재 상태 (ex. modified)를 확인할 수 있다.

2. **Staging 영역**
   Local Repository에 올릴 파일 선별

`git commit -m "커밋 메세지"` 입력

3. **Local Repository**
   여기까진 Local에 머무는 중

`git push` 입력

cf)

    git push origin branch-name : main이 아닌 다른 branch에 올릴 때 (main은 git push로 충분)

**Remote Repository** (ex. GitHub)

Github 클론한 레파지토리에 파일 업로드 완

## 생각

1. 코드도 결국 영어라서 그런지 고유명사가 아닌 경우 뜻 먼저 파악 -> 외국인이 하는 설명을 복습 겸 들어보면 이해하기 더 좋은 것 같다.
2. 참고 영상에서 main이 아닌 다른 Branch를 만들어서 해당 branch에 먼저 내용 수정을 한 후, 뜻대로 구현이 되었을 때 main에 업데이트 하는 방식을 소개한다. main 업데이트 후 이전 버전으로 되돌릴 수도 있었고.

   이런 식으로 앱 업데이트를 하는 걸까.. 아직도 가끔 카톡이 동그란 말풍선일 떄가 그리운데 구버전 branch가 남아있다면 되돌릴 여지가 있는 건가 궁금해졌다. 하지만 너무 오래 전일이라 main에 통합하지 않았으려나.

   #### 👍 크루 리더님 답변

   현업에서 `main branch`은 배포 가능한 상태로 두고 다른 branch에서 먼저 작업한다. 기능을 개발 branch(`feature`)와 해당 기능을 테스트하는 branch(`develop`)를 만들어 두 과정을 거친 후 main으로 옮긴다.

   feature > develop > main

   - 덧붙이는 생각
     > git을 이용하면 이론 상 히스토리 트래킹해서 되돌릴 수 있지만, 많은 업데이트를 한 번에 했을 경우 하나씩 되돌리기 번거로울 것이다.

## 참고

[Git and GitHub for Beginners Tutorial] (https://www.youtube.com/watch?v=tRZGeaHPoaw)
