var nome,
  escolha = 1,
  salario = 0,
  salarioNovo = 0,
  aumento = 0;
while (escolha == 1) {
  Dados();
  SalarioComparador(salario);
  salarioNovo = Aumento(salario, aumento);
  console.log(
    `${nome}\nSalario: R$${salario} \nAumento: ${aumento}% \nSalario com Aumento:${salarioNovo} `
  );
  continuar();
}
function Dados() {
  nome = prompt("Qual o seu nome: ");
  salario = parseFloat(prompt("Qual o seu Salario"));
}
function continuar() {
  escolha = prompt("1-Para continuar\n2-Para Parar");
  return;
}
function SalarioComparador(salario) {
  if (salario < 1500) {
    aumento = 20;
  } else if (salario > 1500 && salario < 2000) {
    aumento = 15;
  } else if (salario > 2000 && salario < 3000) {
    aumento = 10;
  } else if (salario > 3000) {
    aumento = 5;
  }
}
function Aumento(salario, aumento) {
  return salario + salario * (aumento / 100);
}
