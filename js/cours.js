var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

// Création du chenil (vide)
var chenil = [];

// Création des chiens
var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
var medor = Object.create(Chien);
medor.init("Médor", "labrador", 58);

chenil.push (crokdur);
chenil.push (pupuce);
chenil.push (medor);

console.log("Le chenil héberge " + chenil.length + " chien(s) :");

for (var i = 0 ; i < chenil.length ; i++) {
    var description;
    description = chenil[i].nom + " est un " + chenil[i].race + " mesurant " + chenil[i].taille + " cm. Il aboie : " + chenil[i].aboyer();
    console.log(description);
}

