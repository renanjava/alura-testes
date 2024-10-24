// ignore_for_file: file_names
import 'package:flutter/material.dart';
import 'package:test/transferencias/item-transferencia.dart';

class ListaTransferecia extends StatelessWidget {
  const ListaTransferecia({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      children: [
        ItemTransferencia('renan', 'flutter'),
        ItemTransferencia('rhayssa', 'trainee'),
        ItemTransferencia('valorant', 'vandal'),
      ],
    );
  }
}
