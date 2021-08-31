

const pergunta = {p1:"Quem é o fundador da Apple?",
                  p2:"Quem é o fundador da Microsoft?",
                  p3:"Quem é o fundador da Amazon?",
                 }

const resp1 = {a:'Steve Jobs',b:'Ana',c:'Bruno',d:'Carol'}
const resp2 = {a:'Bill Gates',b:'Ana',c:'Bruno',d:'Carol'}
const resp3 = {a:'Steve Jobs',b:'Ana',c:'Jeff Bezos',d:'Carol'}


const rp1 = resp1.a
const rp2 = resp1.a
const rp3 = resp1.c
const rp4 = resp1.d

const rp = {rp1,rp2,rp3,rp4}


function rb(){

let perg = document.getElementById("perg")

let radio1 = document.getElementById("rd1")
let radio2 = document.getElementById("rd2")
let radio3 = document.getElementById("rd3")
let radio4 = document.getElementById("rd4")

//const resradio = {radio1,radio2,radio3,radio4}

perg.innerHTML = pergunta.p1

radio1.innerHTML = resp1.a
radio2.innerHTML = resp1.b
radio3.innerHTML = resp1.c
radio4.innerHTML = resp1.d

}

function bd3() {
    console.log('olá')
    
}

