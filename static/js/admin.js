const sections = document.querySelectorAll("section.admin-page");
const submenus = document.querySelectorAll("a.MenuItems_submenu");

NodeList.prototype.filter = Array.prototype.filter;

submenus.forEach((submenu) => {
    submenu.addEventListener("click", (e) => {
        console.log("hi");
        sections.forEach((section) => {
            section.classList.remove("selected");
        });
        const selectedSection = sections.filter(
            (section) => submenu.textContent === section.dataset.value
        );
        selectedSection[0].classList.add("selected");
    });
});
