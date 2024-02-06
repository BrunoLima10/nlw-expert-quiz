

//alert("Este é um exemplo de alerta em JavaScript!");

const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de marcação",
            "Uma linguagem de programação",
            "Um banco de dados"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "var = minhaVariavel;",
            "variavel minhaVariavel;",
            "var minhaVariavel;"
        ],
        correta: 2
    },
    {
        pergunta: "Como se realiza um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "# Este é um comentário",
            "/* Este é um comentário */"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação de valores",
            "Concatenação de strings",
            "Atribuição de valores"
        ],
        correta: 0
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um tipo de variável",
            "Uma estrutura de controle de fluxo",
            "Uma interface de programação para interagir com documentos HTML"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a finalidade do método 'addEventListener'?",
        respostas: [
            "Alterar o estilo de um elemento",
            "Adicionar um evento a um elemento HTML",
            "Remover um elemento do DOM"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o AJAX em JavaScript?",
        respostas: [
            "Uma biblioteca de animações",
            "Uma técnica para realizar requisições assíncronas",
            "Um padrão de design para criar interfaces de usuário"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
        respostas: [
            "'let' é usado para constantes e 'const' para variáveis mutáveis",
            "'let' permite a reatribuição de valores, enquanto 'const' não",
            "'const' é obsoleto e 'let' deve ser usado sempre"
        ],
        correta: 1
    },
    {
        pergunta: "Como se faz uma iteração em um array em JavaScript?",
        respostas: [
            "Usando o método 'iterateArray'",
            "Com a estrutura 'for-in'",
            "Com a estrutura 'if-else'"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "Um formato de arquivo de áudio",
            "Uma linguagem de programação",
            "Um formato de dados para intercâmbio de informações"
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


//loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
    
}