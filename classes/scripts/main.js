class Cake {
    constructor(flavor, frosting, size, layers) {
        this.flavor = flavor;
        this.frosting = frosting;
        this.size = size;
        this.layers = layers;

    }

    cakeStats() {
        return `This ${this.size}, ${this.layers} layer will be ${this.flavor} with ${this.frosting} frosting.`;
    }

}

function tieredCake(cake1, cake2) {
    const layers1 = cake1.layers;
    const layers2 = cake2.layers;

    return layers1 + layers2;
}

let smVanilla = new Cake('vanilla', 'buttercream', '6"', 3);
let medVanilla = new Cake('vanilla', 'buttercream', '8"', 2);
let lgVanilla = new Cake('vanilla', 'buttercream', '10"', 3);
let smChocolate = new Cake('chocolate', 'buttercream', '6"', 2);
let medChocolate = new Cake('chocolate', 'buttercream', '8"', 2);
let lgChocolate = new Cake('chocolate', 'buttercream', '10"', 3);
 

cake1 = tieredCake(lgVanilla, medChocolate);
cake2 = tieredCake(medChocolate, smChocolate);
cake3 = tieredCake(lgChocolate, medVanilla);
cake4 = tieredCake(lgChocolate, lgVanilla);

document.getElementById("cake1").innerHTML = 'The cake will have ' + cake1 + ' layers. <br>Tier 1: ' + lgVanilla.cakeStats() + '<br>Tier 2: ' + medChocolate.cakeStats();

document.getElementById("cake2").innerHTML = 'The cake will have ' + cake2 + ' layers. <br>Tier 1: ' + medChocolate.cakeStats() + '<br>Tier 2: ' + smChocolate.cakeStats();

document.getElementById("cake3").innerHTML = 'The cake will have ' + cake3 + ' layers. <br>Tier 1: ' + lgChocolate.cakeStats() + '<br>Tier 2: ' + medVanilla.cakeStats();

document.getElementById("cake4").innerHTML = 'The cake will have ' + cake4 + ' layers. <br>Tier 1: ' + lgChocolate.cakeStats() + '<br>Tier 2: ' + lgVanilla.cakeStats();

