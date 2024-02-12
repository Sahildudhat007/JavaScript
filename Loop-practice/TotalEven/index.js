{
    let i, j = 0;

    for (i = 1; i <= 30; i++) {
        if (i % 2 == 0) {
            console.log(i);
            j = j + i;
        }
    }
    console.log('Total = ', j);
}