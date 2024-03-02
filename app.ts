//* ============== Main Types ==============

//? ============== primitive

// const avg: number = 10
// const scoreRate: string = 'awful'
// const passed: boolean = true

// const lessons: Array<string> = ['ph1', 'math2']
//or like this
// const lesson: string[] = ['ph1', 'math2']
// const somethingStrange: any = 'its can be anything/pure js nothing in ts world'

//? ============== reference

//! both input and output types are defined
// const addTwoNum = (n1: number, n2: number): number => n1 + n2

// const printCoord = (pt: { x: number; y: number }) => {
//   console.log("The coordinate's x value is " + pt.x)
//   console.log("The coordinate's y value is " + pt.y)
// }

//! optional chaining
// function printName(obj: { first: string; last?: string }) {
// ...
// }
// printName({ first: 'Bob' })
// printName({ first: 'Alice', last: 'Bob' })

//? ============== Union type

//? it can be number or string
// function printId(id: number | string) {
//   console.log('Your ID is: ' + id)
// }

//! its generate error if u want access some string method in above ex
//! u must narrowing that with code like typeof

//? ============== Type Aliases
//? u can  give a name to any type
// type itsANumber = number
// const addTwoNum = (n1: itsANumber, n2: itsANumber) => n1 + n2

//? ============== Interfaces
//! An interface declaration is another way to name an object type
//! its similar to type but have some different
//! u can & a type and the new one have both of them but for interface u must extend that

// interface Point {
//   x: number;
//   y: number;
// }

// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });

//? ============== Type Assertions (Type Casting)
//! we cant access properties of element without these or
//! selecting theme because ts thinks its possible be null
// const myInp = document.getElementById('input_one') as HTMLInputElement
// const NOT_REACT = <HTMLInputElement>document.getElementById('input_one')

//?============== Literal Types
//! u can define special number or string types
// type Role = 'ADMIN' | 'USER'

//?============== Non-null Assertion
//Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined

//?============= Enums
// describing a value which could be one of a set of possible named constants.
//if u add number the start number is that and after that ++
// u can add number for all of theme
//without this its start from 0
// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR,
// }

//!ex types
// const person: {
//   name: string
//   age: number
//   isMale: boolean
//   hobbies: string[]
//   // tuple
//   // role: [number, string]
//   role: number
// } = {
//   name: 'max',
//   age: 20,
//   isMale: true,
//   hobbies: ['sports', 'cooking'],
//   // role: [2, 'author'],
//   role: Role.ADMIN,
// }

//* ============== Narrowing (Type guard)==============
//! 1-type guard use type of
// type Combinable = string | number
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return add.toString() + b.toString()
//   }
//   return a + b
// }

//! 2-type guard use in keyword
// type Admin = {
//   name: string
//   privileges: string[]
// }
// type Employee = {
//   name: string
//   startDate: Date
// }
// type UnknownEmployee = Employee | Admin
// function print(emp: UnknownEmployee) {
//   console.log('name ' + emp.name)
//   if ('privileges' in emp) {
//     console.log(`privileges ${emp.privileges}`)
//   }
// }

//! 3-type guard use instanceof keyword
//   if (vehicle instanceof Truck) {
//    vehicle.load(1000)
//   }

//! 4-Discriminated Unions
// u can use a type for every interface
// interface Bird {
//   type: 'bird'
//   flyingSpeed: number
// }

// interface Horse {
//   type: 'horse'
//   runningSpeed: number
// }

// type Animal = Horse | Bird

// function moveAnimal(animal: Animal) {
//   switch (animal.type) {
//     case 'horse':
//       return animal.runningSpeed
//     case 'bird':
//       return animal.flyingSpeed
//   }
// }

// console.log(moveAnimal({ type: 'bird', flyingSpeed: 90 }))

//! 5-predicates
// type Fish = { swim: () => void }
// type Bird = { fly: () => void }
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined
// }

//* ============== Here in Site more about functions ==============

//* ==============Classes And Interfaces==============

//* ==============Intersections==============

// type Admin = {
//   name: string
//   privileges: string[]
// }
// type Employee = {
//   name: string
//   startDate: Date
// }

// u can combine types
// type ElevatedEmployee = Admin & Employee

// const e1: ElevatedEmployee = {
//   name: 'max',
//   privileges: ['create-server'],
//   startDate: new Date(),
// }

//* ============== Index ==============

// interface ErrorContainer {
//   //! must be same type
//   // id: number

//   //dynamic key
//   [prop: string]: string
// }

// const errorBag: ErrorContainer = {
//   email: 'not a valid email !',
// }

//* ============== Function OverLoads ==============
//! u can say to ts what is the return in different situation
// function add(a: number, b: number): number
// function add(a: string, b: string): string
// function add(a: number, b: string): string
// function add(a: string, b: number): string
// function add(a: number | string, b: number | string) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString()
//   }
//   return a + b
// }

// const mustString = add('ali', 'b')
// const mustNumber = add(2, 1)

//* ============== Generics ==============

//! type connected to another type

// const names: Array<string> = []
// names[0].split(' ')

// const promise: Promise<string> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('10')
//   }, 2000)
// })

//*============== Generics Functions ==============

//! extend --> constraints
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB)
// }

// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })
// console.log(mergedObj)

//? another generic
// interface Lengthy {
//   length: number
// }
// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = 'Got no value.'
//   if (element.length === 1) {
//     descriptionText = 'Got 1 element.'
//   } else if (element.length > 1) {
//     descriptionText = 'Got ' + element.length + ' elements.'
//   }
//   return [element, descriptionText]
// }

// console.log(countAndDescribe(['Sports', 'Cooking']))

//?key  of generic

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return obj[key]
// }

// console.log(extractAndConvert({ name: 'ali' }, 'name'))

//? class generics
// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = []

//   addItem(item: T) {
//     this.data.push(item)
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return
//     }
//     this.data.splice(this.data.indexOf(item), 1)
//   }

//   getItems() {
//     return [...this.data]
//   }
// }

// const textS = new DataStorage<string>()

//? partial
// interface CourseGoal {
//   title: string
//   desc: string
//   completeUntil: Date
// }

// function createCourseGoal(
//   title: string,
//   desc: string,
//   completeUntil: Date
// ): CourseGoal {
//   let courseGoal: Partial<CourseGoal> = {}
//   courseGoal.title = title
//   courseGoal.desc = desc
//   courseGoal.completeUntil = completeUntil

//   return courseGoal as CourseGoal
// }

//* ============== Readonly ==============
//! readonly array or object
// const names: Readonly<string[]> = ['max', 'anna']

//* ============== Decorators ==============
// "experimentalDecorators": true,
// function Logger(constructor: Function) {
//   console.log('logging')
//   console.log(constructor)
// }

// //just point not exe
// @Logger
// class Person {
//   name = 'max'
//   constructor() {
//     console.log('creating person')
//   }
// }

// const pers = new Person()

// console.log(pers)

//? decorator factory
// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString)
//     console.log(constructor)
//   }
// }
// //we can pass value in this way
// @Logger('login ali')
// class Person {
//   name = 'max'
//   constructor() {
//     console.log('creating person')
//   }
// }

// const pers = new Person()

// console.log(pers)

//? more useful decorator can manipulate dom
//? its looks like angular component

// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookId)
//     const p = new constructor()
//     if (hookEl) {
//       hookEl.innerHTML = template
//       hookEl.querySelector('h1')!.textContent = p.name
//     }
//   }
// }
// @WithTemplate('<h1>my person object</h1>', 'app')
// class Person {
//   name = 'max'
//   constructor() {
//     console.log('creating person')
//   }
// }

// const pers = new Person()

// console.log(pers)

//? two decorator
// @Logger()
// @WithTemplate()

//bottom to top ⇡ for decorators
//but top to bottom (pure js ) for factories ⇣

//? different place of decorators
// function Log(target: any, propertyName: string | symbol) {
//   console.log(target, propertyName)
// }

// function log2(target: any, name: string, desc: PropertyDescriptor) {
//   console.log(target, name, desc)
// }
// function log3(target: any, name: string | symbol, desc: PropertyDescriptor) {
//   console.log(target, name, desc)
// }
// function log4(target: any, name: string, position: number) {
//   console.log(target, name, position)
// }
// class Product {
//   @Log
//   title: string
//   private _price: number
//   @log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val
//     }
//   }
//   constructor(t: string, p: number) {
//     this.title = t
//     this._price = p
//   }
//   @log3
//   getPriceWithTax(@log4 tax: number) {
//     return this._price * (1 + tax)
//   }
// }
