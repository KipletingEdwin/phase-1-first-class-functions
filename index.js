

function receivesAFunction(callback){
    return callback()
}
receivesAFunction(() => 'new order')

function returnsANamedFunction(){
    return function neverQuit(){
        console.log("Quitting is not an option")
    }
 
}
function returnsAnAnonymousFunction(){
    return function (){
        return "new label"
    }

}