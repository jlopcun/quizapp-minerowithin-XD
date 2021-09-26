const solutions = document.querySelectorAll('.solutions');
const RootStyles = document.documentElement.style;
const numberOfAcerts = document.getElementById('numberOfAcerts');
let acerts = 0;
let transY_value = 0;
let audio = new Audio('mixkit-drum-and-percussion-545.wav');
let transition = new Audio('mixkit-air-zoom-vacuum-2608.wav');
const  restart = document.getElementById('restart');
restart.addEventListener('click',()=>{
    RootStyles.setProperty('--translateY',`0%`);
    transY_value=0;
    acerts=0;
    numberOfAcerts.textContent = acerts;
})
solutions.forEach(sol=>
    sol.addEventListener('click',(e)=>{
        transition.play();
        if(e.target.hasAttribute('data-correct')){
          transY_value+=100;
          RootStyles.setProperty('--translateY',`-${transY_value}%`);
          acerts++;
          numberOfAcerts.textContent = acerts;
        }
        else if(e.target.className = 'option'){
            transY_value+=100;
            RootStyles.setProperty('--translateY',`-${transY_value}%`);
        }
       
    })
    )
   let minero = new Audio('elrubiusOMG - Minero ft. StarkinDJ Lyrics_Letra (320 kbps).mp3');
   let isPaused = true;
   const playstop = document.getElementById('playstop');
   playstop.addEventListener('click',()=>{
    if( isPaused===true){
        minero.play();
        isPaused=false;
    }
    else if(isPaused===false){
        minero.pause();
        isPaused=true;
    }
   })
window.addEventListener('keypress',(e)=>{
   if(e.code==='Space') playstop.click();
});























