import 'package:flutter/material.dart';
import 'package:test/transferencias/lista-transferencia.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Transferências'),
        ),
        body: const ListaTransferecia(),
        floatingActionButton: FloatingActionButton(
            onPressed: () {}, child: const Icon(Icons.add)),
      ),
    );
  }
}
