export class Card {

valeur:string;

  constructor(valeur:string) {
    console.log('je suis ' + valeur);

    this.valeur = valeur;

    this.createCard();
  }

  createCard = () => {
    console.log("creation de la carte");

    let rectangle:HTMLElement = document.createElement('div');
    rectangle.classList.add('carton');


    if(this.valeur === "PIQUE") {
      this. valeur = "♠";
    }
    if(this.valeur === "CŒUR") {
      this. valeur = "♥";
    }
    if(this.valeur === "CARREAU") {
      this. valeur = "♦";
    }
    if(this.valeur === "TREFLE") {
      this. valeur = "♣";
    }


    rectangle.textContent = this.valeur;


    document.body.appendChild(rectangle);

}

}