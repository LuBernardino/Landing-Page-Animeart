
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

// Componente switch

const changeThemeCheckbox = document.querySelector("#changeTheme");
const htmlElement = document.documentElement;

changeThemeCheckbox.addEventListener("change", (e) => {
  const mode = htmlElement.getAttribute("mode");
  const newMode = mode === "dark" ? "light" : "dark";
  htmlElement.setAttribute("mode", newMode);

  localStorage.setItem("mode", newMode);
});

window.onload = () => {
  const mode = localStorage.getItem("mode");
  htmlElement.setAttribute("mode", mode);
};

// ----------> translate

const menuNavegation = document.querySelector(".menu-languages");
const flag = document.querySelector(".flag");

flag.addEventListener("click", (e) => {
  menuNavegation.classList.toggle("active");
});

//função para remover menuNavegation depois de escolher uma opção de idioma.
function removeMenuNavegation() {
  menuNavegation.classList.remove("active");
};

// arrow function para trocar bandeira
const languages = document.querySelectorAll(".language");
languages.forEach((language) => {
  language.addEventListener("click", (e) => {
    const languageSelected = e.target.getAttributeNode("data-value").value;
    const languageName = e.target.innerHTML;

    switch (languageSelected) {
      case "pt-br":
        flag.setAttribute("src", "./assets/images/bandeira-do-brasil.png");
        changeLanguage(languageSelected, languageName);
        removeMenuNavegation();
        break;
      case "pt-pt":
        flag.setAttribute("src", "./assets/images/bandeira-de-portugal.png");
        changeLanguage(languageSelected, languageName);
        removeMenuNavegation();
        break;
      case "en-us":
        flag.setAttribute("src", "./assets/images/bandeira-do-eua.png");
        changeLanguage(languageSelected, languageName);
        removeMenuNavegation();
        break;
      case "es-es":
        flag.setAttribute("src", "./assets/images/bandeira-da-espanha.png");
        changeLanguage(languageSelected, languageName);
        removeMenuNavegation();
        break;
      case "ja-ja":
        flag.setAttribute("src", "./assets/images/bandeira-do-japao.png");
        changeLanguage(languageSelected, languageName);
        removeMenuNavegation();
        break;
    }
  });
});

// função para trocar o idioma
function changeLanguage(language, languageName) {
  const translateElements = document.querySelectorAll("[data-translate]");

  //seta o idioma no contexto do anibot
  contextLanguage.content = `Responda em ${languageName}`;

  translateElements.forEach((item) => {
    const identifier = item.getAttribute("data-translate");

    item.innerHTML = translations[language][identifier];
  });
}

// traduções
const translations = {
  "pt-br": {
    "navbar-link-one": `Início`,
    "navbar-link-two": `Benefícios`,
    "navbar-link-three": `Módulos`,
    "navbar-link-four": `Mentora`,

    "begin-title": `ANIME </br>ART`,
    "begin-description": `Descubra, finalmente, o método exato para aprender a 
    desenhar seus personagens de animes favoritos, mesmo se você não nasceu com o 
    dom de desenhar. Com o sistema completo do Método Fan Art 3.0.`,
    "begin-button": `QUERO APRENDER!`,

    "benefits-title": `BENEFÍCIOS`,
    "benefits-title-card-one": `CURSO 100% ONLINE`,
    "benefits-description-card-one": `Assista de qualquer </br>dispositivo.`,
    "benefits-title-card-two": `+35 VIDEO AULAS`,
    "benefits-description-card-two": `Aulas didáticas, com </br>exercícios práticos.`,
    "benefits-title-card-three": `ACESSO VITALÍCIO`,
    "benefits-description-card-three": `Acessar o curso </br>para sempre.`,
    "benefits-title-card-four": `LIBERADO 24H/DIA`,
    "benefits-description-card-four": `Assista quando quiser, </br>a qualquer hora.`,
    "benefits-title-card-five": `CERTIFICADO 3.0`,
    "benefits-description-card-five": `Certificado de conclusão </br>de curso.`,
    "benefits-title-card-six": `COMUNIDADE`,
    "benefits-description-card-six": `Apoio de milhares </br>de alunos.`,

    "modules-title": `MÓDULOS`,
    "modules-title-card-one": `ANÁLISE DE IMAGENS`,
    "modules-description-card-one": `Fundamental para qualquer pessoa que tenha interesse em se
    aprofundar no mundo da arte, design gráfico, animação ou outras
    áreas que envolvem o uso de imagens.`,
    "modules-title-card-two": `TÉCNICAS DE ESBOÇO`,
    "modules-description-card-two": `Essencial para aprender técnicas de esboço utilizadas pelos
    verdadeiros desenhistas de mangá e receberá um guia passo a passo
    para desenvolver o esboço do desenho de forma mais assertiva e bem
    estruturada.`,
    "modules-title-card-three": `ANATOMIA DE ROSTO`,
    "modules-description-card-three": `Análise de imagens é voltado para o estudo da anatomia, aprenderá
    técnicas e estratégias para desenhar personagens em diferentes
    posições e ângulos, mantendo a proporção e simetria do desenho.`,
    "modules-title-card-four": `ANATOMIA DE CORPO`,
    "modules-description-card-four": `Análise de imagens é dedicado ao estudo da anatomia do corpo
    humano e movimentos mais realistas e dinâmicos. Aprenderá a
    desenhar em diferentes tamanhos.`,
    "modules-title-card-five": `ANÁLISE DE CABELOS`,
    "modules-description-card-five": `Eles possuem um estilo único e muitas vezes parecem desafiar as
    leis da gravidade, o que pode dificultar o processo de desenho.
    Aprenderá a técnica de desenho de cabelos em anime/mangá.`,
    "modules-title-card-six": `MÃOS E PÉS PERFEITOS`,
    "modules-description-card-six": `Aprenderá técnicas e estratégias para desenhar mãos e pés em
    personagens de anime/mangá de forma precisa e realista, levando em
    conta a anatomia e os detalhes únicos de cada estilo.`,
    "modules-title-card-seven": `DESENHANDO ROUPAS`,
    "modules-description-card-seven": `Aprenderá técnicas de desenhar roupas, e analisar as semelhanças
    de roupas de manga curta/longa, calças, camisetas, e acessórios
    com exatidão.`,
    "modules-title-card-eight": `FINALIZAÇÃO`,
    "modules-description-card-eight": `Aprenderá como segurar corretamente a caneta para obter o melhor
    resultado, qual tipo de caneta ideal para o seu desenho, e como
    utilizar diferentes espessuras de caneta para criar contrastes e
    detalhes.`,
    "modules-title-card-nine": `PINTURA LUZ E SOMBRA`,
    "modules-description-card-nine": `Será introduzido ao mundo da pintura, aprimorando ainda mais o seu
    desenho. Aprenderá as técnicas de luz e sombra para dar mais
    profundidade e realismo às suas criações.`,

    "mentor-title": `MENTORA`,
    "mentor-description": `Mayara descobriu que sua missão é ajudar as pessoas a realizar o
    sonho de aprender a desenhar, mesmo sem terem nascido com o "dom
    de desenhar". Após anos de experiência e percebendo que os métodos
    tradicionais de ensino não funcionavam para muitos, ela
    desenvolveu o Método Fan Art 3.0.`,
    "mentor-button": `QUERO APRENDER!`,
  },

  "pt-pt": {
    "navbar-link-one": "Início",
    "navbar-link-two": "Benefícios",
    "navbar-link-three": "Módulos",
    "navbar-link-four": "Mentora",

    "begin-title": "ANIME </br>ART",
    "begin-description": "Descubra, finalmente, o método exato para aprender a desenhar os seus personagens de anime favoritos, mesmo que não tenha nascido com o talento para desenhar. Com o sistema completo do Método Fan Art 3.0.",
    "begin-button": "QUERO APRENDER!",

    "benefits-title": "Benefícios",
    "benefits-title-card-one": "CURSO 100% ONLINE",
    "benefits-description-card-one": "Assista a partir de </br>qualquer dispositivo.",
    "benefits-title-card-two": "+35 VIDEO AULAS",
    "benefits-description-card-two": "Aulas didáticas com </br>exercícios práticos.",
    "benefits-title-card-three": "ACESSO VITALÍCIO",
    "benefits-description-card-three": "Acesso ao curso </br>para sempre.",
    "benefits-title-card-four": "DISPONÍVEL 24H/DIA",
    "benefits-description-card-four": "Assista quando quiser,</br> a qualquer hora.",
    "benefits-title-card-five": "CERTIFICADO 3.0",
    "benefits-description-card-five": "Certificado de conclusão</br> do curso.",
    "benefits-title-card-six": "COMUNIDADE",
    "benefits-description-card-six": "Apoio de milhares</br> de alunos.",

    "modules-title": "Módulos",
    "modules-title-card-one": "ANÁLISE DE IMAGENS",
    "modules-description-card-one": "Fundamental para qualquer pessoa interessada em aprofundar-se no mundo da arte, design gráfico, animação ou outras áreas que envolvam o uso de imagens.",
    "modules-title-card-two": "TÉCNICAS DE ESBOÇO",
    "modules-description-card-two": "Essencial para aprender as técnicas de esboço utilizadas pelos verdadeiros desenhadores de manga e receberá um guia passo a passo para desenvolver o esboço do desenho de forma mais precisa e bem estruturada.",
    "modules-title-card-three": "ANATOMIA DO ROSTO",
    "modules-description-card-three": "A análise de imagens é direcionada ao estudo da anatomia, aprenderá técnicas e estratégias para desenhar personagens em diferentes posições e ângulos, mantendo a proporção e simetria do desenho.",
    "modules-title-card-four": "ANATOMIA DO CORPO",
    "modules-description-card-four": "A análise de imagens é dedicada ao estudo da anatomia do corpo humano e de movimentos mais realistas e dinâmicos. Aprenderá a desenhar em diferentes tamanhos.",
    "modules-title-card-five": "ANÁLISE DE CABELOS",
    "modules-description-card-five": "Os cabelos têm um estilo único e muitas vezes parecem desafiar as leis da gravidade, o que pode dificultar o processo de desenho. Aprenderá a técnica de desenho de cabelos em anime/manga.",
    "modules-title-card-six": "MÃOS E PÉS PERFEITOS",
    "modules-description-card-six": "Aprenderá técnicas e estratégias para desenhar mãos e pés nos personagens de anime/manga de forma precisa e realista, tendo em conta a anatomia e os detalhes únicos de cada estilo.",
    "modules-title-card-seven": "DESENHO DE ROUPAS",
    "modules-description-card-seven": "Aprenderá técnicas para desenhar roupas e analisar as semelhanças de roupas de manga curta/longa, calças, camisetas e acessórios com precisão.",
    "modules-title-card-eight": "FINALIZAÇÃO",
    "modules-description-card-eight": "Aprenderá como segurar corretamente a caneta para obter os melhores resultados, qual o tipo de caneta ideal para o seu desenho e como utilizar diferentes espessuras de caneta para criar contrastes e detalhes.",
    "modules-title-card-nine": "PINTURA LUZ E SOMBRA",
    "modules-description-card-nine": "Será introduzido ao mundo da pintura, aprimorando ainda mais o seu desenho. Aprenderá as técnicas de luz e sombra para dar mais profundidade e realismo às suas criações.",

    "mentor-title": "Mentora",
    "mentor-description": "Mayara descobriu que a sua missão é ajudar as pessoas a realizar o sonho de aprender a desenhar, mesmo que não tenham nascido com o 'talento para desenhar'. Após anos de experiência e ao perceber que os métodos tradicionais de ensino não funcionavam para muitos, ela desenvolveu o Método Fan Art 3.0.",
    "mentor-button": "QUERO APRENDER!",
  },

  "en-us": {
    "navbar-link-one": `Home`,
    "navbar-link-two": `Benefits`,
    "navbar-link-three": `Modules`,
    "navbar-link-four": `Mentor`,
    
    "begin-title": `ANIME </br>ART`,
    "begin-description": `Discover, finally, the exact method to learn how to draw your favorite anime characters, even if you weren't born with the talent for drawing. With the complete system of the Fan Art Method 3.0.`,
    "begin-button": `I WANT TO LEARN!`,

    "benefits-title": `BENEFITS`,
    "benefits-title-card-one": `100% ONLINE COURSE`,
    "benefits-description-card-one": `Watch from </br>any device.`,
    "benefits-title-card-two": `+35 VIDEO LESSONS`,
    "benefits-description-card-two": `Didactic lessons with </br>practical exercises.`,
    "benefits-title-card-three": `LIFETIME ACCESS`,
    "benefits-description-card-three": `Access the course </br>forever.`,
    "benefits-title-card-four": `AVAILABLE 24/7`,
    "benefits-description-card-four": `Watch whenever you </br>want, anytime.`,
    "benefits-title-card-five": `CERTIFICATE 3.0`,
    "benefits-description-card-five": `Course completion </br>certificate.`,
    "benefits-title-card-six": `COMMUNITY`,
    "benefits-description-card-six": `Support from thousands </br>of students.`,

    "modules-title": `MODULES`,
    "modules-title-card-one": `IMAGE ANALYSIS`,
    "modules-description-card-one": `Fundamental for anyone interested in delving into the world of art, graphic design, animation, or other fields involving the use of images.`,
    "modules-title-card-two": `SKETCHING TECHNIQUES`,
    "modules-description-card-two": `Essential for learning sketching techniques used by true manga artists. You will receive a step-by-step guide to develop your sketches more accurately and well-structured.`,
    "modules-title-card-three": `FACIAL ANATOMY`,
    "modules-description-card-three": `Image analysis is focused on studying anatomy. You will learn techniques and strategies to draw characters in different positions and angles, maintaining the proportion and symmetry of the drawing.`,
    "modules-title-card-four": `BODY ANATOMY`,
    "modules-description-card-four": `Image analysis is dedicated to studying human body anatomy and more realistic and dynamic movements. You will learn to draw in different sizes.`,
    "modules-title-card-five": `HAIR ANALYSIS`,
    "modules-description-card-five": `Anime/manga hair possesses a unique style and often seems to defy gravity, which can make the drawing process challenging. You will learn the technique of drawing anime/manga hair.`,
    "modules-title-card-six": `PERFECT HANDS AND FEET`,
    "modules-description-card-six": `You will learn techniques and strategies to draw hands and feet in anime/manga characters accurately and realistically, taking into account the anatomy and unique details of each style.`,
    "modules-title-card-seven": `DRAWING CLOTHING`,
    "modules-description-card-seven": `You will learn techniques for drawing clothes and analyzing the similarities of short/long-sleeved shirts, pants, t-shirts, and accessories accurately.`,
    "modules-title-card-eight": `FINISHING`,
    "modules-description-card-eight": `You will learn how to hold the pen correctly to achieve the best results, which pen type is ideal for your drawing, and how to use different pen thicknesses to create contrasts and details.`,
    "modules-title-card-nine": `LIGHT AND SHADOW PAINTING`,
    "modules-description-card-nine": `You will be introduced to the world of painting, further enhancing your drawing skills. You will learn light and shadow techniques to add depth and realism to your creations.`,

    "mentor-title": `MENTOR`,
    "mentor-description": `Mayara discovered that her mission is to help people fulfill the dream of learning to draw, even if they weren't born with the "talent for drawing." After years of experience and realizing that traditional teaching methods didn't work for many, she developed the Fan Art Method 3.0.`,
    "mentor-button": `I WANT TO LEARN!`,
  },

  "es-es": {
    "navbar-link-one": "Inicio",
    "navbar-link-two": "Beneficios",
    "navbar-link-three": "Módulos",
    "navbar-link-four": "Mentora",

    "begin-title": "ANIME </br>ART",
    "begin-description": "Descubre, finalmente, el método exacto para aprender a dibujar tus personajes de anime favoritos, incluso si no naciste con el talento para el dibujo. Con el sistema completo del Método Fan Art 3.0.",
    "begin-button": "¡QUIERO APRENDER!",

    "benefits-title": "BENEFICIOS",
    "benefits-title-card-one": "CURSO 100% EN LÍNEA",
    "benefits-description-card-one": "Mira desde </br>cualquier dispositivo.",
    "benefits-title-card-two": "+35 VIDEOS DE CLASES",
    "benefits-description-card-two": "Clases didácticas con </br>ejercicios prácticos.",
    "benefits-title-card-three": "ACCESO DE POR VIDA",
    "benefits-description-card-three": "Accede al curso </br>de por vida.",
    "benefits-title-card-four": "DISPONIBLE LAS 24 </br>HORAS DEL DÍA",
    "benefits-description-card-four": "Mira cuando quieras, </br>en cualquier momento.",
    "benefits-title-card-five": "CERTIFICADO 3.0",
    "benefits-description-card-five": "Certificado de finalización </br>del curso.",
    "benefits-title-card-six": "COMUNIDAD",
    "benefits-description-card-six": "Apoyo de miles </br>de estudiantes.",

    "modules-title": "MÓDULOS",
    "modules-title-card-one": "ANÁLISIS DE IMÁGENES",
    "modules-description-card-one": "Fundamental para cualquier persona interesada en profundizar en el mundo del arte, diseño gráfico, animación u otras áreas que involucren el uso de imágenes.",
    "modules-title-card-two": "TÉCNICAS DE BOCETOS",
    "modules-description-card-two": "Esencial para aprender técnicas de bocetos utilizadas por verdaderos dibujantes de manga, recibirás una guía paso a paso para desarrollar el boceto del dibujo de manera más precisa y estructurada.",
    "modules-title-card-three": "ANATOMÍA FACIAL",
    "modules-description-card-three": "El análisis de imágenes se centra en el estudio de la anatomía, aprenderás técnicas y estrategias para dibujar personajes en diferentes posiciones y ángulos, manteniendo la proporción y simetría del dibujo.",
    "modules-title-card-four": "ANATOMÍA CORPORAL",
    "modules-description-card-four": "El análisis de imágenes se dedica al estudio de la anatomía del cuerpo humano y movimientos más realistas y dinámicos. Aprenderás a dibujar en diferentes tamaños.",
    "modules-title-card-five": "ANÁLISIS DE PEINADOS",
    "modules-description-card-five": "Los peinados tienen un estilo único y a menudo desafían las leyes de la gravedad, lo que puede dificultar el proceso de dibujo. Aprenderás la técnica de dibujo de peinados en anime/manga.",
    "modules-title-card-six": "MANOS Y PIES PERFECTOS",
    "modules-description-card-six": "Aprenderás técnicas y estrategias para dibujar manos y pies en personajes de anime/manga de manera precisa y realista, teniendo en cuenta la anatomía y los detalles únicos de cada estilo.",
    "modules-title-card-seven": "DIBUJANDO ROPA",
    "modules-description-card-seven": "Aprenderás técnicas para dibujar ropa y analizar las similitudes de las prendas de manga corta/larga, pantalones, camisetas y accesorios con precisión.",
    "modules-title-card-eight": "ACABADO",
    "modules-description-card-eight": "Aprenderás cómo sujetar el lápiz correctamente para obtener el mejor resultado, qué tipo de lápiz es ideal para tu dibujo y cómo usar diferentes grosores para crear contrastes y detalles.",
    "modules-title-card-nine": "PINTURA DE LUZ Y SOMBRA",
    "modules-description-card-nine": "Serás introducido al mundo de la pintura, mejorando aún más tu dibujo. Aprenderás técnicas de luz y sombra para dar más profundidad y realismo a tus creaciones.",

    "mentor-title": "MENTORA",
    "mentor-description": "Mayara descubrió que su misión es ayudar a las personas a cumplir el sueño de aprender a dibujar, incluso si no nacieron con el 'talento para el dibujo'. Después de años de experiencia y al darse cuenta de que los métodos tradicionales de enseñanza no funcionaban para muchos, desarrolló el Método Fan Art 3.0.",
    "mentor-button": "¡QUIERO APRENDER!",
  },

  "ja-ja": {
    "navbar-link-one": "ホーム",
    "navbar-link-two": "特典",
    "navbar-link-three": "モジュール",
    "navbar-link-four": "メンター",

    "begin-title": "アニメアート",
    "begin-description": "あなたが絵を描く才能を持っていなくても、お気に入りのアニメキャラクターを描くための正確な方法をついに発見しましょう。メソッドファンアート3.0の完全なシステムを利用すれば、可能です。",
    "begin-button": "学びたい！",

    "benefits-title": "特典",
    "benefits-title-card-one": "オンラインコース100％",
    "benefits-description-card-one": "どんなデバイスでも視聴可能。",
    "benefits-title-card-two": "+35のビデオレッスン",
    "benefits-description-card-two": "実践的な演習がある実習授業。",
    "benefits-title-card-three": "終身アクセス",
    "benefits-description-card-three": "終生コースにアクセス可能。",
    "benefits-title-card-four": "24時間いつでも利用可能",
    "benefits-description-card-four": "いつでもお好きな時間に視聴可能。",
    "benefits-title-card-five": "3.0認定証",
    "benefits-description-card-five": "コース修了証明書。",
    "benefits-title-card-six": "コミュニティ",
    "benefits-description-card-six": "数千人の学生からのサポート。",

    "modules-title": "モジュール",
    "modules-title-card-one": "画像の分析",
    "modules-description-card-one": "芸術、グラフィックデザイン、アニメーションなど、画像の使用を含むさまざまな分野に興味のある方には必須。",
    "modules-title-card-two": "スケッチのテクニック",
    "modules-description-card-two": "マンガのプロのデザイナーが使用するスケッチのテクニックを学び、より正確で構造化されたスケッチを開発するためのステップバイステップガイドを提供します。",
    "modules-title-card-three": "顔の解剖学",
    "modules-description-card-three": "画像の分析は解剖学の研究に特化しており、異なるポーズや角度でキャラクターを描くための技術と戦略を学び、描画の比率と対称性を保ちます。",
    "modules-title-card-four": "体の解剖学",
    "modules-description-card-four": "画像の分析は人体の解剖学とよりリアルでダイナミックな動きの研究に捧げられています。さまざまなサイズで描く方法を学びます。",
    "modules-title-card-five": "髪の描画",
    "modules-description-card-five": "アニメ/マンガの髪の描画テクニックを学びます。髪は独特のスタイルを持っており、重力の法則に挑戦していることがよくあり、描画プロセスが難しくなることがあります。",
    "modules-title-card-six": "完璧な手と足",
    "modules-description-card-six": "アニメ/マンガのキャラクターの手と足を正確かつリアルに描くための技術と戦略を学びます。各スタイルの解剖学とユニークなディテールを考慮します。",
    "modules-title-card-seven": "服の描画",
    "modules-description-card-seven": "短/長袖、パンツ、Tシャツ、アクセサリーなどの服の描画技術と類似点を正確に分析する方法を学びます。",
    "modules-title-card-eight": "仕上げ",
    "modules-description-card-eight": "最良の結果を得るためにペンを正しく持つ方法、あなたのデザインに最適なペンの種類、異なるペンの太さを使用して対比とディテールを作成する方法を学びます。",
    "modules-title-card-nine": "光と影のペイント",
    "modules-description-card-nine": "絵をより深くリアルにするための光と影のテクニックを学び、絵により深みとリアリティを与える方法を身につけます。",

    "mentor-title": "メンター",
    "mentor-description": "Mayaraは、絵を描くという夢を持つ人々が生まれながらにして持っていなくても学ぶことを助ける使命を見出しました。多くの人にとって従来の教育方法がうまくいかないことに気付いた彼女は、メソッドファンアート3.0を開発しました。",
    "mentor-button": "学びたい！",
  },
};


//CHAT ANIBOT
const chatButton = document.querySelector(".chat-balloon");
const chatBot = document.querySelector("#chat-bot-container");
const chatButtonClose = document.querySelector(".icon-close");

chatButton.addEventListener("click", (e) => {
  chatBot.classList.toggle("active");
});

chatButtonClose.addEventListener("click", (e) => {
    chatBot.classList.remove("active");
  });

//ENVIO DE MENSAGENS

const sendMessageButton = document.querySelector(".send-message-button");
const userMessage = document.querySelector(".user-message-box");
const messageContent = document.querySelector(".chat-bot-message-content");

sendMessageButton.addEventListener("click", async (e) => {
  const message = userMessage.value.trim();

  if (message != "") {
    createMessage(message, "user");
    userMessage.value = "";

    //realizando o request para a api do openai e colocando o loading
    createMessage("", "bot", true);
    const response = await getResponseAnibot(message);
    removeLoadingMessage();
    createMessage(response, "bot");
  } else {
    console.log("erro"); /*colocar mensagem de erro aqui se estiver vazio*/
  }

});

function createMessage(message, type, loading = false) {
    let messageElement = document.createElement("div");
    const typeClass = type === "user" ? "message-usuario" : "message-bot";
    const img = type === "user" ? "ninja-1.png" : "chatbot-2.png";
    const messageValue = !loading ? `<p>${message}</p>` : '<div class="dot-flashing"></div>';  

    messageElement.classList.add(typeClass);

    if(loading) {
        messageElement.classList.add("loading");
    }
 
    messageElement.innerHTML = `<img src="./assets/icons/icons-png/${img}" alt="">
      ${messageValue}`;

    messageContent.append(messageElement);
}

function removeLoadingMessage() {
    const loadingMessage = document.querySelector(".chat-bot-message-content .message-bot.loading");
    if(loadingMessage)
    {
        loadingMessage.remove();
    }
}