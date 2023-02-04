const price = document.querySelectorAll(".price");

price.forEach((element) => {
  element.textContent = new Intl.NumberFormat("ru-RU", {
    currency: "kzt",
    style: "currency",
  }).format(element.textContent);
});
