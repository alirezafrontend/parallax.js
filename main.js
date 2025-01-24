const bg1 = document.querySelector(".bg-1");
const sec2 = document.querySelector(".sec2");
const sec3 = document.querySelector(".sec3");
const sec4 = document.querySelector(".sec4");
const sec5 = document.querySelector(".sec5");
const sec6 = document.querySelector(".sec-6");
const logo = document.querySelector(".logo>svg");
const lis = document.querySelectorAll(".nav>ul>li");
const menu = document.querySelector(".menu>a");
const lines = document.querySelectorAll(".line>span");
const pere = document.querySelector(".pere");
const franc = document.querySelector(".franc");
const sec2Text = document.querySelector(".sec2-txt-l");
const imgSec4 = document.querySelector(".img-sec4");
const sec4Img1 = document.querySelector(".sec4-img1");
const sec4Img2 = document.querySelector(".sec4-img2");
const sec4Img3 = document.querySelector(".sec4-img3");
const sec4Img4 = document.querySelector(".sec4-img4");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const footer = document.querySelector(".footer");
const textFooter = document.querySelector(".text-footer");

//

window.addEventListener("scroll", () => {
  let st = window.scrollY;
  if (st >= 0 && st <= 1000) {
    sec2.classList.remove("top-full");
    let sY = (st / 1000) * 100;
    sec2.style.top = 100 - sY + "%";
    bg1.style.filter = `blur(${(st / 1000) * 5}px)`;
  } else if (st > 1000) {
    sec2.style.top = "0%";
    bg1.style.filter = "blur(5px)";
  } else {
    sec2.style.top = "100%";
    bg1.style.filter = "blur(0px)";
  }

  if (st > 900 && st < 9800) {
    logo.style.fill = "black";
    logo.style.width = "100px";
  } else if (st > 9800) {
    logo.style.fill = "white";
    logo.style.width = "100px";
  } else {
    logo.style.fill = "white";
    logo.style.width = "200px";
  }

  if (st >= 1000 && st < 9830) {
    menu.style.color = "black";
    lines.forEach((line) => {
      line.style.backgroundColor = "black";
    });
    lis.forEach((li) => {
      li.style.color = "black";
      li.style.borderColor = "black";
    });
  } else {
    menu.style.color = "white";
    lines.forEach((line) => {
      line.style.backgroundColor = "white";
    });
    lis.forEach((li) => {
      li.style.color = "white";
      li.style.borderColor = "white";
    });
  }

  if (st >= 1000 && st <= 1100) {
    let rightValue = -15 + ((st - 1000) / 100) * 26;
    pere.style.right = rightValue + "%";
  } else if (st < 1000) {
    pere.style.right = "-15%";
  } else if (st > 1100) {
    pere.style.right = "11%";
  }

  if (st >= 1000 && st <= 1200) {
    let rightValue = -15 + ((st - 1000) / 200) * 25;
    franc.style.right = rightValue + "%";
  } else if (st < 1000) {
    franc.style.right = "-15%";
  } else if (st > 1200) {
    franc.style.right = "10%";
  }

  if (st >= 1000 && st <= 1200) {
    let opacityValue = (st - 1000) / 200;
    sec2Text.style.opacity = opacityValue;
  } else if (st < 1000) {
    sec2Text.style.opacity = 0;
  } else if (st > 1200) {
    sec2Text.style.opacity = 1;
  }

  if (st > 1700 && st <= 2700) {
    sec3.classList.remove("top-full");
    let sY2 = ((st - 1700) / 1000) * 100;
    sec3.style.top = 100 - sY2 + "%";
  } else if (st > 2700) {
    sec3.style.top = "0%";
  } else {
    sec3.style.top = "100%";
  }

  if (st > 2900 && st <= 3900) {
    sec4.classList.remove("top-full");
    let sY3 = ((st - 2900) / 1000) * 100;
    sec4.style.top = 100 - sY3 + "%";
  } else if (st > 3900) {
    sec4.style.top = "0%";
  } else {
    sec4.style.top = "100%";
  }

  if (st > 2900 && st <= 2950) {
    imgSec4.style.opacity = 0 + (st - 2900) / 50;
  } else if (st > 2950) {
    imgSec4.style.opacity = 1;
  } else {
    imgSec4.style.opacity = 0;
  }
  if (st > 4000 && st <= 5000) {
    let topValue1 = 110 - ((st - 4000) / 1000) * 210;
    sec4Img1.style.top = topValue1 + "%";
  } else if (st <= 4000) {
    sec4Img1.style.top = "110%";
  } else if (st > 5000) {
    sec4Img1.style.top = "-100%";
  }

  if (st > 4200 && st <= 5200) {
    let topValue2 = 130 - ((st - 4200) / 1000) * 230;
    sec4Img2.style.top = topValue2 + "%";
  } else if (st <= 4200) {
    sec4Img2.style.top = "130%";
  } else if (st > 5200) {
    sec4Img2.style.top = "-100%";
  }

  if (st > 4400 && st <= 5400) {
    let topValue3 = 150 - ((st - 4400) / 1000) * 250;
    sec4Img3.style.top = topValue3 + "%";
  } else if (st <= 4400) {
    sec4Img3.style.top = "150%";
  } else if (st > 5400) {
    sec4Img3.style.top = "-100%";
  }

  if (st > 4600 && st <= 5600) {
    let topValue4 = 170 - ((st - 4600) / 1000) * 290;
    sec4Img4.style.top = topValue4 + "%";
  } else if (st <= 4600) {
    sec4Img4.style.top = "170%";
  } else if (st > 5600) {
    sec4Img4.style.top = "-120%";
  }

  if (st > 5800 && st <= 6800) {
    sec5.classList.remove("top-full");
    let sY4 = ((st - 5800) / 1000) * 100;
    sec5.style.top = 100 - sY4 + "%";
  } else if (st > 5800) {
    sec5.style.top = "0%";
  } else {
    sec5.style.top = "100%";
  }

  if (st > 6000 && st <= 7000) {
    sec6.classList.remove("top-full");
    let sY5 = ((st - 6000) / 1000) * 100;
    sec6.style.top = 100 - sY5 + "%";
  } else if (st > 7000) {
    sec6.style.top = "0%";
  } else {
    sec6.style.top = "100%";
  }

  if (st > 6300 && st <= 6700) {
    let topValue = 50 - ((st - 6300) / 400) * 10;
    box1.style.top = topValue + "%";
  } else if (st <= 6300) {
    box1.style.top = "50%";
  } else if (st > 6700) {
    box1.style.top = "40%";
  }

  if (st > 6500 && st <= 7500) {
    let topValue = 150 - ((st - 6500) / 1000) * 95;
    box2.style.top = topValue + "%";
  } else if (st <= 6500) {
    box2.style.top = "150%";
  } else if (st > 7500) {
    box2.style.top = "55%";
  }

  if (st > 7700 && st <= 8700) {
    let topValue = 150 - ((st - 7700) / 1000) * 80;
    box3.style.top = topValue + "%";
  } else if (st <= 7700) {
    box3.style.top = "150%";
  } else if (st > 8700) {
    box3.style.top = "70%";
  }

  if (st > 9500 && st <= 9900) {
    let opacityValue = (st - 9500) / 400;
    textFooter.style.opacity = opacityValue;
  } else if (st <= 9500) {
    textFooter.style.opacity = 0;
  } else if (st > 9900) {
    textFooter.style.opacity = 1;
  }

  if (st > 8900 && st <= 9900) {
    footer.classList.remove("top-full");
    let sY6 = ((st - 8900) / 1000) * 100;
    footer.style.top = 100 - sY6 + "%";
  } else if (st > 9900) {
    footer.style.top = "0%";
  } else {
    footer.style.top = "100%";
  }
});
