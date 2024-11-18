package com.example;

import org.apache.kafka.clients.producer.KafkaProducer;

public class NewOrderMain {
    public static void main(String[] args) {
        var producer = new KafkaProducer<String, String>(properties());
    }
}
