console.log('----------Task_add_9_1----------');




let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let task = document.createElement('h1');                 // заголовок страницы
task.innerText = 'Task_add_9_1';
document.body.appendChild(task);

for (let elemCoursesArray of coursesArray) {              //итерация начального массива данных
    let divCourse = document.createElement('div');
    divCourse.classList.add('divCourse');
    document.body.appendChild(divCourse)

    let title = document.createElement('h2');             //создание блока названия Курса
    title.classList.add('title');

    let monfAndHour = document.createElement('div');       //создание блока количество месяцев + количество часов
    monfAndHour.classList.add('monfAndHour');
    let monthDuration = document.createElement('div');
    monthDuration.classList.add('monthDuration');
    let hourDuration = document.createElement('div');
    hourDuration.classList.add('hourDuration');

    let modules = document.createElement('div')          //создание блока под раздел Модули
    modules.classList.add('modules')

    title.innerText = elemCoursesArray.title;

    monfAndHour.append(monthDuration)
    monthDuration.innerText = 'Триває місяців:' + ' ' + elemCoursesArray.monthDuration;

    monfAndHour.append(hourDuration)
    hourDuration.innerText = 'Триває годин:' + ' ' + elemCoursesArray.hourDuration;

    let titleModules = document.createElement('h4');
    titleModules.innerText = 'Модулі, що входять до курсу:';
    modules.appendChild(titleModules);
    let ul = document.createElement('ul');            // построение списка модулей
    ul.classList.add('ul');
    modules.appendChild(ul);

    elemCoursesArray.modules.forEach(element => {
        let li = document.createElement('li')
        li.innerText = element;
        li.classList.add('li');
        ul.appendChild(li);
    });
    divCourse.append(title, monfAndHour, modules);
}































