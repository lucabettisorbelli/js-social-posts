const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


function arrayPost(arrayPosts) {
    console.log(arrayPosts);
}

arrayPost(posts);

let container = document.getElementById("container");
let postContain = document.querySelector(".post");

posts.forEach(elementoPosts => {
    
    const {id, content, media, author, likes, created} = elementoPosts;
    
    console.log(id, content, media, author, likes, created);
    
    let postElement = document.createElement("div");

    let authorImage = "";
    if (author.image) {
        authorImage = `<img class="profile-pic" src="${author.image}"`
    }

    postElement.innerHTML =
    `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${ authorImage }
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${ author.name }</div>
                    <div class="post-meta__time">${ created }</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${ content }</div>
        <div class="post__image">
            <img src="${ media }" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button" href="#" data-postid="${ id }">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${ id }" class="js-likes-counter">${ likes }</b> persone
                </div>
            </div> 
        </div>            
    </div>`;

    postContain.appendChild(postElement);
})

    const likesContainer = document.getElementsByClassName("js-likes");

    for (let i = 0; i < likesContainer.length; i++) {
        const currentContainer = likesContainer[i];
        const btn = currentContainer.querySelector(".like-button");
        const likes = currentContainer.querySelector(".js-likes-counter");
        const clickedClass = "like-button--liked";
    
        btn.addEventListener("click", function(e) {
            e.preventDefault();
    
            //Se l'elemento NON ha già la classe "clicked"
            if( !btn.classList.contains(clickedClass) ) {
                //aggiungo la classe
                btn.classList.add(clickedClass);
                //recupero e incremento i likes
                let likeNumber = parseInt( likes.innerText );
                likeNumber++;
                //scrivo il valore aggiornato
                likes.innerText = likeNumber;
            } else {
                //aggiungo la classe
                btn.classList.remove(clickedClass);
                //recupero e incremento i likes
                let likeNumber = parseInt( likes.innerText );
                likeNumber--;
                //scrivo il valore aggiornato
                likes.innerText = likeNumber;
            }

    
})
    }
