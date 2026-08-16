// =========================================
// LANGUAGE SELECTOR
// =========================================

const languageButton =
    document.getElementById("languageButton");

const languageSelector =
    document.querySelector(".language-selector");

const currentLanguage =
    document.getElementById("currentLanguage");


// =========================================
// LANGUAGE NAMES
// =========================================

const languageNames = {

    ku: "Kurmancî",
    ckb: "سۆرانی",
    en: "English",
    nl: "Nederlands",
    de: "Deutsch",
    fr: "Français",
    ar: "العربية",
    tr: "Türkçe"

};


// =========================================
// TRANSLATIONS
// =========================================

const translations = {

    // =====================================
    // KURMANCÎ
    // =====================================

    ku: {

        eyebrow:
            "Di nêzîk de tê",

        title:
            "Em ê tiştekî<br>bedew ava bikin.",

        description:
            "MyKurda hîn di çêkirinê de ye. Em li pişt perdeyê bi dil û can dixebitin da ku cîhekî nû ji bo ziman, çand, afirînerî û civaka Kurdî ava bikin.",

        description2:
            "Spas ji bo serdana te. MyKurda di nêzîk de dê were vekirin. Ji kerema xwe paşê dîsa serdana me bike.",

        tagline:
            "Bi Kurdî, ji bo Kurdan.",

        contact:
            "Têkilî",

        discoverEyebrow:
            "Hîn bêtir",

        discoverTitle:
            "MyKurda çi ye?",

        discoverText:
            "Cîhekî nû ji bo zimanê Kurdî, çand, afirînerî û civakê.",

        createTitle:
            "Binivîse û parve bike",

        createText:
            "Helbest û gotinên xwe binivîse, wan ji bo kesekî bi taybetî bişîne an jî wan bi civakê re parve bike.",

        playTitle:
            "Bilîze û pêşbaziyê bike",

        playText:
            "Di lîstikên zimanê Kurdî de li dijî kesên din pêşbaziyê bike.",

        learnTitle:
            "Fêr bibe",

        learnText:
            "Bi ders û lîstikan Kurdî hîn bibe, XP bi dest bixe û di lîgayan de bilind bibe.",

        socialTitle:
            "Bi hev re girêdayî be",

        socialText:
            "Bi hevalên xwe re biaxive, hev nas bike û beşdarî civaka Kurdî bibe.",

        zerEyebrow:
            "Zêr",

        zerTitle:
            "Ji çalakiyên xwe qezenc bike.",

        zerText:
            "Bi afirandina naverokê, lîstin û fêrbûnê Zêr bi dest bixe û wan di Shopê de bi kar bîne.",

        tryEyebrow:
            "Biceribîne",

        tryTitle:
            "MyKurda di çalakiyê de.",

        tryText:
            "Çend tiştên ku dê bikaribî di MyKurda de bikî.",

        poemDemoTitle:
            "Helbestekê binivîse",

        for:
            "ji bo",

        sendPoem:
            "Ji bo kesekî bişîne",

        wordGameTitle:
            "Lîstika peyvan",

        gameQuestion:
            "Kîjan peyv rast e?",

        wordleText:
            "Peyvekî pênc tîpan bibîne.",

        wordleHint:
            "Kesk = cihê rast · Zer = di peyvê de ye",

        leagueTitle:
            "Lîga",

        leagueText:
            "Fêr bibe, XP bistîne û di lîgayê de bilind bibe.",

        visionEyebrow:
            "Tiştekî nû tê",

        visionTitle:
            "Fêr bibe. Biafirîne.<br>Bilîze. Girêdayî be.",

        visionText:
            "Hemû di cîhekî de.",

        footer:
            "© 2026 MyKurda. Hemû maf parastî ne."

    },


    // =====================================
    // SORANI
    // =====================================

    ckb: {

        eyebrow:
            "بەم زووانە دێت",

        title:
            "ئێمە شتێکی جوان<br>دروست دەکەین.",

        description:
            "MyKurda هێشتا لە قۆناغی دروستکردندایە. لە پشت پەردەوە بە دڵ و گیان کار دەکەین بۆ دروستکردنی شوێنێکی نوێ بۆ زمانی کوردی، کەلتوور، داهێنان و کۆمەڵگەی کوردی.",

        description2:
            "سوپاس بۆ سەردانەکەت. MyKurda بە زووانە دەکرێتەوە. تکایە دواتر دووبارە سەردانمان بکە.",

        tagline:
            "بە کوردی، بۆ کوردان.",

        contact:
            "پەیوەندی",

        discoverEyebrow:
            "زیاتر بزانە",

        discoverTitle:
            "MyKurda چییە؟",

        discoverText:
            "شوێنێکی نوێ بۆ زمانی کوردی، کەلتوور، داهێنان و کۆمەڵگا.",

        createTitle:
            "بنووسە و بڵاوی بکەرەوە",

        createText:
            "هۆنراوە و وتەکانت بنووسە، بۆ کەسێکی دیاریکراو بیاننێرە یان لەگەڵ کۆمەڵگا بڵاویان بکەرەوە.",

        playTitle:
            "یاری بکە و پێشبڕکێ بکە",

        playText:
            "لە یارییەکانی زمانی کوردیدا لەگەڵ کەسانی تر پێشبڕکێ بکە.",

        learnTitle:
            "فێربە",

        learnText:
            "بە وانە و یارییەکان کوردی فێربە، XP بەدەست بهێنە و لە لیگەکاندا بەرز ببەوە.",

        socialTitle:
            "پەیوەندی دروست بکە",

        socialText:
            "لەگەڵ هاوڕێکانت گفتوگۆ بکە، کەسانی تر بناسە و ببە بەشێک لە کۆمەڵگەی کوردی.",

        zerEyebrow:
            "زێڕ",

        zerTitle:
            "لە چالاکییەکانت قازانج بکە.",

        zerText:
            "بە دروستکردنی ناوەڕۆک، یاریکردن و فێربوون زێڕ بەدەست بهێنە و لە فرۆشگاکەدا بەکاری بهێنە.",

        tryEyebrow:
            "تاقی بکەرەوە",

        tryTitle:
            "MyKurda لە چالاکیدا.",

        tryText:
            "هەندێک لەو شتانەی کە دەتوانیت لە MyKurda بکەیت.",

        poemDemoTitle:
            "هۆنراوەیەک بنووسە",

        for:
            "بۆ",

        sendPoem:
            "بۆ کەسێک بینێرە",

        wordGameTitle:
            "یاریی وشە",

        gameQuestion:
            "کام وشە دروستە؟",

        wordleText:
            "وشەیەکی پێنج پیت بدۆزەرەوە.",

        wordleHint:
            "سەوز = شوێنی دروست · زەرد = لە وشەکەدایە",

        leagueTitle:
            "لیگ",

        leagueText:
            "فێربە، XP بەدەست بهێنە و لە لیگەکەدا بەرز ببەوە.",

        visionEyebrow:
            "شتێکی نوێ دێت",

        visionTitle:
            "فێربە. داهێنان بکە.<br>یاری بکە. پەیوەندی دروست بکە.",

        visionText:
            "هەمووی لە یەک شوێندا.",

        footer:
            "© 2026 MyKurda. هەموو مافەکان پارێزراون."

    },


    // =====================================
    // ENGLISH
    // =====================================

    en: {

        eyebrow:
            "Coming soon",

        title:
            "We're building<br>something beautiful.",

        description:
            "MyKurda is currently under construction. We're working behind the scenes to create a new place for Kurdish language, culture, creativity and community.",

        description2:
            "Thank you for visiting. MyKurda will be launching soon. Please check back later.",

        tagline:
            "In Kurdish, for Kurds.",

        contact:
            "Contact",

        discoverEyebrow:
            "Discover more",

        discoverTitle:
            "What is MyKurda?",

        discoverText:
            "A new place for Kurdish language, culture, creativity and community.",

        createTitle:
            "Create & share",

        createText:
            "Write poems and sayings, address them to someone special or share them with the community.",

        playTitle:
            "Play & compete",

        playText:
            "Challenge other people in Kurdish language games and 1v1 battles.",

        learnTitle:
            "Learn Kurdish",

        learnText:
            "Learn through lessons and games, earn XP and climb the leagues.",

        socialTitle:
            "Connect",

        socialText:
            "Chat with your friends, meet others and become part of the Kurdish community.",

        zerEyebrow:
            "Zêr",

        zerTitle:
            "Earn from what you do.",

        zerText:
            "Earn Zêr through creating, playing and learning, then use it in the Shop.",

        tryEyebrow:
            "Try it",

        tryTitle:
            "A glimpse of MyKurda.",

        tryText:
            "Here are some of the things you will be able to do in MyKurda.",

        poemDemoTitle:
            "Write a poem",

        for:
            "for",

        sendPoem:
            "Send to someone",

        wordGameTitle:
            "Word game",

        gameQuestion:
            "Which word is correct?",

        wordleText:
            "Guess a five-letter word.",

        wordleHint:
            "Green = correct place · Yellow = in the word",

        leagueTitle:
            "League",

        leagueText:
            "Learn, earn XP and climb the league.",

        visionEyebrow:
            "Something new is coming",

        visionTitle:
            "Learn. Create.<br>Play. Connect.",

        visionText:
            "All in one place.",

        footer:
            "© 2026 MyKurda. All rights reserved."

    },


    // =====================================
    // DUTCH
    // =====================================

    nl: {

        eyebrow:
            "Binnenkort beschikbaar",

        title:
            "We bouwen aan<br>iets moois.",

        description:
            "MyKurda is momenteel in ontwikkeling. Achter de schermen werken we aan een nieuwe plek voor de Koerdische taal, cultuur, creativiteit en gemeenschap.",

        description2:
            "Bedankt voor je bezoek. MyKurda wordt binnenkort gelanceerd. Kom later nog eens terug.",

        tagline:
            "In het Koerdisch, voor Koerden.",

        contact:
            "Contact",

        discoverEyebrow:
            "Ontdek meer",

        discoverTitle:
            "Wat is MyKurda?",

        discoverText:
            "Een nieuwe plek voor de Koerdische taal, cultuur, creativiteit en gemeenschap.",

        createTitle:
            "Maak & deel",

        createText:
            "Schrijf gedichten en uitspraken, draag ze op aan iemand of deel ze met de community.",

        playTitle:
            "Speel & strijd",

        playText:
            "Daag anderen uit in Koerdische taalspelletjes en 1-tegen-1-gevechten.",

        learnTitle:
            "Leer Koerdisch",

        learnText:
            "Leer met lessen en spelletjes, verdien XP en klim omhoog in de competities.",

        socialTitle:
            "Maak contact",

        socialText:
            "Chat met je vrienden, ontmoet anderen en word onderdeel van de Koerdische community.",

        zerEyebrow:
            "Zêr",

        zerTitle:
            "Verdien door actief te zijn.",

        zerText:
            "Verdien Zêr door te creëren, spelen en leren en gebruik het vervolgens in de Shop.",

        tryEyebrow:
            "Probeer het",

        tryTitle:
            "Een voorproefje van MyKurda.",

        tryText:
            "Dit zijn enkele dingen die je straks in MyKurda kunt doen.",

        poemDemoTitle:
            "Schrijf een gedicht",

        for:
            "voor",

        sendPoem:
            "Stuur naar iemand",

        wordGameTitle:
            "Woordspel",

        gameQuestion:
            "Welk woord is juist?",

        wordleText:
            "Raad een woord van vijf letters.",

        wordleHint:
            "Groen = juiste plek · Geel = zit in het woord",

        leagueTitle:
            "Competitie",

        leagueText:
            "Leer, verdien XP en klim omhoog in de competitie.",

        visionEyebrow:
            "Er komt iets nieuws aan",

        visionTitle:
            "Leer. Creëer.<br>Speel. Verbind.",

        visionText:
            "Alles op één plek.",

        footer:
            "© 2026 MyKurda. Alle rechten voorbehouden."

    },


    // =====================================
    // GERMAN
    // =====================================

    de: {

        eyebrow:
            "Demnächst verfügbar",

        title:
            "Wir bauen<br>etwas Schönes.",

        description:
            "MyKurda befindet sich derzeit im Aufbau. Hinter den Kulissen arbeiten wir an einem neuen Ort für die kurdische Sprache, Kultur, Kreativität und Gemeinschaft.",

        description2:
            "Danke für deinen Besuch. MyKurda wird bald starten. Schau später gerne wieder vorbei.",

        tagline:
            "Auf Kurdisch, für Kurden.",

        contact:
            "Kontakt",

        discoverEyebrow:
            "Mehr entdecken",

        discoverTitle:
            "Was ist MyKurda?",

        discoverText:
            "Ein neuer Ort für die kurdische Sprache, Kultur, Kreativität und Gemeinschaft.",

        createTitle:
            "Erstellen & teilen",

        createText:
            "Schreibe Gedichte und Sprüche, widme sie jemandem oder teile sie mit der Community.",

        playTitle:
            "Spielen & antreten",

        playText:
            "Fordere andere in kurdischen Sprachspielen und 1-gegen-1-Duellen heraus.",

        learnTitle:
            "Kurdisch lernen",

        learnText:
            "Lerne mit Lektionen und Spielen, sammle XP und steige in den Ligen auf.",

        socialTitle:
            "Verbinden",

        socialText:
            "Chatte mit deinen Freunden, lerne andere kennen und werde Teil der kurdischen Community.",

        zerEyebrow:
            "Zêr",

        zerTitle:
            "Verdiene mit deinen Aktivitäten.",

        zerText:
            "Verdiene Zêr durch Erstellen, Spielen und Lernen und gib es anschließend im Shop aus.",

        tryEyebrow:
            "Ausprobieren",

        tryTitle:
            "Ein Einblick in MyKurda.",

        tryText:
            "Das sind einige Dinge, die du später in MyKurda machen kannst.",

        poemDemoTitle:
            "Schreibe ein Gedicht",

        for:
            "für",

        sendPoem:
            "Jemandem schicken",

        wordGameTitle:
            "Wortspiel",

        gameQuestion:
            "Welches Wort ist richtig?",

        wordleText:
            "Errate ein Wort mit fünf Buchstaben.",

        wordleHint:
            "Grün = richtige Stelle · Gelb = im Wort enthalten",

        leagueTitle:
            "Liga",

        leagueText:
            "Lerne, sammle XP und steige in der Liga auf.",

        visionEyebrow:
            "Etwas Neues kommt",

        visionTitle:
            "Lernen. Erstellen.<br>Spielen. Verbinden.",

        visionText:
            "Alles an einem Ort.",

        footer:
            "© 2026 MyKurda. Alle Rechte vorbehalten."

    },


    // =====================================
    // FRENCH
    // =====================================

    fr: {

        eyebrow:
            "Bientôt disponible",

        title:
            "Nous construisons<br>quelque chose de beau.",

        description:
            "MyKurda est actuellement en construction. Nous travaillons en coulisses pour créer un nouvel espace dédié à la langue, à la culture, à la créativité et à la communauté kurdes.",

        description2:
            "Merci pour votre visite. MyKurda sera bientôt disponible. Revenez nous voir prochainement.",

        tagline:
            "En kurde, pour les Kurdes.",

        contact:
            "Contact",

        discoverEyebrow:
            "En savoir plus",

        discoverTitle:
            "Qu'est-ce que MyKurda ?",

        discoverText:
            "Un nouvel espace pour la langue kurde, la culture, la créativité et la communauté.",

        createTitle:
            "Créer & partager",

        createText:
            "Écrivez des poèmes et des textes, dédiez-les à quelqu'un ou partagez-les avec la communauté.",

        playTitle:
            "Jouer & se défier",

        playText:
            "Affrontez d'autres personnes dans des jeux de langue kurde et des duels en 1 contre 1.",

        learnTitle:
            "Apprendre le kurde",

        learnText:
            "Apprenez grâce aux leçons et aux jeux, gagnez de l'XP et progressez dans les ligues.",

        socialTitle:
            "Se connecter",

        socialText:
            "Discutez avec vos amis, rencontrez d'autres personnes et rejoignez la communauté kurde.",

        zerEyebrow:
            "Zêr",

        zerTitle:
            "Gagnez grâce à vos activités.",

        zerText:
            "Gagnez des Zêr en créant, en jouant et en apprenant, puis utilisez-les dans la boutique.",

        tryEyebrow:
            "Essayez",

        tryTitle:
            "Un aperçu de MyKurda.",

        tryText:
            "Voici quelques-unes des choses que vous pourrez faire sur MyKurda.",

        poemDemoTitle:
            "Écrire un poème",

        for:
            "pour",

        sendPoem:
            "Envoyer à quelqu'un",

        wordGameTitle:
            "Jeu de mots",

        gameQuestion:
            "Quel mot est correct ?",

        wordleText:
            "Devinez un mot de cinq lettres.",

        wordleHint:
            "Vert = bonne position · Jaune = présent dans le mot",

        leagueTitle:
            "Ligue",

        leagueText:
            "Apprenez, gagnez de l'XP et progressez dans la ligue.",

        visionEyebrow:
            "Quelque chose de nouveau arrive",

        visionTitle:
            "Apprendre. Créer.<br>Jouer. Se connecter.",

        visionText:
            "Tout au même endroit.",

        footer:
            "© 2026 MyKurda. Tous droits réservés."

    },


    // =====================================
    // ARABIC
    // =====================================

    ar: {

        eyebrow:
            "قريبًا",

        title:
            "نبني<br>شيئًا جميلًا.",

        description:
            "MyKurda قيد الإنشاء حاليًا. نعمل خلف الكواليس لإنشاء مساحة جديدة للغة والثقافة والإبداع والمجتمع الكردي.",

        description2:
            "شكرًا لزيارتك. سيتم إطلاق MyKurda قريبًا. يُرجى العودة لزيارتنا لاحقًا.",

        tagline:
            "بالكردية، من أجل الكرد.",

        contact:
            "تواصل معنا",

        discoverEyebrow:
            "اكتشف المزيد",

        discoverTitle:
            "ما هو MyKurda؟",

        discoverText:
            "مساحة جديدة للغة الكردية والثقافة والإبداع والمجتمع.",

        createTitle:
            "أنشئ وشارك",

        createText:
            "اكتب القصائد والعبارات، وأهدها إلى شخص معيّن أو شاركها مع المجتمع.",

        playTitle:
            "العب وتنافس",

        playText:
            "تحدَّ الآخرين في ألعاب اللغة الكردية والمواجهات الفردية.",

        learnTitle:
            "تعلّم الكردية",

        learnText:
            "تعلّم من خلال الدروس والألعاب، واكسب XP وتقدّم في الدوريات.",

        socialTitle:
            "تواصل",

        socialText:
            "تحدث مع أصدقائك، وتعرّف على أشخاص آخرين وكن جزءًا من المجتمع الكردي.",

        zerEyebrow:
            "Zêr",

        zerTitle:
            "اكسب من خلال ما تفعله.",

        zerText:
            "اكسب Zêr من خلال الإبداع واللعب والتعلّم، ثم استخدمها في المتجر.",

        tryEyebrow:
            "جرّب",

        tryTitle:
            "لمحة عن MyKurda.",

        tryText:
            "إليك بعض الأشياء التي ستتمكن من القيام بها في MyKurda.",

        poemDemoTitle:
            "اكتب قصيدة",

        for:
            "إلى",

        sendPoem:
            "أرسلها إلى شخص",

        wordGameTitle:
            "لعبة الكلمات",

        gameQuestion:
            "أي كلمة صحيحة؟",

        wordleText:
            "خمن كلمة من خمسة أحرف.",

        wordleHint:
            "الأخضر = المكان الصحيح · الأصفر = موجود في الكلمة",

        leagueTitle:
            "الدوري",

        leagueText:
            "تعلّم، واكسب XP وتقدّم في الدوري.",

        visionEyebrow:
            "شيء جديد قادم",

        visionTitle:
            "تعلّم. أبدع.<br>العب. تواصل.",

        visionText:
            "كل ذلك في مكان واحد.",

        footer:
            "© 2026 MyKurda. جميع الحقوق محفوظة."

    },


    // =====================================
    // TURKISH
    // =====================================

    tr: {

        eyebrow:
            "Çok yakında",

        title:
            "Güzel bir şey<br>inşa ediyoruz.",

        description:
            "MyKurda şu anda yapım aşamasında. Kürt dili, kültürü, yaratıcılığı ve topluluğu için yeni bir alan oluşturmak üzere perde arkasında çalışıyoruz.",

        description2:
            "Ziyaretiniz için teşekkür ederiz. MyKurda çok yakında hizmete girecek. Lütfen daha sonra tekrar ziyaret edin.",

        tagline:
            "Kürtçe, Kürtler için.",

        contact:
            "İletişim",

        discoverEyebrow:
            "Daha fazlasını keşfet",

        discoverTitle:
            "MyKurda nedir?",

        discoverText:
            "Kürt dili, kültürü, yaratıcılığı ve topluluğu için yeni bir alan.",

        createTitle:
            "Oluştur ve paylaş",

        createText:
            "Şiirler ve sözler yaz, onları birine ithaf et veya toplulukla paylaş.",

        playTitle:
            "Oyna ve yarış",

        playText:
            "Kürtçe dil oyunlarında ve bire bir mücadelelerde başkalarına meydan oku.",

        learnTitle:
            "Kürtçe öğren",

        learnText:
            "Dersler ve oyunlarla öğren, XP kazan ve liglerde yüksel.",

        socialTitle:
            "Bağlantı kur",

        socialText:
            "Arkadaşlarınla sohbet et, yeni insanlarla tanış ve Kürt topluluğunun bir parçası ol.",

        zerEyebrow:
            "Zêr",

        zerTitle:
            "Yaptıklarından kazan.",

        zerText:
            "Üreterek, oynayarak ve öğrenerek Zêr kazan; ardından bunları Mağaza'da kullan.",

        tryEyebrow:
            "Dene",

        tryTitle:
            "MyKurda'ya bir bakış.",

        tryText:
            "MyKurda'da yapabileceğin şeylerden bazıları.",

        poemDemoTitle:
            "Bir şiir yaz",

        for:
            "için",

        sendPoem:
            "Birine gönder",

        wordGameTitle:
            "Kelime oyunu",

        gameQuestion:
            "Hangi kelime doğru?",

        wordleText:
            "Beş harfli bir kelimeyi tahmin et.",

        wordleHint:
            "Yeşil = doğru yer · Sarı = kelimede var",

        leagueTitle:
            "Lig",

        leagueText:
            "Öğren, XP kazan ve ligde yüksel.",

        visionEyebrow:
            "Yeni bir şey geliyor",

        visionTitle:
            "Öğren. Üret.<br>Oyna. Bağlan.",

        visionText:
            "Hepsi tek bir yerde.",

        footer:
            "© 2026 MyKurda. Tüm hakları saklıdır."

    }

};


// =========================================
// OPEN / CLOSE LANGUAGE MENU
// =========================================

languageButton.addEventListener("click", (event) => {

    event.stopPropagation();

    const isOpen =
        languageSelector.classList.toggle("open");

    languageButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );

});


document.addEventListener("click", (event) => {

    if (!languageSelector.contains(event.target)) {

        languageSelector.classList.remove("open");

        languageButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


// =========================================
// CHANGE LANGUAGE
// =========================================

document
    .querySelectorAll(".language-menu button")
    .forEach(button => {

        button.addEventListener("click", () => {

            const language =
                button.dataset.language;

            const translation =
                translations[language];

            if (!translation) {
                return;
            }


            document
                .querySelectorAll("[data-i18n]")
                .forEach(element => {

                    const key =
                        element.dataset.i18n;

                    if (
                        Object.prototype.hasOwnProperty.call(
                            translation,
                            key
                        )
                    ) {

                        element.innerHTML =
                            translation[key];

                    }

                });


            currentLanguage.textContent =
                languageNames[language];


            document.documentElement.lang =
                language;


            if (
                language === "ar" ||
                language === "ckb"
            ) {

                document.documentElement.dir =
                    "rtl";

            } else {

                document.documentElement.dir =
                    "ltr";

            }


            languageSelector.classList.remove(
                "open"
            );

            languageButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


// =========================================
// MOUSE FOLLOWING GLASS LIGHT
// =========================================

const glassCards =
    document.querySelectorAll(
        ".glass-card, .glass-card-small, .feature-card, .demo-card"
    );


glassCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                ((event.clientX - rect.left) /
                    rect.width) * 100;

            const y =
                ((event.clientY - rect.top) /
                    rect.height) * 100;

            card.style.setProperty(
                "--mouse-x",
                `${x}%`
            );

            card.style.setProperty(
                "--mouse-y",
                `${y}%`
            );

        }
    );

});


// =========================================
// UPVOTE / DOWNVOTE DEMO
// =========================================

const upvoteButton =
    document.getElementById("upvoteButton");

const downvoteButton =
    document.getElementById("downvoteButton");

const upvoteCount =
    document.getElementById("upvoteCount");

const downvoteCount =
    document.getElementById("downvoteCount");

const zerEarned =
    document.getElementById("zerEarned");


let upvotes = 24;
let downvotes = 2;


upvoteButton.addEventListener(
    "click",
    () => {

        upvotes++;

        upvoteCount.textContent =
            upvotes;

        zerEarned.classList.add(
            "show"
        );

        setTimeout(() => {

            zerEarned.classList.remove(
                "show"
            );

        }, 1600);

    }
);


downvoteButton.addEventListener(
    "click",
    () => {

        downvotes++;

        downvoteCount.textContent =
            downvotes;

    }
);


// =========================================
// SEND POEM DEMO
// =========================================

const sendPoemButton =
    document.getElementById(
        "sendPoemButton"
    );


sendPoemButton.addEventListener(
    "click",
    () => {

        sendPoemButton.classList.add(
            "sent"
        );

        sendPoemButton.textContent =
            "✓ Sent";

        setTimeout(() => {

            sendPoemButton.classList.remove(
                "sent"
            );

            sendPoemButton.textContent =
                "Ji bo kesekî bişîne";

        }, 1800);

    }
);


// =========================================
// WORD GAME
// =========================================

const answerButtons =
    document.querySelectorAll(
        ".answer-button"
    );

const gameResult =
    document.getElementById(
        "gameResult"
    );


answerButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            answerButtons.forEach(
                item => {

                    item.classList.remove(
                        "correct",
                        "wrong"
                    );

                }
            );


            if (
                button.textContent.trim() ===
                "Roj"
            ) {

                button.classList.add(
                    "correct"
                );

                gameResult.textContent =
                    "✓ +10 Zêr";

            } else {

                button.classList.add(
                    "wrong"
                );

                gameResult.textContent =
                    "Try again";

            }


            gameResult.classList.add(
                "show"
            );

        }
    );

});


// =========================================
// REDUCED MOTION
// =========================================

if (
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    document.documentElement.classList.add(
        "reduced-motion"
    );

}
