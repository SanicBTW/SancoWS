var ws = new WebSocket('wss://code.sancopublic.tk/proxy/6543', "getF_Cycles.mp3");

ws.addEventListener('message', (ev) =>
{
    var blobshit = new Blob([ev.data], {type: 'audio/mp3'});
    var urlshit = window.URL.createObjectURL(blobshit);
    var shit = document.createElement('audio');
    shit.src = urlshit;
    shit.controls = true;
    document.body.appendChild(shit);
});