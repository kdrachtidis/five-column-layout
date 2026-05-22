/* Events ------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    console.log("1. DOM is loaded.");
    console.log("2. Initial Screen width: " + window.innerWidth);
    setContainerClasses();
});

window.addEventListener("load", function(){
    console.log("4. Window is loaded.");
    console.log("5. Initial Sections status: " + leftSidebarStatus + " // " + leftContainerStatus + " // " + rightContainerStatus + " // " + rightSidebarStatus);
    console.log("--- --- ---");
    controlSidebars();
    controlContainers();
    controlSections();
});