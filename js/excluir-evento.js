const inputNome = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner")
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const form = document.querySelector("main > div:nth-child(2) > form");

window.addEventListener('load', async () => {
  const id = (new URL(document.location)).searchParams.get("id");
  console.log(id);

  if (id) {
    try {
      const resposta = await fetch(`${BASE_URL}/events/${id}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const evento = await resposta.json();
      console.log(evento)

      inputNome.value = evento.name;
      inputBanner.value = evento.poster;
      inputAtracoes.value = evento.attractions;
      inputDescricao.value = evento.description;
      const dataHora = evento.scheduled;
      inputData.value = `${dataHora.slice(8,10)}/${dataHora.slice(5,7)}/${dataHora.slice(2,4)} ${dataHora.slice(11,16)}`
      inputLotacao.value = evento.number_tickets;

    } catch(error){
      console.error("Tente novamento mais tarde. Causa do erro: ", error);
      alert("Tente novamente mais tarde");
    }
    
  }
  
})

form.onsubmit = async (e) => {
  e.preventDefault();
  const id = (new URL(document.location)).searchParams.get("id");
  console.log(id);
  if (id) {
    try {
      await fetch(`${BASE_URL}/events/${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      alert("evento deletado com sucesso");
      window.location.replace("admin.html")
    } catch(error){
      console.error("erro ao excluir evento.Causa do erro: ", error);
      alert("erro ao excluir evento.Cheque o erro para excluir o item selecionado");
    }
    
  }
}
