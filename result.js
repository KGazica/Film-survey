const paragraph = document.querySelector("#answers");

const params = new URLSearchParams(window.location.search);

params.forEach((value, key) => {
  paragraph.append(`${key} = ${value}`);
  paragraph.append(document.createElement("br"));
});
