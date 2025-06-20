function media(){
    n1=parseFloat((document.getElementById("n1").value))
    n2=parseFloat((document.getElementById("n2").value))
    n3=parseFloat((document.getElementById("n3").value))
    resultado=(n1+n2+n3)/3
    if(resultado<6){
        alert("Sua média é "+resultado.toFixed(1)+', Você REPROVOU. Melhore')

    }else{alert("Sua média é "+resultado.toFixed(1)+', Você foi APROVADO')}

}
