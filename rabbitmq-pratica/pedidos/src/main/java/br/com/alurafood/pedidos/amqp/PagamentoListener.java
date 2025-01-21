package br.com.alurafood.pedidos.amqp;

import org.aspectj.bridge.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class PagamentoListener {

    @RabbitListener(queues = "pagamento.concluido")
    public void recebeMensagem(Message mensagem) {
        System.out.println("Recebi a mensagem " + mensagem.toString());
    }

}
