console.log(`----------Task_6_11----------`);
// console.log(`-----------написати пошук всіх об'єктів, в яких в modules є sass----------`);
// console.log(`-----------написати пошук всіх об'єктів, в яких в modules є docker----------`);

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

console.log (coursesArray);

console.log(`-----------написати пошук всіх об'єктів, в яких в modules є sass----------`);


let searchModule = []

function search (module_search) {
    for(let courses of coursesArray){
        for (let valueModules in courses){
            if(Array.isArray(courses[valueModules])){
                let arr = courses[valueModules]
                if (arr.includes(module_search)){
                    searchModule.push(courses)
                }
            }
        }
    }
    return searchModule
}

// console.log(search('sass'))

console.log(`-----------написати пошук всіх об'єктів, в яких в modules є docker----------`);

console.log(search('docker'))



