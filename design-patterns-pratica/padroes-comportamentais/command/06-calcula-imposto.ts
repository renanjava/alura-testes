import express from 'express';

interface Command {
  execute(): any;
}

abstract class CalcularImpostoCommand implements Command {
  constructor(protected valorBase: number) {}
  abstract execute(): any;
}

class CalcularISSCommand extends CalcularImpostoCommand {
  execute() {
    const aliquota = 0.05;
    const imposto = this.valorBase * aliquota;
    return {
      origem: 'Command Executado',
      mensagem: 'Cálculo de ISS realizado',
      valorImposto: imposto,
      aliquota,
      tipo: 'ISS'
    };
  }
}

class CalcularICMSCommand extends CalcularImpostoCommand {
  execute() {
    const aliquota = 0.18;
    const imposto = this.valorBase * aliquota;
    return {
      origem: 'Command Executado',
      mensagem: 'Cálculo de ICMS realizado',
      valorImposto: imposto,
      aliquota,
      tipo: 'ICMS'
    };
  }
}

class CommandExecutor {
  execute(command: Command) {
    return command.execute();
  }
}

function createCommand(tipoImposto: string, valorBase: number): Command {
  switch (tipoImposto.toUpperCase()) {
    case 'ISS':
      return new CalcularISSCommand(valorBase);
    case 'ICMS':
      return new CalcularICMSCommand(valorBase);
    default:
      throw new Error(`Imposto desconhecido: ${tipoImposto}`);
  }
}

function processCLIArgs() {
  const args = process.argv.slice(2);
  if (args.length === 2) {
    const tipo = args[0];
    const valor = parseFloat(args[1]);
    const command = createCommand(tipo, valor);
    const resultado = new CommandExecutor().execute(command);
    console.log('\n[CLI]');
    console.log(resultado);
  }
}

function processJson() {
  const jsonData = {
    tipoImposto: 'ICMS',
    valorBase: 1500
  };

  const command = createCommand(jsonData.tipoImposto, jsonData.valorBase);
  const resultado = new CommandExecutor().execute(command);
  console.log('\n[JSON interno]');
  console.log(resultado);
}

function startWebAPI() {
  const app = express();
  app.use(express.json());

  app.post('/calcular-imposto', (req, res) => {
    const { tipoImposto, valorBase } = req.body;

    try {
      const command = createCommand(tipoImposto, valorBase);
      const resultado = new CommandExecutor().execute(command);
      res.json({ origem: 'Web API', ...resultado });
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  });

  app.listen(3000, () => {
    console.log('\n[Web] Servidor rodando em http://localhost:3000');
    console.log('Exemplo POST com JSON: { "tipoImposto": "ISS", "valorBase": 1200 }');
  });
}

processCLIArgs();
processJson();
startWebAPI();
