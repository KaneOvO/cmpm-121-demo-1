import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Zexuan's game";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

//step1
const button = document.createElement("button");
button.textContent = "🎁";

app.append(button);

//step2
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
