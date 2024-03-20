// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

{
    function longestword(string) {
        let words = string.split(' ');
        let longword = '';
        for (let x = 0; x < words.length; x++) {
            if (words[x].length > longword.length) {
                longword = words[x];
            }
        }
        return longword;
    }
    console.log(longestword('Web Development Tutorial'));
}