/**
 * QUnit Tests for Five Column Layout Plugin
 */

QUnit.module('Five Column Layout - Basic Tests', function() {
    
    QUnit.test('Core functions exist', function(assert) {
        assert.ok(typeof setContainerClasses === 'function', 'setContainerClasses function exists');
        assert.ok(typeof toggleContainer === 'function', 'toggleContainer function exists');
        assert.ok(typeof assignClasses === 'function', 'assignClasses function exists');
        assert.ok(typeof printStatus === 'function', 'printStatus function exists');
    });

    QUnit.test('Control functions exist', function(assert) {
        assert.ok(typeof controlSidebars === 'function', 'controlSidebars function exists');
        assert.ok(typeof controlContainers === 'function', 'controlContainers function exists');
        assert.ok(typeof controlSections === 'function', 'controlSections function exists');
    });

    QUnit.test('Global variables are defined', function(assert) {
        assert.ok(typeof leftSidebarStatus !== 'undefined', 'leftSidebarStatus is defined');
        assert.ok(typeof rightSidebarStatus !== 'undefined', 'rightSidebarStatus is defined');
        assert.ok(typeof leftContainerStatus !== 'undefined', 'leftContainerStatus is defined');
        assert.ok(typeof rightContainerStatus !== 'undefined', 'rightContainerStatus is defined');
        assert.ok(typeof currentContainerClass !== 'undefined', 'currentContainerClass is defined');
    });

    QUnit.test('Screen breakpoints are correctly defined', function(assert) {
        assert.equal(largeScreen, 1440, 'Large screen breakpoint is 1440px');
        assert.equal(normalScreen, 1280, 'Normal screen breakpoint is 1280px');
        assert.equal(smallScreen, 960, 'Small screen breakpoint is 960px');
    });
});

QUnit.module('Five Column Layout - Functionality Tests', function(hooks) {
    
    hooks.beforeEach(function() {
        // Create test fixture HTML before each test
        var fixture = document.getElementById('qunit-fixture');
        fixture.innerHTML = `
            <div id="container">
                <section id="left-sidebar"></section>
                <section id="left-container"></section>
                <section id="main-container"></section>
                <section id="right-container"></section>
                <section id="right-sidebar"></section>
            </div>
            <button id="hideLeftSidebar">Hide Left Sidebar</button>
            <button id="showLeftSidebar">Show Left Sidebar</button>
            <button id="hideRightSidebar">Hide Right Sidebar</button>
            <button id="showRightSidebar">Show Right Sidebar</button>
            <button id="hideLeftContainer">Hide Left Container</button>
            <button id="showLeftContainer">Show Left Container</button>
            <button id="hideRightContainer">Hide Right Container</button>
            <button id="showRightContainer">Show Right Container</button>
            <button id="hideLeftSection">Hide Left Section</button>
            <button id="showLeftSection">Show Left Section</button>
            <button id="hideRightSection">Hide Right Section</button>
            <button id="showRightSection">Show Right Section</button>
        `;
        
        // Reset global state
        leftSidebarStatus = true;
        rightSidebarStatus = true;
        leftContainerStatus = true;
        rightContainerStatus = true;
        currentContainerClass = "";
    });

    QUnit.test('DOM elements exist', function(assert) {
        assert.equal(document.getElementById('left-sidebar') !== null, true, 'Left sidebar element exists');
        assert.equal(document.getElementById('left-container') !== null, true, 'Left container element exists');
        assert.equal(document.getElementById('main-container') !== null, true, 'Main container element exists');
        assert.equal(document.getElementById('right-container') !== null, true, 'Right container element exists');
        assert.equal(document.getElementById('right-sidebar') !== null, true, 'Right sidebar element exists');
    });

    QUnit.test('toggleContainer adds correct classes', function(assert) {
        var newClass = 'FTTF';
        var result = toggleContainer(newClass);
        
        assert.ok(result === true, 'toggleContainer returns true');
        assert.equal(currentContainerClass, newClass, 'currentContainerClass was updated to ' + newClass);
        
        var leftSidebar = document.getElementById('left-sidebar');
        assert.ok(leftSidebar.classList.contains(newClass), 'Left sidebar has the new class');
    });

    QUnit.test('toggleContainer switches between classes', function(assert) {
        toggleContainer('TTTT');
        assert.equal(currentContainerClass, 'TTTT', 'First class set correctly');
        
        toggleContainer('FTTF');
        assert.equal(currentContainerClass, 'FTTF', 'Second class set correctly');
        
        var mainContainer = document.getElementById('main-container');
        assert.ok(!mainContainer.classList.contains('TTTT'), 'Old class removed');
        assert.ok(mainContainer.classList.contains('FTTF'), 'New class added');
    });

    QUnit.test('assignClasses adds class to all containers', function(assert) {
        var testClass = 'TTTT';
        assignClasses(testClass);
        
        assert.ok(document.getElementById('left-sidebar').classList.contains(testClass), 'Left sidebar has class');
        assert.ok(document.getElementById('left-container').classList.contains(testClass), 'Left container has class');
        assert.ok(document.getElementById('main-container').classList.contains(testClass), 'Main container has class');
        assert.ok(document.getElementById('right-container').classList.contains(testClass), 'Right container has class');
        assert.ok(document.getElementById('right-sidebar').classList.contains(testClass), 'Right sidebar has class');
    });

    QUnit.test('setContainerClasses handles large screen', function(assert) {
        // Mock window.innerWidth for large screen
        var originalInnerWidth = window.innerWidth;
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1500
        });
        
        var result = setContainerClasses();
        
        assert.ok(result === true, 'setContainerClasses returns true for large screen');
        assert.equal(currentContainerClass, 'TTTT', 'Large screen sets TTTT class');
        assert.ok(leftSidebarStatus === true, 'leftSidebarStatus is true');
        assert.ok(rightSidebarStatus === true, 'rightSidebarStatus is true');
        
        // Restore original value
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: originalInnerWidth
        });
    });

    QUnit.test('setContainerClasses handles normal screen', function(assert) {
        var originalInnerWidth = window.innerWidth;
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1300
        });
        
        var result = setContainerClasses();
        
        assert.ok(result === true, 'setContainerClasses returns true for normal screen');
        assert.equal(currentContainerClass, 'FTTF', 'Normal screen sets FTTF class');
        assert.ok(leftSidebarStatus === false, 'leftSidebarStatus is false');
        assert.ok(rightSidebarStatus === false, 'rightSidebarStatus is false');
        assert.ok(leftContainerStatus === true, 'leftContainerStatus is true');
        assert.ok(rightContainerStatus === true, 'rightContainerStatus is true');
        
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: originalInnerWidth
        });
    });

    QUnit.test('setContainerClasses handles small screen', function(assert) {
        var originalInnerWidth = window.innerWidth;
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1000
        });
        
        var result = setContainerClasses();
        
        assert.ok(result === true, 'setContainerClasses returns true for small screen');
        assert.equal(currentContainerClass, 'FTFF', 'Small screen sets FTFF class');
        
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: originalInnerWidth
        });
    });

    QUnit.test('setContainerClasses handles extra small screen', function(assert) {
        var originalInnerWidth = window.innerWidth;
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 800
        });
        
        var result = setContainerClasses();
        
        assert.ok(result === true, 'setContainerClasses returns true for extra small screen');
        assert.equal(currentContainerClass, 'FFFF', 'Extra small screen sets FFFF class');
        assert.ok(leftSidebarStatus === false, 'All sidebars hidden');
        assert.ok(rightSidebarStatus === false, 'All sidebars hidden');
        assert.ok(leftContainerStatus === false, 'All containers hidden');
        assert.ok(rightContainerStatus === false, 'All containers hidden');
        
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: originalInnerWidth
        });
    });

    QUnit.test('printStatus executes without errors', function(assert) {
        assert.expect(0);
        printStatus(); // Should not throw any errors
    });
});

QUnit.module('Five Column Layout - Integration Tests', function() {
    
    QUnit.test('All required DOM elements for controls exist', function(assert) {
        // Create all control buttons
        var fixture = document.getElementById('qunit-fixture');
        fixture.innerHTML = `
            <div id="container">
                <section id="left-sidebar"></section>
                <section id="left-container"></section>
                <section id="main-container"></section>
                <section id="right-container"></section>
                <section id="right-sidebar"></section>
            </div>
            <button id="hideLeftSidebar">Hide Left Sidebar</button>
            <button id="showLeftSidebar">Show Left Sidebar</button>
            <button id="hideRightSidebar">Hide Right Sidebar</button>
            <button id="showRightSidebar">Show Right Sidebar</button>
            <button id="hideLeftContainer">Hide Left Container</button>
            <button id="showLeftContainer">Show Left Container</button>
            <button id="hideRightContainer">Hide Right Container</button>
            <button id="showRightContainer">Show Right Container</button>
            <button id="hideLeftSection">Hide Left Section</button>
            <button id="showLeftSection">Show Left Section</button>
            <button id="hideRightSection">Hide Right Section</button>
            <button id="showRightSection">Show Right Section</button>
        `;
        
        assert.ok(document.getElementById('hideLeftSidebar') !== null, 'hideLeftSidebar button exists');
        assert.ok(document.getElementById('showLeftSidebar') !== null, 'showLeftSidebar button exists');
        assert.ok(document.getElementById('hideRightSidebar') !== null, 'hideRightSidebar button exists');
        assert.ok(document.getElementById('showRightSidebar') !== null, 'showRightSidebar button exists');
        assert.ok(document.getElementById('hideLeftContainer') !== null, 'hideLeftContainer button exists');
        assert.ok(document.getElementById('showLeftContainer') !== null, 'showLeftContainer button exists');
        assert.ok(document.getElementById('hideRightContainer') !== null, 'hideRightContainer button exists');
        assert.ok(document.getElementById('showRightContainer') !== null, 'showRightContainer button exists');
        assert.ok(document.getElementById('hideLeftSection') !== null, 'hideLeftSection button exists');
        assert.ok(document.getElementById('showLeftSection') !== null, 'showLeftSection button exists');
        assert.ok(document.getElementById('hideRightSection') !== null, 'hideRightSection button exists');
        assert.ok(document.getElementById('showRightSection') !== null, 'showRightSection button exists');
    });

    QUnit.test('Status variables have correct initial types', function(assert) {
        assert.equal(typeof leftSidebarStatus, 'boolean', 'leftSidebarStatus is a boolean');
        assert.equal(typeof rightSidebarStatus, 'boolean', 'rightSidebarStatus is a boolean');
        assert.equal(typeof leftContainerStatus, 'boolean', 'leftContainerStatus is a boolean');
        assert.equal(typeof rightContainerStatus, 'boolean', 'rightContainerStatus is a boolean');
        assert.equal(typeof currentContainerClass, 'string', 'currentContainerClass is a string');
    });

    QUnit.test('Container class naming follows T/F pattern', function(assert) {
        var validPatterns = ['TTTT', 'TTTF', 'TTFT', 'TTFF', 'TFTT', 'TFTF', 'TFFT', 'TFFF',
                           'FTTT', 'FTTF', 'FTFT', 'FTFF', 'FFTT', 'FFTF', 'FFFT', 'FFFF'];
        
        toggleContainer('TTTT');
        assert.ok(validPatterns.includes(currentContainerClass), 'TTTT is a valid pattern');
        
        toggleContainer('FTTF');
        assert.ok(validPatterns.includes(currentContainerClass), 'FTTF is a valid pattern');
        
        toggleContainer('FFFF');
        assert.ok(validPatterns.includes(currentContainerClass), 'FFFF is a valid pattern');
    });

    QUnit.test('Screen breakpoints are in correct order', function(assert) {
        assert.ok(largeScreen > normalScreen, 'Large screen is greater than normal screen');
        assert.ok(normalScreen > smallScreen, 'Normal screen is greater than small screen');
        assert.ok(smallScreen > 0, 'Small screen is positive');
    });
});
