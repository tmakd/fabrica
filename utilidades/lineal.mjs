import calentar from '../utensilios/ollaCaliente'

function crearPochoclos (bolsitaDeMaiz){
    let pochoclos = [];                             // O(1)

    for(const maiz of bolsitaDeMaiz){               // n
        pochoclos.push(calentar(maiz)) ;            // n
    }
    return pochoclos                                // 1
}                                                 //--------
export {crearPochoclos}                         //  2 O(1) + 2 O (n) => Simplificamos => O(n)

