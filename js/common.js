function showSectionById(id){
    //  ----Hidden all id-----
    document.getElementById('donation_section').classList.add('hidden');
    document.getElementById('history_section').classList.add('hidden');
    //  ----show required id-----
    document.getElementById(id).classList.remove('hidden');
}

function getInputFieldById(id){
    const InputValue = document.getElementById(id).value;
    return InputValue;
}
function getTagValueById(id){
    const tagValue = document.getElementById(id).innerText;
    const intTagValue = parseFloat(tagValue);
    return intTagValue;
}