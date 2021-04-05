/*get the title*/
const $storybox = document.getElementById("storybox");
const $main = document.querySelector("main");
const $newHeading = document.querySelector("h2");
const $buttons = [];
const $form = document.createElement("form");
const $finalbox = document.createElement("aside");

let activeStory;
let selectedWords = [];

const renderFormInputs = ($form, story) => {
  const words = story.words;

  const inputElems = words.map(
    (word) =>
      (elem = `<input data-wordId="${word}" type="text" name="${word}" placeholder="${word}">`)
  );

  const inputElem = inputElems.join("");

  $form.innerHTML = $form.innerHTML + inputElem;
};

//get stroy frist
document.body.onload = loadPage;
function loadPage() {
  $newHeading.textContent = "Choose a story";
  for (const title of stories) {
    $buttons.push(
      `<button data-story="${title["title"]}"class="button">${title["title"]}</button>`
    );

    // const list =`${$buttons.join(' ')}`
    $storybox.innerHTML =
      `<button data-story="${title["title"]}"class="button">${title["title"]}</button>` +
      $storybox.innerHTML;
  }

  //event bubbling

  $storybox.addEventListener("click", function (e) {
    activeStory = e.target.dataset.story;
    $storybox.classList.add("hidden");

    $main.insertAdjacentElement("beforeend", $form);
    const $inputSumit = `<span onclick="submitWords()">Ready Story </span>`;
    $form.insertAdjacentHTML("beforeend", $inputSumit);
    $newHeading.textContent = "Provide the following words";

    const story = stories.find(
      (story) => story.title === activeStory
    );
    console.log("story", story);
    renderFormInputs($form, story);
  });
}

function submitWords() {
  /**
   * 1. Get which story is active DONE
   * 2. Get list of inputted words from previous page
   * 3. Generate a words object that maps an inputType to the user inputted word
   * 4. invoke story.output
   */

  const inputs = document.querySelectorAll("input");

  // words 발류값에 key value 를 저장
  const words = {};
  inputs.forEach((input) => {
    const value = input.value;
    const wordId = input.dataset.wordid;

    console.log("value", value);
    console.log("wordId", wordId);

    words[wordId] = value;
  });

  console.log("words", words);

  $form.classList.add("hidden");

  const story = stories.find(
    (story) => story.title === activeStory
  );

  $newHeading.textContent = story.title;

  $main.insertAdjacentElement("beforeend", $finalbox);
  story.output(words);
  $finalbox.innerHTML = story.output(words);

  const createNew = `<input type="submit" value="Create another Story ">`;

  $finalbox.insertAdjacentHTML("beforeend", createNew);

  $finalbox.addEventListener("click", function () {
    activeStory = undefined;
    location.reload();
  });
}

// var argument1 = {
//     myvar : "12",
//     mymethod : function(test) { return something; }
// }

// argument1.mymethod(parameter);

/**
 * 1. Style via classes instead of styling the span
 * 2. event bubbling???
 * 3. text boxes rendering improperly
 */

// input1... +
// input2...
// enter button
// result

// specific
// const add = (num1, num2) => {
//     return num1 + num2
// }

// generic
// const calculate = (num1, num2, operation) => {...}
