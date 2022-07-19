jupit = [ 5, 4, 3, -9, -6, 0, 0]

function newIdentif(jupit) {

    let elemCircle = 0;
    let identiFi = 0;
    let componEnt = 0;
    const long = jupit.length;

    for ( let i = 0; i < long; i ++) {
        if ( jupit[i] === 0) {
                elemCircle += 1;
        } else if ( jupit[i] < 0) {
                identiFi += 1;
        } if (jupit[i] > 0 ) {
                componEnt += 1;
        }

    }
    console.log(elemCircle/long);
    console.log(identiFi/long);
    console.log(componEnt/long);
}

newIdentif(jupit);