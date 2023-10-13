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

interface Item {
  name: string;
  emoji: string;
  description: string;
  cost: number;
  growthValue: number;
}

const availableItems: Item[] = [
  {
    name: "Buy a cup of your favorite milk tea",
    emoji: "🧋",
    description:
      "Lots of sugar. Drinking it makes the brain work at full speed.",
    cost: 10,
    growthValue: 0.1,
  },
  {
    name: "Buy a High-performance Computer",
    emoji: "🖥️",
    description: "No one can say no to the RTX4090.",
    cost: 100,
    growthValue: 2,
  },
  {
    name: "Hire a rookie programmer",
    emoji: "🧑‍💻",
    description:
      "Newly hired programmer who doesn't realize what kind of hell he's about to face.",
    cost: 1000,
    growthValue: 50,
  },
  {
    name: "Develop a new game",
    emoji: "👹",
    description:
      "The new game from Monster Game Studios is still familiar with the monster theme.",
    cost: 10000,
    growthValue: 750,
  },
  {
    name: "Establish a new branch of the studio",
    emoji: "🏘️",
    description: 'Time to change the name of the game to "Monster Games, Inc."',
    cost: 100000,
    growthValue: 7500,
  },
];

function creatPurchaseButton(availableItems: Item[]) {
  const purchaseButtons: HTMLButtonElement[] = [];
  for (const item of availableItems) {
    const newPurchaseButton = document.createElement("button");

    newPurchaseButton.innerHTML = `${item.name} ${item.emoji} <br> Cost: ${item.cost}💰 <br> Growth Rate: +  ${item.growthValue}💰/sec <br> <b><i>${item.description}</i></b>`;

    newPurchaseButton.addEventListener(
      "click",
      () => {
        updateNewPurchaseButton(item, newPurchaseButton);
      },
      false,
    );
    purchaseButtons.push(newPurchaseButton);
  }

  function updateNewPurchaseButton(
    item: Item,
    newPurchaseButton: HTMLButtonElement,
  ) {
    if (count >= item.cost) {
      growthRate += item.growthValue;
      count -= item.cost;
      item.cost *= 1.15;
      growthRateText.innerHTML = `Current Income: ${growthRate.toFixed(
        1,
      )} 💰/sec`;
      newPurchaseButton.innerHTML = `${item.name} ${
        item.emoji
      } <br> Cost: ${item.cost.toFixed(1)}💰 <br> Growth Rate: +  ${
        item.growthValue
      }💰/sec <br> <b><i>${item.description}</i></b>`;
    }
  }

  return purchaseButtons;
}

const purchaseButtons = creatPurchaseButton(availableItems);

for (const button of purchaseButtons) {
  app.appendChild(button);
}

setInterval(() => {
  if (mouseDown) {
    count++;
  }
  availableItems.forEach((item, i) => {
    purchaseButtons[i].disabled = item.cost > count;
  });
}, 100);
