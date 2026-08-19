// preveiw
const card_box = Array.from(document.querySelectorAll('.hot-deals-card-box .card'));
const preview_show = document.querySelector('.preveiw');
const preveiw_img = document.querySelector('#preveiw-img');
const preveiw_text = document.querySelector('.preveiw-text');
const preveiw_discount = document.querySelector('#preveiw-discount');
const preveiw_new_pric = document.querySelector('.preveiw-new-price');
const preveiw_old_price = document.querySelector('.preveiw-old-price');
const next_btn = document.querySelector('.next-product');
const close_btn = document.querySelector('.close-preview');
let index = 0;
card_box.map((el, i) => {
    el.addEventListener('click', function () {
        preview_show.classList.add('show');
        index = i;
        preveiw_img.src = el.querySelector('.product-img').src;
        preveiw_text.textContent = el.querySelector('p').textContent;
        preveiw_new_pric.textContent = el.querySelector('.new-price').textContent;
        const oldpriceel = el.querySelector('.old-price');
        if (oldpriceel) {
            preveiw_old_price.textContent = oldpriceel.textContent;
        } else {
            preveiw_old_price.textContent = '';
        }
        const p_discount = el.querySelector('discount');
        if (p_discount) {
            preveiw_discount = p_discount.textContent;
        }
        else {
            preveiw_discount.textContent = '';
        }
    })
}
)

next_btn.addEventListener('click', function () {
    index++;
    if (index == card_box.length) {
        index = 0;
    }
    preveiw_img.src = card_box[index].querySelector('.product-img').src;
    preveiw_text.textContent = card_box[index].querySelector('p').textContent;
    preveiw_new_pric.textContent = card_box[index].querySelector('.new-price').textContent;
    const oldpriceel = card_box[index].querySelector('.old-price');
    if (oldpriceel) {
        preveiw_old_price.textContent = oldpriceel.textContent;
    } else {
        preveiw_old_price.textContent = '';
    }

    const p_discount = card_box[index].querySelector('discount');
    if (p_discount) {
        preveiw_discount = p_discount.textContent;
    }
    else {
        preveiw_discount.textContent = '';
    }
})

close_btn.addEventListener('click', function () {
    preview_show.classList.remove('show');
})


// =======================clinet-reveiw-part====================
const client_next_btn = document.querySelector('.client-next-btn');

const client_previous_btn = document.querySelector('.client-previous-btn');
client_next_btn.addEventListener('click', function () {
    client_next_btn.classList.add('bg-change');
    client_previous_btn.classList.remove('bg-change');
})
client_previous_btn.addEventListener('click', function () {
    client_next_btn.classList.remove('bg-change');
    client_previous_btn.classList.add('bg-change');
})

// whichlist add remove
const addcard = Array.from(document.querySelectorAll('.whishlist'));
const create_card = document.querySelector('.add-to-card-box');
const create_img = document.querySelector('.add-to-card-img');
const create_text = document.querySelector('.add-to-card-tex');
const create_weight = document.querySelector('.add-to-card-weight');
const add_to_close = document.querySelector('.add-to-card-remove');
let index_1 = 0
addcard.forEach((el, i) => {
    el.addEventListener('click', function (e) {
        const card = el.closest('.card')
        index_1 = i;
        create_img.src = card.querySelector('.product-img').src;
        create_text.textContent = card.querySelector('p').textContent;
    });
})

add_to_close.addEventListener('click', function () {
   create_card.remove()
})