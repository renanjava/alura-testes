import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: Text('Transferências'),
      ),
      body: Column(
        children: [
          Card(
              child: ListTile(
            leading: Icon(Icons.monetization_on),
          )),
          Card(
              child: ListTile(
            leading: Icon(Icons.monetization_on),
          )),
          Card(
              child: ListTile(
            leading: Icon(Icons.monetization_on),
          )),
        ],
      ),
      floatingActionButton:
          FloatingActionButton(onPressed: () {}, child: Icon(Icons.add)),
    ),
  ));
}
