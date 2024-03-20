{
    let rev = function (x) {
        let y = 0;
        while (x != 0) {
            y = y * 10 + x % 10;
            x = parseInt(x / 10);
        }
        return y;
    }
    console.log(rev(15423));
}