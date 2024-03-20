// javascript setTimeout()

// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

{
    // setTimeout(function, milliseconds);
    // setTimeout(hello(), 5000);
    // function - a function containing a block of code
    // milliseconds - the time after which the function is executed

}

// The setTimeout() method returns an intervalID, which is a positive integer.

// Display a Text Once After 3 Second

{
    // program to display a text using setTimeout method
    
    // function greet(){
    //     console.log('Hello World');
    // }
    // greet();
    // let id = setTimeout(greet, 2000);
    // console.log(id);
    // console.log('This message is shown first');
    // console.log('1 Today to much Rain...');

    // The setTimeout() method calls the greet() function after 2000 milliseconds(2 second).

    // let x = setInterval(greet, 2000);
    // clearInterval(x);
}

// The setTimeout() method returns the interval Id.

{
    // program to display a text using setTimeout method
    // function greet() {
    //     console.log('Hello world');
    // }

    // let intervalId = setTimeout(greet, 3000);

    // console.log('Id: ' + intervalId);
    // clearTimeout(intervalId);
    // console.log("Stop setTimeout Functio");
}

// Display Time Every 3 Second

{
    // program to display time every 3 seconds
    // function showTime(){
        // return new date and TimeRanges
        // let dateTime = new Date();

        // returns the current local time
        // let time = dateTime.toLocaleTimeString();

        // console.log(time);

        // display the time after 3 seconds
        // setTimeout(showTime, 3000);
    // }
    // calling the function
    // showTime();
}

// The above program displays the time every 3 seconds.

// The setTimeout() method calls the function only once after the time interval (here 3 seconds).

// javascript clearTimeout()

// As you have seen in the above example, the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method.

// The syntax of clearTimeout() method is
{
    // clearTimeout(intervalID);
}

// Use clrarTimeout()method

{
    // program to stop the setTimeout() method

    // let count = 0;
    // function creation
    // function increaseCount(){
        // increasing the count by 1
        // count += 1;
        // console.log(count);
    // }

    // let id = setTimeout(increaseCount, 3000);

    // clearTimeout
    // clearTimeout(id);
    // console.log('setTimeout is stopped.');
}

// the setTimeout() method is used to increase the value of count after3 seconds. However, the clearTimeout() method stops the function call of the setTimeout() method. Hence, the count value is not increased.

// You generally use the clearTimeout() methode when you need to cancel the setTimeout() method call before it happens.

// You can also pass additional arguments to the setTimeout() methode.

{
    // setTimeout(function, milliseconds, paremeter1, ....paremeterN);
}

// when you pass additional parameters to the setTimeout() method, these parameters (paremeter1, parameter2, etc.) will be passed to the specified function.

{
    // program to display a name
    // function greet(name, lastname){
    //     console.log('Hello' + ' ' + name + ' ' + lastname)
    // }

    // passing argument to setTimeout
    // setTimeout(greet, 1000, 'John', 'Doe');
}

// two parameters John and Doe are passed to the setTimeout() method. These two parameters are the arguments thet will be passed to the function (here, greet() function) that is defined inside the setTimeout() method.

// JavaScript CallBack Function

// Program with setTimeout()

{
    // program that shows the delay in execution

    // function greet(){
    //     console.log('Hello world');
    // }

    // function sayName(name){
    //     console.log('Hii' + ' ' + name);
    // }

    // calling the function
    // setTimeout(greet, 2000);
    // sayname('John');
}

// JavaScript Promise and Promise Chaining

// In javascript , a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected

// A promise stats in a pendding state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.

// for example, when you request data frome the server by using a promise, it will be in a pending state. when the arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.

// Create a Promise

// To create a promise object, we use the Promise() constructor.
{
    // let promise = new Promise(function(resolve, reject)){
        // do something
    // }
}