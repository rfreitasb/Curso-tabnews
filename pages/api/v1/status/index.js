function status(request, response) {
  response.status(200).json({
    status: 200,
    mensagem: "teste de status 200 e configuração de formatação de texto",
  });
}

export default status;
