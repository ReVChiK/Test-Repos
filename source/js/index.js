function Scroll(){
    let article = document.querySelector('.article-header-date');
    article.scrollIntoView(true);
}

function Show_Content(){
    
    let arrows = document.getElementsByClassName('card-arrow-image');

    let cards_points = document.getElementsByClassName('cards-points-title');

    for(let i = 0; i < arrows.length; i++){
        arrows[i].onclick = ()=>{
            cards_points[i].style.display = 'block';
            arrows[i].style.animation = 'none';
        }
    }
}

Show_Content();