// const fs = require('express'); no son nativos de node
//const fs = require('./fs');

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv
const { crearArchivo } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('listar');
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(error => console.log(error));
        break;

    default:
        console.log('comando no reconocido');
}

console.log(argv);
// let argv2 = process.argv;
// console.log('limite', argv.limite);
//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado: ${archivo}`))
//     .catch(error => console.log(error));