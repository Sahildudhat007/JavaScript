// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'
{
    function uppercase(string) {
        let array = string.split(' ');
        let Newarray = [];
        for (let x = 0; x < array.length; x++) {
            Newarray.push(array[x].charAt(0).toUpperCase() + array[x].slice(1));
        }
        return Newarray.join(' ');
    }
    console.log(uppercase('the quick brown fox'));
}