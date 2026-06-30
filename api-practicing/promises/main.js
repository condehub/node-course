import express from 'express';
const app = express();

app.use(express.json());

let usuarios = [
    { id: 1, nome: "Victor", cargo: "Desenvolvedor" }
];


app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});


app.post('/usuarios', (req, res) => {
    const { nome, cargo } = req.body; 
    const novoUsuario = { id: usuarios.length + 1, nome, cargo };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario); 
});

app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params; // Pega o ID enviado na URL
    const { nome, cargo } = req.body;
    
    let usuario = usuarios.find(u => u.id === Number(id));
    if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });

    usuario.nome = nome;
    usuario.cargo = cargo;

    res.json(usuario);
});

// [PATCH] Atualizar PARCIALMENTE um dado
app.patch('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, cargo } = req.body;

    let usuario = usuarios.find(u => u.id === Number(id));
    if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });

    // Só altera se a informação tiver sido enviada na requisição
    if (nome) usuario.nome = nome;
    if (cargo) usuario.cargo = cargo;

    res.json(usuario);
});

// [DELETE] Remover um dado
app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    usuarios = usuarios.filter(u => u.id !== Number(id));
    res.status(204).send(); // Status 204 significa "Sucesso, mas sem conteúdo para retornar"
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});