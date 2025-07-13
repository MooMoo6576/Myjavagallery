console.log("Script is loaded!");

function upDate(previewPic){
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = `
        <div style="position:relative; width:100%; height:100%;">
            <img src="${previewPic.src}" alt="${previewPic.alt}" style="width:100%; height:100%; object-fit:contain;">
            <div style="
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%, -50%);
               background:rgba(0,0,0,0.5);
                color:#fff;
                padding:8px 16px;
                border-radius:6px;
                font-size:1.2em;
                text-align:center;
                pointer-events:none;
            ">${previewPic.alt}</div>
        </div>
    `;
}


	function unDo() {
    let imageBox = document.getElementById("image");
    imageBox.innerHTML = "Hover over an image below to display here.";
    imageBox.style.backgroundImage = "url('')";
}

function addTabFocusToImages() {
    const images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        images[i].addEventListener('focus', function() {
            upDate(images[i]); // Show image when focused
            console.log(`Image focused: ${images[i].alt}`);
        });
        images[i].addEventListener('blur', function() {
            unDo(); // Hide image when focus is lost
            console.log(`Image blurred: ${images[i].alt}`);
        });
    }
    console.log("Tab focus and blur attributes added to all preview images.");
}
window.onload = addTabFocusToImages;