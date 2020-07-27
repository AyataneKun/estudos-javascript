const Sequelize = require('sequelize')
const models = require('./models')
const Op = Sequelize.Op

async function select(){

  //Regra 1 : Listar apenas eventos que tenham Nodejs no nome
  //Regra 2 : Dentro desse(s) evento(s), listar apenas pessoas que NÃO tenham a letra "o" no nome

  const eventosComParticipantes = await models.evento.findAll({
    where: {
      data: {
        [Op.between]: ['2020-04-01', '2020-04-30']
      }
    },
    include: [
      {
        model: models.participante
      }
    ]
  })
  eventosComParticipantes.forEach((evento) => {
    console.log("Evento: ", evento.nome, " Data: ", evento.data)
    evento.participantes.forEach((participante) => {
      console.log("----------> Participante: ", participante.nome)
    })
  })
  console.log("\n");

  await models.sequelize.close()
}
select()
