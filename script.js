//assigns variables to collect info from form
let topCaption = document.querySelector('input[name="topcaption"]');
let bottomCaption = document.querySelector('input[name="bottomcaption"]');
let photo = document.querySelector('input[name="piclink"]');

//assigns submit variable when form is submitted
let submit = document.querySelector('button');

//assigns variable for gallery section to display images
let gallery = document.querySelector(".gallery");

//eventListener for when the form is sumbitted
submit.addEventListener('click', function(e) {
    //prevents from page refreshing
    e.preventDefault();
    
    //creates new img, button, and caption and image divs
    let photoContainer = document.createElement('div');
    let divTopCaption = document.createElement('div');
    let divBottomCaption = document.createElement('div');
    let img = document.createElement('img');
    let newDeleteButton = document.createElement("button");

    //Adds text and photo url to created elements
    newDeleteButton.innerText = "Delete";
    divTopCaption.innerText = topCaption.value;
    divBottomCaption.innerText = bottomCaption.value;
    img.setAttribute('src', photo.value); 

    //appends created caption and photo divs to photo container and adds class for styling
    divTopCaption.classList.add("top-caption");
    divBottomCaption.classList.add("bottom-caption");
    photoContainer.classList.add("photo-container");
    photoContainer.appendChild(divTopCaption);
    photoContainer.appendChild(divBottomCaption);
    photoContainer.append(newDeleteButton);

    //append new image to photo div and attached to gallery div
    photoContainer.appendChild(img);
    gallery.appendChild(photoContainer);

    //resets the form fields
    photo.value = '';
    topCaption.value = '';
    bottomCaption.value = '';

     //listener event whe 'Delete' is clicked, removes parent element
    //must use event delegation to ensure all to-dos are deleted
    newDeleteButton.addEventListener("click", function(event) {
        event.target.parentElement.remove();
    });
})