import Vue = require('vue')

console.log(Vue)

class Student {
  fln: string
  constructor(public fn: string, public mi: string, public ln: string) {
    this.fln = fn + ' ' + mi + ' ' + ln
  }
  getSt(st: Student) {
    return st.fn + ' ' + this.mi + ' ' + st.ln
  }
}

interface PS {
  fn: string
  ln: string
}

function hello(ps: PS) {
  return 'hello ' + ps.fn + ' ' + ps.ln
}

let user = 'world'
let user2 = { fn: 'yu', ln: 'hualing', xx: 'asdva'}
let user3 = new Student('yu', 'Mr.', 'hualing.')

console.log(hello(user2))
console.log(hello(user3))
console.log(user3)

function myCoolFn(f: (x:number) => void, nums: number[]) : void
function myCoolFn() {

}
myCoolFn(function(x) { console.log(x) }, [1, 2, 3])
myCoolFn(function(x) { console.log(x) }, [, ,])

let opt = {} as any
opt.color = 'red'

// declare let foo: string[] | null
// console.log(foo.length)
// console.log(foo!.length)

class Point {
  constructor(public x: number, public y: number) {}
  getDistance(p: Point) {
    let dx = p.x - this.x
    let dy = p.y - this.y
    return Math.sqrt(dx ** 2 + dy ** 2)
  }
}
interface Point {
  distanceFromOrigin(p: Point): number
}
Point.prototype.distanceFromOrigin = function(p: Point) {
  return this.getDistance({ x: 0, y: 0 })
}

let pt = new Point(3, 4)
console.log(pt.distanceFromOrigin(pt))
