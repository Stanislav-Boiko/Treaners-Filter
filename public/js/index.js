"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];




const originalTrainers = DATA.map((trainer, index) => ({ ...trainer, originalIndex: index }));

const trainerCard = document.getElementById('trainer-card');
const trainersContainer = document.querySelector('.trainers-cards__container');

const filtersSubmitBtn = document.querySelector('.filters__submit');

const directionInputs = document.querySelectorAll('input[name="direction"]');
const categoryInputs = document.querySelectorAll('input[name="category"]');


// Виведення карток тренерів на екран


function displayTrainers(trainers) {
	trainersContainer.innerHTML = '';
	trainers.forEach((trainer) => {
		

		const newTrainerName = trainerCard.content.cloneNode(true);

		newTrainerName.querySelector('p').textContent = trainer["first name"] + " " + trainer["last name"];
		
		const img = newTrainerName.querySelector("img");
		img.src = trainer.photo;
	
		// Привязання івенту до кнопки "Показати"
		const showMoreButton = newTrainerName.querySelector('.trainer__show-more');
	
		showMoreButton.addEventListener("click", function () {
			showModal(trainer);
		});
	// Створюємо LI, наповнюємо її та додаємо в контейнер тренерів
		let li = document.createElement("li");
		li.append(newTrainerName);
		trainersContainer.append(li);
	})
	
	
};


displayTrainers(originalTrainers);


// Виведення на екран блоків фільтрів та сортування
const sortingBlock = document.querySelector('.sorting');
const sidebarBlock = document.querySelector('.sidebar');

const sortingTitle = document.querySelector('.sorting__title');
const sortingBtn = document.querySelectorAll('.sorting__btn');



// Видаляємо атрибут  hidden  щоб показати блоки
if (sortingBlock) {
	sortingBlock.removeAttribute('hidden');
}

if (sidebarBlock) {
	sidebarBlock.removeAttribute('hidden');
}
	

// Функція сортування по Прізвищу
function sortByLastName () {

	let sortedByLastName = originalTrainers.sort((a, b) => a["last name"].localeCompare(b["last name"]));
	displayTrainers(sortedByLastName);

};


// Функція сортування за опитом
function sortByExperience () {

	let sortedByExperience = originalTrainers.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
	displayTrainers(sortedByExperience);

}


// Функція для дефолтного сортування по індексу
function sortByDefault() {
	let sortedByDefault = originalTrainers.sort((a, b) => a.originalIndex - b.originalIndex);
	displayTrainers(sortedByDefault);
}



// Номерація кнопок и додавання евенту
sortingBtn.forEach((button, index) => {
		
	button.index = index; // Прономеровуємо кнопки за індексом
  
	// Додаємо обробник подій до кожної кнопки
	button.addEventListener('click', function() {
		sortingBtn.forEach(btn => btn.classList.remove('sorting__btn--active'));

		
		if (index === 1) {
		// Сортування по фамілії
		sortByLastName();
	  } else if (index === 2) {
		// Сортування по опиту
		sortByExperience();
	  } else {
		// Сортування за замомчуванням
		sortByDefault()
	  }
	  button.classList.add('sorting__btn--active');

	});
	
});




// 	функція виводиту водального вікна кожного тренера 

function showModal(trainer) {
    const modalTemplate = document.querySelector('#modal-template').content.cloneNode(true);
    document.body.appendChild(modalTemplate);
    const modal = document.querySelector('.modal');
    // Наповнюємо кожну картку тренера інформацією з масиву
    modal.querySelector('.modal__img').src = trainer.photo;
    modal.querySelector('.modal__name').textContent = trainer["first name"] + " " + trainer["last name"];
    modal.querySelector('.modal__point--category').textContent = "Категорія: " + trainer.category.toUpperCase();
    modal.querySelector('.modal__point--experience').textContent = "Досвід: " + trainer.experience;
    modal.querySelector('.modal__point--specialization').textContent = "Напрям тренера: " + trainer.specialization.toUpperCase();
    modal.querySelector('.modal__text').textContent = trainer.description;

    // Відключаємо скрол сторінки додаємо стиль overflow: hidden
    document.body.style.overflow = 'hidden';

    modal.querySelector('.modal__close').addEventListener('click', function() {
        modal.remove();
        document.body.style.overflow = '';
    });

    // Додаємо закриття по кліку поза модалкою
    modal.addEventListener('mousedown', function(e) {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = '';
        }
    });
}


// Функція для отримання тексту з радіо-кнопок
const getSelectedFilterText = (inputs) => {
    return Array.from(inputs).find(input => input.checked).nextElementSibling.textContent.trim().toLowerCase();
};

// Функція для фільтрації тренерів
const filterTrainers = () => {
    // Отримуємо текст з вибраних категорій direction і category
    const selectedDirectionText = getSelectedFilterText(directionInputs);
    const selectedCategoryText = getSelectedFilterText(categoryInputs);

    // Фільтруємо тренерів
    const filteredTrainers = DATA.filter(trainer => {
        const matchesDirection = selectedDirectionText === 'всі' || trainer.specialization.toLowerCase() === selectedDirectionText;
        const matchesCategory = selectedCategoryText === 'всі' || trainer.category.toLowerCase() === selectedCategoryText;
        return matchesDirection && matchesCategory;
    });

    // Показуємо відфільтрованих тренерів
    displayTrainers(filteredTrainers);
};

// Слухаємо евент на кнопку "ПОКАЗАТИ"
filtersSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    filterTrainers(); // Фільтруем тренерів
});





// Прелоадером

// Функция для 	створення та додавання прелоадера в DOM
const createPreloader = () => {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(preloader);
};

// Функція для показу прелоадера
const showPreloader = () => {
    document.getElementById('preloader').style.display = 'flex';
};

// Функция для скривання прелоадера
const hidePreloader = () => {
    document.getElementById('preloader').style.display = 'none';
};


window.onload = () => {
	hidePreloader();
} 

// Визов функції створення прелоадера при загрузкі сторінки
createPreloader();


