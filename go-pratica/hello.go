package main

import (
	"fmt"
	"reflect"
)

func main() {
	nome := "Renan"
	idade := 20
	versao := 1.1

	var nome2 = "Renan"
	var idade2 = 20
	var versao2 = 1.1

	var nome3 string = "Renan"
	var idade3 int = 20
	var versao3 float64 = 1.1
	fmt.Println("Olá, sr.", nome, "sua idade é", idade)
	fmt.Println("Programa na versão", versao)

	fmt.Println("Tipos de variáveis:", reflect.TypeOf(nome), reflect.TypeOf(idade), reflect.TypeOf(versao))
	fmt.Println("Tipos de variáveis:", reflect.TypeOf(nome2), reflect.TypeOf(idade2), reflect.TypeOf(versao2))
	fmt.Println("Tipos de variáveis:", reflect.TypeOf(nome3), reflect.TypeOf(idade3), reflect.TypeOf(versao3))
}
