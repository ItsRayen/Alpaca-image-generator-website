
const hairStyles = [
  { name: "Bang", path: "/alpaca/hair/bang.png" },
  { name: "Curls", path: "/alpaca/hair/curls.png" },
  { name: "Elegant", path: "/alpaca/hair/elegant.png" },
  { name: "Fancy", path: "/alpaca/hair/fancy.png" },
];

// Function to handle hair button click
function HairBtn() {
  const typesDiv = document.getElementById('types');
  if (!typesDiv) return;

  // Clear existing content
  typesDiv.innerHTML = '';

  // Create buttons for each hair style
  hairStyles.forEach(style => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = style.name;
    button.onclick = () => changeHair(style.path); // Update hair image on click
    typesDiv.appendChild(button);
  });
}
function changeHair(newHairPath) {
  const hairImage = document.getElementById('hair');
  if (hairImage) {
    hairImage.src = newHairPath;
  }
}

const earStyles = [
  { name: "Tilt Backward", path: "/alpaca/ears/tilt-backward.png" },
  { name: "Default", path: "/alpaca/ears/default.png" },
  { name: "Tilt Froward", path: "/alpaca/ears/tilt-forward.png" },
];

function EarsBtn() {
  const typesDiv = document.getElementById('types');
  if (!typesDiv) return;
  typesDiv.innerHTML = '';
  
  earStyles.forEach(style => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = style.name;
    button.onclick = () => changeEars(style.path);
    typesDiv.appendChild(button);
  });
}

function changeEars(newEarPath) {
  const earImage = document.getElementById('ears');
  if (earImage) earImage.src = newEarPath;
}

const eyesStyles = [
  {name: "angry", path: "/alpaca/eyes/angry.png"},
  {name: "default", path: "/alpaca/eyes/default.png"},
  {name: "naughty", path: "/alpaca/eyes/naughty.png"},
  {name: "panda", path: "/alpaca/eyes/panda.png"},
  {name: "smart", path: "/alpaca/eyes/smart.png"},
  {name: "star", path: "/alpaca/eyes/star.png"},
];

function EyesBtn(){
  const typeDiv = document.getElementById('types');
  if (!typeDiv) return;
  typeDiv.innerHTML = '';

  eyesStyles.forEach(style => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = style.name;
    button.onclick = () => changeEyes(style.path);
    typeDiv.appendChild(button);
  });
}

function changeEyes(newEyesPath){
  const eyesImage = document.getElementById('eyes');
  if(eyesImage) eyesImage.src = newEyesPath;
}

const mouthStyles =[
  {name : "astonished", path: "/alpaca/mouth/astonished.png"},
  {name : "default", path: "/alpaca/mouth/default.png"},
  {name : "eating", path: "/alpaca/mouth/eating.png"},
  {name : "laugh", path: "/alpaca/mouth/laugh.png"},
  {name : "tongue", path: "/alpaca/mouth/tongue.png"},
];

function MouthBtn(){
  const typeDiv = document.getElementById('types');
  if (!typeDiv) return;
  typeDiv.innerHTML = '';

  mouthStyles.forEach(style => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = style.name;
    button.onclick = () => changeMouth(style.path);
    typeDiv.appendChild(button);
  });
}

function changeMouth(newMouthPath){
  const mouthImage = document.getElementById('mouth');
  if(mouthImage) mouthImage.src = newMouthPath;
}

const neckStyles =[
  {name: "bend-backward", path: "/alpaca/neck/bend-backward.png"},
  {name: "bend-forward", path: "/alpaca/neck/bend-forward.png"},
  {name: "default", path: "/alpaca/neck/default.png"},
  {name: "thick", path: "/alpaca/neck/thick.png"},
];

function NeckBtn(){
  const typeDiv = document.getElementById('types');
  if(!typeDiv) return;
  typeDiv.innerHTML = '';

  neckStyles.forEach(style => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = style.name;
    button.onclick = () => changeNeck(style.path);
    typeDiv.appendChild(button);
  });
}

function changeNeck(newNeckPath){
  const neckImage = document.getElementById('neck');
  if(neckImage) neckImage.src = newNeckPath;
}

const legStyles = [
  {name: "bubble-tea", path: "/alpaca/leg/bubble-tea.png"},
  {name: "default", path: "/alpaca/leg/default.png"},
  {name: "cookie", path: "/alpaca/leg/cookie.png"},
  {name: "game-console", path: "/alpaca/leg/game-console.png"},
  {name: "tilt-backward", path: "/alpaca/leg/tilt-backward.png"},
  {name: "tilt-forward", path: "/alpaca/leg/tilt-forward.png"},
];

function LegBtn(){
  const typeDiv = document.getElementById('types');
  if(!typeDiv) return;
  typeDiv.innerHTML = '';

  legStyles.forEach(style => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = style.name;
    button.onclick = () => changeLeg(style.path);
    typeDiv.appendChild(button);
  })
}

function changeLeg(newLegPath){
  const legImage = document.getElementById('leg');
  if(legImage) legImage.src = newLegPath;
}

const acceStyles = [
  {name: "earing", path: "/alpaca/accessories/earings.png"},
  {name: "flower", path: "/alpaca/accessories/flower.png"},
  {name: "glasses", path: "/alpaca/accessories/glasses.png"},
  {name: "headphones", path: "/alpaca/accessories/headphone.png"},
];

function acceBtn(){
  const typeDiv = document.getElementById('types');
  if(!typeDiv) return;
  typeDiv.innerHTML = '';

  acceStyles.forEach(style => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = style.name;
    button.onclick = () => changeAcce(style.path);
    typeDiv.appendChild(button);
  })
}

function changeAcce(newAccePath){
  const acceImage = document.getElementById('acce');
  if(acceImage) acceImage.src = newAccePath;
}


const bgColors = [
  {name: "Blue50", path:"/alpaca/backgrounds/blue50.png"},
  {name: "Blue60", path:"/alpaca/backgrounds/blue60.png"},
  {name: "Blue70", path:"/alpaca/backgrounds/blue70.png"},
  {name: "darkBlue30", path:"/alpaca/backgrounds/darkblue30.png"},
  {name: "darkBlue50", path:"/alpaca/backgrounds/darkblue50.png"},
  {name: "darkBlue70", path:"/alpaca/backgrounds/darkblue70.png"},
  {name: "green50", path:"/alpaca/backgrounds/green50.png"},
  {name: "green60", path:"/alpaca/backgrounds/green60.png"},
  {name: "green70", path:"/alpaca/backgrounds/green70.png"},
  {name: "grey40", path:"/alpaca/backgrounds/grey40.png"},
  {name: "grey70", path:"/alpaca/backgrounds/grey70.png"},
  {name: "grey80", path:"/alpaca/backgrounds/grey80.png"},
  {name: "red50", path:"/alpaca/backgrounds/red50.png"},
  {name: "red60", path:"/alpaca/backgrounds/red60.png"},
  {name: "red70", path:"/alpaca/backgrounds/red70.png"},
  {name: "yellow50", path:"/alpaca/backgrounds/yellow50.png"},
  {name: "yellow60", path:"/alpaca/backgrounds/yellow60.png"},
  {name: "yellow70", path:"/alpaca/backgrounds/yellow70.png"},
]

function bgBtn(){
  const typeDiv = document.getElementById('types');
  if(!typeDiv) return;
  typeDiv.innerHTML = '';

  bgColors.forEach(style => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = style.name;
    button.onclick = () => changeBg(style.path);
    typeDiv.appendChild(button);
  })
}

function changeBg(newBgPath){
  const BgImage = document.getElementById('background');
  if(BgImage) BgImage.src = newBgPath;
}

//function shuffle (random styles)!


function shuffleStyles() {
  // Randomly select styles for each part
  const randomHair = hairStyles[Math.floor(Math.random() * hairStyles.length)];
  const randomEars = earStyles[Math.floor(Math.random() * earStyles.length)];
  const randomEyes = eyesStyles[Math.floor(Math.random() * eyeStyles.length)];
  const randomMouth = mouthStyles[Math.floor(Math.random() * mouthStyles.length)];
  const randomNeck = neckStyles[Math.floor(Math.random() * neckStyles.length)];
  const randomLeg = legStyles[Math.floor(Math.random() * legStyles.length)];
  const randomAccessory = accessoryStyles[Math.floor(Math.random() * accessoryStyles.length)];
  const randomBg = bgColors[Math.floor(Math.random() * bgStyles.length)];

  // Update all images
  document.getElementById('hair').src = randomHair.path;
  document.getElementById('ears').src = randomEars.path;
  document.getElementById('eyes').src = randomEyes.path;
  document.getElementById('mouth').src = randomMouth.path;
  document.getElementById('neck').src = randomNeck.path;
  document.getElementById('leg').src = randomLeg.path;
  document.getElementById('acce').src = randomAccessory.path;
  document.getElementById('background').src = randomBg.path;
}

// 3. Add event listener to your random button (if not using inline onclick)
document.querySelector('.action-btn[value="random"]').addEventListener('click', shuffleStyles);

