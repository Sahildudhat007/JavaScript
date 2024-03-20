// 5. Write a JavaScript function that checks whether a number is perfect.

{
    function perfectnumber(num) {
        let perfect = 0;
        for (let i = 1; i < num; i++) {
            if (num % i == 0) {
                perfect += i;
            }
        }
        if (perfect === num) {
            console.log(num + " : is Perfect Number");
        }
        else {
            console.log(num + " : is Not a Perfect Number");
        }
    }
    perfectnumber(6);
}