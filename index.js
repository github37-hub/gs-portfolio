function toggleDarkMode() {
  var element = document.body.classList.toggle("dark-mode");
}

function showsidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hidesidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}




//Project Section
        let scrollContainer = document.querySelector(".gallery");
        let nextBtn = document.querySelector(".nextBtn");
        let backBtn = document.querySelector(".backBtn");

        scrollContainer.addEventListener("wheel", (evt)=>{
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
            scrollContainer.style.scrollBehavior = "auto";
        });
        nextBtn.addEventListener("click", ()=>{
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += 900;

        });
        backBtn.addEventListener("click", ()=>{
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= 900;

        });
    




