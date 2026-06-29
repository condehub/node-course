async function fetchingDataFromUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    const user = await response.json();

    console.log(`Usuário encontrado: ${user.name}, Email: ${user.email} `)


  } catch(erro) {
      console.error("Falha: " + erro)
  }
}

fetchingDataFromUser();