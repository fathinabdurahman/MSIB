//display pesan di console
function myFirst(){
    myDisplayer("Good bye");
}

function mySecond(callback){
    myDisplayer("Hello");
    callback();
}

function myDisplayer(message){
    console.log(message);
}

mySecond(myFirst);

//DELAY
console.log("Paragraf 1");
setTimeout(() => {
    console.log("Paragraf 2");
}, 5000);
console.log("Paragraf 3");
console.log("Paragraf 4");
console.log("Paragraf 5");
console.log("Paragraf 6");

//TIMER
function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}
setInterval(setTime, 1000);
console.log("selesai");

//PRAKTIK DARI KAK ELSI
function bagiAngka(num1, num2){
    try{
        //argument harus ada 2 buah
        if (arguments.length < 2){
            throw new Error("harus 2 angka");
        }
        //argument harus berupa angka
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            throw new Error("input kudu angka")
        }
        //argument tidak boleh dibagi 0
        if (num2 === 0){
            throw new Error("tidak boleh dibagi 0")
        }
        const result = num1/num2;
        return result;
    } catch(error){
        console.error("ini salahnya :", error.message);
        return null;
    }
}

// console.log(bagiAngka(2, 0)); 
// console.log(bagiAngka(10, 'abcd')); 
// console.log(bagiAngka(2));
console.log(bagiAngka(20, 2));
