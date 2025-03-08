
let main_2p = document.createElement('div');
main_2p.setAttribute('id', 'main_2p');
let header_2p = document.createElement('div');
header_2p.setAttribute('id', 'header_2p');
let btnBack_2p = document.createElement('button');
btnBack_2p.setAttribute('id', 'btnBack_2p');
btnBack_2p.innerHTML = `<a href="./index.html">&#8656; BACK</a>`;
let h1_2p = document.createElement('h1');
h1_2p.setAttribute('id', 'h1_2p');
h1_2p.innerText = 'LIST OF USER POSTS';
header_2p.append(btnBack_2p, h1_2p);
main_2p.appendChild(header_2p);
document.body.append(main_2p);

let user = JSON.parse(localStorage.getItem('keyUser'));

let userDetails = document.createElement('div');
userDetails.setAttribute('id', 'userDetails');

iterObj(user);
function iterObj (user){
    for(let value in user){
        if(typeof user[value] === 'object'){
            let userObj = document.createElement('p');
            userObj.innerHTML = `<p><b>${value}:</b></p>`;
            userDetails.appendChild(userObj);
            iterObj(user[value]);
        } else {
            let userValue = document.createElement('p');
            userValue.innerHTML = `<p><b>${value}:</b>&nbsp&nbsp ${user[value]}</p>`;
            userDetails.appendChild(userValue);
        }
    }
}

let btnPostList = document.createElement('button');
btnPostList.setAttribute('id', 'btnPostList');
btnPostList.innerText = 'post of current user';
main_2p.append(userDetails, btnPostList);

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(rez => rez.json())
    .then(posts => {
        btnPostList.onclick = function (){
            let divPosts = document.createElement('div');
            divPosts.setAttribute('id', 'divPosts');
            main_2p.append(divPosts);
            for (const post of posts){
                let divPost = document.createElement('div');
                divPost.setAttribute('id', 'divPost');
                for (const valuePost in post){
                    console.log(valuePost);
                    divPost.innerHTML = `<p><b>post:</b> ${post.id}</p>
                                        <p><b>title:</b> ${post.title}</p>`;
                    divPosts.appendChild(divPost);
                }
                btnPostList.setAttribute('disabled', true);

                divPost.onclick = function (){
                    localStorage.setItem('keyPost', JSON.stringify(post));
                    document.location = 'post-details.html';
                }
            }
        }
    });





