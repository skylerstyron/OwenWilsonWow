const wowBtn = document.getElementById("wow-btn");
const wowArr = [3, 7, 10, 12, 16, 17, 19, 22, 23, 27, 28, 29, 30, 31, 33, 36, 38, 39, 43, 44, 45, 46, 51, 52, 57, 61, 63, 64, 65, 68, 69, 71, 72, 73, 74, 75, 78, 81, 82, 84, 86, 87, 89, ];

const audio = document.getElementById("audio");
const poster = document.getElementById("poster");

const getWow = () => {
  const randNum =  Math.floor(Math.random() * wowArr.length); // wowArr[randNum]
  // console.log(wowArr[randNum]);
  const url = `https://owen-wilson-wow-api.herokuapp.com/wows/ordered/${wowArr[randNum]}`;
  const options = { method: "GET", headers: { Accept: "application/json" } };
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      // const audioFile = data[0].audio;
      // const moviePoster = data[0].poster;
      const audioFile = data.audio;
      const moviePoster = data.poster;
      audio.src = audioFile;
      // poster.src = moviePoster;
      // poster.style.display = "block";
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
      console.log('Error');
    });
}

wowBtn.addEventListener("click", getWow);