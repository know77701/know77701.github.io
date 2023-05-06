const box = document.querySelector(".github-chart");
const container = document.querySelector(".chart-container");
const mainContainer = document.querySelector(".main-container");
const mainImgContainer = document.querySelector(".main-img");
const welcomeContainer = document.querySelector(".welcome-container");
const qaContainer = document.querySelector(".qa-container");
const wdContainer = document.querySelector(".wd-container");
const list = [
  43, 44, 45, 46, 47, 83, 84, 85, 86, 87, 88, 124, 125, 126, 165, 166, 206, 207,
  247, 248, 249, 289, 290, 291, 292, 293, 250, 251, 252, 208, 50, 51, 52, 90,
  91, 93, 94, 131, 132, 134, 135, 172, 173, 175, 176, 213, 214, 254, 255, 257,
  258, 296, 297, 298, 216, 217, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220,
  301, 302, 260, 261, 98, 139, 180, 181, 182, 223, 222, 101, 142, 183, 61, 62,
  102, 103, 143, 144, 184, 185, 225, 226, 267, 266, 307, 308, 64, 65, 106, 105,
  147, 146, 187, 188, 228, 229, 269, 189, 270, 311, 310, 107, 148, 190, 191,
  231, 232, 110, 151, 192, 70, 71, 111, 112, 152, 153, 193, 194, 234, 235, 275,
  276, 316, 317, 73, 74, 155, 156, 196, 197, 237, 238, 278, 279, 319, 320, 77,
  78, 117, 118, 119, 120, 158, 159, 160, 161, 200, 201, 241, 242, 282, 283, 323,
  324, 140, 141, 149, 150,
];

for (let i = 0; i < 365; i++) {
  const el = document.createElement("div");
  el.classList = list.includes(i) ? "item active" : "item";
  box.appendChild(el);
}

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  mainContainer.style.transform = `translateY(${-offsetY * 0.7}px)`;
  mainImgContainer.style.transform = `translateX(${offsetY * 0.5}px)`;
  welcomeContainer.classList = "action";
  welcomeContainer.style.transform = `translateX(${offsetY * 0.3}px)`;
  qaContainer.style.transform = `translateX(calc(200vh - ${offsetY}px))`;
  wdContainer.style.transform = `translateX(calc(-150vh + ${offsetY}px))`;
});
