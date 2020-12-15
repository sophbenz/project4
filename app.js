let popped = 0;

document.addEventListener('mouseover', function(e){
    if (e.target.className === "photo"){
                e.target.style.backgroundColor = "#ededed";
                e.target.style.fontSize = "medium";
                e.target.style.fontFamily = "Work Sans, sans-serif";
                e.target.textContent = e.target.id;
                console.log(e.target.id);
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        let gallery = document.querySelector('#image-gallery');
        let message = document.querySelector('#endText');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};