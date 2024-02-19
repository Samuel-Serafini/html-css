var imganterior = "imagem/pudim-2.jpeg";
var imgatual = "imagem/pudim-1.jpg";
var imgproxima = "imagem/pudim-3.jpeg"
function trocar(){
    document.getElementById("figuras").src = imgatual;
    let aux = imgatual;
    imgatual = imganterior;
    imganterior = imgproxima;
    imgproxima = aux;

}
var imganterior2 = "imagem/mousse-1.jpg";
var imgatual2= "imagem/mousse-2.webp";
var imgproxima2 = "imagem/mousse-3.jpeg"
function trocar2(){
    document.getElementById("figuras2").src = imgatual2;
    let aux = imgatual2;
    imgatual2 = imganterior2;
    imganterior2 = imgproxima2;
    imgproxima2 = aux;

}
var imganterior3 = "imagem/cupcake-1.webp";
var imgatual3 = "imagem/cupcake-2.webp";
var imgproxima3 = "imagem/cupcake-3.jpg"

function trocar3(){
    document.getElementById("figuras3").src = imgatual3;
    let aux = imgatual3;
    imgatual3 = imganterior3;
    imganterior3 = imgproxima3
    imgproxima3 =  aux;
    
}
var imganterior4 = "imagem/torta-2.jpg";
var imgatual4 = "imagem/torta-1.jpeg";
var imgproxima4 = "imagem/torta-3.jpg";

function trocar4(){
    document.getElementById("figuras4").src = imgatual4;
    let aux = imgatual4;
    imgatual4 = imganterior4;
    imganterior4 = imgproxima4;
    imgproxima4 = aux;

}
window.alert('seja bem vindo a area doce')