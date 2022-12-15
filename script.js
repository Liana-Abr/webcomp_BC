import Card from "./components/Card/index.js";

if(!customElements.get("la-pc")){
    customElements.define("la-pc",Card);
}

fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=9")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.data.forEach(card => {
      let tag = document.createElement("la-cc");
      console.log(card);
      tag.setAttribute("user",card.owner);
      tag.setAttribute("number",card.number);
      tag.setAttribute("expire",card.expiration);
      tag.setAttribute("type",card.type);
      document.body.append(tag);
    })
  })