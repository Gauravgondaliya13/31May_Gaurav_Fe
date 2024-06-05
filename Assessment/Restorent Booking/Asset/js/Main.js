
// function FirstB(){
//     const booking=document.getElementById("bookinfiled").value
//     const dynamicFields=document.getElementById("dyanamicField");
//     dynamicFields.innerHTML = ''

//     if(booking === "fullday"){
//         const dateInput = document.createElement('input');
//         dateInput.setAttribute('type' , 'date');
//         dateInput.setAttribute('id' , 'date');
//         dateInput.setAttribute('name' , 'date');
//         dynamicFields.appendChild(dateInput);
//     } else if(booking === 'halfday'){
//         const dateInput = document.createElement('input');
//         dateInput.setAttribute('type','date');
//         dateInput.setAttribute('id','date');
//         dateInput.setAttribute('name','date');
//         dynamicFields.appendChild(dateInput);
    

//     const slotSelect = document.createElement("select");
//     slotSelect.setAttribute('id','sloat')
//     slotSelect.setAttribute('name','slot')
//     const slotOption = ['Breakfast' , 'Lunch' , 'Diner'];
//     for(const option of slotOption){
//         const slotOption =document.createElement("option");
//         slotOption.setAttribute('value' ,option.toLocaleLowerCase());
//         slotOption.textContent = option;
//         slotSelect.appendChild(slotOption);
//     }
//     dynamicFields.appendChild(slotOption);
// }  
// else if (booking === 'hourly') {
//     const dateInput = document.createElement('input');
//     dateInput.setAttribute('type', 'date');
//     dateInput.setAttribute('id', 'date');
//     dateInput.setAttribute('name', 'date');
//     dynamicFields.appendChild(dateInput);

//     const timeInput = document.createElement('input');
//     timeInput.setAttribute('type', 'time');
//     timeInput.setAttribute('id', 'time');
//     timeInput.setAttribute('name', 'time');
//     dynamicFields.appendChild(timeInput);
// }

// }
    



function handleBookingChoice() {
    const bookingChoice = document.getElementById('bookingChoice').value;
    const dynamicFields = document.getElementById('dynamicFields');
    dynamicFields.innerHTML = '';

    if (bookingChoice === 'fullday') {
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('id', 'date');
        dateInput.setAttribute('name', 'date');
        dynamicFields.appendChild(dateInput);
    } else if (bookingChoice === 'halfday') {
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('id', 'date');
        dateInput.setAttribute('name', 'date');
        dynamicFields.appendChild(dateInput);

        const slotSelect = document.createElement('select');
        slotSelect.setAttribute('id', 'slot');
        slotSelect.setAttribute('name', 'slot');
        const slotOptions = ['Breakfast', 'Lunch', 'Dinner'];
        for (const option of slotOptions) {
            const slotOption = document.createElement('option');
            slotOption.setAttribute('value', option.toLowerCase());
            slotOption.textContent = option;
            slotSelect.appendChild(slotOption);
        }
        dynamicFields.appendChild(slotSelect);
    } else if (bookingChoice === 'hourly') {
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('id', 'date');
        dateInput.setAttribute('name', 'date');
        dynamicFields.appendChild(dateInput);

        const timeInput = document.createElement('input');
        timeInput.setAttribute('type', 'time');
        timeInput.setAttribute('id', 'time');
        timeInput.setAttribute('name', 'time');
        dynamicFields.appendChild(timeInput);
    }
}





    


