document.querySelector('button').addEventListener('click', getFetch)

async function getFetch(){
  const choice = document.querySelector('input').value

  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${choice}`);
  const data = await res.json();
  
  if (data.media_type === 'image') {
    document.querySelector('img').src = data.hdurl;
  } else if (data.media_type === 'video') {
    document.querySelector('iframe').src = data.url;
  }
  
  document.querySelector('h3').innerText = data.explanation;
}
