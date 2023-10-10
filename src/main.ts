import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Zexuan's game";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

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
let growthRate: number = 0;
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
const lineBreak = document.createElement("br");
app.append(lineBreak);
const purchaseButton = document.createElement("button");
purchaseButton.disabled = true;
purchaseButton.innerHTML = `Purchase Growth Rate <br> Current Rate: ${growthRate}`;

setInterval(() => {
  if (count >= 10) {
    purchaseButton.disabled = false;
  } else {
    purchaseButton.disabled = true;
  }
}, 100);

function updatepurchaseButton() {
  if (count >= 10) {
    growthRate++;
    count -= 10;
    purchaseButton.innerHTML = `Purchase Growth Rate <br> Current Rate: ${growthRate}`;
  }
}
app.append(purchaseButton);
purchaseButton.addEventListener("click", updatepurchaseButton, false);
purchaseButton.addEventListener("click", updatepurchaseButton, false);
