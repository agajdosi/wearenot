var interval = setInterval(loadElement, 1000);

function loadElement(){
  loadFrame();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadFrame() {
  const width = 800;
  const height = 600;
  var iframe = document.createElement('iframe');
  iframe.style.display = "none";
  iframe.className = "iframe";
  iframe.src = iframe.src = "https://randomincategory.toolforge.org/Racism?site=en.wikipedia.org";
  iframe.height = height;
  iframe.width = width;

  //iframe.style.left = getRandomIntInclusive(0, window.innerWidth - width) + 'px';
  //iframe.style.top = getRandomIntInclusive(0, window.innerHeight - height) + 'px';


  document.body.appendChild(iframe);
  await sleep(2000);
  iframe.style.display = "block";

  iframe.style.left = getRandomIntInclusive(-100, window.innerWidth-100) + 'px';
  iframe.style.top = getRandomIntInclusive(-100, window.innerHeight-100) + 'px';

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

