const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "right";
const basket = document.querySelector("#basket-heading");
basket.style.color = "brown";
basket.style.marginLeft = "30px";
const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.liststyleType = "none";
const fruit = document.querySelectorAll(".fruit");
for (let i = 0; i < fruit.length; i++)
{
    //fruit[i].style.backgroundColor = "white";
    fruit[i].style.padding = "10px";
    fruit[i].style.margin = "10px";
    fruit[i].style.borderRadius = "5px";
}
const fruiteven = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < fruiteven.length; i++)
{
    fruiteven[i].style.backgroundColor = "brown";
    fruiteven[i].style.color = "white";
}