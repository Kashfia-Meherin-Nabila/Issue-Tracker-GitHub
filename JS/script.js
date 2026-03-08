// tabs button functionality

const tabButtons= document.querySelectorAll(".tab-btn");
tabButtons.forEach(button =>{
    button.addEventListener("click", function(){
        tabButtons.forEach(btn=> btn.classList.remove("btn-primary")); //remove the blue color
        this.classList.add("btn-primary");    //adding the blue color
    });
});