document.addEventListener("DOMContentLoaded", function() {
    const p = document.getElementById("text");
    const fullText = p.textContent;    
    p.textContent = "";
    let index = 0;
    
    function addCharacter() {
        if (index < fullText.length) {
            p.textContent += fullText[index];
            index++;
            setTimeout(addCharacter, 27); //A kiírás sebessége itt változtatható
        }
        else{
            setTimeout(() => {
                p.textContent ="";
                index = 0;
                addCharacter();
            },1000);
        }
    }
    addCharacter();
});