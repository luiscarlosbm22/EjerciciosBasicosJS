function calcularParesImpares(){

    var cantidad=0, cantP=0, cantI=0, terminar=0, acum=0;

    var romper = new Boolean(true);

    cantidad = document.getElementById('numero_c').value;

    while(romper){
        for(var i=1; i<=cantidad; i++){
            var num = prompt("Ingrese Numero");
            if(num%2==0){
                cantP++;
            }else{
                cantI++;
            }
            acum=acum+num;
        }
        document.getElementById('cantP').value=cantP;
        console.log(cantP);
        document.getElementById('cantI').value=cantI;
        console.log(cantI);
        if(terminar<=0){
            romper = false;
        }else{
            console.log(" ");
        }
    }

}
function calcularPromedioNegPos(){
    let contNeg=0, cantPos=0, term=0;
    let promPos, promNeg=0;
    let Numero=0;
    let numI=0; 

    let romp= new Boolean (true);
    Numero = document.getElementById('N_numero').value;


    while(romp){

        for(let i=1; 1<=Numero; i++){
            numI = parseFloat(prompt("Ingrese Nmumero"));
            if(numI>0){
                cantPos++;
                promPos=promPos+numI;
            }
            if(numI>0){
                cantNeg++;
                promNeg=promNeg+numI;
            }
        }
        if(cantPos==0){
            promPos=0;
        }else{
            promPos=promPos/cantPos;
        }
        if(cantNeg==0){
            promNeg=0;
        }else{
            promNeg=promNeg/cantNeg;
        }
            if(term<=0){
                romp=false;
            }else{
                console.log(" ");
            }


    }
    document.getElementById('promPos').value=promPos;
    console-log(promPos);
    document.getElementById('promNeg').value=promBeg;
    console.log(promNeg);

}