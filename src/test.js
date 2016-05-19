function fn() {
    var a = 10;
    setTimeout(function(){
        console.log(a);
    },1000)
    return;
    console.log('over');
}
fn();