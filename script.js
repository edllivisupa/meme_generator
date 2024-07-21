//assigns variables to collect info from form
let topText = document.querySelector('input[name="toptext"]');
let bottomText = document.querySelector('input[name="bottomtext"]');
let photo = document.querySelector('input[name="piclink"]');
//assigns variable for button
let submit = document.querySelector('button');
//assigns variable for gallery section to display images
let gallery = document.querySelector(".gallery");

//eventListener for when the form is sumbitted
submit.addEventListener('click', function(e) {
    //prevents from page refreshing
    e.preventDefault();
    
    //creates new div and img
    let divTopText = document.createElement('div');
    let divBottomText = document.createElement('div');
    let img = document.createElement('img');
    
    //displays img from url input
    img.setAttribute('src', photo.value); 
    
    //test to ensure that text input works

    divTopText.innerText = topText.value;
    divBottomText.innerText = bottomText.value;

    //appends new text divs to gallery
    gallery.appendChild(divTopText);
    gallery.appendChild(divBottomText);

    //append new image to new div
    gallery.appendChild(img);

    //resets the form fields
    photo.value = '';
    topText.value = '';
    bottomText.value = '';
})