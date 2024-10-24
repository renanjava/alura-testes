import 'package:flutter/material.dart';

class ListaTransferecia extends StatelessWidget {
  const ListaTransferecia({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Card(
            child: ListTile(
          leading: Icon(Icons.monetization_on),
          title: Text('titulo7'),
          subtitle: Text('subtitulo'),
        )),
        Card(
            child: ListTile(
          leading: Icon(Icons.monetization_on),
          title: Text('titulo'),
          subtitle: Text('subtitulo'),
        )),
        Card(
            child: ListTile(
          leading: Icon(Icons.monetization_on),
          title: Text('titulo'),
          subtitle: Text('subtitulo'),
        )),
      ],
    );
  }
}
