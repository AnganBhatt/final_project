// ============================================================
//                    PRODUCT PREVIEW
// ============================================================

const card_box = Array.from(
    document.querySelectorAll('.hot-deals-card-box .card')
);

const preview_show = document.querySelector('.preveiw');
const preveiw_img = document.querySelector('#preveiw-img');
const preveiw_text = document.querySelector('.preveiw-text');
const preveiw_discount = document.querySelector('#preveiw-discount');
const preveiw_new_pric = document.querySelector('.preveiw-new-price');
const preveiw_old_price = document.querySelector('.preveiw-old-price');

const next_btn = document.querySelector('.next-product');
const close_btn = document.querySelector('.close-preview');

let index = 0;


// Only run preview code if preview exists on the page
if (
    preview_show &&
    preveiw_img &&
    preveiw_text &&
    preveiw_new_pric &&
    preveiw_old_price &&
    next_btn &&
    close_btn
) {

    // -----------------------------
    // Show product preview
    // -----------------------------

    card_box.forEach((el, i) => {

        el.addEventListener('click', function () {

            preview_show.classList.add('show');

            index = i;

            const productImg = el.querySelector('.product-img');
            const productText = el.querySelector('p');
            const newPrice = el.querySelector('.new-price');
            const oldPrice = el.querySelector('.old-price');
            const discount = el.querySelector('.discount');

            if (productImg) {
                preveiw_img.src = productImg.src;
            }

            if (productText) {
                preveiw_text.textContent = productText.textContent;
            }

            if (newPrice) {
                preveiw_new_pric.textContent = newPrice.textContent;
            }

            if (oldPrice) {
                preveiw_old_price.textContent = oldPrice.textContent;
            } else {
                preveiw_old_price.textContent = '';
            }

            if (discount && preveiw_discount) {
                preveiw_discount.textContent = discount.textContent;
            } else if (preveiw_discount) {
                preveiw_discount.textContent = '';
            }

        });

    });


    // -----------------------------
    // Next product
    // -----------------------------

    next_btn.addEventListener('click', function () {

        if (card_box.length === 0) {
            return;
        }

        index++;

        if (index >= card_box.length) {
            index = 0;
        }

        const currentCard = card_box[index];

        const productImg =
            currentCard.querySelector('.product-img');

        const productText =
            currentCard.querySelector('p');

        const newPrice =
            currentCard.querySelector('.new-price');

        const oldPrice =
            currentCard.querySelector('.old-price');

        const discount =
            currentCard.querySelector('.discount');


        if (productImg) {
            preveiw_img.src = productImg.src;
        }

        if (productText) {
            preveiw_text.textContent = productText.textContent;
        }

        if (newPrice) {
            preveiw_new_pric.textContent = newPrice.textContent;
        }

        if (oldPrice) {
            preveiw_old_price.textContent = oldPrice.textContent;
        } else {
            preveiw_old_price.textContent = '';
        }

        if (discount && preveiw_discount) {
            preveiw_discount.textContent = discount.textContent;
        } else if (preveiw_discount) {
            preveiw_discount.textContent = '';
        }

    });


    // -----------------------------
    // Close preview
    // -----------------------------

    close_btn.addEventListener('click', function () {

        preview_show.classList.remove('show');

    });

}



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
// password
const password = document.querySelector('.password');
const show_btn = document.querySelector('.pass-btn-1');
const hide_btn = document.querySelector('.pass-btn-2');

show_btn.addEventListener('click', function () {

    password.type = "text";
    show_btn.classList.add('active');
    hide_btn.classList.add('active');

});

hide_btn.addEventListener('click', function () {

    password.type = "password";

    hide_btn.classList.remove('active');
    show_btn.classList.remove('active');

});