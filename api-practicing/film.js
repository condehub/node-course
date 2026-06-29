async function insertPost(post){

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(post)
    })

    if (!response.ok) {
      throw new Error("Ato de postagem falhou");
    }

    const insertedPostData = await response.json();

    console.log("Post inserido no blog com sucesso com id: " + insertedPostData.id);
    console.log(insertedPostData);
  } catch(erro) {
    console.error("Algo deu errado: " + erro);
  }
}

insertPost({
  title: 'The Hunger Games Synopse',
  body: 'A cool article about The Hunger Games main trilogy'
})