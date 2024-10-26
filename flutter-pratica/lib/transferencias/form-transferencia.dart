// ignore_for_file: file_names
import 'package:flutter/material.dart';
import 'package:test/transferencias/item-transferencia.dart';

class FormularioTransferencia extends StatelessWidget {
  final TextEditingController _conta = TextEditingController();
  final TextEditingController _valor = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Criando transferência '),
        ),
        body: Padding(
          padding: const EdgeInsets.fromLTRB(170.0, 0.0, 170.0, 0.0),
          child: Column(
            children: [
              TextField(
                  controller: _conta,
                  keyboardType: TextInputType.number,
                  style: const TextStyle(
                    fontSize: 24.0,
                  ),
                  decoration: const InputDecoration(
                      labelText: 'Conta', hintText: '0000')),
              TextField(
                  controller: _valor,
                  keyboardType: TextInputType.number,
                  style: const TextStyle(
                    fontSize: 24.0,
                  ),
                  decoration: const InputDecoration(
                      icon: Icon(Icons.monetization_on),
                      labelText: 'Valor',
                      hintText: '0.00')),
              Padding(
                padding: const EdgeInsets.fromLTRB(0.0, 20.0, 0.0, 0.0),
                child: ElevatedButton(
                    onPressed: () {
                      debugPrint(
                          'clicou no transferir - ${_conta.text} - ${_valor.text}');
                      final String contaTransferencia = _conta.text;
                      final String valorTransferencia = _valor.text;
                      final transferenciaCriada = ItemTransferencia(
                          contaTransferencia, valorTransferencia);
                      debugPrint(
                          '${transferenciaCriada.conta} - ${transferenciaCriada.valor}');
                    },
                    child: const Text('Transferir')),
              )
            ],
          ),
        ));
  }
}