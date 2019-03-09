//Let vs Var 

//Var has function scope and Let has block scope.

function printNumbers() {
    for (let i = 1; i < 11; i++) {
        console.log(i);
    };
    //console.log(i); //NOTE IF YOU USE VAR YOU STILL HAVE ACCESS TO i SO IT WILL PRINT 11 
    //IF YOU USE LET YOU WILL GET AN ERROR
}

printNumbers();