const myVideo = document.getElementById('video')
const startButton = document.getElementById('start-button')
const section1 = document.getElementById('section1')
const section2 = document.getElementById('section2')
const section3 = document.getElementById('section3')
const section4 = document.getElementById('section4')
const section5 = document.getElementById('section5')
const section6 = document.getElementById('section6')


var points = [
    {
        time: 9,
        element: [startButton],
        isVisited: false,
        currentTime: null
    },
    {
        time: 1.67 * 60,
        element: [section1,section2,section3,section4,section5,section6],
        isVisited: false,
        currentTime: null
    },

]

 var currentPoint = null
function checkTime() {

    points.forEach((point,index) => {
        if (!point.isVisited && myVideo.currentTime >= point.time && myVideo.currentTime <= point.time + 0.9  ) {
            point.element.map(element => (element.style.display = "block"))
            currentPoint = point.element
            point.isVisited = true;
            point.currentTime = myVideo.currentTime;
            myVideo.pause();
        }
        else if(point.isVisited && (Math.abs(myVideo.currentTime - point.currentTime) >= 1 ) ){
            point.isVisited = false;
            point.element.map(element => (element.style.display = "none"))
            // point.element.style.display = "none"
        }
    })
}



function continuePlay(id) {
    myVideo.play();
    currentPoint.map(element => (element.style.display = "none"))
    
    // document.getElementById(id).style.display = "none"
}

myVideo.addEventListener("timeupdate", checkTime);