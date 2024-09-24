// -------Button------
document.getElementById('donationBtn').addEventListener('click', function () {
    showSectionById('donation_section')
});

document.getElementById('historyBtn').addEventListener('click', function () {
    showSectionById('history_section');
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

    const inputDonateMoney = getInputFieldById('donation_input');
    const totalAmount = getTextById('total_amount');
    const donationAmount = getTextById('donation_amount');

    if (totalAmount > inputDonateMoney && inputDonateMoney > 0 && !isNaN(inputDonateMoney)) {

        // ------Calculation part -----
        const totalDonationAmount = donationAmount + inputDonateMoney;
        const availableAmount = totalAmount - inputDonateMoney

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
    }
    else {
        alert("Please input correct amount");
    }
});



