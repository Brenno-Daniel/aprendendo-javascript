// Padrão Middleware ou Padrão Chain of Responsibility
// Padrão muito presente no desenvolvimento web como um todo

/*
Motivação: Tendo uma função com vários processos dentro, não tendo reuso, um processo único, 
e se quisesse fazer um processo B com a mesma lógica teria que replicar o código.

Middleware: Nõ existe um acoplamento, implementa-se uma função next() que conhece o próximo elemento 
da cadeia, quando dispara a função next() ele chama o próximo middleware, e em algum momento pode enviar a resposta ou não.

*/

