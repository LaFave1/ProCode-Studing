let el = document.querySelector('input[name="test"]');
el.addEventListener('change', (ev) => {
    let { value } = ev.target;
    
    let val = Number(value);
    
    console.log('val:', val);
    
    if (val >= 18) {
        console.log('18 є');
        console.log('вхід погоджено');
    }

    console.log('!!!');

    if (val >= 21) {
        console.log('21 є');
        console.log('вхід погоджено');
    }
});