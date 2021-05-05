
function combinarVehiculos(camiones){
    let combinaciones = 0;                              // O(1)
    for (let i=0;i<camiones.length ;i++){               //O(n)
        for (let j=0;j<camiones.length ;j++) {          //O(n)
            if(camiones[i].marca !== camiones[j].marca){    // O(1)
                combinaciones++;                        // O(1)
                console.log(camiones[i].marca + ' - ' +camiones[j].marca); // O(1)
            }
        }

    }                                                // ---
    return combinaciones;                           //  O(1) + O(n) *  O(n) ( O(1) + O(1) ) => Simplificamos => O(n2)
}



export {combinarVehiculos}
