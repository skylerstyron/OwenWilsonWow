const wowBtn = document.getElementById("wow-btn");
const audio = document.getElementById("audio");

const wowArr = [
  3, 7, 10, 12, 16, 17, 19, 22, 23, 27, 28, 29, 30, 31, 33, 
  36, 38, 39, 43, 44, 45, 46, 51, 52, 57, 61, 63, 64, 65, 68, 69, 71, 72, 
  73, 74, 75, 78, 81, 82, 84, 86, 87, 89 
];

const getRandomWow = () => {
  return wowArr[Math.floor(Math.random() * wowArr.length)];
};

const fetchWowData = async () => {
  try {
    const randNum = getRandomWow();
    const url = `https://owen-wilson-wow-api.onrender.com/wows/ordered/${randNum}`;
    const options = { method: "GET", headers: { Accept: "application/json" } };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const audioFile = data.audio;
    audio.src = audioFile;
    console.log(data);
  } catch (error) {
    console.error(error);
    console.log('Error');
  }
};

wowBtn.addEventListener("click", fetchWowData);
