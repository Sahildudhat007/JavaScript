{
    let i;
    let j = prompt('Enter Number : ');

    for (i = 1; i <= j; i++) {
        if (i % 2 != 1) {
            console.log(i * i);
        }
        else {
            console.log(i);
        }
    }
}