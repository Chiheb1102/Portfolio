// =============================== Typing Animation =============================== //

let typing = new Typed(".home .txt .typing", {
    strings: ["","Web Design", "Freelancer", "Front-end Developer"],
    typeSpeed: 100,
    BackSpeed: 600,
    loop: true
})

// =============================== Aside Links =============================== //

let lis = document.querySelectorAll(".aside li a");
let toggle = document.querySelector(".toggler");
let aside = document.querySelector(".aside");

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        lis.forEach((li) => (li.classList.remove("active")));
        e.target.classList.add("active");
    })
})

toggle.onclick = function() {
    aside.classList.toggle("open")
    toggle.classList.toggle("open")
}

// =============================== Theme Colors =============================== //

let stg =  document.querySelector(".stg ");
let gear = document.querySelector(".stg .gear");
let spans = document.querySelectorAll(".colors span");

gear.onclick = function() {
    stg.classList.toggle("open");
}

window.onscroll = function() {
    stg.classList.remove("open");
}

if(localStorage.getItem("color")) {
    document.documentElement.style.setProperty("--global-color", localStorage.getItem("color"));
    spans.forEach((span) => {
        span.classList.remove("active");
        if(span.dataset.color == localStorage.getItem("color")) {
            span.classList.add("active");
        }
    })
}

spans.forEach((span) => {
    span.addEventListener("click", (e) => {
        localStorage.setItem("color", e.target.dataset.color);
        document.documentElement.style.setProperty("--global-color", e.target.dataset.color);
        spans.forEach((span) => {
            span.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})

// =============================== Dark Mode =============================== //

let dark = document.querySelector(".buttons .dark");
let darkI = document.querySelector(".buttons .dark i");

if(localStorage.getItem("mode")) {
    document.body.classList.add(localStorage.getItem("mode"));
}

dark.onclick = function() {
    darkI.classList.toggle("fa-moon");
    darkI.classList.toggle("fa-sun");
    document.body.classList.toggle("dark")
    document.querySelector(".main-content").classList.toggle("dark")
    localStorage.setItem("mode", document.body.className);
}

// =============================== Book Mode =============================== //

let sections = document.querySelectorAll(".section");
let buttons = document.querySelectorAll(".need");

buttons.forEach((li) => {
    li.addEventListener("click", () => {
        for(i=0; i<sections.length; i++) {
            if(li.getAttribute("href").slice(1) == sections[i].id) {
                sections.forEach((section) => {section.classList.remove("active"); section.classList.add("hidden");})
                sections[i].classList.add("active");
                sections[i].classList.remove("hidden");
            }
        }
    })
})

// =============================== Other links =============================== //

let more = document.querySelector(".more");
let hire = document.querySelector(".hire");

more.onclick = function() {
    lis.forEach((li) => {
        if(more.href == li.href) {
            lis.forEach((li) => (li.classList.remove("active")));
            li.classList.add("active");
        }
    })
}

hire.onclick = function() {
    lis.forEach((li) => {
        if(hire.href == li.href) {
            lis.forEach((li) => (li.classList.remove("active")));
            li.classList.add("active");
        }
    })
}