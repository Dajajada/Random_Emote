let emote=document.getElementById('emote');
let emote1=document.getElementById('emote1');
let emote2=document.getElementById('emote2');
let emote3=document.getElementById('emote3');
const random= document.getElementById('button');
let html= document.getElementById('html');

window.onload=function(){
    emote.setAttribute("src", `https://static-cdn.jtvnw.net/emoticons/v2/3041${randomNumber()}/default/light/3.0`);
    html.style.background=`rgb(${Color()}, ${Color()}, ${Color()})`;
};
function Color(){
    return Math.trunc((Math.random()*255+1))
}
function randomNumber(){
    return Math.trunc((Math.random()*99999+1))
}

random.addEventListener('click', ()=>{
    html.style.background=`rgb(${Color()}, ${Color()}, ${Color()})`;
    emote.setAttribute("src", `https://static-cdn.jtvnw.net/emoticons/v2/3041${randomNumber()}/default/light/3.0`);
    emote1.setAttribute("src", `https://static-cdn.jtvnw.net/emoticons/v2/3041${randomNumber()}/default/light/3.0`);
    emote2.setAttribute("src", `https://static-cdn.jtvnw.net/emoticons/v2/3041${randomNumber()}/default/light/3.0`);
    emote3.setAttribute("src", `https://static-cdn.jtvnw.net/emoticons/v2/3041${randomNumber()}/default/light/3.0`);

});

set