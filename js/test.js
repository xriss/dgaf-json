
const napiwasm = require('napi-wasm');
const fs = require('node:fs');

/*

let tt = require('bindings')('djon_core');
console.log(tt)
console.log(tt.test())
*/

let f=async function (){

//console.log( napiwasm.napi )



const mod = await WebAssembly.instantiate( fs.readFileSync('./djon_core.wasm') , {napi:napiwasm.napi } )

// Create an environment.
let env = new napiwasm.Environment(mod.instance);
let exports = env.exports;

console.log("napi")
console.log(exports)

let djon=new exports.djon()
console.log(djon)
console.log(djon.locate())
console.log(djon.load("[1,2,3]"))
console.log(djon.save())

};f()



