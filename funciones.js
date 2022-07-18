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