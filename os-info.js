//const os = require('node:os') mjs
//cjs
import os from 'node:os'
console.log('Name: ', os.platform())
console.log('Version: ', os.release())
console.log('Arq: ', os.arch())
console.log('CPUs: ', os.cpus())
console.log('libre: ', os.freemem()/1024/1024)
console.log('total: ', os.totalmem()/1024/1024)
console.log('time: ', os.uptime()/60/60)