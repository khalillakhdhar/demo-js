function calcule()
{
    let p=document.getElementById("poid").value;
    let t=document.getElementById("taille").value;
    imc=Math.round(p/(Math.pow(t,2)));
return imc;

}
function remarque()
{
    let rmq=document.getElementById("remarques");
    let indice=calcule();
    if(indice<20)
    {
        rmq.innerHTML=" votre IMC est de: "+indice+": Maigre";
        
    }
    else if(indice<=25)
    {
        rmq.innerHTML=" votre IMC est de: "+indice+": idéale";

    }
    else
    rmq.innerHTML=" votre IMC est de: "+indice+": surpoids";
}
