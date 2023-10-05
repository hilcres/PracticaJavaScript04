window.onload=inicio;

let sumaCorrecta,a,b;


function inicio(){

    preguntar()
    document.querySelector("button").onclick=comprobar;
    document.querySelector(".tres").onkeydown=teclado;

}

function teclado(e){
    let tecla=e.key;
    
   if (tecla=="enter") {
     console.log(e);
     comprobar();
   } 

}

function comprobar(){

    let c=Number(document.querySelector(".tres").value);
    if (sumaCorrecta==c) {
        document.querySelector(".resultado").insertAdjacentHTML
        ("beforeend","<div class='verde'>Correcto</div>");
    } else {
        document.querySelector(".resultado").insertAdjacentHTML
        ("beforeend",`<div class="rojo">El Resultado Correcto 
        de ${a} + ${b} es ${sumaCorrecta}</div>`);
    }

    preguntar()

}


function preguntar(){

    a=Math.floor(Math.random()*10);
    b=Math.floor(Math.random()*10);
    sumaCorrecta=a+b;

    document.querySelector (".uno").value=a
    document.querySelector (".dos").value=b
    document.querySelector (".tres").innerHTML="";
    document.querySelector (".tres").focus();

}




