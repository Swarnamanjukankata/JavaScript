async function loadCurrency() {
  let json = await fetch(`/currencies/{fromCurrency}`).then(res => res.json());
  rate = json[fromCurrency][toCurrency]
  console.log(json);
}
const fromCurrency=document.getElementsByClassName("from");
const toCurrency=document.getElementsByClassName("to")
loadCurrency();

