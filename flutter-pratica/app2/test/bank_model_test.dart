import 'package:estilizacao_componentes/models/bank.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('Bank model deposit test', () {
    test('Bank model deposit available should be 15', () {
      final bank = BankModel();
      bank.deposit(15);

      expect(bank.available, 15);
    });
    test('Bank model deposit earned should be 15', () {
      final bank = BankModel();
      bank.deposit(15);

      expect(bank.earned, 15);
    });
    test('Bank model deposit points should be 15', () {
      final bank = BankModel();
      bank.deposit(15);

      expect(bank.points, 15);
    });
  });
  group('Bank model transfer test', () {
    test('Bank model transfer should turn points into 35', () {
      final bank = BankModel();
      bank.transfer(35);

      expect(bank.points, 35);
    });
    test('Bank model transfer should turn spent into 35', () {
      final bank = BankModel();
      bank.transfer(35);

      expect(bank.spent, 35);
    });
    test('Bank model transfer should turn available into 0', () {
      final bank = BankModel();
      bank.available = 5;
      bank.transfer(5);

      expect(bank.available, 0);
    });
  });
}
