async function fetchUserGithub(user) {
  try {
    const response = await fetch(`https://api.github.com/users/${user}`);

    await atrasar();
    if (!response.ok) {
      throw new Error(`Usuário não encontrado! Status: ${response.status}`)
    }

    const userFoundData = await response.json();
    console.log(userFoundData.name);

    
  } catch(erro) {
    console.error("Usuário não encontrado " + erro);
  }
}

// fetchUserGithub("condehub");
// fetchUserGithub("potatowski");
// fetchUserGithub("carvalhosauro");
// fetchUserGithub("miguelbonilla");

async function insertUser(user) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8' 
      },
      body: JSON.stringify(user)
    });

    if(!response.ok) {
      throw new Error('Erro ao cadastrar usuário' + response.status);
    }

    const loggedUserData = await response.json();

    console.log("Usuário cadastrado com sucesso com o ID: " + loggedUserData.id);
    console.log(loggedUserData);
  } catch(erro){
    console.error(erro);
  }
}

insertUser( {
  name: "João Victor",
  username: "condeblocks",
  email: "jv.conde1016@gmail.com"
} )

