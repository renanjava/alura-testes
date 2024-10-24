// ignore_for_file: file_names
import 'package:flutter/material.dart';

class ItemTransferencia extends StatelessWidget {
  final String title;
  final String subtitle;
  const ItemTransferencia(this.title, this.subtitle, {super.key});

  @override
  Widget build(BuildContext context) {
    return Card(
        child: ListTile(
      leading: const Icon(Icons.monetization_on),
      title: Text(title),
      subtitle: Text(subtitle),
    ));
  }
}
