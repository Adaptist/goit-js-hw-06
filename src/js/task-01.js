const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const categoriesSubtitle = item.querySelector('h2');
    const categoriesItem = item.querySelectorAll('li');

    console.log(`Category: ${categoriesSubtitle.textContent}`);
    console.log(`Elements: ${categoriesItem.length}`);
});