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
            "Helbestek binivîse.",

        previewDescription:
            "Dengê xwe parve bike û bibîne ka MyKurda çawa dixebite.",

        from:
            "Ji",

        to:
            "Ji bo",

        public:
            "Giştî",

        private:
            "Taybet",

        zer:
            "Zêr",

        createEyebrow:
            "NOBETA TE YE",

        createTitle:
            "Tu çi dibêjî?",

        senderLabel:
            "Ji kê?",

        receiverLabel:
            "Ji bo kê?",

        receiverPlaceholder:
            "Navê kesê...",

        poemLabel:
            "Helbesta xwe binivîse",

        poemPlaceholder:
            "Helbesta xwe li vir binivîse...",

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
            "Dengê xwe parve bike.",

        featureTwoTitle:
            "Deng bidê",

        featureTwoText:
            "Helbestên ku hez dikî hilbijêre.",

        featureThreeTitle:
            "Zêr bistîne",

        featureThreeText:
            "Ji bo upvote û çalakiyên xwe xelat bistîne.",

        footer:
            "© 2026 MyKurda. Hemû maf parastî ne."

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
            "هۆنراوەیەک بنووسە.",

        previewDescription:
            "دەنگی خۆت بڵاو بکەرەوە و ببینە MyKurda چۆن کار دەکات.",

        from:
            "لە",

        to:
            "بۆ",

        public:
            "گشتی",

        private:
            "تایبەت",

        zer:
            "زێڕ",

        createEyebrow:
            "نۆرەی تۆیە",

        createTitle:
            "تۆ چی دەڵێیت؟",

        senderLabel:
            "لە کێ؟",

        receiverLabel:
            "بۆ کێیە؟",

        receiverPlaceholder:
            "ناوی کەسەکە...",

        poemLabel:
            "هۆنراوەکەت بنووسە",

        poemPlaceholder:
            "هۆنراوەکەت لێرە بنووسە...",

        visibilityLabel:
            "کێ دەتوانێت بیبینێت؟",

        post:
            "بینێرە",

        tryPreview:
            "تۆش تاقی بکەرەوە",

        demoNotice:
            "ئەمە تەنها دیمۆیە. زێڕەکانی لێرە تەنها بۆ تاقیکردنەوەن.",

        featureOneTitle:
            "بینووسە",

        featureOneText:
            "دەنگی خۆت بڵاو بکەرەوە.",

        featureTwoTitle:
            "دەنگ بدە",

        featureTwoText:
            "هۆنراوەکانی دڵخوازت هەڵبژێرە.",

        featureThreeTitle:
            "زێڕ بەدەست بهێنە",

        featureThreeText:
            "بۆ دەنگدان و چالاکییەکانت خەڵات بەدەست بهێنە.",

        footer:
            "© 2026 MyKurda. هەموو مافەکان پارێزراون."

    },


    en: {

        eyebrow:
            "Coming soon",

        title:
            "We're building<br>something beautiful.",

        description:
            "MyKurda is currently under construction. We're working behind the scenes to create a new place for Kurdish language, culture and community.",

        description2:
            "Thank you for visiting. MyKurda will be launching soon. Please check back later.",

        tagline:
            "In Kurdish, for Kurds.",

        contact:
            "Contact",

        previewEyebrow:
            "MYKURDA PREVIEW",

        previewTitle:
            "Write a poem.",

        previewDescription:
            "Share your voice and get a taste of how MyKurda works.",

        from:
            "From",

        to:
            "For",

        public:
            "Public",

        private:
            "Private",

        zer:
            "Zêr",

        createEyebrow:
            "YOUR TURN",

        createTitle:
            "What would you say?",

        senderLabel:
            "From whom?",

        receiverLabel:
            "Who is it for?",

        receiverPlaceholder:
            "Their name...",

        poemLabel:
            "Write your poem",

        poemPlaceholder:
            "Write your poem here...",

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
            "Share your voice.",

        featureTwoTitle:
            "Vote",

        featureTwoText:
            "Support the poems you love.",

        featureThreeTitle:
            "Earn Zêr",

        featureThreeText:
            "Get rewarded for your votes and activity.",

        footer:
            "© 2026 MyKurda. All rights reserved."

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
            "Schrijf een gedicht.",

        previewDescription:
            "Deel je stem en ontdek alvast hoe MyKurda werkt.",

        from:
            "Van",

        to:
            "Voor",

        public:
            "Openbaar",

        private:
            "Privé",

        zer:
            "Zêr",

        createEyebrow:
            "JIJ BENT AAN DE BEURT",

        createTitle:
            "Wat zou jij zeggen?",

        senderLabel:
            "Van wie?",

        receiverLabel:
            "Voor wie is het?",

        receiverPlaceholder:
            "Naam van de persoon...",

        poemLabel:
            "Schrijf je gedicht",

        poemPlaceholder:
            "Schrijf hier je gedicht...",

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
            "Deel je stem.",

        featureTwoTitle:
            "Stem",

        featureTwoText:
            "Steun de gedichten die je mooi vindt.",

        featureThreeTitle:
            "Verdien Zêr",

        featureThreeText:
            "Word beloond voor je stemmen en activiteit.",

        footer:
            "© 2026 MyKurda. Alle rechten voorbehouden."

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
            "Schreib ein Gedicht.",

        previewDescription:
            "Teile deine Stimme und erlebe, wie MyKurda funktioniert.",

        from:
            "Von",

        to:
            "Für",

        public:
            "Öffentlich",

        private:
            "Privat",

        zer:
            "Zêr",

        createEyebrow:
            "DU BIST DRAN",

        createTitle:
            "Was würdest du sagen?",

        senderLabel:
            "Von wem?",

        receiverLabel:
            "Für wen ist es?",

        receiverPlaceholder:
            "Name der Person...",

        poemLabel:
            "Schreib dein Gedicht",

        poemPlaceholder:
            "Schreib dein Gedicht hier...",

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
            "Teile deine Stimme.",

        featureTwoTitle:
            "Abstimmen",

        featureTwoText:
            "Unterstütze die Gedichte, die dir gefallen.",

        featureThreeTitle:
            "Zêr verdienen",

        featureThreeText:
            "Erhalte Belohnungen für deine Stimmen und Aktivitäten.",

        footer:
            "© 2026 MyKurda. Alle Rechte vorbehalten."

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
            "Écrivez un poème.",

        previewDescription:
            "Partagez votre voix et découvrez comment MyKurda fonctionnera.",

        from:
            "De",

        to:
            "Pour",

        public:
            "Public",

        private:
            "Privé",

        zer:
            "Zêr",

        createEyebrow:
            "À VOUS DE JOUER",

        createTitle:
            "Que diriez-vous ?",

        senderLabel:
            "De qui ?",

        receiverLabel:
            "Pour qui est-il ?",

        receiverPlaceholder:
            "Nom de la personne...",

        poemLabel:
            "Écrivez votre poème",

        poemPlaceholder:
            "Écrivez votre poème ici...",

        visibilityLabel:
            "Qui peut le voir ?",

        post:
            "Publier",

        tryPreview:
            "Essayez vous-même",

        demoNotice:
            "Ceci est une démo. Les Zêr gagnés ici sont uniquement destinés à la démonstration.",

        featureOneTitle:
            "Écrire",

        featureOneText:
            "Partagez votre voix.",

        featureTwoTitle:
            "Voter",

        featureTwoText:
            "Soutenez les poèmes que vous aimez.",

        featureThreeTitle:
            "Gagner des Zêr",

        featureThreeText:
            "Recevez des récompenses pour vos votes et votre activité.",

        footer:
            "© 2026 MyKurda. Tous droits réservés."

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
            "اكتب قصيدة.",

        previewDescription:
            "شارك صوتك واكتشف كيف سيعمل MyKurda.",

        from:
            "من",

        to:
            "إلى",

        public:
            "عام",

        private:
            "خاص",

        zer:
            "Zêr",

        createEyebrow:
            "دورك الآن",

        createTitle:
            "ماذا ستقول؟",

        senderLabel:
            "من؟",

        receiverLabel:
            "لمن هي؟",

        receiverPlaceholder:
            "اسم الشخص...",

        poemLabel:
            "اكتب قصيدتك",

        poemPlaceholder:
            "اكتب قصيدتك هنا...",

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
            "شارك صوتك.",

        featureTwoTitle:
            "صوّت",

        featureTwoText:
            "ادعم القصائد التي تعجبك.",

        featureThreeTitle:
            "اكسب Zêr",

        featureThreeText:
            "احصل على مكافآت مقابل تصويتاتك ونشاطك.",

        footer:
            "© 2026 MyKurda. جميع الحقوق محفوظة."

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
            "Bir şiir yaz.",

        previewDescription:
            "Sesini paylaş ve MyKurda'nın nasıl çalışacağını keşfet.",

        from:
            "Gönderen",

        to:
            "Alıcı",

        public:
            "Herkese açık",

        private:
            "Özel",

        zer:
            "Zêr",

        createEyebrow:
            "SIRA SENDE",

        createTitle:
            "Sen ne söylerdin?",

        senderLabel:
            "Kimden?",

        receiverLabel:
            "Kimin için?",

        receiverPlaceholder:
            "Kişinin adı...",

        poemLabel:
            "Şiirini yaz",

        poemPlaceholder:
            "Şiirini buraya yaz...",

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
            "Sesini paylaş.",

        featureTwoTitle:
            "Oy ver",

        featureTwoText:
            "Beğendiğin şiirleri destekle.",

        featureThreeTitle:
            "Zêr kazan",

        featureThreeText:
            "Oyların ve etkinliklerin için ödüller kazan.",

        footer:
            "© 2026 MyKurda. Tüm hakları saklıdır."

    }

};


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


// =========================================
// LANGUAGE SWITCHING
// =========================================

document
    .querySelectorAll(".language-menu button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

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


                document
                    .querySelectorAll(
                        "[data-i18n-placeholder]"
                    )
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
// DESKTOP + MOBILE
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
// POEM VOTING
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
// CHARACTER COUNT
// =========================================

const poemInput =
    document.getElementById("poemInput");

const characterCount =
    document.getElementById(
        "characterCount"
    );


function updateCharacterCount() {

    if (
        !poemInput ||
        !characterCount
    ) {
        return;
    }

    characterCount.textContent =
        poemInput.value.length;

}


if (poemInput) {

    poemInput.addEventListener(
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

                    if (poemInput) {
                        poemInput.focus();
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
// NEW POEM VOTING
// =========================================

function setupNewPoemVoting(poemCard) {

    if (!poemCard) {
        return;
    }

    const upButton =
        poemCard.querySelector(
            ".new-upvote"
        );

    const downButton =
        poemCard.querySelector(
            ".vote-button:not(.new-upvote)"
        );

    const upCount =
        upButton
            ? upButton.querySelector(
                ".vote-count"
            )
            : null;

    const downCount =
        downButton
            ? downButton.querySelector(
                ".vote-count"
            )
            : null;


    let localUpvotes = 0;
    let localDownvotes = 0;
    let localVote = null;


    if (
        !upButton ||
        !downButton
    ) {
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
// CREATE DEMO POEM
// =========================================

const sender =
    document.getElementById("sender");

const receiver =
    document.getElementById("receiver");

const postButton =
    document.getElementById("postButton");

const poemFeed =
    document.getElementById("poemFeed");


if (
    postButton &&
    sender &&
    receiver &&
    poemInput &&
    poemFeed
) {

    postButton.addEventListener(
        "click",
        () => {

            const senderName =
                sender.value.trim() || "me";

            const receiverName =
                receiver.value.trim();

            const poem =
                poemInput.value.trim();


            if (
                !receiverName ||
                !poem
            ) {

                if (!receiverName) {

                    receiver.focus();

                } else {

                    poemInput.focus();

                }

                return;

            }


            const language =
                document.documentElement.lang ||
                "ku";


            const translation =
                translations[language] ||
                translations.en;


            const visibilityText =
                selectedVisibility === "public"
                    ? translation.public
                    : translation.private;


            const newPoem =
                document.createElement(
                    "article"
                );


            newPoem.className =
                "poem-card light-card new-poem";


            newPoem.innerHTML = `

                <div class="poem-top">

                    <div>

                        <div class="poem-label">

                            <span>
                                ${translation.from}
                            </span>

                            <strong>
                                ${escapeHTML(senderName)}
                            </strong>

                        </div>


                        <div class="poem-label">

                            <span>
                                ${translation.to}
                            </span>

                            <strong>
                                ${escapeHTML(receiverName)}
                            </strong>

                        </div>

                    </div>


                    <span class="visibility-badge">

                        ${visibilityText}

                    </span>

                </div>


                <div class="poem-text">

                    ${escapeHTML(poem).replace(
                        /\n/g,
                        "<br>"
                    )}

                </div>


                <div class="poem-bottom">

                    <div class="vote-group">

                        <button
                            class="vote-button"
                            type="button"
                        >

                            <span
                                class="vote-arrow down"
                            ></span>

                            <span
                                class="vote-count"
                            >
                                0
                            </span>

                        </button>


                        <button
                            class="vote-button new-upvote"
                            type="button"
                        >

                            <span
                                class="vote-arrow up"
                            ></span>

                            <span
                                class="vote-count"
                            >
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


            poemFeed.after(
                newPoem
            );


            // Make the new poem interactive.
            setupNewPoemVoting(
                newPoem
            );


            // Make the light effect work
            // on the new card as well.
            newPoem.addEventListener(
                "mousemove",
                event => {

                    moveLight(
                        newPoem,
                        event.clientX,
                        event.clientY
                    );

                }
            );


            newPoem.addEventListener(
                "mouseleave",
                () => {

                    newPoem.classList.remove(
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

            receiver.value =
                "MyKurda";


            poemInput.value =
`Kurdî zimanê me ye,
dengê bav û kalên me ye.

Bila em bi hev re hîn bibin,
bila dengê me her tim bijî.`;


            updateCharacterCount();


            newPoem.scrollIntoView({
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


    quizAnswered = false;


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


                    if (
                        button.dataset.answer ===
                        "correct"
                    ) {

                        button.classList.add(
                            "correct"
                        );


                        quizFeedback.textContent =
                            "Rast e! Tu +1 Zêr wergirt.";


                        showZer(1);

                    } else {

                        button.classList.add(
                            "wrong"
                        );


                        quizFeedback.textContent =
                            "Ne rast e. Dîsa biceribîne.";

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


loadQuiz();


// =========================================
// WORDLE GAME
// =========================================

const wordleWords = [

    "avdar",
    "rojda",
    "hevî"

];


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


    if (
        guess.length !==
        wordleAnswer.length
    ) {

        wordleFeedback.textContent =
            "Ji kerema xwe peyvekî 5 tîpan binivîse.";

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


    if (
        letters.length <
        wordleAnswer.length
    ) {
        return;
    }


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
            "Serkeftin! +5 Zêr 🎉";


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
            `Game over. Peyv: ${wordleAnswer}`;


        wordleButton.disabled =
            true;


        wordleInput.disabled =
            true;

    } else {

        wordleFeedback.textContent =
            "Dîsa biceribîne.";


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
