// 1)----------------------------------------------------------
function primera(x,z){
    if(x>z){
        return z/x;
    } else {
        return x*z;
    }
}
console.log(primera(17,2))

// 2)----------------------------------------------------------
function segunda(valor){
    return typeof valor
}
console.log(segunda(true))

// 3)----------------------------------------------------------
function tercera(a,b,c,d,e,f){
    let sum=a+b;
    let res=sum-c;
    let muldiv=res*d/e;
    let pot=muldiv**f;
    return pot
}
console.log(tercera(5,7,6,8,4,3))

// 4)----------------------------------------------------------
const arrayString=["manolo","renata","mephi","diana"];
function cuarta(array){
    let nuevoArray=[];
    let j = 1;
    for(i=2;i>=0;i--){    
        nuevoArray[i]=array[array.length-j];
        j++;
    }
    return nuevoArray
}
console.log(cuarta(arrayString))

// 5)----------------------------------------------------------
function quinta(array){
    let comp = segunda(array[0]);
    if(comp ==="number"){
        array.sort(function(a, b){return a - b});
        return array
    }else {
        return array.sort()
    }
}
console.log(quinta(arrayString))

// 6)----------------------------------------------------------
const arrayNUM=[9,8,7,6,5,4];
function sexta(array,valor){
    for(i=0;i<array.length;i++){
        if(array[i]===valor){
            array.splice(i,1)
        }
    }
    return array
}
console.log(sexta(arrayNUM,9))

// 7)----------------------------------------------------------
function septima1(array){
    let sum=0;
    array.forEach(element => {
        sum+=element;
    });
    return sum;
}
function septima2(array){
    let prom=septima1(array)/array.length;
    return prom
}
console.log(septima1(arrayNUM))
console.log(septima2(arrayNUM))

// 8)----------------------------------------------------------
const obj={nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}

function octava(object,key){
    for(let llave in object){
        if(llave===key){
            return object[llave]
        }
    }
}
console.log(octava(obj,"apellido"))

// 9)----------------------------------------------------------
let precios={
    manzanas:7,
    naranjas:10,
    peras:5,
    perejil:120,
}
function novena(object){
    let sum=0;
    for (obje in object){
        sum+=object[obje];
    }
    return sum
}
console.log(novena(precios))
