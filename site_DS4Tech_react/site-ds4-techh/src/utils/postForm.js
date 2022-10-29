import { token, chat_id } from "./postFormTelegram/infos";

export function postForm(cadastro){
  let message = `Nome: ${cadastro.name}%0A Telefone: ${cadastro.phone}%0A Email: ${cadastro.email}%0A Mensagem: ${cadastro.message}%0A`
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();
}
