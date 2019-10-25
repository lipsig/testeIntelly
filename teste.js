var that = this;

//server json
var server = {
    "json": [
        {
            "id": 763, "codigo": "QWE-67Y", "valor": 312.21, "entregue": false, "data": "2014-12-17T01:08:13Z",
            "cliente": { "nome": "Corporação Exemplo", "id": 1 }
        },

        {
            "id": 312, "codigo": "QWE-72Y", "valor": 27.00, "entregue": false, "data": "2014-12-14T11:12:43Z",
            "cliente": { "nome": "Investidores ricos", "id": 2 }
        },

        {
            "id": 467, "codigo": "RTY-42Z", "valor": 1731.99, "entregue": false, "data": "2014-12-12T21:23:23Z",
            "cliente": { "nome": "Corporação Exemplo", "id": 1 }
        },

        {
            "id": 985, "codigo": "UTR-43Y", "valor": 141.00, "entregue": false, "data": "2014-12-10T09:02:52Z",
            "cliente": { "nome": "Nitro Digital", "id": 3 }
        },

        {
            "id": 235, "codigo": "UTR-42Y", "valor": 35.00, "entregue": false, "data": "2014-12-10T08:34:45Z",
            "cliente": { "nome": "Corporação Exemplo", "id": 1 }
        },

        {
            "id": 406, "codigo": "QWE-65Z", "valor": 294.00, "entregue": false, "data": "2014-12-09T12:54:56Z",
            "cliente": { "nome": "Corporação Exemplo", "id": 1 }
        },

        {
            "id": 146, "codigo": "YODA-67Y", "valor": 1430.00, "entregue": true, "data": "2014-11-21T18:45:49Z",
            "cliente": { "nome": "Nitro Digital", "id": 3 }
        },

        {
            "id": 401, "codigo": "YODA-83Y", "valor": 120.30, "entregue": true, "data": "2014-11-09T15:54:18Z",
            "cliente": { "nome": "Investidores ricos", "id": 2 }
        },

        {
            "id": 125, "codigo": "LKS-81Y", "valor": 772.00, "entregue": true, "data": "2014-11-02T19:23:18Z",
            "cliente": { "nome": "Corporação Exemplo", "id": 1 }
        },

        {
            "id": 521, "codigo": "QWE-12Y", "valor": 42.00, "entregue": true, "data": "2014-10-12T14:27:15Z",
            "cliente": { "nome": "Nitro Digital", "id": 3 }
        }

    ]
}


//quando o arquivo estiver carregado
$(document).ready(function () {
    $('#example').css('cursor', 'pointer');

    var table = $('#example').DataTable({
        pageLength: 4,
        lengthMenu: [[4, 10, 20, -1], [4, 10, 20, 'Todos']],
        data: server.json,
        columns: [
            { data: "codigo" },
            { data: "cliente.nome" },
            { data: "valor", render: function (data, type, full, meta) { return "R$ " + data } },
            { render: function (data, type, row) { return "R$ " + parseFloat(row.valor * 1.043).toFixed(2); } },
            { data: "data", render: function (data, type, full, meta) { return data.substring(0, 10) } },
        ],
        language: {
            "lengthMenu": "Exibindo _MENU_ por página",
            "zeroRecords": "Sem Registros",
            "info": "Exibindo página _PAGE_ of _PAGES_",
            "infoEmpty": "Sem valor",
            "infoFiltered": "(filtrando _MAX_ de registros)",
            "paginate": {
                "first": "Primeiro",
                "last": "",
                "next": "Proxima",
                "previous": "Anterior"
            },
            "sNext": "Proximo"
        }

    });


    $('#example tbody').on('click', 'tr', function () {
        var registros = [];
        var data = table.row(this).data();
        var nome = data.cliente.nome

        $.each(server.json, function (i) {
            if (nome == server.json[i].cliente.nome) {

                codigo = that.server.json[i].codigo
                data = that.server.json[i].data
                data = data.substring(0,10);
                valor = that.server.json[i].valor

                registros.push([codigo, data, valor])
            }

        });
        var str = "Registros do Cliente: " + nome + "\n";
        $.each(registros, function (i) {
            str += "Codigo: " + registros[i][0] + " ";
            str += "Data: " + registros[i][1] + " ";
            str += "Valor: R$ " + registros[i][2] + " " + "\n";
        });

        alert(str);
    });
});
