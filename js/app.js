document.addEventListener("DOMContentLoaded",()=>{
    console.log(200);
    let date, pub, article_section, stock_article, btn_article
        date = ({
            myDate : new Date().getFullYear(),
            target : document.querySelector("footer p")
            
        })
        /* bouton pour voir les articles */
        btn_article =document.querySelector(".btn-add")
        date.target.innerText += date.myDate;
        console.log(typeof date)
        /* objet article titre, date et paragraphe */
        pub = [
            {
                titre: "Jazz 🎷",
                date: `1890`,
                msg: "Le jazz est un genre musical originaire du Sud des États-Unis, créé à la fin du xixe siècle et au début du xxe siècle au sein des communautés afro-américaines. Avec plus de cent ans d'existence, du ragtime au jazz actuel, il recouvre de nombreux sous-genres marqués par un héritage de la musique euro-américaine et afro-américaine, et conçus pour être joués en public. ",
                image: "./asset/jazz.png",  
            },
            {
                titre: "Rock 🎸",
                date: `1950`,
                msg: "Le rock est un genre musical apparu dans les années 1950 aux États-Unis et qui s'est développé en différents sous-genres à partir des années 1960, notamment aux États-Unis et au Royaume-Uni1. Il prend ses racines dans le rock 'n' roll des années 1940 et 1950, lui-même grandement influencé par le rhythm and blues et la country. Le rock a également incorporé des éléments provenant d'autres genres dont la folk, le blues, le jazz et la musique classique.",
                image: "./asset/rock.jpg",
                imoji: "&#128077;"   
            },
            {
                titre: "Pop 🎙",
                date: `1955`,
                msg: "La musique pop (ou simplement la pop) est un genre musical apparu dans les années 1960 au Royaume-Uni et aux États-Unis. Ces chansons parlent en général de l'amour ou des relations amoureuses. Elle met l'accent sur la chanson individuelle plutôt que sur l'album, et utilise essentiellement des chansons courtes avec des rythmes associés à la danse.",
                image: "./asset/pop.jpg",
                imoji: "&#128077;"   
            }

        ]
       
        article_section = document.querySelector(".article_of");
        stock_article = "";
            for(data of pub){
                console.log(
                    `${data.titre} ${data.date} ${data.msg} ${data.image}`
                    )
            stock_article += `
                            <figure>
                                <img src="${data.image}" alt="image">
                                <figcaption>
                                    <h2>${data.titre}</h2>
                                    <time datetime="2021-04-10T20:00:00">${data.date}</time>
                                    <p>${data.msg}<span aria-hidden="true"></span></p>
                                </figcaption>
                            </figure>`
            }
     
        btn_article.addEventListener("click",function(){
            article_section.innerHTML = stock_article;
            article_section.classList.toggle("article_on");
           this.classList.toggle("btn-remove");
        })

})