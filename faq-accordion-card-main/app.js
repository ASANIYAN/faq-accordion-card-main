const listItems = document.querySelectorAll('li');

const listArr = Array.from(listItems);
console.log(listArr);

listArr.map((item) => {
  item.addEventListener('click', (e) => {
    item.childNodes[3].classList.toggle('display');

    item.childNodes[1].classList.toggle('active');
    item.childNodes[5].classList.toggle('rotate');
  });
});
