// 큰 문단 이름
const elements = document.querySelectorAll(".geS5n");

const 원하는거찍기 = (el, vd3ttElements, listNum) => {
  const vd3El = vd3ttElements[listNum];
  const rect = el.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: x,
    clientY: y,
  });
  vd3El.dispatchEvent(event);
};

const 랜덤찍기 = (el, vd3ttElements) => {
  const randomIndex = Math.floor(Math.random() * vd3ttElements.length);
  const randomElement = vd3ttElements[randomIndex];
  const rect = el.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: x,
    clientY: y,
  });
  randomElement.dispatchEvent(event);
};

elements.forEach((element) => {
  // 상세 제목
  const elIf = element.querySelector(".M7eMe");
  // 버튼 이름
  const vd3ttElements = element.querySelectorAll(".vd3tt");
  if (elIf && elIf.textContent === "위의 내용을 모두 읽고 동의하십니까?") {
    원하는거찍기(elIf, vd3ttElements, 0);
  } else if (elIf && elIf.textContent === "귀하는 대학 재학 중입니까?") {
    원하는거찍기(elIf, vd3ttElements, 1);
  } else if (vd3ttElements.length > 0) {
    랜덤찍기(element, vd3ttElements);
  }
});

/** 버튼사용시 이줄, 맨마지막 줄 삭제
const 다음버튼 = (bVal) => {
  if (bVal.textContent === "다음") {
    const ev = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: bVal.getBoundingClientRect().x + bVal.offsetWidth / 2,
      clientY: bVal.getBoundingClientRect().y + bVal.offsetHeight / 2,
    });
    bVal.dispatchEvent(ev);
  }
};


const btnText = document.querySelectorAll(".NPEfkd");
const btns = document.querySelectorAll(".uArJ5e");
 
btns.forEach((els) => {
  const bText = els.querySelector(".NPEfkd");
  const bVal = els.querySelector(".l4V7wb");
  if (bText && bText.textContent === "다음") {
    다음버튼(bVal);
  }
});
*/
