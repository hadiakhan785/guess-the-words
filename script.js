function insertInput(val){
     document.querySelector("#user-inp").value += val;

}

function showWords() {
    for (let i = 0; i < wordsList.length; i++ ){
        userWords.innerHTML += wordsList[i];
    }
}

function check(){
    var userValue = document.querySelector("#user-inp").value;
    let result = document.querySelector("#result");
    var wordsList = [];
    var userWords = document.querySelector(".user-words");

    switch(userValue) {
        case "END":
        result.innerHTML = " ";        
        result.innerHTML += "Word 'END' Correct";
        wordsList.push(userValue);
        for (let i = 0; i < wordsList.length; i++ ){
            userWords.innerHTML += wordsList[i] + "<br>";
        }
        break;
        
        case "NO":
        result.innerHTML = " ";        
        result.innerHTML += "Word 'NO' Correct";
        wordsList.push(userValue);
        for (let i = 0; i < wordsList.length; i++ ){
            userWords.innerHTML += wordsList[i];
        }
        
        break;

        case "DONE":
        result.innerHTML = " ";        
        result.innerHTML += "Word 'DONE' Correct";
        wordsList.push(userValue);
        for (let i = 0; i < wordsList.length; i++ ){
            userWords.innerHTML += wordsList[i];
        }
        
        break;

        case "ON":
        result.innerHTML = " ";        
        result.innerHTML += "Word 'ON' Correct";
        wordsList.push(userValue);
        for (let i = 0; i < wordsList.length; i++ ){
            userWords.innerHTML += wordsList[i];
        }
        
        break;

        case "NODE":
        result.innerHTML = " ";        
        result.innerHTML += "Word 'NODE' Correct";
        wordsList.push(userValue);        
        for (let i = 0; i < wordsList.length; i++ ){
            userWords.innerHTML += wordsList[i];
        }
        break;

        default:
        result.innerHTML = " ";
        result.innerHTML += "Try Again";
    }
}

function clean(){
    document.querySelector("#user-inp").value = "";
}
