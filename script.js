/*get the title*/
const $storybox = document.getElementById('storybox')
// const list =`
// <ul>
// <li>${stories[0].title}</li>
// <li>${stories[1].title}</li>
// <li>${stories[2].title}</li>
//  </ul>
// `
// $storybox.insertAdjacentHTML("beforebegin",list)
// $list.

//get stroy first
document.body.onload = loadPage;
function loadPage (){
    
    const $newHeading = document.querySelector('h2');

    $newHeading.textContent ='Choose a story'
  

    for(const title of stories){
$storybox.innerHTML =`<button data-mainstory="${title}">${title['title']}</button>`+$storybox.innerHTML

} 


$storybox.insertAdjacentElement("beforebegin",$newHeading)
}

//when click the one of the story it show selected stor's form
for(let i =0; i<=5;  i++){   

    let    
    let word= stories[0].words[i]
  
    let input = `<input type="text" name="${word}" placeholder="${word}">`
    $storybox.appendChild(input)

}

    

// $storybox.addEventListener('click',function cilck(){

     

 
// // 

// } )






// title.addEventlistener('click',function(e){
    
// })