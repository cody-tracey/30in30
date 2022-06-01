/*
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
*/

const projects = [
    {
        name: 'JavaScript Drum Kit',
        url: './01-drumKit/index-START.html',
        src: './assets/01.PNG',
        description: 'a',
        concepts: 'a'
    },
    {
        name: 'JS and CSS Clock',
        url: '../02-clock/index-START.html',
        src: './assets/02.PNG',
        description: 'b',
        concepts: 'b'
    },
    {
        name: 'CSS Variables',
        url: '../03-cssVars/index-START.html',
        src: './assets/03.PNG',
        description: 'c',
        concepts: 'c'
    },
    {
        name: 'Array Cardio Day 1',
        url: '../04-arrayCardio/index-START.html',
        src: './assets/04.PNG',
        description: 'd',
        concepts: 'd'
    },
    {
        name: 'Flex Panel Gallery',
        url: '../05-flexPanelGaller/index-START.htm',
        src: './assets/05.PNG',
        description: 'e',
        concepts: 'e'
    },
    {
        name: 'Type Ahead',
        url: '../06-typeAhead/index-START.html',
        src: './assets/06.PNG',
        description: 'f',
        concepts: 'f'
    },
    {
        name: 'Array Cardio Day 2',
        url: '../07-arrayCardioDay2/index-START.html',
        src: './assets/07.PNG',
        description: 'g',
        concepts: 'g'
    },
    {
        name: 'Fun with HTML5 Canvas',
        url: '../08-funWithHtmlCanvas/index-START.html',
        src: './assets/08.PNG',
        description: 'h',
        concepts: 'h'
    },
    {
        name: 'Dev Tools Domination',
        url: '../09-devToolsDomination/index-START.html',
        src: './assets/09.PNG',
        description: 'i',
        concepts: 'i'
    },
    {
        name: 'Hold Shift and Check Checkboxes',
        url: '../10-holdShiftAndCheck/index-START.html',
        src: './assets/10.PNG',
        description: 'j',
        concepts: 'j'
    },
    {
        name: 'Custom Video Player',
        url: '../11-CustomVideoPlayer/index.html',
        src: './assets/11.PNG',
        description: 'k',
        concepts: 'k'
    },
    {
        name: 'Key Sequence Detectio',
        url: '../12-keySequenceDetection/index-START.html',
        src: './assets/12.PNG',
        description: 'l',
        concepts: 'l'
    },
    {
        name: 'Slide in on Scroll',
        url: '../13-SlideInOnScroll/index-START.html',
        src: './assets/13.PNG',
        description: 'm',
        concepts: 'm'
    },
    {
        name: 'JavaScript References VS Copying',
        url: './14-jsRef/index-START.html',
        src: './assets/14.PNG',
        description: 'n',
        concepts: 'n'
    },
    {
        name: 'LocalStorage',
        url: '../15-localStorage/index-START.html',
        src: './assets/15.PNG',
        description: 'o',
        concepts: 'o'
    },
    {
        name: 'Mouse Move Shadow',
        url: './16-mouseMoveShadow/index-START.html',
        src: './assets/16.PNG',
        description: 'p',
        concepts: 'p'
    },
    {
        name: 'Sort Without Articles',
        url: '../17-sortWithoutArticles/index-START.html',
        src: './assets/17.PNG',
        description: 'q',
        concepts: 'q'
    },
    {
        name: 'Adding Up Times with Reduce',
        url: '../18-AddingUpTimesWithReduce/index-START.html',
        src: './assets/18.PNG',
        description: 'r',
        concepts: 'r'
    },
    {
        name: 'Webcam Fun',
        url: '../19-webcamFun/index.html',
        src: './assets/19.PNG',
        description: 's',
        concepts: 's'
    },
    {
        name: 'Speech Detection',
        url: '../20-speechDetection/index-START.html',
        src: './assets/20.PNG',
        description: 't',
        concepts: 't'
    },
    {
        name: 'Geolocation',
        url: '../21-geoLocation/index-START.html',
        src: './assets/21.PNG',
        description: 'u',
        concepts: 'u'
    },
    {
        name: 'Follow Along Link Highlighter',
        url: '../22-followAlongLinkHighlighter/index-START.html',
        src: './assets/22.PNG',
        description: 'v',
        concepts: 'v'
    },
    {
        name: 'Speech Synthesis',
        url: '../23-speechSythesis/index-START.html',
        src: './assets/23.PNG',
        description: 'w',
        concepts: 'w'
    },
    {
        name: 'Sticky Nav',
        url: '../24-stickyNav/index-START.html',
        src: './assets/24.PNG',
        description: 'x',
        concepts: 'x'
    },
    {
        name: 'Event Capture, Propagation, Bubbling and Once',
        url: '../25-eventCapture/index-START.html',
        src: './assets/25.PNG',
        description: 'y',
        concepts: 'y'
    },
    {
        name: 'Stripe Follow Along Nav',
        url: '../26-stripeFollowAlongNav/index-START.html',
        src: './assets/26.PNG',
        description: 'z',
        concepts: 'z'
    },
    {
        name: 'Click and Drag',
        url: '../27-clickAndDrag/index-START.html',
        src: './assets/274.PNG',
        description: 'aa',
        concepts: 'aa'
    },
    {
        name: 'Video Speed Controller',
        url: '../28-videoSpeedController/index-START.html',
        src: './assets/28.PNG',
        description: 'ab',
        concepts: 'ab'
    },
    {
        name: 'Countdown Timer',
        url: '../29-countdownTimer/index.html',
        src: './assets/29.PNG',
        description: 'ac',
        concepts: 'ac'
    },
    {
        name: 'Whack A Mole',
        url: '../30-whackAMole/index-START.html',
        src: './assets/30.PNG',
        description: 'ad',
        concepts: 'ad'
    },
]

let content = projects.map((p, index) => {
    let item = `
    <div class='row'>
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${p.src}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="card-text">${p.description}</p>
                        <p class="card-text">${p.concepts}</p>
                        <a href="${p.url}" class="btn btn-primary">Deployed!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    
    if (index % 7 === 0) {
        return (
            `<div class='row'><h1>Week ${index / 7 + 1}</h1></div>${item}`
        )
    }
    else return item
}).join('')

document.getElementById('content').innerHTML = content;