/*get the title*/
const $storybox = document.getElementById('storybox')
const $main = document.querySelector('main')
const $newHeading = document.querySelector('h2');

//get stroy first
document.body.onload = loadPage;
function loadPage (){
    $newHeading.textContent ='Choose a story'

    for(const title of stories){
$storybox.innerHTML =`<button class="button">${title['title']}</button>`+$storybox.innerHTML

} 

// $storybox.insertAdjacentElement("beforebegin",$newHeading)
}
const individualButton = $storybox.children;
document.individualButton[0].addEventListener('click',function(){ 
    $newHeading.textContent ='Provide the following words';
    for(let i =0; i<= 5;  i++){   
    // for(const word of stories){

    let word = stories[0].words[i]

    let input = `<input type="text" name="${word}" placeholder="${word}">`
    $storybox.innerHTML = $storybox.innerHTML + input;
    const $ready = `<span id ="ready>Ready Story</span>`
    $storybox.innerHTML= $ready

}})
// const $buttons = document.querySelectorAll('button');
function loadWords (){
    $newHeading.textContent ='Provide the following words';
    {for(let i =0; i< 4;  i++){   
// for(const word of stories){
  
    let word = stories[1].words[i]
  
    let input = `<input type="text" name="${word}" placeholder="${word}">`
    $storybox.innerHTML = $storybox.innerHTML + input
    
}}

}
// for (let button of $buttons) {
//     button.addEventListener("click", loadWords, false);    
// }
loadWords ()
// $buttons.addEventListener('click', function(e){


// })
//when click the one of the story it show selected stor's form
// document.querySelectorAll(button)



    

// $storybox.addEventListener('click',function cilck(){

     

 
// // 

// } )



