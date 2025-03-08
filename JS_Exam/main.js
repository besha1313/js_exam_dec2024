let main = document.createElement('div');
main.setAttribute('id', 'main');
let h1 = document.createElement('h1');
h1.innerText = 'LIST OF USERS';
main.appendChild(h1);
document.body.append(main);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(rez => rez.json())
    .then(users => {
        let grid = document.createElement('div');
        grid.setAttribute('id', 'grid');
        main.appendChild(grid);
        for (const user of users){
            let userDiv = document.createElement('div');
            userDiv.setAttribute('id', 'userDiv');
            let userName = document.createElement('div');
            userName.setAttribute('id', 'userName');
            userName.innerHTML = `<h5>id: ${user.id}</h5>
                                  <h3>${user.name}</h3>`
            let button = document.createElement('button');
            button.innerText = 'click for more';
            button.setAttribute('class', 'button');
            userDiv.append(userName, button);
            grid.appendChild(userDiv);

            button.onclick = function (){
                localStorage.setItem('keyUser', JSON.stringify(user));
                document.location = 'user-details.html';
            }
        }
    });



