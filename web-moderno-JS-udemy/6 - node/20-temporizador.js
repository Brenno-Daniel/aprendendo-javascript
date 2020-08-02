const schedule = require('node-schedule')

// tarefa programada para ser executada a cada 5 segundo, a partir das 18 horas, no domingo (dia 0 de semana)
const tarefa1 = schedule.scheduleJob('*/5 * 18 * * 0', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// utilizando o setTimeout padrão do JS para cancelar a tarefa anterior , após 20 segundos
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// Outras funções padrão
// setImmediate
// setInterval

// obj chamado Recurrence Rule dentro do node, obde podemos colocar dentro dessa regra de recorrência 
// os valores que desejamos que ele fique executando de forma recorrente
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // de segunda a sexta
regra.hour = 18
regra.second = 23

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
