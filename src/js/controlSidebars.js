const hideLeftSidebarButton = document.getElementById("hideLeftSidebar");
const showLeftSidebarButton = document.getElementById("showLeftSidebar");
const hideRightSidebarButton = document.getElementById("hideRightSidebar");
const showRightSidebarButton = document.getElementById("showRightSidebar");

function controlSidebars() {
    /* Hide Left Sidebar ---------------------------------------------------- */
    hideLeftSidebarButton.addEventListener("click", function () {
        if (leftSidebarStatus === true && leftContainerStatus === true) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("FTTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("FTTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("FTFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("FTFF");
            }
            console.log("Sidebar on the left side is hidden.");
            leftSidebarStatus = !leftSidebarStatus;
            printStatus();
            return true;
        } else if (leftSidebarStatus === true && leftContainerStatus === false) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("FFTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("FFTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("FFFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("FFFF");
            }
            console.log("Sidebar on the left side is hidden.");
            leftSidebarStatus = !leftSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Show Left Sidebar ---------------------------------------------------- */
    showLeftSidebarButton.addEventListener("click", function () {
        if (leftSidebarStatus === false && leftContainerStatus === true) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("TTTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("TTTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("TTFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("TTFF");
            }
            console.log("Sidebar on the left side is again visible.");
            leftSidebarStatus = !leftSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Hide Right Sidebar --------------------------------------------------- */
    hideRightSidebarButton.addEventListener("click", function () {
        if (rightContainerStatus === true && rightSidebarStatus === true) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTTF");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTTF");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFTF");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTTF");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFTF");
            }
            console.log("Sidebar on the right side is hidden.");
            rightSidebarStatus = !rightSidebarStatus;
            printStatus();
            return true;
        } else if (rightContainerStatus === false && rightSidebarStatus === true) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTFF");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTFF");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFFF");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFFF");
            }
            console.log("Sidebar on the right side is hidden.");
            rightSidebarStatus = !rightSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Show Right Sidebar --------------------------------------------------- */
    showRightSidebarButton.addEventListener("click", function () {
        if (rightContainerStatus === true && rightSidebarStatus === false) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTTT");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTTT");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFTT");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFTT");
            }
            console.log("Sidebar on the right side is again visible.");
            rightSidebarStatus = !rightSidebarStatus;
            printStatus();
            return true;
        }
    });
}