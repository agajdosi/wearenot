//var interval = setInterval(loadElement, 1000);

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
  iframe.src =iframe.src = "https://randomincategory.toolforge.org/Racism?site=en.wikipedia.org";
  iframe.height = 600;
  iframe.width = 800;
  iframe.style.left = Math.floor(Math.random() * (window.innerWidth - width)) + 'px';
  iframe.style.top = Math.floor(Math.random() * (window.innerHeight - height)) + 'px';

  document.body.appendChild(iframe);
  await sleep(2000);
  iframe.style.display = "block";
  

}
