// Change Navbar Background on Scroll
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Change Menu Item Color on Hover
document.querySelectorAll("nav ul li a").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.color = "cyan";
    });

    item.addEventListener("mouseout", () => {
        item.style.color = "white";
    });
});
