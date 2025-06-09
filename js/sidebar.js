const sidebar = document.getElementById("sidebar");
const sidebarAppCategories = sidebar.querySelector("#sidebarCategories");

class category {
    constructor(name, icon = null) {        
        this.categoryElement = document.createElement("li");
        this.categoryLink = document.createElement("a");
        this.categoryLink.href = "#" + name.toLowerCase().replace(" ", "-") + "-category";
        this.categoryLink.textContent = name;

        if (icon) {
            this.iconElement = document.createElement("span");
            this.iconElement.classList.add("material-symbols-rounded");
            this.iconElement.textContent = icon;
            this.categoryLink.prepend(this.iconElement);
        }

        this.categoryElement.appendChild(this.categoryLink);
    }
}

const sidebarCategories = [
    new category("Recommended", "for_you"),
    new category("Favorites", "star"),
    new category("Recently Updated", "fiber_new"),
];

function addSidebarCategories() {
    sidebarCategories.forEach((category) => {
        const categoryElement = category.categoryElement;
        sidebarAppCategories.appendChild(categoryElement);
    });
}

function setupCollapsibleDiv(header, content) {
    const icon = document.createElement("span");
    icon.classList.add("material-symbols-rounded");
    icon.textContent = "arrow_drop_down";
    header.appendChild(icon);

    const handleClick = () => {
        content.classList.toggle("show");
        icon.textContent = content.classList.contains("show") ? "arrow_drop_up" : "arrow_drop_down";
    };

    if (header.getAttribute("data-collapse-open-default") == "true") handleClick();

    header.addEventListener("click", handleClick);
}

function setupAllCollapsibleDivs() {
    const collapsibleDivs = sidebar.querySelectorAll(".collapseHeader");
    collapsibleDivs.forEach((header) => {
        const collapseDiv = header.getAttribute("data-collapse-div");
        setupCollapsibleDiv(header, document.getElementById(collapseDiv));
    });
}

function setupSidebar() {
    addSidebarCategories();
    setupAllCollapsibleDivs();
}