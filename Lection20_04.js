// console.log("1 --" + true || true)
// console.log(true || false)
// console.log(false || true)


console.log(true && true)
console.log(true && false)

let item_1 = 5;
let item_2 = 10;
Let item_3 = 50;

// 20= 10 + 5 * 2
if (item_1 > 3 || item_2 < 15 && item_3 == 50) {
    console.log("Idi Kushat'")
    } else {
        console.log("Hodi golodniy")
    }
   
    // item_1 < 20;

    while( item_1 < 20 || item_2 < 30) {
        console.log(item_1," = Idi Kushat'")
        console.log(item_2, " = ---'")
        item_1++
        item_2++
    }

    while(temperature < 40) {
        console.log("temperature = ", temperature, "Holodno")
    } else if (temperature >-10 && temperature <30){
        console.log("temperature = ", temperature, "Horosho")
    }


    for (let i = 0; i < 10; i++){
        console.log(i , "=FOR")
    }


    let names = ['Kate','Alex','Ivan','Ignat']
    for (let item_1 in names){
        if (item_1 == 'Ignat'){
            break;
        }
        console.log(item_1, names[item_1])
    }