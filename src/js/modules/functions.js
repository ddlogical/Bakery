export function chefChange() {
    const chefs = $(".chef-card__name");
    const chefOne = $("#chef-1");
    const chefTwo = $("#chef-2");
    const chefImgOne = $("#chef-img-1");
    const chefImgTwo = $("#chef-img-2");
    const chefQuoteOne = $("#chef-quote-1");
    const chefQuoteTwo = $("#chef-quote-2");

    chefs.on('mouseover', (e) => {
        if (e.target.id == "chef-2") {
            chefOne.css("color", "#56534c");
            chefTwo.css("color", "#a47d5e");
            chefImgOne.removeClass("chef-card__image--visible");
            chefImgOne.addClass("chef-card__image--invisible");
            chefImgTwo.removeClass("chef-card__image--invisible");
            chefImgTwo.addClass("chef-card__image--visible");
            chefQuoteOne.removeClass("chef-card__quote--visible");
            chefQuoteOne.addClass("chef-card__quote--invisible");
            chefQuoteTwo.removeClass("chef-card__quote--invisible");
            chefQuoteTwo.addClass("chef-card__quote--visible");
        } else if (e.target.id == "chef-1") {
            chefTwo.css("color", "#56534c");
            chefOne.css("color", "#a47d5e");
            chefImgTwo.removeClass("chef-card__image--visible");
            chefImgTwo.addClass("chef-card__image--invisible");
            chefImgOne.removeClass("chef-card__image--invisible");
            chefImgOne.addClass("chef-card__image--visible");
            chefQuoteTwo.removeClass("chef-card__quote--visible");
            chefQuoteTwo.addClass("chef-card__quote--invisible");
            chefQuoteOne.removeClass("chef-card__quote--invisible");
            chefQuoteOne.addClass("chef-card__quote--visible");
        }
    })

    chefs.on('mouseleave', (e) => {
            chefOne.css("color", "#56534c");
            chefTwo.css("color", "#56534c");
            chefImgTwo.removeClass("chef-card__image--visible");
            chefImgTwo.addClass("chef-card__image--invisible");
            chefImgOne.removeClass("chef-card__image--invisible");
            chefImgOne.addClass("chef-card__image--visible");
            chefQuoteTwo.removeClass("chef-card__quote--visible");
            chefQuoteTwo.addClass("chef-card__quote--invisible");
            chefQuoteOne.removeClass("chef-card__quote--invisible");
            chefQuoteOne.addClass("chef-card__quote--visible");
    })
}

export function tastyRatingChanger() {
    const stars = $(".tasty__rating-icon");
    const starOne = $("#rating-use-1");
    const starTwo = $("#rating-use-2");
    const starThree = $("#rating-use-3");
    const starFour = $("#rating-use-4");
    const starFive = $("#rating-use-5");
    let arrStars = [starOne, starTwo, starThree, starFour, starFive];
    let check = false;

    stars.on('click', (e) => {

        let counter;
        check = check ? false : true;

        if (check == false) {
            counter = 5;
        } else {
            switch (e.target.id) {
                case "rating-icon-1":
                    counter = 1;
                    break; 
                case "rating-icon-2":
                    counter = 2;
                    break; 
                case "rating-icon-3":
                    counter = 3;
                    break; 
                case "rating-icon-4":
                    counter = 4;
                    break; 
                case "rating-icon-5":
                    counter = 5;
                    break; 
            }
        }

        for (let i = 0; i < counter; i++) {
            if (check == true) {
                arrStars[i].attr("xlink:href", "img/sprite.svg#icon-star-full");
            } else if (check == false) {
                arrStars[i].attr("xlink:href", "img/sprite.svg#icon-star-empty");
            }

        }

    });

}

export function tastySlider() {
    $('.tasty__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
}

export function bCardChange() {
    const doc = $(document);
    const cardContainers = $(".breakfast__card-container");
    const cardContainerOne =$(".breakfast__card-container--1");
    const cardContainerTwo =$(".breakfast__card-container--2");
    const cardContainerThree =$(".breakfast__card-container--3");
    let clicker = 1;
    let newIteration = false;

    cardContainers.on("click", (e) => {
        if (e.target.classList[0] !== "button-transparent") {
            switch (clicker) {
                case 1:
                    cardContainerOne.removeClass("breakfast__card-container--visible");
                    cardContainerOne.addClass("breakfast__card-container--invisible");
                    clicker = 2
                    break; 
                case 2:
                    cardContainerTwo.removeClass("breakfast__card-container--visible");
                    cardContainerTwo.addClass("breakfast__card-container--invisible");
                    clicker = 3
                    break; 
                case 3:
                    cardContainerOne.removeClass("breakfast__card-container--invisible");
                    cardContainerTwo.removeClass("breakfast__card-container--invisible");
                    cardContainerOne.addClass("breakfast__card-container--visible");
                    cardContainerTwo.addClass("breakfast__card-container--visible");
                    clicker = 1;
                    break; 
                }
        }
    })
}


export function popupVisible() {
    const popup = $(".popup");
    const btn = $(".header__button");
    const btnTransparent = $(".button-transparent");
    const btnWhite = $(".button-white");
    const close = $(".popup__menu-close");

    btn.on('click', () => {
        popup.css("opacity", 1);
        popup.css("visibility", "visible");
    })

    btnTransparent.on('click', () => {
        popup.css("opacity", 1);
        popup.css("visibility", "visible");
    })

    btnWhite.on('click', () => {
        popup.css("opacity", 1);
        popup.css("visibility", "visible");
    })

    popup.on('click', (e) => {
        if(e.target.classList[0] === "popup") {
            popup.css("opacity", 0);
            popup.css("visibility", "hidden");
        }
    })

    close.on('click', () => {
        popup.css("opacity", 0);
        popup.css("visibility", "hidden");
    })

}