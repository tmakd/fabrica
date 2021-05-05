
// Algoritmo de QuickSort: Divide y vencerás!
function ordenarContactos (arr){
        if (arr.length < 2) return arr;

        let pivot = arr[0];
        let izquierda = [];
        let derecha = [];

        for (let i = 1, total = arr.length; i < total; i++) {
            if (arr[i].name < pivot.name) izquierda.push(arr[i]);
            else derecha.push(arr[i]);
        };
        return [
            ...ordenarContactos(izquierda),
            pivot,
            ...ordenarContactos(derecha)
        ];
}



export {ordenarContactos}
