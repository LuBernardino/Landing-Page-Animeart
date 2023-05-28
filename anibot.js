const API_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-3.5-turbo";
const contextLanguage = { role: "system", content: "Responda em Português" };

//apikey foi obfuscada https://obfuscator.io/

/*
Referencias:
https://platform.openai.com/docs/api-reference/chat/create
https://plainenglish.io/blog/beginners-guide-to-openai-s-gpt-3-5-turbo-model
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Authorization
*/
const anibotContext = `Você é um assistente de uma landing page, seu nome é Anibot e seu o objetivo é responder perguntas relacinadas ao curso de desenho para quem deseja aprender a desenhar animes (personagens, ambientes, roupas, olhos...) seja gentil e criativo. Não deixa a conversa fugir do assunto de desenhos de anime
Não invente respostas, se você não souber diga que não tem conhecimento sobre essa questão
Responda na linguagem que fizeram a pergunta
Não de respostas muito grandes no máximo 250 caracteres
Não responda nada que fuja do FAQ abaixo!
Beneficios:
- curso 100% online
- +35 video aulas
- acesso vitalício
- liberado 24h/dia
- cerficado 3.0
- comunidade
Módulos:
1. Analise de imagens
2. Técnicas de esboço
3. Anatomia de rosto
4. Anatomia de corpo
5. Analise ed cabelos
6. Mãos e pés perfeitos
7. Desenhando roupas
8. Finalização
9. Pintura luz e sombra
Quem criou esse curso foi Maiara Rodrigues
Segue como FAQ os textos abaixos para você se basear e responder a qualquer pergunta do usuário:
1. É seguro realizar a compra do curso Método Fan Art 3.0?
É seguro. Nós utilizamos um sistema de pagamento seguro e criptografado para garantir a privacidade e segurança dos seus dados.
2. Você realmente devolve o dinheiro caso eu não goste do curso?
Oferecemos uma garantia de satisfação de 7 dias. Se por algum motivo você não gostar do curso, pode solicitar o reembolso nesse prazo.
3. Eu posso pagar em até 10x no cartão de crédito?
Você pode pagar em até 10x no cartão de crédito, de acordo com as opções disponíveis no momento da compra.
4. Eu posso pagar em 2 cartões de créditos diferentes?
Infelizmente, no momento não oferecemos a opção de pagamento em dois cartões de crédito diferentes.
5. Terei acesso imediato á uma área exclusiva como aluno(a) do curso?
Assim que sua compra for confirmada, você terá acesso imediato à área exclusiva de alunos.
6. Ganharei acesso à aulas em vídeo + audio + texto?
O curso inclui aulas em vídeo, áudio e texto para atender às diferentes formas de aprendizado.
7. Ao finalizar minha compra à vista ganho acesso imediato ao Grupo dos Alunos?
Ao finalizar sua compra à vista você ganha acesso imediato ao Grupo dos Alunos.
8. Ao terminar o curso vou ter acesso imediato ao meu certificado?
Assim que você concluir todas as aulas e atividades do curso, poderá imprimir seu certificado diretamente da plataforma.
9. É verdade que já na primeira semana eu [ou meu filho(a)] consigo ver resultados das aplicações práticas do curso?
As técnicas ensinadas no curso são aplicadas de forma prática e objetiva, permitindo que você veja resultados desde as primeiras semanas de aula.
10. Eu sinto que não tenho dom e nem talento para desenhar. Mesmo assim consigo desenhar meus personagens favoritos com qualidade e confiança?
O curso foi desenvolvido para ensinar técnicas práticas de desenho, independentemente do seu nível de habilidade. Com prática e dedicação, você conseguirá desenhar seus personagens favoritos com qualidade e confiança.
11. As técnicas ensinadas no curso servem para o meu filho (a) que ainda é criança e tem entre 8 à 16 anos?
As técnicas ensinadas no curso são adequadas para crianças e adolescentes com idade entre 8 e 16 anos. Os exercícios e atividades são adaptados para atender às necessidades desse público.
12. As técnicas ensinadas no curso servem para mim que sou adulto e sinto que passei da idade de aprender?
As técnicas ensinadas no curso são adequadas para qualquer pessoa, independentemente da idade. Nunca é tarde para aprender algo novo e desenvolver uma habilidade como o desenho.`;


/*
Usando o modelo gpt-3.5-turbo precisamos enviar o historico da conversa para manter o contexto
Exemplo:
messages: [{ role, content }]

content -> mensagem

role -> Existem 3 tipos
- user -> usada para o usuário enviar mensagens para o modelo
- assistant -> representa a resposta do modelo
- system -> definir o contexto inicial (personalidade) do modelo para que ele se comporte com base nas definições fornecidas
*/

// função para enviar uma pergunta para a API do OpenAI e receber a resposta
async function getResponseAnibot(question) {
    try {

        if(question.trim() === "")
            return;

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`, //Authorization: <tipo> <credenciais>
            },
            body: JSON.stringify({
                model: MODEL,
                messages: [
                    { role: "system", content: anibotContext.replace(/\n/g, " ") },
                    contextLanguage,
                    { role: "user", content: question }
                ],
                temperature: 0.7, //O parâmetro temperature é um hiperparâmetro utilizado ao fazer chamadas à API do modelo GPT-3.5-turbo ou GPT-3. Ele controla a aleatoriedade e a criatividade das respostas geradas pelo modelo.
                max_tokens: 2048, //numero maximo de tokens que podem ser processados em uma requisição, o limite maximo do modelo gpt-3.5-turbo é 4096
                frequency_penalty: 0, //O parâmetro frequency_penalty controla a repetição de palavras ou frases na resposta gerada pelo modelo. Um valor baixo de frequency_penalty (como 0) permite que o modelo gere respostas com maior probabilidade de repetir palavras e frases. Um valor alto de frequency_penalty (como 1) incentiva o modelo a evitar repetições excessivas, tornando as respostas mais diversificadas.
                presence_penalty: 0.6, //O parâmetro presence_penalty controla o equilíbrio entre a geração de respostas que são influenciadas pelo contexto fornecido e a geração de respostas mais independentes do contexto. Um valor baixo de presence_penalty (como 0) permite que o modelo gere respostas mais específicas para o contexto fornecido. Por outro lado, um valor alto de presence_penalty (como 1) torna o modelo mais propenso a gerar respostas que não são diretamente influenciadas pelo contexto, levando a respostas mais genéricas e menos específicas.
                n: 1, //O parâmetro "n" determina o número de respostas alternativas que a API deve gerar. No código fornecido, é definido como 1, o que significa que apenas uma resposta será retornada. Se você aumentar o valor de "n" para, por exemplo, 5, a API retornará cinco respostas alternativas e você poderá escolher a mais adequada para exibir ao usuário.
            }),
        });
  

      //enviando a requisição para o endpoint e convertendo a resposta em um json
      const data = await response.json();
      
      const responseText = data.choices[0].message.content.trim();
  
      return responseText;
    } 
    catch (error) {
      console.error("Error getting response from OpenAI API:", error);
      return "Sorry, there was an error processing your question. Please try again later.";
    }
}