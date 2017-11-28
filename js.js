var timeNodes = Array.from(document.querySelectorAll('[data-time]'));
var seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        var [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

var secondsLeft = seconds;
var hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
var minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(hours, minutes, secondsLeft);

// reduce takes in an array and turns it into anything you want.  This one returns the total number of seconds for the videos