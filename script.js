const section = document.querySelector(".section"),
overlay = document.querySelector(".overlay"),
showBtn = document.querySelector(".show-modal"),
closeBtn = document.querySelector(".close-btn"),
input = document.getElementById("username");


showBtn.addEventListener("click", () => section.classList.add("active"));

overlay.addEventListener("click", () =>
section.classList.remove("active")
);

closeBtn.addEventListener("click", () =>
section.classList.remove("active")
);

input.addEventListener("change", (e) =>{
    console.log(e.currentTarget.value);

  
})


