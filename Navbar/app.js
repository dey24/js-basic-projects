// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleNav = document.querySelector('.nav-toggle');
const link = document.querySelector('.links');

toggleNav.addEventListener('click', function(){
    //console.log(link.classList);
    //console.log(link.classList.contains('links'));
    // if(link.classList.contains('show-links')){
    //     link.classList.remove('show-links');
    // }else{
    //     link.classList.add('show-links');
    // }
    link.classList.toggle('show-links');
});