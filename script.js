const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];

const wrapperForItem = document.querySelector('#item-template');
const animalsCollection = document.querySelector('#shop-items');



function createAnimal(item) {
    const animal = wrapperForItem.content.cloneNode(true);
    animal.querySelector('h1').textContent = item.title;
    animal.querySelector('p').textContent = item.description;
    animal.querySelector('.price').textContent = item.price;
    const tagsWrapper = animal.querySelector('.tags');
    item.tags.forEach((i) => {
        const tag = document.createElement('span');
        tag.textContent = i;
        tag.classList.add('tag');
        tagsWrapper.append(tag);
    });
    animal.querySelector('img').src = item.img;
    return animal;
};

for (let item of items) {
    const animalPage = createAnimal(item);
    animalsCollection.append(animalPage);
};

const button = document.querySelector('#search-btn');
const inputText = document.querySelector('#search-input');
const nothingFound = document.querySelector('#nothing-found');
button.addEventListener('click', function() {
    const searchItem = inputText.value.trim().toLowerCase();
    let searchResults = [...items];

    for (let item of items) {
        animalsCollection.innerHTML = '';
        searchResults = items.filter((item) => item.title.toLowerCase().includes(searchItem));
        searchResults.forEach((elem) => {

            animalsCollection.append(createAnimal(elem));
        });

        nothingFound.textContent = "";
        if (searchResults.length === 0) {
            animalsCollection.innerHTML = '';
            nothingFound.textContent = "Ничего не найдено";
        };
    };
    inputText.value = ' ';
});