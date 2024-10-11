var numbers = [5, 7, 9, 8, 10, 3, 2];

document.getElementById("able").innerHTML = numbers

// expected result stored in an array
// Acendind  Order

let acendingOutput;

function acending() {
    let check = [2, 3, 5, 7, 8, 9, 10];

    let result = ["", "", "", "", "", "", "", ]

    for (let i = 0; i < numbers.length; i++) {

        for (let j = 0; j < check.length; j++) {

            if (numbers[i] == check[j]) {
                result.splice(j, 1, numbers[i])
            }
        }
    }
    acendingOutput = (result)
    document.getElementById("able2").innerHTML = acendingOutput
}




let dcendingOutput;

function decending() {
    let check = [10, 9, 8, 7, 5, 3, 2]

    let result = ["", "", "", "", "", "", "", ]

    for (let i = 0; i < numbers.length; i++) {

        for (let j = 0; j < check.length; j++) {

            if (numbers[i] == check[j]) {
                result.splice(j, 1, numbers[i])
            }
        }
    }
    dcendingOutput = (result)
    document.getElementById("resultShow").innerHTML = dcendingOutput
}