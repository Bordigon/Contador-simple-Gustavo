window.onload = () =>{
    const button = document.getElementsByClassName("btn");
    function hola () { console.log("hola")};
    for(let t=0; t<button.length; t++)
        button[t].addEventListener("click", hola)
    
}