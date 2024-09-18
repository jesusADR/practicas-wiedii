//evitar utilizar el any//

(()=>{

    let avenger:any = 123;
    const string= 'hola';
    let power;

    avenger = 'dr strange';
    console.log((avenger as string).charAt(0));
    avenger = 150.54245365;
    console.log(<number>avenger.toFixed(2));


 })() 