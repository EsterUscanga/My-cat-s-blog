function getRFC(register){
    var cadMaterno = register.materno.value
    var cadPaterno = register.paterno.value
    var cadNombre = register.nombre.value

    var date = register.datebd.value

    var dateObject = {}

    var RFC = cadPaterno.charAt(0)

    for (let i = 1; i < cadPaterno.length; i++) {
        if (cadPaterno.charAt(i) == 'a' || cadPaterno.charAt(i) == 'e' || cadPaterno.charAt(i) == 'i' || cadPaterno.charAt(i) == 'o' ||cadPaterno.charAt(i) == 'u'){
            RFC = RFC + cadPaterno.charAt(i)
            break
        }  
    }

    for (let i = 1; i < cadPaterno.length; i++) {
        if (cadPaterno.charAt(i) == '-') {

        }
    }

    RFC = RFC + cadMaterno.charAt(0) + cadNombre.charAt(0) + date.charAt(2) + date.charAt(3) + date.charAt(5) + date.charAt(6) + date.charAt(8) + date.charAt(9)

    document.getElementById('rfc').value = RFC.toUpperCase()
    
}

function validatePassword(register){
    var password1 = register.regpassword.value
    var password2 = register.regpasswordconfirm.value
    
    if(password2 !== password1){
        alert("Contraseña invalida")
    }
}

function validatePasswordOnSubmit(register){
    var password1 = register.regpassword.value
    var password2 = register.regpasswordconfirm.value
    
    if(password2 !== password1){
        alert("Contraseña invalida")
    }
}