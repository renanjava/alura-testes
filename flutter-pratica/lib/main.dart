import 'package:flutter/material.dart';
import 'package:test/transferencias/form-transferencia.dart';

void main() {
  runApp(const FlutterAlura());
}

class FlutterAlura extends StatelessWidget {
  const FlutterAlura({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: FormularioTransferencia(),
      ),
    );
  }
}
