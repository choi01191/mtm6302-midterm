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


document.body.onload = loadPage;
function loadPage (){
    
    const $newHeading = document.createElement('h2');

    $newHeading.textContent ='Choose a story'
  

    for(const title of stories){
$storybox.innerHTML =`<span>${title['title']}</span>`+$storybox.innerHTML

} 
$newHeading.insertAdjacentElement("beforebegin",$storybox)
console.log($newHeading)
}


// title.addEventlistener('click',function(e){
    
// })