function screenResponsive () {
    if (window.screen >= 720) {
        resultMid.style.sizeFont = '1rem';
    } else {
        resultMid.style.sizeFont = '5rem';
    }
}

function reloadpage(){
    window.location.reload();
}

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', function() {
    window.location.reload();
});

const choices = document.querySelectorAll('.player1 button');
const comchoices = document.querySelectorAll('.computer button');
const resultMid = document.querySelector('.result h3');
const comOptions = ['batu', 'kertas', 'gunting'];

choices.forEach(function (choice) {
    choice.addEventListener('click',function() {
        let player = choice;
        let player1Choice = player.className;
        player.style.backgroundColor = '#C4C4C4';
     
        const comNumber = Math.floor(Math.random() *3);
        const comChoice = comOptions[comNumber];
    
        let btn_Com_Rock = document.querySelector('.batucom')                
        let btn_Com_Paper = document.querySelector('.kertascom')
        let btn_Com_Scissors = document.querySelector('.guntingcom')
    
        if(comChoice === 'batu'){
            btn_Com_Rock.style.backgroundColor='#C4C4C4';
        } else if (comChoice === 'kertas'){
            btn_Com_Paper.style.backgroundColor='#C4C4C4';
        } else{
            btn_Com_Scissors.style.backgroundColor='#C4C4C4';
        }

        let result ='';
        if(player1Choice==='batu' && comChoice ==='gunting' || player1Choice==='kertas' && comChoice==='batu' || player1Choice==='gunting' && comChoice==='kertas'){
            resultMid.innerHTML = 'PLAYER WINS';
            resultMid.style.color = 'white';
            resultMid.style.backgroundColor = 'rgb(70, 173, 28)';
            resultMid.style.transform = 'rotate(-20deg)';
            screenResponsive();
        } else if (comChoice==='batu' && player1Choice ==='gunting' || comChoice==='kertas' && player1Choice==='batu' || comChoice==='gunting' && player1Choice==='kertas'){
            resultMid.innerHTML = 'COM WINS';
            resultMid.style.color = 'white';
            resultMid.style.backgroundColor = 'red';
            resultMid.style.transform = 'rotate(-20deg)';
            screenResponsive();
        } else {
            resultMid.innerHTML = 'DRAW';
            resultMid.style.color = 'white';
            resultMid.style.backgroundColor = 'brown';
            resultMid.style.transform = 'rotate(-20deg)';
            screenResponsive();
        }

        console.log(player1Choice);
        console.log(comChoice);
        console.log(result);

        const reloading = setTimeout(reloadpage,1000);
    });
});
