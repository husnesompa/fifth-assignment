// -------Button------
document.getElementById('donationBtn').addEventListener('click', function () {
    showSectionById('donation_section');
    forActiveButton(this);

});

document.getElementById('historyBtn').addEventListener('click', function () {
    showSectionById('history_section');
    forActiveButton(this);
});

// ------Modal-----
let modal = document.getElementById('my_modal_5');
let modalCloseButton = document.getElementById('modal_close_btn');

modalCloseButton.addEventListener('click', function () {
    modal.close();   // Close the modal
});


// -------Donation button , validation, calculation , transaction history and modal ------
document.getElementById('donate_now_button').addEventListener('click', function (event) {
    event.preventDefault();

    let totalAmount = getTextById('total_amount');
    const inputDonateMoney = getInputFieldById('donation_input');
    const donationAmount = getTextById('donation_amount');

    if (totalAmount > inputDonateMoney && inputDonateMoney > 0 && !isNaN(inputDonateMoney)) {

        // ------Calculation part -----
        let totalDonationAmount = donationAmount + inputDonateMoney;
        let availableAmount = totalAmount - inputDonateMoney

        // -------Display amount in UI -----
        document.getElementById('donation_amount').innerText = totalDonationAmount;
        document.getElementById('total_amount').innerText = availableAmount;

        // -----Donation History -----
        const donateTime = forTime();
        const tittle = forTittle(this);
        const div = document.createElement('div');
        div.classList.add('container', 'mx-auto', 'w-full', 'border-2', "p-4", "my-4", "rounded-lg");
        div.innerHTML = `
   <h4 class="text-xl font-bold">${inputDonateMoney} Taka is  ${tittle} </h4>
   <p id="displayTime">Date: ${donateTime} </p>
   `
        document.getElementById('history_section').appendChild(div);

        // ----modal---
        modal.showModal();
        // ----Clear Input---
        inputReset('donation_input');
    }
    else {
        alert("Please input correct amount");
    }

});



// --------Card 2--------
document.getElementById('donate_now_button_card_2').addEventListener('click', function (event) {
    event.preventDefault();

    let totalAmount = getTextById('total_amount');
    const inputDonateMoneyCard2 = getInputFieldById('donation_input_card_2');
    const donationAmountCard2 = getTextById('donation_amount_card_2');

    if (totalAmount > inputDonateMoneyCard2 && inputDonateMoneyCard2 > 0 && !isNaN(inputDonateMoneyCard2)) {
        // ------Calculation part -----
        let totalDonationAmountCard2 = donationAmountCard2 + inputDonateMoneyCard2;
        let availableAmountCard2 = totalAmount - inputDonateMoneyCard2

        // -------Display amount in UI -----
        document.getElementById('donation_amount_card_2').innerText = totalDonationAmountCard2;
        document.getElementById('total_amount').innerText = availableAmountCard2;

        // -----Donation History -----
        const donateTimeCard2 = forTime();
        const tittleCard2 = forTittle(this);
        const divCard2 = document.createElement('div');
        divCard2.classList.add('container', 'mx-auto', 'w-full', 'border-2', "p-4", "my-4", "rounded-lg");
        divCard2.innerHTML = `
   <h4 class="text-xl font-bold">${inputDonateMoneyCard2} Taka is  ${tittleCard2} </h4>
   <p id="displayTime">Date: ${donateTimeCard2} </p>
   `
        document.getElementById('history_section').appendChild(divCard2);
        // ----modal---
        modal.showModal();
        // ----Clear Input---
        inputReset('donation_input_card_2');
    }
    else {
        alert("Please input correct amount");
    }
});



// --------Card 3--------
document.getElementById('donate_now_button_card_3').addEventListener('click', function (event) {
    event.preventDefault();
    let totalAmount = getTextById('total_amount');
    const inputDonateMoneyCard3 = getInputFieldById('donation_input_card_3');
    const donationAmountCard3 = getTextById('donation_amount_card_3');

    if (totalAmount > inputDonateMoneyCard3 && inputDonateMoneyCard3 > 0 && !isNaN(inputDonateMoneyCard3)) {
        // ------Calculation part -----
        let totalDonationAmountCard3 = donationAmountCard3 + inputDonateMoneyCard3;
        let availableAmountCard3 = totalAmount - inputDonateMoneyCard3;

        // -------Display amount in UI -----
        document.getElementById('donation_amount_card_3').innerText = totalDonationAmountCard3;
        document.getElementById('total_amount').innerText = availableAmountCard3;

        // -----Donation History -----
        const donateTimeCard3 = forTime();
        const tittleCard3 = forTittle(this);
        const divCard3 = document.createElement('div');
        divCard3.classList.add('container', 'mx-auto', 'w-full', 'border-2', "p-4", "my-4", "rounded-lg");
        divCard3.innerHTML = `
   <h4 class="text-xl font-bold">${inputDonateMoneyCard3} Taka is  ${tittleCard3} </h4>
   <p id="displayTime">Date: ${donateTimeCard3} </p>
   `
        document.getElementById('history_section').appendChild(divCard3);

        // ----modal---
        modal.showModal();
        // ----Clear Input---
        inputReset('donation_input_card_3');
    }
    else {
        alert("Please input correct amount");
    }

});