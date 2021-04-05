/*get the title*/
const $storybox = document.getElementById("storybox");
const $main = document.querySelector("main");
const $newHeading = document.querySelector("h2");
const $buttons = [];
const $form = document.createElement("form");
const $finalbox = document.createElement("aside");

const renderFormInputs = ($form, story) => {
  const words = story.words;

  const inputElems = words.map(
    (word) =>
      `<input type="text" name="${word}" placeholder="${word}">`
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
    const storyName = e.target.dataset.story;
    $storybox.classList.add("hidden");

    $main.insertAdjacentElement("beforeend", $form);
    const $inputSumit = `<span onclick ="return submitwords()">Ready Story </span>`;
    $form.insertAdjacentHTML("beforeend", $inputSumit);
    $newHeading.textContent = "Provide the following words";

    const story = stories.find(
      (story) => story.title === storyName
    );
    console.log("story", story);
    renderFormInputs($form, story);
  });
}

function submitwords() {
  $form.classList.add("hidden");

  $newHeading.textContent = "Mission Statement";
  $main.insertAdjacentElement("beforeend", $finalbox);
  const story = stories[0];
  console.log();
  // words 발류값에 key value 를 저장
  const words = {
    Adjective: "",
    "Verb 1": "",
    "Verb 2": "",
    "Plural Noun 1": "",
    "Plural Noun 2": "",
    "Plural Noun 3": "",
  };

  story.output(words);
  $finalbox.innerHTML = story.output(words);

  const createNew = `<input type="submit" value="Create another Story ">`;

  $finalbox.insertAdjacentHTML("beforeend", createNew);

  $finalbox.addEventListener("click", function () {
    location.reload();
  });
}

// var argument1 = {
//     myvar : "12",
//     mymethod : function(test) { return something; }
// }

// argument1.mymethod(parameter);
