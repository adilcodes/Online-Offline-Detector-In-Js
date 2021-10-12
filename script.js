window.addEventListener('load', 
function detection(){
    var x = navigator.onLine ? "online" : "offline";
    document.getElementById("status").innerHTML = x;  
});
// The below code is same as above one with different event:
window.addEventListener('mousemove', 
function detection(){
    var x = navigator.onLine ? "online" : "offline";
    document.getElementById("status").innerHTML = x;  
});