// find an HTML element with id = "demo", 

// AFAIK,
// JS is frontend lang, that is basically use to add animations to the ui
// JS runs directly on chrome's v8 engine.
// V8 engine is basically embedded in Chrome, written by google, that in C++. V8 is a JIT compiler that compiles js code into native code in runtime.

// document.getElementById("demo").innerHTML = "Hello Javascript";

<html>
    <body>
        <h2> What can Javascript Do? </h2>
        <p> Javascript can change HTML attribte values. </p>

        <p> In this case Javascript changes the value of the src (source) of an immage</p>
        
        <button
            onclick="document.getElementById('myImage').src='pic_bulbon.gif'"> Turn on the light 
            </button>

            <img id="myImage" src="pic_bulboff.gif"
            style="width:100px"></img>

            <button
            onclick="document.getElementById('myImage').
            src='pic_bulboff.gif'">Turn off the light</button>

    </body>
</html>

// NOTE:
// JS code is written inside <script> tag in html code.
// A fn can be called an event when the user clicks on the button.