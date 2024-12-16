const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_7.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_7[currentQuestionIndex].question
    questions_page_7[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_7.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const questions_page_7 = [
    {
        question: 'O que um Cliente espera ao pedir sua comida no McDonald\'s?',
        answer: [
            { text: 'Ele quer uma comida sem tempero.', correct: false },
            { text: 'Ele quer uma comida saborosa, que pareça e tenha gosto de ter sido servida rapidamente por uma equipe simpática e acolhedora (ou seja, você).', correct: true },
            { text: 'Ele não tem preferências específicas.', correct: false },
            { text: 'Ele quer algo simples e barato.', correct: false },
        ]
    },
    {
        question: 'O que você deve fazer se o cliente disser que seu pedido é para comer no restaurante?',
        answer: [
            { text: 'Ofereça ao cliente a opção de entrega a mesa.', correct: true },
            { text: 'Diga que não é possível.', correct: false },
            { text: 'Encontre uma mesa e avise o cliente.', correct: false },
            { text: 'Peça ao cliente para esperar no balcão.', correct: false },
        ]
    },
    {
        question: 'O que você pode fazer para estar certo da precisão do pedido?',
        answer: [
            { text: 'Conferir apenas os itens principais.', correct: false },
            { text: 'Deixar a responsabilidade com o cozinheiro.', correct: false },
            { text: 'Pressionar a tecla no POS “Pedidos armazenados” para visualizar o pedido, certificando que o pedido do Tablet seja o mesmo que você vê no POS.', correct: true },
            { text: 'Enviar o pedido sem conferir.', correct: false },
        ]
    },
    {
        question: 'Os clientes não exigem transparência sobre o que estão comendo.',
        answer: [
            { text: 'VERDADERO', correct: false },
            { text: 'FALSO', correct: true },
        ]
    },
    {
        question: 'Ouvindo nossos clientes, podemos identificar o que pensam sobre a qualidade de 3 formas.',
        answer: [
            { text: 'VERDADERO', correct: true },
            { text: 'FALSO', correct: false },
        ]
    },
    {
        question: 'Para que é utilizado o congelador localizado ao lado da chapa?',
        answer: [
            { text: 'É um local para armazenar bebidas geladas.', correct: false },
            { text: 'É usado para estocar alimentos prontos para servir.', correct: false },
            { text: 'Serve para armazenar utensílios de cozinha.', correct: false },
            { text: 'O congelador é utilizado como local de armazenamento secundário para os nossos itens congelados que estão sendo preparados na chapa.', correct: true },
        ]
    },
    {
        question: 'Para que é utilizado o monitor do PLS?',
        answer: [
            { text: 'O monitor exibe a quantidade de bebidas a serem preparadas.', correct: false },
            { text: 'Ele informa os ingredientes disponíveis.', correct: false },
            { text: 'É para mostrar a fila de pedidos.', correct: false },
            { text: 'O monitor do PLS mostra quais e quantos hamburgueres de carne bovina devem ser preparados.', correct: true },
        ]
    },
    {
        question: 'Para que serve a Fritadeira?',
        answer: [
            { text: 'Serve para fritar hambúrgueres.', correct: false },
            { text: 'Apenas para aquecer o óleo.', correct: false },
            { text: 'São cubas de óleo quente com temporizador preciso para preparar com muita qualidade as McFritas.', correct: true },
            { text: 'Para preparar batatas de outras marcas.', correct: false },
        ]
    },
    {
        question: 'Para que serve a UHC?',
        answer: [
            { text: 'É um armazenamento para itens congelados.', correct: false },
            { text: 'Serve para armazenar bebidas quentes.', correct: false },
            { text: 'É um gabinete de armazenamento aquecido que serve para manter os nossos alimentos preparados no curto prazo. Cada um tem o seu próprio espaço dedicado.', correct: true },
            { text: 'É uma área para manter utensílios aquecidos.', correct: false },
        ]
    },
    {
        question: 'Para que serve o encestador de McFritas congeladas?',
        answer: [
            { text: 'Serve para estocar as McFritas fritas.', correct: false },
            { text: 'Mantém as McFritas congeladas e despeja a quantidade correta no cesto de fritura.', correct: true },
            { text: 'Serve para lavar as McFritas.', correct: false },
            { text: 'Armazena as McFritas depois de fritas.', correct: false },
        ]
    },
    {
        question: 'Para que serve o número do pedido que aparece na tela do POS?',
        answer: [
            { text: 'É para indicar a quantidade de itens no pedido.', correct: false },
            { text: 'Serve para classificar o pedido por tipo.', correct: false },
            { text: 'O número serve apenas para controle interno.', correct: false },
            { text: 'Esse número indica o pedido a ser montado ou o último pedido que foi registrado.', correct: true },
        ]
    },
    {
        question: 'Para que servem as teclas de tamanho no POS?',
        answer: [
            { text: 'Para marcar itens como especiais.', correct: false },
            { text: 'São utilizadas para selecionar o tamanho de um item do menu. O tamanho padrão é sempre o mais popular e o mais lógico.', correct: true },
            { text: 'Para adicionar temperos ao pedido.', correct: false },
            { text: 'Para ajustar os preços dos itens.', correct: false },
        ]
    },
    {
        question: 'Para que servem os extintores?',
        answer: [
            { text: 'Para interromper um dos componentes necessários para o início ou continuação de um princípio de incêndio.', correct: true },
            { text: 'Para apagar incêndios somente em áreas externas.', correct: false },
            { text: 'Para resfriar equipamentos.', correct: false },
            { text: 'Para limpeza de utensílios.', correct: false },
        ]
    },
    {
        question: 'Para que servem os localizadores de mesa?',
        answer: [
            { text: 'Os localizadores de mesa nos ajudam a identificar onde um cliente está sentado na área de refeições.', correct: true },
            { text: 'São usados para identificar pedidos na cozinha.', correct: false },
            { text: 'Ajudam na organização de espaços de trabalho.', correct: false },
            { text: 'São para controlar os tempos de espera dos clientes.', correct: false },
        ]
    },
    {
        question: 'Para que servem os temporizadores das fritadeiras?',
        answer: [
            { text: 'Para medir a quantidade de óleo usado.', correct: false },
            { text: 'Para regular a temperatura das fritadeiras.', correct: false },
            { text: 'Para ajustar a quantidade de alimentos fritos.', correct: false },
            { text: 'Para que todos os alimentos que fazemos sejam preparados no tempo certo, impactando diretamente na qualidade do produto.', correct: true },
        ]
    },
    {
        question: 'Para que serve o modelo EDRA?',
        answer: [
            { text: 'Para monitorar a qualidade dos produtos.', correct: false },
            { text: 'Para ajudar a resolver situações difíceis.', correct: true },
            { text: 'Serve para a limpeza de utensílios.', correct: false },
            { text: 'É um sistema de controle de estoque.', correct: false },
        ]
    },
    {
        question: 'Pensando em reduzir o consumo de embalagens, o que não entregamos mais para os clientes em nossos restaurantes?',
        answer: [
            { text: 'Tampas de Copos e Canudos', correct: true },
            { text: 'Sacolas plásticas.', correct: false },
            { text: 'Embalagens de sobremesas.', correct: false },
            { text: 'Guardanapos.', correct: false },
        ]
    },
];
