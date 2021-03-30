/*get the title*/
const $storybox = document.getElementById('storybox')
const $main = document.querySelector('main')
const $newHeading = document.querySelector('h2');
const $buttons =[]
const $form = document.createElement('form');
const $finalbox = document.createElement('aside')
//get stroy frist
document.body.onload = loadPage;
function loadPage (){
    $newHeading.textContent ='Choose a story'
 for(const title of stories){

$buttons.push(`<button data-story="${title['title']}"class="button">${title['title']}</button>`)

// const list =`${$buttons.join(' ')}`
$storybox.innerHTML =`<button data-story="${title['title']}"class="button">${title['title']}</button>`+$storybox.innerHTML
} 


//event bubbling 

$storybox.addEventListener('click',function(e){ 
   $storybox.classList.add('hidden')
  
    $main.insertAdjacentElement("beforeend",$form);
    const $inputSumit = `<span onclick ="return submitwords()">Ready Story </span>`
    $form.insertAdjacentHTML("beforeend",$inputSumit)
$newHeading.textContent ='Provide the following words';
    if(e.target.includes ="Mission Statement") {
        for(let i =0; i<= 5; i++){   
        let word = stories[0].words[i]
        let input = `<input type="text" name="${word}" placeholder="${word}">`
        $form.innerHTML = $form.innerHTML + input;
        
    
       
    }
    }
    else if(e.target.includes ="Lunch"){

        for(let i =0; i<= 6;  i++){   
            let word = stories[1].words[i]
            let input = `<input type="text" name="${word}" placeholder="${word}">`
            $form.innerHTML = $form.innerHTML + input;
        // const $ready = `<span id ="ready>Ready Story</span>`

    }}
    else{console.log('error')


}

})

}
function submitwords(){
    $form.classList.add('hidden')
    
    $newHeading.textContent ='Mission Statement'
    $main.insertAdjacentElement("beforeend",$finalbox);
const story = stories[0]
console.log()
// words 발류값에 key value 를 저장
const words = {
  'Adjective': '',
  'Verb 1': '',
  'Verb 2': '',
  'Plural Noun 1': '',
  'Plural Noun 2': '',
  'Plural Noun 3': ''
}

story.output(words)
$finalbox.innerHTML = story.output(words)


const createNew = `<input type="submit" value="Create another Story ">`;



$finalbox.insertAdjacentHTML('beforeend',createNew) 


$finalbox.addEventListener('click', function (){
    location.reload()
})

}

// var argument1 = {
//     myvar : "12",
//     mymethod : function(test) { return something; }
// }


// argument1.mymethod(parameter);




