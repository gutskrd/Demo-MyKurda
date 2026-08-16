// =========================================
// MYKURDA DEMO
// MAIN JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", () => {

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
                "MYKURDA PREVIEW",

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

            footer:
                "© 2026 MyKurda. Hemû maf parastî ne.",

            quizType:
                "PIRSÊN HILBIJARTINÊ",

            quizTitle:
                "Tu dikarî vê peyvê nas bikî?",

            nextQuestion:
                "Pirsê din →",

            correctAnswer:
                "Rast e! Tu +1 Zêr wergirt.",

            wrongAnswer:
                "Ne rast e. Dîsa biceribîne.",

            wordleType:
                "PEYVA 5 TÎPAN",

            wordleTitle:
                "Peyvê 5 tîpan bibîne.",

            wordleDescription:
                "Peyvekî Kurdî ya pênc tîpan biceribîne.",

            wordlePlaceholder:
                "Peyv...",

            guess:
                "Biceribîne →",

            wordleTooShort:
                "Ji kerema xwe peyvekî 5 tîpan binivîse.",

            wordleWin:
                "Serkeftin! +5 Zêr 🎉",

            wordleAgain:
                "Dîsa biceribîne.",

            gameOver:
                "Lîstik qediya. Peyv: ",

            zerEarned:
                "hat bidestxistin",

            gamesEyebrow:
                "MYKURDA",

            gamesTitle:
                "MYKURDA GAMES",

            gamesDescription:
                "Fêr bibe, lîz bike û Kurdî bi awayekî nû biceribîne."

        },


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
                "ئەو چیرۆکانە هەڵبژێرە کە حەزت لێیانە.",

            featureThreeTitle:
                "زێڕ بەدەست بهێنە",

            featureThreeText:
                "بۆ دەنگدان و چالاکییەکانت خەڵات بەدەست بهێنە.",

            footer:
                "© 2026 MyKurda. هەموو مافەکان پارێزراون.",

            quizType:
                "هەڵبژاردەی چەندەگین",

            quizTitle:
                "دەتوانیت ئەم وشەیە بناسیتەوە؟",

            nextQuestion:
                "پرسیاری داهاتوو →",

            correctAnswer:
                "ڕاستە! +1 زێڕت بەدەست هێنا.",

            wrongAnswer:
                "هەڵەیە. دووبارە هەوڵ بدەرەوە.",

            wordleType:
                "وشەی ٥ پیت",

            wordleTitle:
                "وشەی ٥ پیت بدۆزەرەوە.",

            wordleDescription:
                "وشەیەکی کوردی لە پێنج پیت پێشبینی بکە.",

            wordlePlaceholder:
                "وشە...",

            guess:
                "هەوڵ بدە →",

            wordleTooShort:
                "تکایە وشەیەکی ٥ پیتی بنووسە.",

            wordleWin:
                "سەرکەوتیت! +5 زێڕ 🎉",

            wordleAgain:
                "دووبارە هەوڵ بدەرەوە.",

            gameOver:
                "یارییەکە کۆتایی هات. وشەکە: ",

            zerEarned:
                "بەدەست هێنرا",

            gamesEyebrow:
                "MYKURDA",

            gamesTitle:
                "MYKURDA GAMES",

            gamesDescription:
                "فێربە، یاری بکە و کوردی بە شێوازێکی نوێ تاقی بکەرەوە."

        },


        en: {

            eyebrow:
                "Coming soon",

            title:
                "We're building<br>something beautiful.",

            description:
                "MyKurda is currently under construction. We're working behind the scenes to create a new place for the Kurdish language, culture and community.",

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
                "Share your story and get a taste of how MyKurda works.",

            from:
                "From",

            public:
                "Public",

            private:
                "Private",

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
                "This is a demo. Zêr earned here is only for demonstration.",

            featureOneTitle:
                "Write",

            featureOneText:
                "Share your story.",

            featureTwoTitle:
                "Vote",

            featureTwoText:
                "Choose the stories you enjoy.",

            featureThreeTitle:
                "Earn Zêr",

            featureThreeText:
                "Get rewarded for your votes and activity.",

            footer:
                "© 2026 MyKurda. All rights reserved.",

            quizType:
                "MULTIPLE CHOICE",

            quizTitle:
                "Can you recognize this word?",

            nextQuestion:
                "Next question →",

            correctAnswer:
                "Correct! You earned +1 Zêr.",

            wrongAnswer:
                "Not quite. Try again.",

            wordleType:
                "5 LETTER WORD",

            wordleTitle:
                "Find the 5-letter word.",

            wordleDescription:
                "Try to guess a Kurdish five-letter word.",

            wordlePlaceholder:
                "Word...",

            guess:
                "Guess →",

            wordleTooShort:
                "Please enter a 5-letter word.",

            wordleWin:
                "You got it! +5 Zêr 🎉",

            wordleAgain:
                "Try again.",

            gameOver:
                "Game over. Word: ",

            zerEarned:
                "earned",

            gamesEyebrow:
                "MYKURDA",

            gamesTitle:
                "MYKURDA GAMES",

            gamesDescription:
                "Learn, play and experience Kurdish in a new way."

        },


        nl: {

            eyebrow:
                "Binnenkort beschikbaar",

            title:
                "We bouwen aan<br>iets moois.",

            description:
                "MyKurda is momenteel in ontwikkeling. Achter de schermen werken we aan een nieuwe plek voor de Koerdische taal, cultuur en gemeenschap.",

            description2:
                "Bedankt voor je bezoek. MyKurda wordt binnenkort gelanceerd. Kom later nog eens terug.",

            tagline:
                "In het Koerdisch, voor Koerden.",

            contact:
                "Contact",

            previewEyebrow:
                "MYKURDA PREVIEW",

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
                "Dit is een demo. Zêr die je hier verdient is alleen voor de demonstratie.",

            featureOneTitle:
                "Schrijf",

            featureOneText:
                "Deel je verhaal.",

            featureTwoTitle:
                "Stem",

            featureTwoText:
                "Kies de verhalen die je mooi vindt.",

            featureThreeTitle:
                "Verdien Zêr",

            featureThreeText:
                "Word beloond voor je stemmen en activiteit.",

            footer:
                "© 2026 MyKurda. Alle rechten voorbehouden.",

            quizType:
                "MEERKEUZE",

            quizTitle:
                "Herken je dit woord?",

            nextQuestion:
                "Volgende vraag →",

            correctAnswer:
                "Goed! Je hebt +1 Zêr verdiend.",

            wrongAnswer:
                "Niet helemaal. Probeer het opnieuw.",

            wordleType:
                "WOORD VAN 5 LETTERS",

            wordleTitle:
                "Vind het woord van 5 letters.",

            wordleDescription:
                "Probeer een Koerdisch woord van vijf letters te raden.",

            wordlePlaceholder:
                "Woord...",

            guess:
                "Raden →",

            wordleTooShort:
                "Voer een woord van 5 letters in.",

            wordleWin:
                "Goed geraden! +5 Zêr 🎉",

            wordleAgain:
                "Probeer opnieuw.",

            gameOver:
                "Game over. Het woord was: ",

            zerEarned:
                "verdiend",

            gamesEyebrow:
                "MYKURDA",

            gamesTitle:
                "MYKURDA GAMES",

            gamesDescription:
                "Leer, speel en ervaar het Koerdisch op een nieuwe manier."

        },


        de: {

            eyebrow:
                "Demnächst verfügbar",

            title:
                "Wir bauen<br>etwas Schönes.",

            description:
                "MyKurda befindet sich derzeit im Aufbau. Hinter den Kulissen arbeiten wir an einem neuen Ort für die kurdische Sprache, Kultur und Gemeinschaft.",

            description2:
                "Danke für deinen Besuch. MyKurda wird bald starten. Schau später gerne wieder vorbei.",

            tagline:
                "Auf Kurdisch, für Kurden.",

            contact:
                "Kontakt",

            previewEyebrow:
                "MYKURDA VORSCHAU",

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
                "Wer kann es sehen?",

            post:
                "Veröffentlichen",

            tryPreview:
                "Selbst ausprobieren",

            demoNotice:
                "Dies ist eine Demo. Hier verdientes Zêr dient nur zur Veranschaulichung.",

            featureOneTitle:
                "Schreiben",

            featureOneText:
                "Teile deine Geschichte.",

            featureTwoTitle:
                "Abstimmen",

            featureTwoText:
                "Wähle Geschichten, die dir gefallen.",

            featureThreeTitle:
                "Zêr verdienen",

            featureThreeText:
                "Erhalte Belohnungen für deine Stimmen und Aktivitäten.",

            footer:
                "© 2026 MyKurda. Alle Rechte vorbehalten.",

            quizType:
                "MULTIPLE CHOICE",

            quizTitle:
                "Erkennst du dieses Wort?",

            nextQuestion:
                "Nächste Frage →",

            correctAnswer:
                "Richtig! Du hast +1 Zêr verdient.",

            wrongAnswer:
                "Nicht ganz. Versuch es noch einmal.",

            wordleType:
                "5-BUCHSTABEN-WORT",

            wordleTitle:
                "Finde das Wort mit 5 Buchstaben.",

            wordleDescription:
                "Versuche, ein kurdisches Wort mit fünf Buchstaben zu erraten.",

            wordlePlaceholder:
                "Wort...",

            guess:
                "Raten →",

            wordleTooShort:
                "Bitte gib ein Wort mit 5 Buchstaben ein.",

            wordleWin:
                "Geschafft! +5 Zêr 🎉",

            wordleAgain:
                "Versuch es noch einmal.",

            gameOver:
                "Spiel vorbei. Das Wort war: ",

            zerEarned:
                "verdient",

            gamesEyebrow:
                "MYKURDA",

            gamesTitle:
                "MYKURDA GAMES",

            gamesDescription:
                "Lerne, spiele und erlebe Kurdisch auf eine neue Art."

        },


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
                "Ceci est une démo. Les Zêr gagnés ici sont uniquement destinés à la démonstration.",

            featureOneTitle:
                "Écrire",

            featureOneText:
                "Partagez votre histoire.",

            featureTwoTitle:
                "Voter",

            featureTwoText:
                "Choisissez les histoires que vous aimez.",

            featureThreeTitle:
                "Gagner des Zêr",

            featureThreeText:
                "Recevez des récompenses pour vos votes et votre activité.",

            footer:
                "© 2026 MyKurda. Tous droits réservés.",

            quizType:
                "QCM",

            quizTitle:
                "Reconnaissez-vous ce mot ?",

            nextQuestion:
                "Question suivante →",

            correctAnswer:
                "Correct ! Vous avez gagné +1 Zêr.",

            wrongAnswer:
                "Pas tout à fait. Réessayez.",

            wordleType:
                "MOT DE 5 LETTRES",

            wordleTitle:
                "Trouvez le mot de 5 lettres.",

            wordleDescription:
                "Essayez de deviner un mot kurde de cinq lettres.",

            wordlePlaceholder:
                "Mot...",

            guess:
                "Deviner →",

            wordleTooShort:
                "Veuillez entrer un mot de 5 lettres.",

            wordleWin:
                "Bravo ! +5 Zêr 🎉",

            wordleAgain:
                "Réessayez.",

            gameOver:
                "Partie terminée. Le mot était : ",

            zerEarned:
                "gagné",

            gamesEyebrow:
                "MYKURDA",

            gamesTitle:
                "MYKURDA GAMES",

            gamesDescription:
                "Apprenez, jouez et découvrez le kurde autrement."

        },


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
                "اختر القصص التي تعجبك.",

            featureThreeTitle:
                "اكسب Zêr",

            featureThreeText:
                "احصل على مكافآت مقابل تصويتاتك ونشاطك.",

            footer:
                "© 2026 MyKurda. جميع الحقوق محفوظة.",

            quizType:
                "اختيار من متعدد",

            quizTitle:
                "هل يمكنك معرفة هذه الكلمة؟",

            nextQuestion:
                "السؤال التالي →",

            correctAnswer:
                "صحيح! حصلت على +1 Zêr.",

            wrongAnswer:
                "إجابة غير صحيحة. حاول مرة أخرى.",

            wordleType:
                "كلمة من 5 أحرف",

            wordleTitle:
                "اكتشف الكلمة المكوّنة من 5 أحرف.",

            wordleDescription:
                "حاول تخمين كلمة كردية من خمسة أحرف.",

            wordlePlaceholder:
                "كلمة...",

            guess:
                "خمن →",

            wordleTooShort:
                "يرجى إدخال كلمة من 5 أحرف.",

            wordleWin:
                "أحسنت! +5 Zêr 🎉",

            wordleAgain:
                "حاول مرة أخرى.",

            gameOver:
                "انتهت اللعبة. الكلمة هي: ",

            zerEarned:
                "تم كسبها",

            gamesEyebrow:
                "MYKURDA",

            gamesTitle:
                "MYKURDA GAMES",

            gamesDescription:
                "تعلّم والعب واكتشف اللغة الكردية بطريقة جديدة."

        },


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
                "Bu bir demodur. Burada kazanılan Zêr yalnızca gösterim amaçlıdır.",

            featureOneTitle:
                "Yaz",

            featureOneText:
                "Hikâyeni paylaş.",

            featureTwoTitle:
                "Oy ver",

            featureTwoText:
                "Beğendiğin hikâyeleri seç.",

            featureThreeTitle:
                "Zêr kazan",

            featureThreeText:
                "Oyların ve etkinliklerin için ödüller kazan.",

            footer:
                "© 2026 MyKurda. Tüm hakları saklıdır.",

            quizType:
                "ÇOKTAN SEÇMELİ",

            quizTitle:
                "Bu kelimeyi tanıyabilir misin?",

            nextQuestion:
                "Sonraki soru →",

            correctAnswer:
                "Doğru! +1 Zêr kazandın.",

            wrongAnswer:
                "Yanlış. Tekrar dene.",

            wordleType:
                "5 HARFLİ KELİME",

            wordleTitle:
                "5 harfli kelimeyi bul.",

            wordleDescription:
                "Beş harfli bir Kürtçe kelimeyi tahmin etmeye çalış.",

            wordlePlaceholder:
                "Kelime...",

            guess:
                "Tahmin et →",

            wordleTooShort:
                "Lütfen 5 harfli bir kelime gir.",

            wordleWin:
                "Bildin! +5 Zêr 🎉",

            wordleAgain:
                "Tekrar dene.",

            gameOver:
                "Oyun bitti. Kelime: ",

            zerEarned:
                "kazanıldı",

            gamesEyebrow:
                "MYKURDA",

            gamesTitle:
                "MYKURDA GAMES",

            gamesDescription:
                "Öğren, oyna ve Kürtçeyi yeni bir şekilde keşfet."

        }

    };


    // =========================================
    // LANGUAGE SWITCHING
    // =========================================

    function applyLanguage(language) {

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


        if (currentLanguage) {

            currentLanguage.textContent =
                languageNames[language];

        }


        document.documentElement.lang =
            language;


        document.documentElement.dir =
            language === "ar" ||
            language === "ckb"
                ? "rtl"
                : "ltr";


        // Update game interface
        updateGameLanguage(translation);

    }


    function updateGameLanguage(translation) {

        const gameTypes =
            document.querySelectorAll(".game-type");

        if (gameTypes.length >= 2) {

            gameTypes[0].textContent =
                translation.quizType;

            gameTypes[1].textContent =
                translation.wordleType;

        }


        const quizTitle =
            document.querySelector(
                ".game-card:first-child h3"
            );

        if (quizTitle) {
            quizTitle.textContent =
                translation.quizTitle;
        }


        if (nextQuiz) {
            nextQuiz.textContent =
                translation.nextQuestion;
        }


        const wordleTitle =
            document.querySelector(
                ".game-card:nth-child(2) h3"
            );

        if (wordleTitle) {
            wordleTitle.textContent =
                translation.wordleTitle;
        }


        const wordleDescription =
            document.querySelector(
                ".wordle-description"
            );

        if (wordleDescription) {
            wordleDescription.textContent =
                translation.wordleDescription;
        }


        if (wordleInput) {
            wordleInput.placeholder =
                translation.wordlePlaceholder;
        }


        if (wordleButton) {
            wordleButton.textContent =
                translation.guess;
        }

    }


    // =========================================
    // LANGUAGE MENU
    // =========================================

    if (
        languageButton &&
        languageSelector
    ) {

        languageButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                const isOpen =
                    languageSelector.classList.toggle(
                        "open"
                    );

                languageButton.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );

            }
        );


        document.addEventListener(
            "click",
            event => {

                if (
                    !languageSelector.contains(
                        event.target
                    )
                ) {

                    languageSelector.classList.remove(
                        "open"
                    );

                    languageButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }


    document
        .querySelectorAll(".language-menu button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        button.dataset.language;

                    applyLanguage(language);

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

        if (
            !rect.width ||
            !rect.height
        ) {
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

        card.classList.add(
            "mouse-active"
        );

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

        zerPopup.classList.remove(
            "show"
        );

        void zerPopup.offsetWidth;

        zerPopup.classList.add(
            "show"
        );


        setTimeout(
            () => {

                zerPopup.classList.remove(
                    "show"
                );

            },
            1800
        );

    }


    // =========================================
    // FEATURED STORY VOTING
    // =========================================

    const upvoteButton =
        document.querySelector(
            ".story-card .upvote"
        );

    const downvoteButton =
        document.querySelector(
            ".story-card .downvote"
        );


    let upvotes = 48;
    let downvotes = 12;
    let userVote = null;


    function updateVotes() {

        const upvoteCount =
            document.querySelector(
                ".story-card .upvote .vote-count"
            );

        const downvoteCount =
            document.querySelector(
                ".story-card .downvote .vote-count"
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


    if (
        upvoteButton &&
        downvoteButton
    ) {

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
    // STORY INPUTS
    // =========================================

    const sender =
        document.getElementById("sender");

    const storyTitleInput =
        document.getElementById(
            "storyTitleInput"
        );

    const storyInput =
        document.getElementById(
            "storyInput"
        );

    const characterCount =
        document.getElementById(
            "characterCount"
        );


    function updateCharacterCount() {

        if (
            !storyInput ||
            !characterCount
        ) {
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
        document.getElementById(
            "previewButton"
        );


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


        const buttons =
            storyCard.querySelectorAll(
                ".vote-button"
            );


        if (buttons.length < 2) {
            return;
        }


        const downButton =
            buttons[0];

        const upButton =
            buttons[1];


        const upCount =
            upButton.querySelector(
                ".vote-count"
            );

        const downCount =
            downButton.querySelector(
                ".vote-count"
            );


        let localUpvotes = 0;
        let localDownvotes = 0;
        let localVote = null;


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
    // CREATE STORY
    // =========================================

    const postButton =
        document.getElementById(
            "postButton"
        );

    const storyFeed =
        document.getElementById(
            "storyFeed"
        );


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
                    sender.value.trim() ||
                    "me";


                const storyTitle =
                    storyTitleInput.value.trim() ||
                    "MyKurda";


                const story =
                    storyInput.value.trim();


                if (!story) {

                    storyInput.focus();

                    return;

                }


                const language =
                    document.documentElement.lang ||
                    "ku";


                const translation =
                    translations[language] ||
                    translations.ku;


                const visibilityText =
                    selectedVisibility === "public"
                        ? translation.public
                        : translation.private;


                const newStory =
                    document.createElement(
                        "article"
                    );


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

                        ${escapeHTML(storyTitle)}

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
                                class="vote-button"
                                type="button"
                            >

                                <span
                                    class="vote-arrow down"
                                ></span>

                                <span class="vote-count">
                                    0
                                </span>

                            </button>


                            <button
                                class="vote-button"
                                type="button"
                            >

                                <span
                                    class="vote-arrow up"
                                ></span>

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
                                Zêr
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


                // Light effect
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


                // Reward
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


                // Reset fields
                sender.value =
                    "me";

                storyTitleInput.value =
                    "Rojek li gundê me";

                storyInput.value =
`Rojekê li gundê me baran dibariya.
Hemû kes li malên xwe bûn.

Ez û bavê min li derve meşiyan.
Her ku em diçûn, bêdengiya gund
tenê bi dengê baranê têk diçû.

Ew roj ji bo min bû bîranînek
ku ez ê tu carî ji bîr nekim.`;


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


    let quizIndex =
        0;

    let quizAnswered =
        false;


    const quizOptions =
        document.getElementById(
            "quizOptions"
        );

    const quizFeedback =
        document.getElementById(
            "quizFeedback"
        );

    const nextQuiz =
        document.getElementById(
            "nextQuiz"
        );

    const quizQuestion =
        document.querySelector(
            ".game-question"
        );


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


        quizAnswered =
            false;


        quizQuestion.textContent =
            question.question;


        quizFeedback.textContent =
            "";


        quizOptions.innerHTML =
            "";


        question.answers.forEach(
            answer => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.textContent =
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


                        const language =
                            document.documentElement.lang ||
                            "ku";


                        const translation =
                            translations[language] ||
                            translations.ku;


                        if (
                            button.dataset.answer ===
                            "correct"
                        ) {

                            button.classList.add(
                                "correct"
                            );


                            quizFeedback.textContent =
                                translation.correctAnswer;


                            showZer(1);

                        } else {

                            button.classList.add(
                                "wrong"
                            );


                            quizFeedback.textContent =
                                translation.wrongAnswer;


                            // Show correct answer
                            quizOptions
                                .querySelectorAll("button")
                                .forEach(option => {

                                    if (
                                        option.dataset.answer ===
                                        "correct"
                                    ) {

                                        option.classList.add(
                                            "correct"
                                        );

                                    }

                                });

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

                    quizIndex =
                        0;

                }

                loadQuiz();

            }
        );

    }


    // =========================================
    // WORDLE GAME
    // =========================================

    const wordleAnswer =
        "rojda";


    let wordleRow =
        0;


    const wordleInput =
        document.getElementById(
            "wordleInput"
        );

    const wordleButton =
        document.getElementById(
            "wordleButton"
        );

    const wordleFeedback =
        document.getElementById(
            "wordleFeedback"
        );

    const wordleRows =
        document.querySelectorAll(
            ".wordle-row"
        );


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


        const language =
            document.documentElement.lang ||
            "ku";


        const translation =
            translations[language] ||
            translations.ku;


        if (
            guess.length !==
            wordleAnswer.length
        ) {

            wordleFeedback.textContent =
                translation.wordleTooShort;

            return;

        }


        const row =
            wordleRows[wordleRow];


        if (!row) {
            return;
        }


        const letters =
            row.querySelectorAll(
                "span"
            );


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
                translation.wordleWin;


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
                translation.gameOver +
                wordleAnswer;


            wordleButton.disabled =
                true;

            wordleInput.disabled =
                true;

        } else {

            wordleFeedback.textContent =
                translation.wordleAgain;


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

                if (
                    event.key ===
                    "Enter"
                ) {

                    event.preventDefault();

                    submitWordle();

                }

            }
        );

    }


    // =========================================
    // INITIALIZE
    // =========================================

    applyLanguage("ku");

    loadQuiz();

});
