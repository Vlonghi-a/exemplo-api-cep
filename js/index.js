document.addEventListener('DOMContentLoaded', () => {
    inputCep = document.getElementById("cep")
    inputCep.onblur = async function () {
        let cpf_valido = inputCep.value.replace(/[^0-9]/g, "");
        url = 'https://viacep.com.br/ws/' + cpf_valido + '/json/';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            console.log(data);

            document.getElementById("logradouro"). value = data["logradouro"]

        } catch (error) {
            console.error('Fetch error:', error);
        }
    }
});