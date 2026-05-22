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
};const hideLeftSectionButton = document.getElementById("hideLeftSection");
const showLeftSectionButton = document.getElementById("showLeftSection");
const hideRightSectionButton = document.getElementById("hideRightSection");
const showRightSectionButton = document.getElementById("showRightSection");

function controlSections(){
    /* Hide Left Section ---------------------------------------------------- */
    hideLeftSectionButton.addEventListener("click", function () {
        if (leftSidebarStatus === true && leftContainerStatus === true) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("FFTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("FFTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("FFFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("FFFF");
            }
            console.log("Both Sidebar and Container on the left side are hidden.");
            leftContainerStatus = !leftContainerStatus;
            leftSidebarStatus = !leftSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Show Left Section ---------------------------------------------------- */
    showLeftSectionButton.addEventListener("click", function () {
        if (leftSidebarStatus === false && leftContainerStatus === false) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("TTTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("TTTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("TTFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("TTFF");
            }
            console.log("Both Sidebar and Container on the left side are again visible.");
            leftContainerStatus = !leftContainerStatus;
            leftSidebarStatus = !leftSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Hide Right Section --------------------------------------------------- */
    hideRightSectionButton.addEventListener("click", function () {
        if (rightContainerStatus === true && rightSidebarStatus === true) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTFF");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTFF");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFFF");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFFF");
            }
            console.log("Both Sidebar and Container on the right side are hidden.");
            rightContainerStatus = !rightContainerStatus;
            rightSidebarStatus = !rightSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Show Right Section --------------------------------------------------- */
    showRightSectionButton.addEventListener("click", function () {
        if (rightContainerStatus === false && rightSidebarStatus === false) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTTT");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTTT");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFTT");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFTT");
            }
            console.log("Both Sidebar and Container on the right side are again visible.");
            rightContainerStatus = !rightContainerStatus;
            rightSidebarStatus = !rightSidebarStatus;
            printStatus();
            return true;
        }
    });
}
;const hideLeftSidebarButton = document.getElementById("hideLeftSidebar");
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
};const leftSidebar = document.getElementById("left-sidebar");
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
};/**
 * @typedef {boolean} leftSidebarStatus
 * @typedef {boolean} rightSidebarStatus
 * @typedef {boolean} leftContainerStatus
 * @typedef {boolean} rightContainerStatus
 * @typedef {string} currentContainerClass
 * @typedef {number} animDuration
 */

/* Variables - Status ------------------------------------------------------- */
let leftSidebarStatus = true;
let rightSidebarStatus = true;
let leftContainerStatus = true;
let rightContainerStatus = true;

/* Container Initial Class -------------------------------------------------- */
let currentContainerClass = "";;/* Variables - Screens ------------------------------------------------------ */
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
};/* Print status ------------------------------------------------------------- */
function printStatus() {
    console.log("Sections status: " + leftSidebarStatus + " // " + leftContainerStatus + " // " + rightContainerStatus + " // " + rightSidebarStatus);
    console.log("Main Container's class: " + currentContainerClass);
};/* Events ------------------------------------------------------------------- */
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