import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Monster Game Studio";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let growthRate: number = 0;
const growthRateText = document.createElement("h2");
growthRateText.innerHTML = `Current Income: ${growthRate} 💰/sec`;

//step 1
const button = document.createElement("button");
button.innerHTML = "👾";
button.style.fontSize = "40px";

app.append(button);

//step 2
let count: number = 0;
const countText = document.createElement("h3");
countText.innerHTML = `Current Budget: ${count} 💰`;
app.append(countText);
app.append(growthRateText);

let mouseDown = false;
function mouseDownOnTheButton() {
  mouseDown = true;
}

function mouseUpOnTheButton() {
  mouseDown = false;
}

button.addEventListener("mousedown", mouseDownOnTheButton, false);
button.addEventListener("mouseup", mouseUpOnTheButton, false);

//step 4;
let previousTimeStamp: number;
function step(timestamp: number) {
  if (previousTimeStamp === undefined) {
    previousTimeStamp = timestamp;
  }

  const frameUpdate = (timestamp - previousTimeStamp) / 1000;
  count += growthRate * frameUpdate;
  countText.innerHTML = `Current Budget: ${count.toFixed(1)} 💰`;
  previousTimeStamp = timestamp;
  requestAnimationFrame(step);
}
requestAnimationFrame(step);

const lineBreak = document.createElement("br");
app.append(lineBreak);

function creatPurchaseButton(
  name: string,
  emoji: string,
  description: string,
  cost: number,
  growthValue: number,
) {
  const newPurchaseButton = document.createElement("button");
  const newPurchaseButtonName: string = name;
  const newPurchaseButtonEmoji: string = emoji;
  const newPurchaseButtonDescription: string = description;
  let newPurchaseButtonCost: number = cost;
  const newPurchaseButtonGrowthValue: number = growthValue;

  newPurchaseButton.innerHTML = `${newPurchaseButtonName} ${newPurchaseButtonEmoji} <br> Cost: ${newPurchaseButtonCost}💰 <br> Growth Rate: +  ${newPurchaseButtonGrowthValue}💰/sec <br> <b><i>${newPurchaseButtonDescription}</i></b>`;
  function updateNewPurchaseButton() {
    if (count >= newPurchaseButtonCost) {
      growthRate += growthValue;
      count -= newPurchaseButtonCost;
      newPurchaseButtonCost *= 1.15;
      growthRateText.innerHTML = `Current Income: ${growthRate.toFixed(
        1,
      )} 💰/sec`;
      newPurchaseButton.innerHTML = `${newPurchaseButtonName} ${newPurchaseButtonEmoji} <br> Cost: ${newPurchaseButtonCost.toFixed(
        1,
      )}💰 <br> Growth Rate: +  ${newPurchaseButtonGrowthValue}💰/sec <br> <b><i>${newPurchaseButtonDescription}</i></b>`;
    }
  }
  newPurchaseButton.addEventListener("click", updateNewPurchaseButton, false);

  setInterval(() => {
    if (count >= newPurchaseButtonCost) {
      newPurchaseButton.disabled = false;
    } else {
      newPurchaseButton.disabled = true;
    }
  }, 100);

  return newPurchaseButton;
}

const purchaseButton1 = creatPurchaseButton(
  "A cup of your favorite milk tea",
  "🧋",
  "Lots of sugar. Drinking it makes the brain work at full speed.",
  10,
  0.1,
);

const purchaseButton2 = creatPurchaseButton(
  "High-performance Computer",
  "🖥️",
  "No one can say no to the RTX4090.",
  100,
  2,
);

const purchaseButton3 = creatPurchaseButton(
  "A rookie programmer",
  "🧑‍💻",
  "Newly hired programmer who doesn't realize what kind of hell he's about to face.",
  1000,
  50,
);

app.append(purchaseButton1, purchaseButton2, purchaseButton3);

setInterval(() => {
  if (mouseDown) {
    count++;
  }
}, 100);
