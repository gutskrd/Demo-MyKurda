// =========================================
// MYKURDA DEMO
// MAIN JAVASCRIPT
// =========================================


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
    // KURMANJI
    // =====================================

    ku: {

        eyebrow: "Di nêzîk de tê",

        title:
            "Em ê tiştekî<br>bedew ava bikin.",

        description:
            "MyKurda hîn di çêkirinê de ye. Em li pişt perdeyê bi dil û can dixebitin da ku cîhekî nû ji bo ziman, çand û civaka Kurdî ava bikin.",

        description2:
            "Spas ji bo serdana te. MyKurda di nêzîk de dê were vekirin. Ji kerema xwe paşê dîsa serdana me bike.",

        tagline:
            "Bi Kurdî, ji bo Kurdan.",

        contact:
            "Têkilî",

        previewEyebrow:
            "PÊŞDÎTIYA MYKURDA",

        previewTitle:
            "Çîrokek parve bike.",

        previewDescription:
            "Çîroka xwe parve bike û bibîne ka MyKurda çawa dixebite.",

        from:
            "Ji",

        public:
            "Giştî",

        private:
            "Taybet",

        zer:
            "Zêr",

        createEyebrow:
            "NOBETA TE YE",

        createTitle:
            "Çîroka te çi ye?",

        senderLabel:
            "Ji kê?",

        storyTitleLabel:
            "Sernavê çîrokê",

        storyTitlePlaceholder:
            "Sernavê çîrokê...",

        storyLabel:
            "Çîroka xwe binivîse",

        storyPlaceholder:
            "Çîroka xwe li vir binivîse...",

        visibilityLabel:
            "Kî dikare bibîne?",

        post:
            "Bişîne",

        tryPreview:
            "Tu jî biceribîne",

        demoNotice:
            "Ev tenê demo ye. Zêrên li vir tenê ji bo ceribandinê ne.",

        featureOneTitle:
            "Binivîse",

        featureOneText:
            "Çîroka xwe parve bike.",

        featureTwoTitle:
            "Deng bidê",

        featureTwoText:
            "Çîrokên ku hez dikî hilbijêre.",

        featureThreeTitle:
            "Zêr bistîne",

        featureThreeText:
            "Ji bo dengdan û çalakiyên xwe xelat bistîne.",

        gamesEyebrow:
            "MYKURDA",

        gamesTitle:
            "LÎSTIKÊN MYKURDA",

        gamesDescription:
            "Fêr bibe, lîz bike û Kurdî bi awayekî nû biceribîne.",

        multipleChoice:
            "HILBIJARTINA ÇENDAN",

        quizTitle:
            "Tu dikarî vê peyvê nas bikî?",

        nextQuestion:
            "Pirsê din →",

        quizCorrect:
            "Rast e! Tu +1 Zêr wergirt.",

        quizWrong:
            "Ne rast e. Dîsa biceribîne.",

        fiveLetterWord:
            "PEYVA 5 TÎPAN",

        wordleTitle:
            "Peyvê 5 tîpan bibîne.",

        wordleDescription:
            "Peyvekî Kurdî ya pênc tîpan biceribîne.",

        wordlePlaceholder:
            "Peyv...",

        guess:
            "Biceribîne →",

        wordleFiveLetters:
            "Ji kerema xwe peyvekî 5 tîpan binivîse.",

        wordleSuccess:
            "Serkeftin! +5 Zêr 🎉",

        wordleTryAgain:
            "Dîsa biceribîne.",

        wordleGameOver:
            "Lîstik qediya. Peyv: ",

        whyMyKurda:
            "ÇIMA MYKURDA?",

        motivationTitle:
            "Ziman jî dikare bê winda kirin.",

        motivationText:
            "MyKurda ji bo ku ciwanên Kurd bikaribin zimanê xwe fêr bibin, bi hev re parve bikin û bi serbilindî bijîn tê çêkirin.",

        earned:
            "wergirtî",

        footer:
            "© 2026 MyKurda. Hemû maf parastî ne.",

        featuredStoryTitle:
            "Rojek li gundê me",

        featuredStoryText:
            "Rojekê li gundê me baran dibariya.<br><br>Ez û bavê min li derve meşiyan. Her ku em diçûn, bêdengiya gund tenê bi dengê baranê têk diçû.<br><br>Ew roj ji bo min bû bîranînek ku ez ê tu carî ji bîr nekim.",

        downvote:
            "Dengê neyînî",

        upvote:
            "Dengê erênî"

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
            "MyKurda هێشتا لە قۆناغی دروستکردندایە. لە پشت پەردەوە بە دڵ و گیان کار دەکەین بۆ دروستکردنی شوێنێکی نوێ بۆ زمانی کوردی، کەلتوور و کۆمەڵگەی کوردی.",

        description2:
            "سوپاس بۆ سەردانەکەت. MyKurda بە زووانە دەکرێتەوە. تکایە دواتر دووبارە سەردانمان بکە.",

        tagline:
            "بە کوردی، بۆ کوردان.",

        contact:
            "پەیوەندی",

        previewEyebrow:
            "پێشبینینی MYKURDA",

        previewTitle:
            "چیرۆکێک هاوبەش بکە.",

        previewDescription:
            "چیرۆکەکەت هاوبەش بکە و ببینە MyKurda چۆن کار دەکات.",

        from:
            "لە",

        public:
            "گشتی",

        private:
            "تایبەت",

        zer:
            "زێڕ",

        createEyebrow:
            "نۆرەی تۆیە",

        createTitle:
            "چیرۆکەکەت چییە؟",

        senderLabel:
            "لە کێ؟",

        storyTitleLabel:
            "ناونیشانی چیرۆک",

        storyTitlePlaceholder:
            "ناونیشانی چیرۆک...",

        storyLabel:
            "چیرۆکەکەت بنووسە",

        storyPlaceholder:
            "چیرۆکەکەت لێرە بنووسە...",

        visibilityLabel:
            "کێ دەتوانێت بیبینێت؟",

        post:
            "بینێرە",

        tryPreview:
            "تۆش تاقی بکەرەوە",

        demoNotice:
            "ئەمە تەنها دیمۆیە. زێڕەکانی لێرە تەنها بۆ تاقیکردنەوەن.",

        featureOneTitle:
            "بنووسە",

        featureOneText:
            "چیرۆکەکەت هاوبەش بکە.",

        featureTwoTitle:
            "دەنگ بدە",

        featureTwoText:
            "ئەو چیرۆکانە هەڵبژێرە کە حەزت لێیە.",

        featureThreeTitle:
            "زێڕ بەدەست بهێنە",

        featureThreeText:
            "بۆ دەنگدان و چالاکییەکانت خەڵات بەدەست بهێنە.",

        gamesEyebrow:
            "MYKURDA",

        gamesTitle:
            "یارییەکانی MYKURDA",

        gamesDescription:
            "فێربە، یاری بکە و کوردی بە شێوازێکی نوێ تاقی بکەرەوە.",

        multipleChoice:
            "هەڵبژاردن لە چەند وەڵامێک",

        quizTitle:
            "دەتوانیت ئەم وشەیە بناسیتەوە؟",

        nextQuestion:
            "پرسیاری داهاتوو →",

        quizCorrect:
            "ڕاستە! +1 زێڕت بەدەستهێنا.",

        quizWrong:
            "هەڵەیە. دووبارە هەوڵ بدەرەوە.",

        fiveLetterWord:
            "وشەی ٥ پیت",

        wordleTitle:
            "وشەیەکی ٥ پیتی بدۆزەرەوە.",

        wordleDescription:
            "وشەیەکی کوردیی پێنج پیتی تاقی بکەرەوە.",

        wordlePlaceholder:
            "وشە...",

        guess:
            "تاقی بکەرەوە →",

        wordleFiveLetters:
            "تکایە وشەیەکی ٥ پیتی بنووسە.",

        wordleSuccess:
            "سەرکەوتوویت! +5 زێڕ 🎉",

        wordleTryAgain:
            "دووبارە هەوڵ بدەرەوە.",

        wordleGameOver:
            "یارییەکە کۆتایی هات. وشەکە: ",

        whyMyKurda:
            "بۆچی MYKURDA؟",

        motivationTitle:
            "زمانیش دەتوانێت لەدەست بچێت.",

        motivationText:
            "MyKurda دروست دەکرێت بۆ ئەوەی گەنجانی کورد بتوانن زمانی خۆیان فێرببن، لەگەڵ یەکتر هاوبەشی بکەن و بە شانازییەوە بژین.",

        earned:
            "بەدەستهێنرا",

        footer:
            "© 2026 MyKurda. هەموو مافەکان پارێزراون.",

        featuredStoryTitle:
            "ڕۆژێک لە گوندەکەمان",

        featuredStoryText:
            "ڕۆژێک لە گوندەکەمان باران دەباری.<br><br>من و باوکم لە دەرەوە دەڕۆیشتین. هەرچی دەڕۆیشتین، بێدەنگیی گوند تەنها بە دەنگی باران دەشکایەوە.<br><br>ئەو ڕۆژە بۆ من بوو بە یادەوەرییەک کە هەرگیز لەبیرم ناکرێت.",

        downvote:
            "دەنگی نەرێنی",

        upvote:
            "دەنگی ئەرێنی"

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
            "MyKurda is currently under construction. We're working behind the scenes to create a new place for the Kurdish language, culture, and community.",

        description2:
            "Thank you for visiting. MyKurda will be launching soon. Please check back later.",

        tagline:
            "In Kurdish, for Kurds.",

        contact:
            "Contact",

        previewEyebrow:
            "MYKURDA PREVIEW",

        previewTitle:
            "Share a story.",

        previewDescription:
            "Share your story and get a glimpse of how MyKurda works.",

        from:
            "From",

        public:
            "Public",

        private:
            "Private",

        zer:
            "Zêr",

        createEyebrow:
            "YOUR TURN",

        createTitle:
            "What's your story?",

        senderLabel:
            "From whom?",

        storyTitleLabel:
            "Story title",

        storyTitlePlaceholder:
            "Story title...",

        storyLabel:
            "Write your story",

        storyPlaceholder:
            "Write your story here...",

        visibilityLabel:
            "Who can see it?",

        post:
            "Post",

        tryPreview:
            "Try it yourself",

        demoNotice:
            "This is only a demo. Zêr earned here is for demonstration purposes only.",

        featureOneTitle:
            "Write",

        featureOneText:
            "Share your story.",

        featureTwoTitle:
            "Vote",

        featureTwoText:
            "Support the stories you enjoy.",

        featureThreeTitle:
            "Earn Zêr",

        featureThreeText:
            "Get rewarded for your votes and activity.",

        gamesEyebrow:
            "MYKURDA",

        gamesTitle:
            "MYKURDA GAMES",

        gamesDescription:
            "Learn, play, and experience Kurdish in a new way.",

        multipleChoice:
            "MULTIPLE CHOICE",

        quizTitle:
            "Can you recognize this word?",

        nextQuestion:
            "Next question →",

        quizCorrect:
            "Correct! You earned +1 Zêr.",

        quizWrong:
            "Not quite. Try again.",

        fiveLetterWord:
            "5-LETTER WORD",

        wordleTitle:
            "Find the 5-letter word.",

        wordleDescription:
            "Try to guess a five-letter Kurdish word.",

        wordlePlaceholder:
            "Word...",

        guess:
            "Guess →",

        wordleFiveLetters:
            "Please enter a 5-letter word.",

        wordleSuccess:
            "You got it! +5 Zêr 🎉",

        wordleTryAgain:
            "Try again.",

        wordleGameOver:
            "Game over. The word was: ",

        whyMyKurda:
            "WHY MYKURDA",

        motivationTitle:
            "A language can be lost too.",

        motivationText:
            "MyKurda is being built so Kurdish youth can learn their language, share it with one another, and live with pride.",

        earned:
            "earned",

        footer:
            "© 2026 MyKurda. All rights reserved.",

        featuredStoryTitle:
            "A Day in Our Village",

        featuredStoryText:
            "One day, it was raining in our village.<br><br>My father and I went for a walk outside. As we walked, the silence of the village was broken only by the sound of the rain.<br><br>That day became a memory I would never forget.",

        downvote:
            "Downvote",

        upvote:
            "Upvote"

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
            "MyKurda is momenteel in ontwikkeling. Achter de schermen werken we aan een nieuwe plek voor de Koerdische taal, cultuur en gemeenschap.",

        description2:
            "Bedankt voor je bezoek. MyKurda wordt binnenkort gelanceerd. Kom later gerust nog eens terug.",

        tagline:
            "In het Koerdisch, voor Koerden.",

        contact:
            "Contact",

        previewEyebrow:
            "MYKURDA VOORPROEFJE",

        previewTitle:
            "Deel een verhaal.",

        previewDescription:
            "Deel je verhaal en ontdek alvast hoe MyKurda werkt.",

        from:
            "Van",

        public:
            "Openbaar",

        private:
            "Privé",

        zer:
            "Zêr",

        createEyebrow:
            "JIJ BENT AAN DE BEURT",

        createTitle:
            "Wat is jouw verhaal?",

        senderLabel:
            "Van wie?",

        storyTitleLabel:
            "Titel van het verhaal",

        storyTitlePlaceholder:
            "Titel van het verhaal...",

        storyLabel:
            "Schrijf je verhaal",

        storyPlaceholder:
            "Schrijf hier je verhaal...",

        visibilityLabel:
            "Wie kan het zien?",

        post:
            "Plaatsen",

        tryPreview:
            "Probeer het zelf",

        demoNotice:
            "Dit is alleen een demo. Zêr die je hier verdient is uitsluitend voor demonstratiedoeleinden.",

        featureOneTitle:
            "Schrijf",

        featureOneText:
            "Deel je verhaal.",

        featureTwoTitle:
            "Stem",

        featureTwoText:
            "Steun de verhalen die je mooi vindt.",

        featureThreeTitle:
            "Verdien Zêr",

        featureThreeText:
            "Ontvang beloningen voor je stemmen en activiteit.",

        gamesEyebrow:
            "MYKURDA",

        gamesTitle:
            "MYKURDA-SPELLEN",

        gamesDescription:
            "Leer, speel en ontdek het Koerdisch op een nieuwe manier.",

        multipleChoice:
            "MEERKEUZE",

        quizTitle:
            "Herken jij dit woord?",

        nextQuestion:
            "Volgende vraag →",

        quizCorrect:
            "Goed! Je hebt +1 Zêr verdiend.",

        quizWrong:
            "Niet helemaal. Probeer het opnieuw.",

        fiveLetterWord:
            "WOORD VAN 5 LETTERS",

        wordleTitle:
            "Vind het woord van 5 letters.",

        wordleDescription:
            "Probeer een Koerdisch woord van vijf letters te raden.",

        wordlePlaceholder:
            "Woord...",

        guess:
            "Raden →",

        wordleFiveLetters:
            "Voer een woord van 5 letters in.",

        wordleSuccess:
            "Goed geraden! +5 Zêr 🎉",

        wordleTryAgain:
            "Probeer het opnieuw.",

        wordleGameOver:
            "Game over. Het woord was: ",

        whyMyKurda:
            "WAAROM MYKURDA?",

        motivationTitle:
            "Ook een taal kan verloren gaan.",

        motivationText:
            "MyKurda wordt gebouwd zodat Koerdische jongeren hun taal kunnen leren, met elkaar kunnen delen en er met trots mee kunnen leven.",

        earned:
            "verdiend",

        footer:
            "© 2026 MyKurda. Alle rechten voorbehouden.",

        featuredStoryTitle:
            "Een dag in ons dorp",

        featuredStoryText:
            "Op een dag regende het in ons dorp.<br><br>Mijn vader en ik gingen buiten wandelen. Terwijl we liepen, werd de stilte van het dorp alleen doorbroken door het geluid van de regen.<br><br>Die dag werd een herinnering die ik nooit zou vergeten.",

        downvote:
            "Negatieve stem",

        upvote:
            "Positieve stem"

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
            "MyKurda befindet sich derzeit im Aufbau. Hinter den Kulissen arbeiten wir an einem neuen Ort für die kurdische Sprache, Kultur und Gemeinschaft.",

        description2:
            "Danke für deinen Besuch. MyKurda startet bald. Schau später gerne wieder vorbei.",

        tagline:
            "Auf Kurdisch, für Kurden.",

        contact:
            "Kontakt",

        previewEyebrow:
            "MYKURDA-VORSCHAU",

        previewTitle:
            "Teile eine Geschichte.",

        previewDescription:
            "Teile deine Geschichte und entdecke, wie MyKurda funktioniert.",

        from:
            "Von",

        public:
            "Öffentlich",

        private:
            "Privat",

        zer:
            "Zêr",

        createEyebrow:
            "DU BIST DRAN",

        createTitle:
            "Was ist deine Geschichte?",

        senderLabel:
            "Von wem?",

        storyTitleLabel:
            "Titel der Geschichte",

        storyTitlePlaceholder:
            "Titel der Geschichte...",

        storyLabel:
            "Schreib deine Geschichte",

        storyPlaceholder:
            "Schreib deine Geschichte hier...",

        visibilityLabel:
            "Wer kann sie sehen?",

        post:
            "Veröffentlichen",

        tryPreview:
            "Selbst ausprobieren",

        demoNotice:
            "Dies ist nur eine Demo. Hier verdientes Zêr dient ausschließlich zu Demonstrationszwecken.",

        featureOneTitle:
            "Schreiben",

        featureOneText:
            "Teile deine Geschichte.",

        featureTwoTitle:
            "Abstimmen",

        featureTwoText:
            "Unterstütze die Geschichten, die dir gefallen.",

        featureThreeTitle:
            "Zêr verdienen",

        featureThreeText:
            "Erhalte Belohnungen für deine Stimmen und Aktivitäten.",

        gamesEyebrow:
            "MYKURDA",

        gamesTitle:
            "MYKURDA-SPIELE",

        gamesDescription:
            "Lerne, spiele und entdecke die kurdische Sprache auf eine neue Art.",

        multipleChoice:
            "MULTIPLE CHOICE",

        quizTitle:
            "Kannst du dieses Wort erkennen?",

        nextQuestion:
            "Nächste Frage →",

        quizCorrect:
            "Richtig! Du hast +1 Zêr verdient.",

        quizWrong:
            "Nicht ganz. Versuch es noch einmal.",

        fiveLetterWord:
            "WORT MIT 5 BUCHSTABEN",

        wordleTitle:
            "Finde das Wort mit 5 Buchstaben.",

        wordleDescription:
            "Versuche, ein kurdisches Wort mit fünf Buchstaben zu erraten.",

        wordlePlaceholder:
            "Wort...",

        guess:
            "Raten →",

        wordleFiveLetters:
            "Bitte gib ein Wort mit 5 Buchstaben ein.",

        wordleSuccess:
            "Geschafft! +5 Zêr 🎉",

        wordleTryAgain:
            "Versuch es noch einmal.",

        wordleGameOver:
            "Spiel vorbei. Das Wort war: ",

        whyMyKurda:
            "WARUM MYKURDA?",

        motivationTitle:
            "Auch eine Sprache kann verloren gehen.",

        motivationText:
            "MyKurda entsteht, damit kurdische Jugendliche ihre Sprache lernen, miteinander teilen und mit Stolz leben können.",

        earned:
            "verdient",

        footer:
            "© 2026 MyKurda. Alle Rechte vorbehalten.",

        featuredStoryTitle:
            "Ein Tag in unserem Dorf",

        featuredStoryText:
            "Eines Tages regnete es in unserem Dorf.<br><br>Mein Vater und ich gingen draußen spazieren. Während wir liefen, wurde die Stille des Dorfes nur vom Geräusch des Regens unterbrochen.<br><br>Dieser Tag wurde zu einer Erinnerung, die ich nie vergessen würde.",

        downvote:
            "Ablehnen",

        upvote:
            "Upvote"

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
            "MyKurda est actuellement en construction. Nous travaillons en coulisses pour créer un nouvel espace dédié à la langue, à la culture et à la communauté kurdes.",

        description2:
            "Merci pour votre visite. MyKurda sera bientôt disponible. Revenez nous voir prochainement.",

        tagline:
            "En kurde, pour les Kurdes.",

        contact:
            "Contact",

        previewEyebrow:
            "APERÇU DE MYKURDA",

        previewTitle:
            "Partagez une histoire.",

        previewDescription:
            "Partagez votre histoire et découvrez comment MyKurda fonctionne.",

        from:
            "De",

        public:
            "Public",

        private:
            "Privé",

        zer:
            "Zêr",

        createEyebrow:
            "À VOUS DE JOUER",

        createTitle:
            "Quelle est votre histoire ?",

        senderLabel:
            "De qui ?",

        storyTitleLabel:
            "Titre de l'histoire",

        storyTitlePlaceholder:
            "Titre de l'histoire...",

        storyLabel:
            "Écrivez votre histoire",

        storyPlaceholder:
            "Écrivez votre histoire ici...",

        visibilityLabel:
            "Qui peut la voir ?",

        post:
            "Publier",

        tryPreview:
            "Essayez vous-même",

        demoNotice:
            "Ceci est uniquement une démo. Les Zêr gagnés ici sont destinés à la démonstration uniquement.",

        featureOneTitle:
            "Écrire",

        featureOneText:
            "Partagez votre histoire.",

        featureTwoTitle:
            "Voter",

        featureTwoText:
            "Soutenez les histoires que vous aimez.",

        featureThreeTitle:
            "Gagner des Zêr",

        featureThreeText:
            "Recevez des récompenses pour vos votes et votre activité.",

        gamesEyebrow:
            "MYKURDA",

        gamesTitle:
            "JEUX MYKURDA",

        gamesDescription:
            "Apprenez, jouez et découvrez le kurde autrement.",

        multipleChoice:
            "QCM",

        quizTitle:
            "Pouvez-vous reconnaître ce mot ?",

        nextQuestion:
            "Question suivante →",

        quizCorrect:
            "Bonne réponse ! Vous avez gagné +1 Zêr.",

        quizWrong:
            "Pas tout à fait. Réessayez.",

        fiveLetterWord:
            "MOT DE 5 LETTRES",

        wordleTitle:
            "Trouvez le mot de 5 lettres.",

        wordleDescription:
            "Essayez de deviner un mot kurde de cinq lettres.",

        wordlePlaceholder:
            "Mot...",

        guess:
            "Deviner →",

        wordleFiveLetters:
            "Veuillez entrer un mot de 5 lettres.",

        wordleSuccess:
            "Bravo ! +5 Zêr 🎉",

        wordleTryAgain:
            "Réessayez.",

        wordleGameOver:
            "Partie terminée. Le mot était : ",

        whyMyKurda:
            "POURQUOI MYKURDA ?",

        motivationTitle:
            "Une langue peut aussi disparaître.",

        motivationText:
            "MyKurda est créé pour permettre aux jeunes Kurdes d'apprendre leur langue, de la partager entre eux et de la vivre avec fierté.",

        earned:
            "gagnés",

        footer:
            "© 2026 MyKurda. Tous droits réservés.",

        featuredStoryTitle:
            "Un jour dans notre village",

        featuredStoryText:
            "Un jour, il pleuvait dans notre village.<br><br>Mon père et moi sommes sortis nous promener. Au fil de notre marche, le silence du village n'était interrompu que par le bruit de la pluie.<br><br>Cette journée est devenue un souvenir que je n'oublierais jamais.",

        downvote:
            "Vote négatif",

        upvote:
            "Vote positif"

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
            "MyKurda قيد الإنشاء حاليًا. نعمل خلف الكواليس لإنشاء مساحة جديدة للغة والثقافة والمجتمع الكردي.",

        description2:
            "شكرًا لزيارتك. سيتم إطلاق MyKurda قريبًا. يُرجى العودة لزيارتنا لاحقًا.",

        tagline:
            "بالكردية، من أجل الكرد.",

        contact:
            "تواصل معنا",

        previewEyebrow:
            "معاينة MYKURDA",

        previewTitle:
            "شارك قصة.",

        previewDescription:
            "شارك قصتك واكتشف كيف يعمل MyKurda.",

        from:
            "من",

        public:
            "عام",

        private:
            "خاص",

        zer:
            "Zêr",

        createEyebrow:
            "دورك الآن",

        createTitle:
            "ما قصتك؟",

        senderLabel:
            "من؟",

        storyTitleLabel:
            "عنوان القصة",

        storyTitlePlaceholder:
            "عنوان القصة...",

        storyLabel:
            "اكتب قصتك",

        storyPlaceholder:
            "اكتب قصتك هنا...",

        visibilityLabel:
            "من يمكنه رؤيتها؟",

        post:
            "نشر",

        tryPreview:
            "جرّب بنفسك",

        demoNotice:
            "هذه مجرد معاينة. عملة Zêr التي تكسبها هنا مخصصة للعرض فقط.",

        featureOneTitle:
            "اكتب",

        featureOneText:
            "شارك قصتك.",

        featureTwoTitle:
            "صوّت",

        featureTwoText:
            "ادعم القصص التي تعجبك.",

        featureThreeTitle:
            "اكسب Zêr",

        featureThreeText:
            "احصل على مكافآت مقابل تصويتاتك ونشاطك.",

        gamesEyebrow:
            "MYKURDA",

        gamesTitle:
            "ألعاب MYKURDA",

        gamesDescription:
            "تعلّم والعب واكتشف اللغة الكردية بطريقة جديدة.",

        multipleChoice:
            "اختيار من متعدد",

        quizTitle:
            "هل يمكنك التعرّف على هذه الكلمة؟",

        nextQuestion:
            "السؤال التالي →",

        quizCorrect:
            "صحيح! حصلت على +1 Zêr.",

        quizWrong:
            "ليست الإجابة الصحيحة. حاول مرة أخرى.",

        fiveLetterWord:
            "كلمة من 5 أحرف",

        wordleTitle:
            "اعثر على الكلمة المكوّنة من 5 أحرف.",

        wordleDescription:
            "حاول تخمين كلمة كردية مكوّنة من خمسة أحرف.",

        wordlePlaceholder:
            "كلمة...",

        guess:
            "خمن →",

        wordleFiveLetters:
            "يرجى إدخال كلمة مكوّنة من 5 أحرف.",

        wordleSuccess:
            "أحسنت! +5 Zêr 🎉",

        wordleTryAgain:
            "حاول مرة أخرى.",

        wordleGameOver:
            "انتهت اللعبة. الكلمة هي: ",

        whyMyKurda:
            "لماذا MYKURDA؟",

        motivationTitle:
            "حتى اللغة يمكن أن تضيع.",

        motivationText:
            "يُبنى MyKurda ليتمكن الشباب الكردي من تعلّم لغتهم ومشاركتها مع بعضهم البعض والعيش بها بفخر.",

        earned:
            "تم الحصول عليها",

        footer:
            "© 2026 MyKurda. جميع الحقوق محفوظة.",

        featuredStoryTitle:
            "يوم في قريتنا",

        featuredStoryText:
            "في أحد الأيام، كانت السماء تمطر في قريتنا.<br><br>خرجت أنا ووالدي لنتمشى. وبينما كنا نسير، لم يكن يكسر صمت القرية سوى صوت المطر.<br><br>أصبح ذلك اليوم ذكرى لن أنساها أبدًا.",

        downvote:
            "تصويت سلبي",

        upvote:
            "تصويت إيجابي"

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
            "MyKurda şu anda yapım aşamasında. Kürt dili, kültürü ve toplumu için yeni bir alan oluşturmak üzere perde arkasında çalışıyoruz.",

        description2:
            "Ziyaretiniz için teşekkür ederiz. MyKurda çok yakında hizmete girecek. Lütfen daha sonra tekrar ziyaret edin.",

        tagline:
            "Kürtçe, Kürtler için.",

        contact:
            "İletişim",

        previewEyebrow:
            "MYKURDA ÖN İZLEME",

        previewTitle:
            "Bir hikâye paylaş.",

        previewDescription:
            "Hikâyeni paylaş ve MyKurda'nın nasıl çalıştığını keşfet.",

        from:
            "Gönderen",

        public:
            "Herkese açık",

        private:
            "Özel",

        zer:
            "Zêr",

        createEyebrow:
            "SIRA SENDE",

        createTitle:
            "Senin hikâyen ne?",

        senderLabel:
            "Kimden?",

        storyTitleLabel:
            "Hikâye başlığı",

        storyTitlePlaceholder:
            "Hikâye başlığı...",

        storyLabel:
            "Hikâyeni yaz",

        storyPlaceholder:
            "Hikâyeni buraya yaz...",

        visibilityLabel:
            "Kim görebilir?",

        post:
            "Paylaş",

        tryPreview:
            "Kendin dene",

        demoNotice:
            "Bu yalnızca bir demodur. Burada kazanılan Zêr sadece gösterim amaçlıdır.",

        featureOneTitle:
            "Yaz",

        featureOneText:
            "Hikâyeni paylaş.",

        featureTwoTitle:
            "Oy ver",

        featureTwoText:
            "Beğendiğin hikâyeleri destekle.",

        featureThreeTitle:
            "Zêr kazan",

        featureThreeText:
            "Oyların ve etkinliklerin için ödüller kazan.",

        gamesEyebrow:
            "MYKURDA",

        gamesTitle:
            "MYKURDA OYUNLARI",

        gamesDescription:
            "Öğren, oyna ve Kürtçeyi yeni bir şekilde keşfet.",

        multipleChoice:
            "ÇOKTAN SEÇMELİ",

        quizTitle:
            "Bu kelimeyi tanıyabilir misin?",

        nextQuestion:
            "Sonraki soru →",

        quizCorrect:
            "Doğru! +1 Zêr kazandın.",

        quizWrong:
            "Tam olarak değil. Tekrar dene.",

        fiveLetterWord:
            "5 HARFLİ KELİME",

        wordleTitle:
            "5 harfli kelimeyi bul.",

        wordleDescription:
            "Beş harfli bir Kürtçe kelimeyi tahmin etmeye çalış.",

        wordlePlaceholder:
            "Kelime...",

        guess:
            "Tahmin et →",

        wordleFiveLetters:
            "Lütfen 5 harfli bir kelime gir.",

        wordleSuccess:
            "Bildin! +5 Zêr 🎉",

        wordleTryAgain:
            "Tekrar dene.",

        wordleGameOver:
            "Oyun bitti. Kelime: ",

        whyMyKurda:
            "NEDEN MYKURDA?",

        motivationTitle:
            "Bir dil de kaybolabilir.",

        motivationText:
            "MyKurda, Kürt gençlerinin kendi dillerini öğrenmeleri, birbirleriyle paylaşmaları ve dilleriyle gurur duyarak yaşamaları için oluşturuluyor.",

        earned:
            "kazanıldı",

        footer:
            "© 2026 MyKurda. Tüm hakları saklıdır.",

        featuredStoryTitle:
            "Köyümüzde Bir Gün",

        featuredStoryText:
            "Bir gün köyümüzde yağmur yağıyordu.<br><br>Babamla birlikte dışarıda yürüyüşe çıktık. Yürüdükçe köyün sessizliğini yalnızca yağmurun sesi bozuyordu.<br><br>O gün, benim için asla unutmayacağım bir anıya dönüştü.",

        downvote:
            "Olumsuz oy",

        upvote:
            "Olumlu oy"

    }

};


// =========================================
// LANGUAGE MENU
// =========================================

if (languageButton && languageSelector) {

    languageButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const isOpen =
                languageSelector.classList.toggle("open");

            languageButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        }
    );


    document.addEventListener(
        "click",
        event => {

            if (!languageSelector.contains(event.target)) {

                languageSelector.classList.remove("open");

                languageButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


// =========================================
// CURRENT LANGUAGE
// =========================================

let activeLanguage =
    localStorage.getItem("mykurda-language") || "ku";


// =========================================
// TRANSLATE PAGE
// =========================================

function translatePage(language) {

    const translation =
        translations[language] || translations.ku;

    activeLanguage =
        translations[language]
            ? language
            : "ku";


    // Normal text

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


    // Placeholders

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.dataset.i18nPlaceholder;

            if (
                Object.prototype.hasOwnProperty.call(
                    translation,
                    key
                )
            ) {

                element.placeholder =
                    translation[key];

            }

        });


    // Aria labels

    document
        .querySelectorAll("[data-i18n-aria-label]")
        .forEach(element => {

            const key =
                element.dataset.i18nAriaLabel;

            if (
                Object.prototype.hasOwnProperty.call(
                    translation,
                    key
                )
            ) {

                element.setAttribute(
                    "aria-label",
                    translation[key]
                );

            }

        });


    if (currentLanguage) {

        currentLanguage.textContent =
            languageNames[activeLanguage];

    }


    document.documentElement.lang =
        activeLanguage;


    document.documentElement.dir =
        activeLanguage === "ar" ||
        activeLanguage === "ckb"
            ? "rtl"
            : "ltr";


    localStorage.setItem(
        "mykurda-language",
        activeLanguage
    );


    updateQuizLanguage();

    updateWordleLanguage();

}


// =========================================
// LANGUAGE BUTTONS
// =========================================

document
    .querySelectorAll(".language-menu button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const language =
                    button.dataset.language;

                if (!translations[language]) {
                    return;
                }

                translatePage(language);


                if (languageSelector) {

                    languageSelector.classList.remove(
                        "open"
                    );

                }


                if (languageButton) {

                    languageButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });


// =========================================
// INITIAL LANGUAGE
// =========================================

translatePage(activeLanguage);


// =========================================
// GLASS LIGHT EFFECT
// =========================================

const lightCards =
    document.querySelectorAll(".light-card");


function moveLight(card, x, y) {

    if (!card) {
        return;
    }

    const rect =
        card.getBoundingClientRect();

    if (!rect.width || !rect.height) {
        return;
    }

    const relativeX =
        ((x - rect.left) / rect.width) * 100;

    const relativeY =
        ((y - rect.top) / rect.height) * 100;

    card.style.setProperty(
        "--mouse-x",
        `${relativeX}%`
    );

    card.style.setProperty(
        "--mouse-y",
        `${relativeY}%`
    );

    card.classList.add("mouse-active");

}


lightCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            moveLight(
                card,
                event.clientX,
                event.clientY
            );

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.classList.remove(
                "mouse-active"
            );

        }
    );


    card.addEventListener(
        "touchstart",
        event => {

            const touch =
                event.touches[0];

            if (!touch) {
                return;
            }

            moveLight(
                card,
                touch.clientX,
                touch.clientY
            );

        },
        {
            passive: true
        }
    );


    card.addEventListener(
        "touchmove",
        event => {

            const touch =
                event.touches[0];

            if (!touch) {
                return;
            }

            moveLight(
                card,
                touch.clientX,
                touch.clientY
            );

        },
        {
            passive: true
        }
    );


    card.addEventListener(
        "touchend",
        () => {

            setTimeout(
                () => {

                    card.classList.remove(
                        "mouse-active"
                    );

                },
                400
            );

        }
    );

});


// =========================================
// MOBILE SCROLL LIGHT
// =========================================

let scrollTimeout;


window.addEventListener(
    "scroll",
    () => {

        const viewportCenter =
            window.innerHeight / 2;


        lightCards.forEach(card => {

            const rect =
                card.getBoundingClientRect();


            if (
                rect.top < window.innerHeight &&
                rect.bottom > 0
            ) {

                const centerX =
                    rect.left +
                    rect.width / 2;

                const centerY =
                    Math.max(
                        rect.top,
                        Math.min(
                            viewportCenter,
                            rect.bottom
                        )
                    );


                moveLight(
                    card,
                    centerX,
                    centerY
                );

            }

        });


        clearTimeout(scrollTimeout);

        scrollTimeout =
            setTimeout(
                () => {

                    lightCards.forEach(card => {

                        card.classList.remove(
                            "mouse-active"
                        );

                    });

                },
                500
            );

    },
    {
        passive: true
    }
);


// =========================================
// ZÊR POPUP
// =========================================

const zerPopup =
    document.getElementById("zerPopup");


function showZer(amount = 10) {

    if (!zerPopup) {
        return;
    }

    const strong =
        zerPopup.querySelector("strong");

    if (!strong) {
        return;
    }

    strong.textContent =
        `+${amount} Zêr`;


    zerPopup.classList.remove("show");

    void zerPopup.offsetWidth;

    zerPopup.classList.add("show");


    setTimeout(
        () => {

            zerPopup.classList.remove("show");

        },
        1800
    );

}


// =========================================
// FEATURED STORY VOTING
// =========================================

const upvoteButton =
    document.querySelector(".upvote");

const downvoteButton =
    document.querySelector(".downvote");


let upvotes = 48;
let downvotes = 12;
let userVote = null;


function updateVotes() {

    const upvoteCount =
        document.querySelector(
            ".upvote .vote-count"
        );

    const downvoteCount =
        document.querySelector(
            ".downvote .vote-count"
        );


    if (upvoteCount) {
        upvoteCount.textContent =
            upvotes;
    }


    if (downvoteCount) {
        downvoteCount.textContent =
            downvotes;
    }

}


if (upvoteButton && downvoteButton) {

    upvoteButton.addEventListener(
        "click",
        () => {

            if (userVote === "up") {

                upvotes--;

                userVote = null;

                upvoteButton.classList.remove(
                    "selected"
                );

            } else {

                if (userVote === "down") {
                    downvotes--;
                }

                upvotes++;

                userVote = "up";

                upvoteButton.classList.add(
                    "selected"
                );

                downvoteButton.classList.remove(
                    "selected"
                );

                showZer(1);

            }

            updateVotes();

        }
    );


    downvoteButton.addEventListener(
        "click",
        () => {

            if (userVote === "down") {

                downvotes--;

                userVote = null;

                downvoteButton.classList.remove(
                    "selected"
                );

            } else {

                if (userVote === "up") {
                    upvotes--;
                }

                downvotes++;

                userVote = "down";

                downvoteButton.classList.add(
                    "selected"
                );

                upvoteButton.classList.remove(
                    "selected"
                );

            }

            updateVotes();

        }
    );

}


updateVotes();


// =========================================
// VISIBILITY
// =========================================

const visibilityButtons =
    document.querySelectorAll(
        ".visibility-option"
    );


let selectedVisibility =
    "public";


visibilityButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            visibilityButtons.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            selectedVisibility =
                button.dataset.visibility;

        }
    );

});


// =========================================
// STORY INPUT
// =========================================

const storyInput =
    document.getElementById("storyInput");

const storyTitleInput =
    document.getElementById("storyTitleInput");

const characterCount =
    document.getElementById("characterCount");


function updateCharacterCount() {

    if (!storyInput || !characterCount) {
        return;
    }

    characterCount.textContent =
        storyInput.value.length;

}


if (storyInput) {

    storyInput.addEventListener(
        "input",
        updateCharacterCount
    );

    updateCharacterCount();

}


// =========================================
// PREVIEW BUTTON
// =========================================

const previewButton =
    document.getElementById("previewButton");


if (previewButton) {

    previewButton.addEventListener(
        "click",
        () => {

            const createCard =
                document.querySelector(
                    ".create-card"
                );

            if (!createCard) {
                return;
            }

            createCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


            setTimeout(
                () => {

                    if (storyInput) {
                        storyInput.focus();
                    }

                },
                500
            );

        }
    );

}


// =========================================
// ESCAPE HTML
// =========================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}


// =========================================
// NEW STORY VOTING
// =========================================

function setupNewStoryVoting(storyCard) {

    if (!storyCard) {
        return;
    }


    const upButton =
        storyCard.querySelector(".new-upvote");

    const downButton =
        storyCard.querySelector(".new-downvote");


    const upCount =
        upButton
            ? upButton.querySelector(".vote-count")
            : null;


    const downCount =
        downButton
            ? downButton.querySelector(".vote-count")
            : null;


    let localUpvotes = 0;
    let localDownvotes = 0;
    let localVote = null;


    if (!upButton || !downButton) {
        return;
    }


    upButton.addEventListener(
        "click",
        () => {

            if (localVote === "up") {

                localUpvotes--;

                localVote = null;

                upButton.classList.remove(
                    "selected"
                );

            } else {

                if (localVote === "down") {
                    localDownvotes--;
                }

                localUpvotes++;

                localVote = "up";

                upButton.classList.add(
                    "selected"
                );

                downButton.classList.remove(
                    "selected"
                );

                showZer(1);

            }


            if (upCount) {
                upCount.textContent =
                    localUpvotes;
            }


            if (downCount) {
                downCount.textContent =
                    localDownvotes;
            }

        }
    );


    downButton.addEventListener(
        "click",
        () => {

            if (localVote === "down") {

                localDownvotes--;

                localVote = null;

                downButton.classList.remove(
                    "selected"
                );

            } else {

                if (localVote === "up") {
                    localUpvotes--;
                }

                localDownvotes++;

                localVote = "down";

                downButton.classList.add(
                    "selected"
                );

                upButton.classList.remove(
                    "selected"
                );

            }


            if (upCount) {
                upCount.textContent =
                    localUpvotes;
            }


            if (downCount) {
                downCount.textContent =
                    localDownvotes;
            }

        }
    );

}


// =========================================
// CREATE DEMO STORY
// =========================================

const sender =
    document.getElementById("sender");

const postButton =
    document.getElementById("postButton");

const storyFeed =
    document.getElementById("storyFeed");


if (
    postButton &&
    sender &&
    storyTitleInput &&
    storyInput &&
    storyFeed
) {

    postButton.addEventListener(
        "click",
        () => {

            const senderName =
                sender.value.trim() || "me";

            const title =
                storyTitleInput.value.trim();

            const story =
                storyInput.value.trim();


            if (!title) {

                storyTitleInput.focus();

                return;

            }


            if (!story) {

                storyInput.focus();

                return;

            }


            const language =
                document.documentElement.lang || "ku";


            const translation =
                translations[language] ||
                translations.ku;


            const visibilityText =
                selectedVisibility === "public"
                    ? translation.public
                    : translation.private;


            const newStory =
                document.createElement("article");


            newStory.className =
                "story-card light-card new-story";


            newStory.innerHTML = `

                <div class="story-top">

                    <div class="story-author">

                        <div class="story-label">

                            <span>
                                ${translation.from}
                            </span>

                            <strong>
                                ${escapeHTML(senderName)}
                            </strong>

                        </div>

                    </div>


                    <span class="visibility-badge">
                        ${visibilityText}
                    </span>

                </div>


                <h3 class="story-title">
                    ${escapeHTML(title)}
                </h3>


                <div class="story-text">
                    ${escapeHTML(story).replace(
                        /\n/g,
                        "<br>"
                    )}
                </div>


                <div class="story-bottom">

                    <div class="vote-group">

                        <button
                            class="vote-button new-downvote"
                            type="button"
                            aria-label="${translation.downvote}"
                        >

                            <span class="vote-arrow down"></span>

                            <span class="vote-count">
                                0
                            </span>

                        </button>


                        <button
                            class="vote-button new-upvote"
                            type="button"
                            aria-label="${translation.upvote}"
                        >

                            <span class="vote-arrow up"></span>

                            <span class="vote-count">
                                0
                            </span>

                        </button>

                    </div>


                    <div class="reward">

                        <span class="reward-plus">
                            +0
                        </span>

                        <span>
                            ${translation.zer}
                        </span>

                    </div>

                </div>

            `;


            storyFeed.appendChild(
                newStory
            );


            setupNewStoryVoting(
                newStory
            );


            newStory.addEventListener(
                "mousemove",
                event => {

                    moveLight(
                        newStory,
                        event.clientX,
                        event.clientY
                    );

                }
            );


            newStory.addEventListener(
                "mouseleave",
                () => {

                    newStory.classList.remove(
                        "mouse-active"
                    );

                }
            );


            showZer(10);


            postButton.classList.add(
                "rewarded"
            );


            setTimeout(
                () => {

                    postButton.classList.remove(
                        "rewarded"
                    );

                },
                800
            );


            sender.value =
                "me";


            storyTitleInput.value =
                translation.featuredStoryTitle;


            storyInput.value =
                translation.featuredStoryText
                    .replace(/<br>/g, "\n");


            updateCharacterCount();


            newStory.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}


// =========================================
// QUIZ GAME
// =========================================

const quizQuestions = [

    {
        question:
            "“Av” çi ye?",

        answers: [
            ["Nan", "wrong"],
            ["Water", "correct"],
            ["Roj", "wrong"],
            ["Mal", "wrong"]
        ]
    },

    {
        question:
            "“Roj” çi ye?",

        answers: [
            ["Day", "wrong"],
            ["House", "wrong"],
            ["Sun / Day", "correct"],
            ["Water", "wrong"]
        ]
    },

    {
        question:
            "“Mal” çi ye?",

        answers: [
            ["House", "correct"],
            ["Sun", "wrong"],
            ["Bread", "wrong"],
            ["Water", "wrong"]
        ]
    }

];


let quizIndex = 0;

let quizAnswered = false;


const quizOptions =
    document.getElementById("quizOptions");

const quizFeedback =
    document.getElementById("quizFeedback");

const nextQuiz =
    document.getElementById("nextQuiz");

const quizQuestion =
    document.querySelector(".game-question");


function getQuizTranslation() {

    const translation =
        translations[activeLanguage] ||
        translations.ku;

    return translation;

}


function updateQuizLanguage() {

    loadQuiz();

}


function loadQuiz() {

    if (
        !quizOptions ||
        !quizFeedback ||
        !quizQuestion
    ) {
        return;
    }


    const question =
        quizQuestions[quizIndex];


    const translation =
        getQuizTranslation();


    quizAnswered = false;


    quizQuestion.textContent =
        question.question;


    quizFeedback.textContent =
        "";


    quizOptions.innerHTML =
        "";


    const translatedAnswers = {

        0: {
            ku: "Nan",
            ckb: "نان",
            en: "Bread",
            nl: "Brood",
            de: "Brot",
            fr: "Pain",
            ar: "خبز",
            tr: "Ekmek"
        },

        1: {
            ku: "Av",
            ckb: "ئاو",
            en: "Water",
            nl: "Water",
            de: "Wasser",
            fr: "Eau",
            ar: "ماء",
            tr: "Su"
        },

        2: {
            ku: "Roj",
            ckb: "ڕۆژ",
            en: "Sun / Day",
            nl: "Zon / Dag",
            de: "Sonne / Tag",
            fr: "Soleil / Jour",
            ar: "شمس / يوم",
            tr: "Güneş / Gün"
        },

        3: {
            ku: "Mal",
            ckb: "ماڵ",
            en: "House",
            nl: "Huis",
            de: "Haus",
            fr: "Maison",
            ar: "منزل",
            tr: "Ev"
        }

    };


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.type =
                "button";


            const answerKey =
                answer[0] === "Nan"
                    ? 0
                    : answer[0] === "Water"
                        ? 1
                        : answer[0] === "Roj"
                            ? 2
                            : 3;


            button.textContent =
                translatedAnswers[
                    answerKey
                ][activeLanguage] ||
                answer[0];


            button.dataset.answer =
                answer[1];


            button.addEventListener(
                "click",
                () => {

                    if (quizAnswered) {
                        return;
                    }


                    quizAnswered =
                        true;


                    if (
                        button.dataset.answer ===
                        "correct"
                    ) {

                        button.classList.add(
                            "correct"
                        );


                        quizFeedback.textContent =
                            translation.quizCorrect;


                        showZer(1);

                    } else {

                        button.classList.add(
                            "wrong"
                        );


                        quizFeedback.textContent =
                            translation.quizWrong;

                    }

                }
            );


            quizOptions.appendChild(
                button
            );

        }
    );

}


if (nextQuiz) {

    nextQuiz.addEventListener(
        "click",
        () => {

            quizIndex++;

            if (
                quizIndex >=
                quizQuestions.length
            ) {

                quizIndex = 0;

            }

            loadQuiz();

        }
    );

}


loadQuiz();


// =========================================
// WORDLE
// =========================================

const wordleAnswer =
    "rojda";

let wordleRow = 0;


const wordleInput =
    document.getElementById("wordleInput");

const wordleButton =
    document.getElementById("wordleButton");

const wordleFeedback =
    document.getElementById("wordleFeedback");

const wordleRows =
    document.querySelectorAll(".wordle-row");


function updateWordleLanguage() {

    if (wordleFeedback) {
        wordleFeedback.textContent = "";
    }

}


function submitWordle() {

    if (
        !wordleInput ||
        !wordleButton ||
        !wordleFeedback
    ) {
        return;
    }


    if (
        wordleRow >=
        wordleRows.length
    ) {
        return;
    }


    const guess =
        wordleInput.value
            .trim()
            .toLowerCase();


    const translation =
        translations[activeLanguage] ||
        translations.ku;


    if (
        guess.length !==
        wordleAnswer.length
    ) {

        wordleFeedback.textContent =
            translation.wordleFiveLetters;

        return;

    }


    const row =
        wordleRows[wordleRow];


    if (!row) {
        return;
    }


    const letters =
        row.querySelectorAll("span");


    for (
        let i = 0;
        i < wordleAnswer.length;
        i++
    ) {

        letters[i].textContent =
            guess[i];

        letters[i].className =
            "";


        if (
            guess[i] ===
            wordleAnswer[i]
        ) {

            letters[i].classList.add(
                "correct"
            );

        } else if (
            wordleAnswer.includes(
                guess[i]
            )
        ) {

            letters[i].classList.add(
                "present"
            );

        } else {

            letters[i].classList.add(
                "absent"
            );

        }

    }


    wordleRow++;


    if (
        guess ===
        wordleAnswer
    ) {

        wordleFeedback.textContent =
            translation.wordleSuccess;


        showZer(5);


        wordleButton.disabled =
            true;

        wordleInput.disabled =
            true;

        return;

    }


    if (
        wordleRow >=
        wordleRows.length
    ) {

        wordleFeedback.textContent =
            translation.wordleGameOver +
            wordleAnswer;


        wordleButton.disabled =
            true;

        wordleInput.disabled =
            true;

    } else {

        wordleFeedback.textContent =
            translation.wordleTryAgain;


        wordleInput.value =
            "";

        wordleInput.focus();

    }

}


if (wordleButton) {

    wordleButton.addEventListener(
        "click",
        submitWordle
    );

}


if (wordleInput) {

    wordleInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                event.preventDefault();

                submitWordle();

            }

        }
    );

}
