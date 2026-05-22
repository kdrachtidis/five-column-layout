const hideLeftContainerButton = document.getElementById("hideLeftContainer");
const showLeftContainerButton = document.getElementById("showLeftContainer");
const hideRightContainerButton = document.getElementById("hideRightContainer");
const showRightContainerButton = document.getElementById("showRightContainer");

function controlContainers(){
    /* Hide Left Container -------------------------------------------------- */
    hideLeftContainerButton.addEventListener("click", function () {
        if (leftSidebarStatus === true && leftContainerStatus === true) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("TFTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("TFTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("TFFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("TFFF");
            }
            console.log("Container on the left side is hidden.");
            leftContainerStatus = !leftContainerStatus;
            printStatus();
            return true;
        } else if (leftSidebarStatus === false && leftContainerStatus === true) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("FFTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("FFTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("FFFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("FFFF");
            }
            console.log("Container on the left side is hidden.");
            leftContainerStatus = !leftContainerStatus;
            printStatus();
            return true;
        }
    });
    /* Show Left Container -------------------------------------------------- */
    showLeftContainerButton.addEventListener("click", function () {
        if (leftSidebarStatus === true && leftContainerStatus === false) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("TTTT", "left");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("TTTF", "left");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("TTFT", "left");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("TTFF", "left");
            }
            console.log("Container on the left side is again visible.");
            leftContainerStatus = !leftContainerStatus;
            printStatus();
            return true;
        } else if (leftSidebarStatus === false && leftContainerStatus === false) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("FTTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("FTTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("FTFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("FTFF");
            }
            console.log("Container on the left side is again visible.");
            leftContainerStatus = !leftContainerStatus;
            printStatus();
            return true;
        }
    });
    /* Hide Right Container ------------------------------------------------- */
    hideRightContainerButton.addEventListener("click", function () {
        if (rightContainerStatus === true && rightSidebarStatus === true) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTFT");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTFT");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFFT");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFFT");
            }
            console.log("Container on the right side is hidden.");
            rightContainerStatus = !rightContainerStatus;
            printStatus();
            return true;
        } else if (rightContainerStatus === true && rightSidebarStatus === false) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTFF");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTFF");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFFF");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFFF");
            }
            console.log("Container on the right side is hidden.");
            rightContainerStatus = !rightContainerStatus;
            printStatus();
            return true;
        }
    });
    /* Show Right Container ------------------------------------------------- */
    showRightContainerButton.addEventListener("click", function () {
        if (rightContainerStatus === false && rightSidebarStatus === true) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTTT");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTTT");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFTT");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFTT");
            }
            console.log("Container on the right side is again visible.");
            rightContainerStatus = !rightContainerStatus;
            printStatus();
            return true;
        } else if (rightContainerStatus === false && rightSidebarStatus === false) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTTF");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTTF");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFTF");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFTF");
            }
            console.log("Container on the right side is again visible.");
            rightContainerStatus = !rightContainerStatus;
            printStatus();
            return true;
        }
    });
}