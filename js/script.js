$(document).ready(function () {

  $("#txtCep").focusout(function () { 
        if ($("#txtCep").val().length >= 5) {

            var cep = $("#txtCep").val().replace("-", "");

            var url = "https://viacep.com.br/ws/"+cep+"/json/";
//            console.log(url);   // Desmarque essa opção para verificar o link se esta correto na hora de montar.
            $.ajax({
                url: url,
                type: "GET",
                dataType: "JSONP",
                data: {},
                success: function (data) {
                    console.log(data);
                    if (data != null) {
                        $("#txtLogradouro").val(data.tipoDeLogradouro);
                        $("#txtRua").val(data.logradouro);
                        $("#txtBairro").val(data.bairro);
                        $("#txtCidade").val(data.localidade);
                        $("#txtEstado").val(data.uf);
                        $("#txtibge").val(data.ibge);
                        $("#txtgia").val(data.gia);
                    }
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    });
});

//date("Y-m-d H:i:s").txt;