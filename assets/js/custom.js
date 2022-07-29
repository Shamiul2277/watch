
$(document).ready(function(){


    const deg= 6;
      
    const hr=document.querySelector('.hour');
    const mn=document.querySelector('.min');
    const sc=document.querySelector('.sec');


    function watch(){
    let day= new Date();

    let hh= getHours() * 30;
    let mm= getMinutes() * deg;
    let ss= getSeconds() * deg;
    alert (ss);
    }
    watch();
    // setInterval(watch());


})


