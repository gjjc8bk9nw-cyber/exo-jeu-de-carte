
import { Card } from './Card';
import './style.css'

const PI:number =3.1415;

let box:HTMLElement = document.querySelector('.box')!;

console.log(box);

let carte:Card = new Card("PIQUE");
let carte2:Card = new Card("CŒUR");
let carte3:Card = new Card("CARREAU");
let carte4:Card = new Card("TREFLE");