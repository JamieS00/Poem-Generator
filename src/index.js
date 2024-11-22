let displayPoem = (response) => {
  // let poemResponse = response.data.answer;

  //typerwriter will show in the poem element
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 30,
  });
};

let generatePoem = (event) => {
  event.preventDefault(); //stops page from reloading

  let searchInput = document.querySelector("#search-input");
  // console.log(searchInput.value); //testing

  let poem = document.querySelector("#poem");
  poem.innerHTML = `<div class="generate-blink"> ⏳ Generating a poem about ${searchInput.value}...</div>`;

  let apiKey = "4ddbb61eb5o419b8d734a63d7f1t0b56";
  let prompt = ` Generate poem about ${searchInput.value}`;
  let context =
    " You're a poem expert who loves to write poems! Please create a short poem of 5 lines";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //API Call
  console.log("making API call");
  axios.get(apiURL).then(displayPoem);
};

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
