

function receivesAFunction(callback){
    return callback()
}
receivesAFunction(() => 'new order')

function returnsANamedFunction(){
    return function iAmJs(){
        console.log("Js is easy")
    }
 
}
function returnsAnAnonymousFunction(){
    return function (){
        return "i like Js"
    }

}