// ignore_for_file: file_names
import 'package:flutter/material.dart';

class ItemTransferencia extends StatelessWidget {
  final String conta;
  final String valor;
  const ItemTransferencia(this.conta, this.valor, {super.key});

  @override
  Widget build(BuildContext context) {
    return Card(
        child: ListTile(
      leading: const Icon(Icons.monetization_on),
      title: Text(conta),
      subtitle: Text(valor),
    ));
  }
}
