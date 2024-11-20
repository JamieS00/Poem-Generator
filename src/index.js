let generatePoem = (event) => {
  event.preventDefault(); //stops page from reloading

  //typerwriter will show in the poem element
  new Typewriter("#poem", {
    strings: ["TESTING...POEM WILL DISPLAY HERE"],
    autoStart: true,
    cursor: null,
    delay: 1,
  });
};

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
