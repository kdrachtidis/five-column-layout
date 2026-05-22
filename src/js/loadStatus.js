/* Variables - Screens ------------------------------------------------------ */
const largeScreen = 1440;
const normalScreen = 1280;
const smallScreen = 960;

function assignClasses(arg){
    leftSidebar.classList.add(arg);
    leftContainer.classList.add(arg);
    mainContainer.classList.add(arg);
    rightContainer.classList.add(arg);
    rightSidebar.classList.add(arg);
}

function setContainerClasses() {
    if (window.innerWidth > largeScreen) {
        leftSidebarStatus = true;
        leftContainerStatus = true;
        rightContainerStatus = true;
        rightSidebarStatus = true;
        currentContainerClass = "TTTT";
        assignClasses(currentContainerClass);
        console.log("3. The screen is Large.");
        return true;
    } else if (window.innerWidth <= largeScreen && window.innerWidth > normalScreen) {
        leftSidebarStatus = false;
        leftContainerStatus = true;
        rightContainerStatus = true;
        rightSidebarStatus = false;
        currentContainerClass = "FTTF";
        assignClasses(currentContainerClass);
        console.log("3. The screen is Normal.");
        return true;
    } else if (window.innerWidth <= normalScreen && window.innerWidth > smallScreen) {
        leftSidebarStatus = false;
        leftContainerStatus = true;
        rightContainerStatus = false;
        rightSidebarStatus = false;
        currentContainerClass = "FTFF";
        assignClasses(currentContainerClass);
        console.log("3. The screen is Small.");
        return true;
    } else if (window.innerWidth <= smallScreen) {
        leftSidebarStatus = false;
        leftContainerStatus = false;
        rightContainerStatus = false;
        rightSidebarStatus = false;
        currentContainerClass = "FFFF";
        assignClasses(currentContainerClass);
        console.log("3. The screen is really Small.");
        return true;
    } else {
        console.log("3. No initial screen size identified, please reload!");
        return false;
    }
}