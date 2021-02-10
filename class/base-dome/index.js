class MathHandle {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  add(x, y) {
    return x + y
  }
}
const m = new MathHandle(1, 2)
console.log(m.add(1, 2))

console.log('typeof:', typeof MathHandle)
console.log('是否相同:', MathHandle === MathHandle.prototype.constructor)
console.log('是否相同:', m.__proto__ === MathHandle.prototype)


// 继承
class Animal {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat`)
  }
}
class Dog extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  say() {
    console.log(`${this.name} ${this.age}岁了`)
  }
}
const d1 = new Dog('小黄', 8)
d1.eat()
d1.say()
