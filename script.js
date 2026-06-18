function enviar() {

            let campoNome = document.getElementById('inome');
            let campoEmail = document.getElementById('iemail');
            let campoSenha = document.getElementById('isenha');

            var nome = campoNome.value.trim();
            var email = campoEmail.value.trim();
            var senha = campoSenha.value.trim();

            if (nome.length === 0 , email.length === 0 , senha.length < 6) {
                window.alert('[Erro!] dados não inseridos')
            } else {
                window.confirm(`Confirma esses dados? Nome: ${nome} email: ${email}`)
                
                fetch('https://commute-doormat-operator.ngrok-free.dev/', {
                    method:'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({
                        "name": nome, 
                        "email" : email,
                        "senha" : senha
                    })
                })

            }
        }

        

