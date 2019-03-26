const WS = new WebSocket('ws://localhost:3232');
WS.onmessage =(pageload)=>{
    displayMessage(pageload.data);
};//broadcasting
document.forms[0].onsubmit = ()=>{
    let input = document.getElementById('message');
    WS.send(input.value);
};//sendFormData

WS.onopen = ()=>{
    displayTitle('Connect onopen');
    // console.log('connection Onopen')
};//Client side data dat handleling
WS.onclose = ()=>{
    // console.log('connection onclose')
    displayTitle('Connect close');
};//Client side data dat handleling

function displayTitle(title){
    document.querySelector('h1').innerHTML = title;
}

function displayMessage(message){
    let h1 = document.createElement('h1');
    h1.innerText = message;
    document.querySelector('div.message').appendChild(h1);
}//communition with all client