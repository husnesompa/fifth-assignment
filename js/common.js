// -------Button-----
function showSectionById(id){
    //  ----Hidden all id-----
    document.getElementById('donation_section').classList.add('hidden');
    document.getElementById('history_section').classList.add('hidden');
    //  ----show required id-----
    document.getElementById(id).classList.remove('hidden');
}

// -------Data from Input Feild------
function getInputFieldById(id){
    const InputValue = document.getElementById(id).value;
    const inputValueToNumber = parseFloat(InputValue);
    return inputValueToNumber;
}

// -------Data from HTML Tag------
function getTextById(id){
    const tagValue = document.getElementById(id).innerText;
    const intTagValue = parseFloat(tagValue);
    return intTagValue;
}

// -------Time and Date------
function forTime(){
    const currentTime = new Date();
    const formattedTime = currentTime.toTimeString();
    const formattedDate = currentTime.toUTCString();
    return formattedDate + ' ' + formattedTime ;
}

// -------Data from Parent Element------
function forTittle(id){
    const parentDiv = id.parentElement;
    const h2Element = parentDiv.querySelector('h2');
    const tittleText = h2Element.textContent;
    return tittleText;
}
