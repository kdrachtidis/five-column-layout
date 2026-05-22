const leftSidebar = document.getElementById("left-sidebar");
const leftContainer = document.getElementById("left-container");
const mainContainer = document.getElementById("main-container");
const rightContainer = document.getElementById("right-container");
const rightSidebar = document.getElementById("right-sidebar");

/* Show/Hide Effect Function ------------------------------------------------ */
function toggleContainer(newContainerClass) {
    const containers = [leftSidebar, leftContainer, mainContainer, rightContainer, rightSidebar];
    containers.forEach(container => {
        container.classList.remove(currentContainerClass);
        container.classList.add(newContainerClass);
    });
    
    currentContainerClass = newContainerClass;
    return true;
}