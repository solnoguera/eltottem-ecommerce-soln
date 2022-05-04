export default function checkInputs (buyer){
    let badInput = null;

    if(isNaN(buyer.phone))
        badInput = 'Número de teléfono inválido.'

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        
    if (!emailRegex.test(buyer.email)) 
        badInput = 'El email ingresado no es válido.'

    if (buyer.name === ''    ||
    buyer.address === '' ||
    buyer.city === ''    ||
    buyer.state === ''   ||
    buyer.email === ''   ||
    buyer.phone === '' ) 
        badInput = 'Debes completar todos los campos para continuar.'
    
    return badInput
}