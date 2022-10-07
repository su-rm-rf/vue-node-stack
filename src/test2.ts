// Array<number>
// let number[1,2,3]
let arr: number[] = [1,2,3]
let arr2: Array<string> = ['a', 'b', 'c']
console.log(arr, arr2)

let obj: any = {x:1}
// obj.foo()

let uname = 'hualing'

function say(uname: string | number): boolean {
  return uname === 'uname'
}

type pName = {
  fn?: string
  ln: string
}

function printName(obj: pName) {
  console.log(obj.ln.toUpperCase())
}

printName({ln: 'hualing'})

interface A {
  name: string
}
interface B extends A {
  age: number
}

const x1 = 'hello' as any as number

function printX(txt: 'a' | 'b' | 'c') {}

const x2: bigint = BigInt(12)

