// define the variables
var index = 13;

// document.getElementById("body") = the <body id="body"> on the html
var dom = document.getElementById("box");



// define the function. In this case we are creating an array of background colors

// this = refers to the function name, initArray()

// this[i] = initArray[i] = the index of the array equal to i's value in the iteration

// i++ = increment i's value by 1...
// do this at every pass through the loop
function initArray() {
    this.length = initArray.arguments.length;
    for (var i = 0; i < this.length; i++) {
        this[i] = initArray.arguments[i];
    }
};

// instantiate the initArray
var col = new initArray();

function stop() {
    dom.style.background = "#ffffff";
    clearTimeout(loopID);
};


// Array of colors. Each index is
// assigned a color gradient value.
function change_color() {
    col[1] = "#8c4646 100%, #052afc 100%"
    col[2] = "#8c4646 90%, #052afc 100%"
    col[3] = "#8c4646 80%, #052afc 100%"
    col[4] = "#8c4646 70%, #052afc 100%"
    col[5] = "#8c4646 60%, #052afc 100%"
    col[6] = "#8c4646 50%, #052afc 100%"
    col[7] = "#8c4646 40%, #052afc 100%"
    col[8] = "#8c4646 30%, #052afc 100%"
    col[9] = "#8c4646 20%, #052afc 100%"
    col[10] = "#8c4646 10%, #052afc 100%"
    col[11] = "#8c4646 0%, #052afc 100%"
    col[12] = "#052afc, #052afc"
    col[13] = "#8c4646, #8c4646"

    // pos++ is saying pos = pos + 1...so we are
    // incrementing through our array of color indexes
    index++;
    // if the index in the array is less or greater than
    // our array parameters, we catch this and set it back
    // to 0, to prevent an error from occurring.
    if (index < 0 || index > 13) {
        index = 0;
    }


    // target css style property: linear-gradient
    // syntax varies for the browsers being used
    dom.style.background = "linear-gradient(" + col[index] + ")";
    dom.style.background = "-moz-linear-gradient(" + col[index] + ")";
    dom.style.background = "-o-linear-gradient(" + col[index] + ")";
    dom.style.background = "-webkit-linear-gradient(" + col[index] + ")";


    // setTimeout defines the delay
    // between the bg colors being invoked
    loopID = setTimeout("change_color()", 200); //1000ms = 1 second
};