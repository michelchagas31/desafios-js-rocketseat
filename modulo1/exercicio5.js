var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

function dadosUsuarios(){
    for(usuario of usuarios){
        var retorno = "O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(', ');
        console.log(retorno);
    }
}

dadosUsuarios();