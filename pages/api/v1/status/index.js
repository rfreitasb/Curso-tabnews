import database from "../../../../infra/database.js"

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;")
  console.log(result)
  response.status(200).json({
    status: 200,
    mensagem: "teste de status 200 e configuração de formatação de texto",
    resultadoQuery: result
  });
}

export default status;
