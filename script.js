let input = document.getElementById("input");
let inputVal = input.value;
let button = document.getElementById("btn");
let synonymDiv = document.getElementById("synonymDiv");
let meaningDiv = document.getElementById("meaningDiv");
let synonymList = document.getElementById("synonymList");
let meaningList = document.getElementById("meaningList");

button.addEventListener("click", () => {
  let inputVal = input.value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputVal}`)
    .then((response) => response.json())
    .then((data) => populateData(data));
});
function populateData(data) {
  console.log(data);
  let synonymArray = data[0].meanings[0].synonyms;
  let meaningArray = data[0].meanings[0].definitions;
  if (synonymArray.length == 0) {
    synonymDiv.innerText = "No synonyms availabe";
  } else {
    synonymList.innerText = "";
    synonymArray.forEach((synonym) => {
      console.log(synonym);
      let li = document.createElement("li");
      li.innerText = synonym;
      synonymList.appendChild(li);
    });
  }

  if (meaningArray.length == 0) {
    meaningDiv.innerText = "No meanings available";
  } else {
    meaningList.innerText = "";
    for (let i = 0; i < meaningArray.length; i++) {
      let li1 = document.createElement("li");
      li1.innerText = meaningArray[i].definition;
      meaningList.appendChild(li1);
    }
  }
}
