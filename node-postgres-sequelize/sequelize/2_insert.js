const models = require('./models')

async function insert(){

  //Eventos
  const eventoNodeSP = await models.evento.create({nome: 'Encontro de Nodejs São Paulo', data: '2020-08-01'})
  const eventoPostgresBR = await models.evento.create({nome: 'Encontro de Postgresql Brasília', data: '2020-09-07'})
  const eventoExc1 = await models.evento.create({nome: 'Evento Exercício 1', data: '2020-03-15 14:30:11'})
  const eventoExc2 = await models.evento.create({nome: 'Evento Exercício 2', data: '2020-04-15 08:11:14'})
  const eventoExc3 = await models.evento.create({nome: 'Evento Exercício 3', data: '2020-04-20 15:30:50'})
  const eventoExc4 = await models.evento.create({nome: 'Evento Exercício 4', data: '2020-05-02 20:45:00'})
  const eventoExc5 = await models.evento.create({nome: 'Evento Exercício 5', data: '2020-06-30 07:20:00'})

  //Participantes
  const carlos  = await models.participante.create({nome: 'Carlos'})
  const augusto = await models.participante.create({nome: 'Augusto'})
  const janaina = await models.participante.create({nome: 'Janaína'})
  const rafael  = await models.participante.create({nome: 'Rafael'})


  //Participantes em eventos
  await eventoNodeSP.setParticipantes([carlos, augusto, janaina])
  await eventoPostgresBR.setParticipantes([janaina, rafael])
  await eventoExc1.setParticipantes([carlos, augusto, janaina, rafael])
  await eventoExc2.setParticipantes([carlos])
  await eventoExc3.setParticipantes([augusto])
  await eventoExc4.setParticipantes([janaina])
  await eventoExc5.setParticipantes([rafael])

  await models.sequelize.close()

  console.log("Dados Inseridos");
}
insert()
