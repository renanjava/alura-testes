import 'package:flutter/material.dart';
import 'package:test/lista-transferencia.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: Text('Transferências'),
      ),
      body: ListaTransferecia(),
      floatingActionButton:
          FloatingActionButton(onPressed: () {}, child: Icon(Icons.add)),
    ),
  ));
}
