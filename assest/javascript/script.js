

// ============================================================
//                    CLIENT REVIEW
// ============================================================

const client_next_btn =
    document.querySelector('.client-next-btn');

const client_previous_btn =
    document.querySelector('.client-previous-btn');


// Only run if both buttons exist
if (client_next_btn && client_previous_btn) {

    client_next_btn.addEventListener('click', function () {

        client_next_btn.classList.add('bg-change');

        client_previous_btn.classList.remove('bg-change');

    });


    client_previous_btn.addEventListener('click', function () {

        client_next_btn.classList.remove('bg-change');

        client_previous_btn.classList.add('bg-change');

    });

}



// ============================================================
//                    WISHLIST / ADD TO CART
// ============================================================

const addcard =
    Array.from(document.querySelectorAll('.whishlist'));

const create_card =
    document.querySelector('.add-to-card-box');

const create_img =
    document.querySelector('.add-to-card-img');

const create_text =
    document.querySelector('.add-to-card-tex');

const create_weight =
    document.querySelector('.add-to-card-weight');

const add_to_close =
    document.querySelector('.add-to-card-remove');

let index_1 = 0;


// Wishlist buttons
if (addcard.length > 0) {

    addcard.forEach((el, i) => {

        el.addEventListener('click', function () {

            const card = el.closest('.card');

            if (!card) {
                return;
            }

            index_1 = i;

            const productImg =
                card.querySelector('.product-img');

            const productText =
                card.querySelector('p');


            if (productImg && create_img) {
                create_img.src = productImg.src;
            }

            if (productText && create_text) {
                create_text.textContent =
                    productText.textContent;
            }

        });

    });

}


// Close add-to-cart card
if (add_to_close && create_card) {

    add_to_close.addEventListener('click', function () {

        create_card.remove();

    });

}



// ============================================================
//                    MOBILE SEARCH
// ============================================================

const search_bar_show =
    document.querySelector('.search-box');

const search_icon =
    document.querySelector('.search-icon');

const remove_search_bar =
    document.querySelector('.mobile-close-search');


// IMPORTANT:
// Search will only run when all 3 elements exist.
if (
    search_bar_show &&
    search_icon &&
    remove_search_bar
) {

    // Open search
    search_icon.addEventListener('click', function () {

        search_bar_show.classList.add('show');

    });


    // Close search
    remove_search_bar.addEventListener('click', function () {

        search_bar_show.classList.remove('show');

    });
}

// ============================================================
//                    discount-offer-time
// ============================================================
const day = document.querySelector('.Days')
const hour = document.querySelector('.Hours')
const minute = document.querySelector('.Minutes')
const second = document.querySelector('.Seconds')

const target_day = new Date('December 1 2026 00:00:00').getTime()

function timer() {
    const present_timer = new Date().getTime()
    const day_left = target_day - present_timer;

    const left_day = Math.floor(day_left / 1000 / 60 / 60 / 24);
    const left_hour = Math.floor(day_left / 1000 / 60 / 60) % 24;
    const left_minute = Math.floor(day_left / 1000 / 60) % 60;
    const left_second = Math.floor(day_left / 1000) % 60

    day.innerHTML = left_day;
    hour.innerHTML = left_hour;
    minute.innerHTML = left_minute;
    second.innerHTML = left_second;
}
setInterval(timer, 1000)





// shop timer
const shop_day = document.querySelector('.shop_days');
const shop_hour = document.querySelector('.shop_hours');
const shop_minute = document.querySelector('.shop_minutes');
const shop_second = document.querySelector('.shop_seconds');

const target_time = new Date('November 1 2026 00:00:00').getTime();

function shop_timer() {
    const shop_present_time = new Date().getTime();
    const time_difference = target_time - shop_present_time;

    const days_left = Math.floor(time_difference / 1000 / 60 / 60 / 24);
    const hour_left = Math.floor(time_difference / 1000 / 60 / 60) % 24;
    const minute_left = Math.floor(time_difference / 1000 / 60) % 60;
    const second_left = Math.floor(time_difference / 1000) % 60;

    console.log(days_left, hour_left, minute_left, second_left)
    shop_day.innerHTML = days_left;
    shop_hour.innerHTML = hour_left;
    shop_minute.innerHTML = minute_left;
    shop_second.innerHTML = second_left;
    if (time_difference <= 0) {
        shop_day.innerHTML = "00";
        shop_hour.innerHTML = "00";
        shop_minute.innerHTML = "00";
        shop_second.innerHTML = "00";
        clearInterval(shop_time);
    }
}

 const shop_time = setInterval(shop_timer, 1000);