document.getElementById('donationBtn').addEventListener('click', function(){
    showSectionById('donation_section')
});

document.getElementById('hitoryBtn').addEventListener('click', function(){
    showSectionById('history_section');
});


document.getElementById('donate_now_button').addEventListener('click', function(event){
   event.preventDefault();

   const inputDonateMoney = getInputFieldById('donation_input');
   const totalAmount = getTagValueById('total_amount');
   if (totalAmount > inputDonateMoney && inputDonateMoney > 0 && typeof inputDonateMoney === 'number' && !isNaN(inputDonateMoney)) {
    console.log("ok");
} else {
    console.log("Please input correct amount") ;
}

});

