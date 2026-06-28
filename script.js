/*======================================================
    LOADING SCREEN
======================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const progress = document.querySelector(".loading-bar span");
    const access = document.querySelector(".access");

    let percent = 0;

    const loading = setInterval(() => {

        percent++;

        progress.style.width = percent + "%";

        if (percent >= 100) {

            clearInterval(loading);

            access.textContent = "ACCESS GRANTED";

            access.style.color = "#00ff9d";

            setTimeout(() => {

                loader.classList.add("loader-hide");

                setTimeout(() => {

                    loader.style.display = "none";

                }, 800);

            }, 800);

        }

    }, 25);

});





/*======================================================
    STICKY HEADER
======================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

/*======================================================
    SMOOTH SCROLL
======================================================*/

const navLinks = document.querySelectorAll('nav a, .mobile-menu a');

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        const targetId = this.getAttribute("href");

        if(targetId.startsWith("#")){

            e.preventDefault();

            const target = document.querySelector(targetId);

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    });

});

/*======================================================
    ACTIVE NAVIGATION LINK
======================================================*/

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*======================================================
    HEADER SHADOW
======================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else{

        header.style.boxShadow = "none";

    }

});




/*======================================================
    MOBILE MENU
======================================================*/

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

/*=========================================
    OPEN / CLOSE MENU
=========================================*/

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if(mobileMenu.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

    }

    else{

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    }

});

/*=========================================
    CLOSE WHEN CLICKING LINK
=========================================*/

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});

/*=========================================
    CLOSE WHEN CLICKING OUTSIDE
=========================================*/

document.addEventListener("click", (event) => {

    if(

        !mobileMenu.contains(event.target) &&
        !menuBtn.contains(event.target)

    ){

        mobileMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    }

});

/*=========================================
    CLOSE WITH ESC KEY
=========================================*/

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

        mobileMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    }

});




/*======================================================
    TYPED.JS
======================================================*/

const typingElement = document.querySelector("#typing-text");

if (typingElement) {

    new Typed("#typing-text", {

        strings: [

            "Cybersecurity Student",
            "Front-End Developer",
            "Web Designer",
            "Network Engineer",
            "Ethical Hacker",
            "SOC Analyst",
            "CTF Player",
            "Problem Solver",
            "Continuous Learner"

        ],

        typeSpeed: 70,

        backSpeed: 40,

        backDelay: 1800,

        startDelay: 500,

        loop: true,

        smartBackspace: true,

        showCursor: true,

        cursorChar: "_"

    });

}

/*======================================================
    TERMINAL CURSOR BLINK
======================================================*/

const cursorStyle = document.createElement("style");

cursorStyle.innerHTML = `

.typed-cursor{

    color:#00ff9d;

    font-weight:bold;

    animation:blink .8s infinite;

}

@keyframes blink{

    0%{

        opacity:1;

    }

    50%{

        opacity:0;

    }

    100%{

        opacity:1;

    }

}

`;

document.head.appendChild(cursorStyle);




/*======================================================
    SCROLL REVEAL
======================================================*/

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/*======================================================
    STAGGER ANIMATION
======================================================*/

const staggerGroups = document.querySelectorAll(

    ".project-grid, .tool-grid, .certificate-grid, .stats"

);

staggerGroups.forEach(group => {

    const children = group.children;

    Array.from(children).forEach((child, index) => {

        child.style.transitionDelay = `${index * 0.12}s`;

    });

});

/*======================================================
    FADE IN NAVBAR
======================================================*/

const navbar = document.querySelector("header");

window.addEventListener("load", () => {

    if(navbar){

        navbar.style.opacity = "0";

        navbar.style.transform = "translate(-50%, -30px)";

        setTimeout(() => {

            navbar.style.transition = ".8s ease";

            navbar.style.opacity = "1";

            navbar.style.transform = "translate(-50%, 0)";

        }, 300);

    }

});

/*======================================================
    HERO FADE
======================================================*/

window.addEventListener("load", () => {

    const heroLeft = document.querySelector(".hero-left");
    const heroRight = document.querySelector(".hero-right");

    if(heroLeft){

        heroLeft.classList.add("active");

    }

    if(heroRight){

        heroRight.classList.add("active");

    }

});





/*======================================================
    PROJECT FILTER
======================================================*/

const filterButtons = document.querySelectorAll(".project-filter button");
const projectCards = document.querySelectorAll(".project-card");
const searchInput = document.getElementById("project-search");

let currentFilter = "all";

/*======================================================
    FILTER FUNCTION
======================================================*/

function filterProjects(){

    const searchValue = searchInput.value.toLowerCase().trim();

    let visibleProjects = 0;

    projectCards.forEach(card => {

        const category = card.dataset.category.toLowerCase();

        const title = card.querySelector("h3").textContent.toLowerCase();

        const description = card.querySelector("p").textContent.toLowerCase();

        const matchesFilter = currentFilter === "all" || category === currentFilter;

        const matchesSearch =

            title.includes(searchValue) ||

            description.includes(searchValue);

        if(matchesFilter && matchesSearch){

            card.style.display = "block";

            card.style.opacity = "0";

            card.style.transform = "translateY(20px)";

            setTimeout(() =>{

                card.style.opacity = "1";

                card.style.transform = "translateY(0)";

                card.style.transition = ".35s ease";

            },100);

            visibleProjects++;

        }

        else{

            card.style.display = "none";

        }

    });

    showNoProjectsMessage(visibleProjects);

}

/*======================================================
    FILTER BUTTONS
======================================================*/

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>

            btn.classList.remove("active")

        );

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        filterProjects();

    });

});

/*======================================================
    SEARCH
======================================================*/

searchInput.addEventListener("keyup", filterProjects);

/*======================================================
    NO PROJECTS MESSAGE
======================================================*/

const projectGrid = document.querySelector(".project-grid");

const emptyMessage = document.createElement("div");

emptyMessage.className = "no-projects";

emptyMessage.innerHTML = `

    <i class="fas fa-folder-open"></i>

    <h3>No Projects Found</h3>

    <p>Try another search or category.</p>

`;

emptyMessage.style.display = "none";

projectGrid.appendChild(emptyMessage);

function showNoProjectsMessage(count){

    if(count === 0){

        emptyMessage.style.display = "flex";

    }

    else{

        emptyMessage.style.display = "none";

    }

}

/*======================================================
    INITIALIZE
======================================================*/

filterProjects();









/*======================================================
    CERTIFICATE ACCORDION
======================================================*/

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {

    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {

        const isOpen = item.classList.contains("active");

        /*=========================================
            CLOSE ALL ITEMS
        =========================================*/

        accordionItems.forEach(accordion => {

            accordion.classList.remove("active");

            accordion.querySelector(".accordion-content").style.maxHeight = null;

        });

        /*=========================================
            OPEN SELECTED ITEM
        =========================================*/

        if(!isOpen){

            item.classList.add("active");

            content.style.maxHeight = content.scrollHeight + "px";

        }

    });

});

/*======================================================
    OPEN FIRST ACCORDION BY DEFAULT
======================================================*/

if(accordionItems.length > 0){

    accordionItems[0].classList.add("active");

    const firstContent = accordionItems[0].querySelector(".accordion-content");

    firstContent.style.maxHeight = firstContent.scrollHeight + "px";

}

/*======================================================
    CERTIFICATE CARD HOVER EFFECT
======================================================*/

const certificateCards = document.querySelectorAll(".certificate-card");

certificateCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/*======================================================
    OPTIONAL: VIEW CERTIFICATE
======================================================*/

const certificateButtons = document.querySelectorAll(".view-certificate");

certificateButtons.forEach(button => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        const url = button.getAttribute("href");

        if(url){

            window.open(url, "_blank");

        }

    });

});






/*======================================================
    BACK TO TOP BUTTON
======================================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*======================================================
    ANIMATED COUNTERS
======================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let count = 0;

            const speed = target / 100;

            const updateCounter = () => {

                count += speed;

                if(count < target){

                    counter.textContent = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }

                else{

                    counter.textContent = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter => counterObserver.observe(counter));

/*======================================================
    SCROLL PROGRESS BAR
======================================================*/

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    if(progressBar){

        const scrollTop = window.scrollY;

        const height =

            document.documentElement.scrollHeight -

            window.innerHeight;

        progressBar.style.width =

            (scrollTop / height) * 100 + "%";

    }

});

/*======================================================
    MOUSE GLOW EFFECT
======================================================*/

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if(glow){

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    }

});

/*======================================================
    PARTICLES.JS
======================================================*/

if(typeof particlesJS !== "undefined"){

    particlesJS("particles-js",{

        particles:{

            number:{
                value:50
            },

            color:{
                value:"#00ff9d"
            },

            shape:{
                type:"circle"
            },

            opacity:{
                value:.3
            },

            size:{
                value:2.5
            },

            move:{
                enable:true,

                speed:1
            },

            line_linked:{
                enable:true,

                color:"#00ff9d",

                opacity:.2
            }

        }

    });

}

/*======================================================
    BUTTON RIPPLE EFFECT
======================================================*/

document.querySelectorAll(".btn-primary, .btn-secondary").forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =

            e.clientX - rect.left - size/2 + "px";

        ripple.style.top =

            e.clientY - rect.top - size/2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/*======================================================
    CONSOLE MESSAGE
======================================================*/

console.log("%cWelcome to my portfolio!",
"color:#00ff9d;font-size:22px;font-weight:bold;");

console.log("%cInterested in collaborating? Let's connect!",
"color:#00c8ff;font-size:14px;");