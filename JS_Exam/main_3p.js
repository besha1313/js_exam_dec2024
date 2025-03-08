let main_3p = document.createElement('div');
main_3p.setAttribute('id', 'main_3p');

let header_3p = document.createElement('div');
header_3p.setAttribute('id', 'header_3p');
let btnBack_3p = document.createElement('button');
btnBack_3p.setAttribute('id', 'btnBack_3p');
btnBack_3p.innerHTML = `<a href="./user-details.html">&#8656; BACK</a>`;
let h1_3p = document.createElement('h1');
h1_3p.setAttribute('id', 'h1_3p');
h1_3p.innerText = 'POST DETAILS';

header_3p.append(btnBack_3p, h1_3p);
main_3p.appendChild(header_3p);
document.body.append(main_3p);

let postDetail = document.createElement('div');
postDetail.setAttribute('id', 'postDetail');

main_3p.append(postDetail);

let currentPost = JSON.parse(localStorage.getItem('keyPost'));

for (const value in currentPost){
    let postValue = document.createElement('p');
    postValue.innerHTML = `<p><b>${value}:</b> ${currentPost[value]}</p>`;
    postDetail.appendChild(postValue);
}
let divComments = document.createElement('div');
divComments.setAttribute('id', 'divComments');
main_3p.append(divComments);

fetch(`https://jsonplaceholder.typicode.com/posts/${currentPost.id}/comments`)
    .then(rez => rez.json())
    .then(comments => {
        for (const comment of comments){
            let divComment = document.createElement('div');
            divComment.setAttribute('id', 'divComment');
            for (const valueComment in comment){
                divComment.innerHTML = `<p><b>postId:</b> ${comment.postId}</p>
                                        <p><b>id:</b> ${comment.id}</p>
                                        <p><b>name:</b> ${comment.name}</p>
                                        <p><b>email:</b> ${comment.email}</p>
                                        <p><b>body:</b> ${comment.body}</p>`
                divComments.append(divComment);
            }
            divComment.onmouseout = function () {
                divComment.setAttribute('id', 'divComment');
            }
            divComment.onmouseover = function(){
                divComment.setAttribute('id', 'divCommentAbsolut');
            }
        }
    });
