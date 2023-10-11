import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Zexuan's game";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let growthRate: number = 0;
const growthRateText = document.createElement("h2");
growthRateText.innerHTML = `Current Growth Rate: ${growthRate}`;
app.append(growthRateText);

//step 1
const button = document.createElement("button");
button.textContent = "🎁";

app.append(button);

//step 2
let count: number = 0;
const countText = document.createElement("presentCount");
countText.innerHTML = `${count} present`;
app.append(countText);
function calculateCount() {
  count++;
  if (count <= 1) {
    countText.innerHTML = `${count} present`;
  } else {
    countText.innerHTML = `${count} presents`;
  }
}

button.addEventListener("click", calculateCount, false);

//step 3
function countUp() {
  count++;
  if (count <= 1) {
    countText.innerHTML = `${count} present`;
  } else {
    countText.innerHTML = `${count} presents`;
  }
}

let intervalID;
if (!intervalID) {
  intervalID = setInterval(countUp, 1000);
}

//step 4
clearTimeout(intervalID);
let previousTimeStamp: number;
function step(timestamp: number) {
  if (previousTimeStamp === undefined) {
    previousTimeStamp = timestamp;
  }

  const frameUpdate = (timestamp - previousTimeStamp) / 1000;
  count += growthRate * frameUpdate;
  if (count <= 1) {
    countText.innerHTML = `${count.toFixed(1)} present`;
  } else {
    countText.innerHTML = `${count.toFixed(1)} presents`;
  }
  previousTimeStamp = timestamp;
  requestAnimationFrame(step);
}
requestAnimationFrame(step);

//step5
// const lineBreak = document.createElement("br");
// app.append(lineBreak);
// const purchaseButton = document.createElement("button");
// purchaseButton.disabled = true;
// purchaseButton.innerHTML = `Purchase Growth Rate <br> Current Rate: ${growthRate}`;

// setInterval(() => {
//   if (count >= 10) {
//     purchaseButton.disabled = false;
//   } else {
//     purchaseButton.disabled = true;
//   }
// }, 100);

// function updatepurchaseButton() {
//   if (count >= 10) {
//     growthRate++;
//     count -= 10;
//     purchaseButton.innerHTML = `Purchase Growth Rate <br> Current Rate: ${growthRate}`;
//   }
// }
// app.append(purchaseButton);
// purchaseButton.addEventListener("click", updatepurchaseButton, false);
// purchaseButton.addEventListener("click", updatepurchaseButton, false);

//step 6
// const lineBreak = document.createElement("br");
// app.append(lineBreak);

// const purchaseButton1 = document.createElement("button");
// purchaseButton1.innerHTML = `cost 10 unity, get 0.1 units/sec`;
// function updatepurchaseButton1() {
//   if (count >= 10) {
//     growthRate += 0.1;
//     count -= 10;
//     growthRateText.innerHTML = `Current Growth Rate: ${growthRate}`;
//   }
// }
// app.append(purchaseButton1);
// purchaseButton1.addEventListener("click", updatepurchaseButton1, false);

// const purchaseButton2 = document.createElement("button");
// purchaseButton2.innerHTML = `cost 100 unity, get 2 units/sec`;
// function updatepurchaseButton2() {
//   if (count >= 100) {
//     growthRate += 2;
//     count -= 100;
//     growthRateText.innerHTML = `Current Growth Rate: ${growthRate}`;
//   }
// }
// app.append(purchaseButton2);
// purchaseButton2.addEventListener("click", updatepurchaseButton2, false);

// const purchaseButton3 = document.createElement("button");
// purchaseButton3.innerHTML = `cost 1000 unity, get 50 units/sec`;
// function updatepurchaseButton3() {
//   if (count >= 1000) {
//     growthRate += 50;
//     count -= 1000;
//     growthRateText.innerHTML = `Current Growth Rate: ${growthRate}`;
//   }
// }
// app.append(purchaseButton3);
// purchaseButton3.addEventListener("click", updatepurchaseButton3, false);

// setInterval(() => {
//   if (count >= 10) {
//     purchaseButton1.disabled = false;
//   } else {
//     purchaseButton1.disabled = true;
//   }
//   if (count >= 100) {
//     purchaseButton2.disabled = false;
//   } else {
//     purchaseButton2.disabled = true;
//   }
//   if (count >= 1000) {
//     purchaseButton3.disabled = false;
//   } else {
//     purchaseButton3.disabled = true;
//   }
// }, 100);

//step 7
const lineBreak = document.createElement("br");
app.append(lineBreak);

const purchaseButton1 = document.createElement("button");
let purchaseButton1Cost: number = 10;
purchaseButton1.innerHTML = `cost ${purchaseButton1Cost} unity, get 0.1 units/sec`;
function updatepurchaseButton1() {
  if (count >= purchaseButton1Cost) {
    growthRate += 0.1;
    count -= 10;
    purchaseButton1Cost *= 1.15;
    growthRateText.innerHTML = `Current Growth Rate: ${growthRate.toFixed(1)}`;
    purchaseButton1.innerHTML = `cost ${purchaseButton1Cost.toFixed(
      3,
    )} unity, get 0.1 units/sec`;
  }
}
app.append(purchaseButton1);
purchaseButton1.addEventListener("click", updatepurchaseButton1, false);

const purchaseButton2 = document.createElement("button");
let purchaseButton2Cost: number = 100;
purchaseButton2.innerHTML = `cost ${purchaseButton2Cost} unity, get 2 units/sec`;
function updatepurchaseButton2() {
  if (count >= 100) {
    growthRate += 2;
    count -= 100;
    purchaseButton2Cost *= 1.15;
    growthRateText.innerHTML = `Current Growth Rate: ${growthRate.toFixed(1)}`;
    purchaseButton2.innerHTML = `cost ${purchaseButton2Cost.toFixed(
      3,
    )} unity, get 2 units/sec`;
  }
}
app.append(purchaseButton2);
purchaseButton2.addEventListener("click", updatepurchaseButton2, false);

const purchaseButton3 = document.createElement("button");
let purchaseButton3Cost: number = 1000;
purchaseButton3.innerHTML = `cost ${purchaseButton3Cost} unity, get 50 units/sec`;
function updatepurchaseButton3() {
  if (count >= 1000) {
    growthRate += 50;
    count -= 1000;
    purchaseButton3Cost *= 1.15;
    growthRateText.innerHTML = `Current Growth Rate: ${growthRate.toFixed(1)}`;
    purchaseButton3.innerHTML = `cost ${purchaseButton3Cost.toFixed(
      3,
    )} unity, get 50 units/sec`;
  }
}
app.append(purchaseButton3);
purchaseButton3.addEventListener("click", updatepurchaseButton3, false);

setInterval(() => {
  if (count >= 10) {
    purchaseButton1.disabled = false;
  } else {
    purchaseButton1.disabled = true;
  }
  if (count >= 100) {
    purchaseButton2.disabled = false;
  } else {
    purchaseButton2.disabled = true;
  }
  if (count >= 1000) {
    purchaseButton3.disabled = false;
  } else {
    purchaseButton3.disabled = true;
  }
}, 100);
