const clockBox = document.querySelector(".js-clock");
//따로 클래스명을 주는게 아니라 부모의 객체에서 찾아 선언해준다.
const clockTitle = clockBox.querySelector("h1");

function getTime() {
  const date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();
  // 삼항 연산자를 이용한 방법이다.
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}시${
    minutes < 10 ? `0${minutes}` : minutes
  }분${seconds < 10 ? `0${seconds}` : seconds}초`;
}
function init() {
  getTime();
  //setInterval은 (함수명, ms(밀리세컨드))로 구성되어있고 뒤에 설정한 숫자마다 앞에적은 함수를 실행한다.
  setInterval(getTime, 1000);
}

init();
