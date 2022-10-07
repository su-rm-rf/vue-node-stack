var Student = /** @class */ (function () {
    function Student(fn, mi, ln) {
        this.fn = fn;
        this.mi = mi;
        this.ln = ln;
        this.fln = fn + ' ' + mi + ' ' + ln;
    }
    return Student;
}());
function hello(ps) {
    return 'hello ' + ps.fn + ' ' + ps.ln;
}
// let user = 'world'
// let user = { fn: 'hello', ln: 'world'}
var user = new Student('yu', 'Mr.', 'hualing');
console.log(hello(user));
console.log(user);
