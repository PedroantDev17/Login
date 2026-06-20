function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
 
    if (hora >= 8 &&  hora < 12) {
        document.body.style.background='#d8d50b'
    } else if (hora >= 12 && hora < 18){
        document.body.style.background='#36b2fa'
    } else {
        document.body.style.background='#041368'
    }
}


function enviar() {

            let campoNome = document.getElementById('inome');
            let campoEmail = document.getElementById('iemail');
            let campoSenha = document.getElementById('isenha');
           
            var nome = campoNome.value.trim();
            var email = campoEmail.value.trim();
            var senha = campoSenha.value.trim();
            
            //validação 
            if (nome.length === 0 , email.length === 0 , senha.length === 0 ) {
                window.alert('[Erro!] cadastro incorreto !!')
            } 

            // nome
            else if (nome.length <5){
                 window.alert('Nome menor de 5 caracteres')
            } else if (nome.length > 10){
                window.alert('Nome maximo de 10 caracteres')
            } else if (nome.length === Number) {
                window.alert('Só letras podem ser colocados!')
            } 

            // email 
            else if (email.length < 10) {
                 window.alert('Email menor de 10 caracteres')
            }else if (email.length > 256) {
                 window.alert('Email maior de 256 caracteres')
             }else if (!email.includes('@')) {
                window.alert('Email errado!')
             }                
            //senha
            else if (senha.length < 6) {
                window.alert('Senha menor de 6 caracteres')
            } else {
                window.confirm(`Confirma esses dados? Nome: ${nome} email: ${email}`)
                
                    fetch('https://commute-doormat-operator.ngrok-free.dev/cadastro', {
                    method:'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({
                        "name": nome, 
                        "email" : email,
                        "senha" : senha}
                    )
                    }
                )
                }
            
            }


       