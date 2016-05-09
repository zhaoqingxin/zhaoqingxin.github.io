class Foo {
    static classMethod() {
        console.log('hello');
    }
}


class Foo2 {
    static className() {
        console.log('hehe');
    }
}
class Foo3 extends Foo Foo2{

}
Foo3.className()