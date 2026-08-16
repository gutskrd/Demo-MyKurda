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
            "MyKurda hîn di çêkirinê de ye. Em li pişt perdeyê bi dil û can dixebitin da ku cîhekî nû ji bo ziman, çand û civaka Kurdî ava bikin.",

        description2:
            "Spas ji bo serdana te. MyKurda di nêzîk de dê were vekirin. Ji kerema xwe paşê dîsa serdana me bike.",

        tagline:
            "Bi Kurdî, ji bo Kurdan.",

        contact:
            "Têkilî",

        aboutTitle:
            "MyKurda çi ye?",

        aboutIntro:
            "Cîhekî nû ji bo ziman, çand, afirînerî û civaka Kurdî.",

        featurePoemsTitle:
            "Helbest û gotin",

        featurePoems:
            "Helbestên xwe binivîse, wan ji kesekî re bişîne û dengê xwe bi civakê re parve bike.",

        featureGamesTitle:
            "Lîstikên Kurdî",

        featureGames:
            "Di lîstikên zimanî de li dijî kesên din bilîze û jêhatîbûna xwe biceribîne.",

        featureLearnTitle:
            "Fêrbûna Kurdî",

        featureLearn:
            "Kurdî hîn bibe, XP bi dest bixe û di lîgên MyKurda de pêş bikeve.",

        featureSocialTitle:
            "Civak",

        featureSocial:
            "Bi hevalên xwe re biaxive û bi civaka Kurdî re girêdanên nû ava bike.",

        zerTitle:
            "Zêr",

        zerText:
            "Bi çalakiyên xwe Zêr bi dest bixe û di MyKurda de bikar bîne.",

        comingFeature:
            "Ev tenê destpêk e.",

        bottomTagline:
            "Bi Kurdî, ji bo Kurdan.",

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
            "MyKurda هێشتا لە قۆناغی دروستکردندایە. لە پشت پەردەوە بە دڵ و گیان کار دەکەین بۆ دروستکردنی شوێنێکی نوێ بۆ زمانی کوردی، کەلتوور و کۆمەڵگەی کوردی.",

        description2:
            "سوپاس بۆ سەردانەکەت. MyKurda بە زووانە دەکرێتەوە. تکایە دواتر دووبارە سەردانمان بکە.",

        tagline:
            "بە کوردی، بۆ کوردان.",

        contact:
            "پەیوەندی",

        aboutTitle:
            "MyKurda چییە؟",

        aboutIntro:
            "شوێنێکی نوێ بۆ زمانی کوردی، کەلتوور، داهێنان و کۆمەڵگەی کوردی.",

        featurePoemsTitle:
            "هۆنراوە و وتەکان",

        featurePoems:
            "هۆنراوەی خۆت بنووسە، بۆ کەسێک بنێرە و دەنگی خۆت لەگەڵ کۆمەڵگەدا هاوبەش بکە.",

        featureGamesTitle:
            "یارییە کوردییەکان",

        featureGames:
            "لە یارییەکانی زمانی کوردیدا دژی کەسانی تر یاری بکە و تواناکانت تاقی بکەرەوە.",

        featureLearnTitle:
            "فێربوونی کوردی",

        featureLearn:
            "کوردی فێربە، XP بەدەست بهێنە و لە لیگەکانی MyKurda پێش بکەوە.",

        featureSocialTitle:
            "کۆمەڵگە",

        featureSocial:
            "لەگەڵ هاوڕێکانت گفتوگۆ بکە و پەیوەندیی نوێ لەگەڵ کۆمەڵگەی کوردی دروست بکە.",

        zerTitle:
            "Zêr",

        zerText:
            "لە ڕێگەی چالاکییەکانتەوە Zêr بەدەست بهێنە و لە MyKurda بەکاری بهێنە.",

        comingFeature:
            "ئەمە تەنها دەستپێکە.",

        bottomTagline:
            "بە کوردی، بۆ کوردان.",

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
            "MyKurda is currently under construction. We're working behind the scenes to create a new place for Kurdish language, culture and community.",

        description2:
            "Thank you for visiting. MyKurda will be launching soon. Please check back later.",

        tagline:
            "In Kurdish, for Kurds.",

        contact:
            "Contact",

        aboutTitle:
            "What is MyKurda?",

        aboutIntro:
            "A new place for Kurdish language, culture, creativity and community.",

        featurePoemsTitle:
            "Poems & sayings",

        featurePoems:
            "Write poems, address them to someone, share them with the community and earn Zêr from appreciation.",

        featureGamesTitle:
            "Kurdish games",

        featureGames:
            "Challenge other players in Kurdish language games and put your skills to the test.",

        featureLearnTitle:
            "Learn Kurdish",

        featureLearn:
            "Learn Kurdish, earn XP and climb the MyKurda leagues.",

        featureSocialTitle:
            "Community",

        featureSocial:
            "Chat with your friends and build new connections within the Kurdish community.",

        zerTitle:
            "Zêr",

        zerText:
            "Earn Zêr through your activities and use it throughout MyKurda.",

        comingFeature:
            "This is only the beginning.",

        bottomTagline:
            "In Kurdish, for Kurds.",

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
            "MyKurda is momenteel in ontwikkeling. Achter de schermen werken we aan een nieuwe plek voor de Koerdische taal, cultuur en gemeenschap.",

        description2:
            "Bedankt voor je bezoek. MyKurda wordt binnenkort gelanceerd. Kom later nog eens terug.",

        tagline:
            "In het Koerdisch, voor Koerden.",

        contact:
            "Contact",

        aboutTitle:
            "Wat is MyKurda?",

        aboutIntro:
            "Een nieuwe plek voor de Koerdische taal, cultuur, creativiteit en gemeenschap.",

        featurePoemsTitle:
            "Gedichten & uitspraken",

        featurePoems:
            "Schrijf gedichten, draag ze aan iemand op, deel ze met de gemeenschap en verdien Zêr met waardering.",

        featureGamesTitle:
            "Koerdische spellen",

        featureGames:
            "Neem het in Koerdische taalspellen op tegen andere spelers en test je vaardigheden.",

        featureLearnTitle:
            "Koerdisch leren",

        featureLearn:
            "Leer Koerdisch, verdien XP en klim omhoog in de MyKurda-competities.",

        featureSocialTitle:
            "Gemeenschap",

        featureSocial:
            "Chat met je vrienden en maak nieuwe contacten binnen de Koerdische gemeenschap.",

        zerTitle:
            "Zêr",

        zerText:
            "Verdien Zêr met je activiteiten en gebruik het binnen MyKurda.",

        comingFeature:
            "Dit is nog maar het begin.",

        bottomTagline:
            "In het Koerdisch, voor Koerden.",

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
            "MyKurda befindet sich derzeit im Aufbau. Hinter den Kulissen arbeiten wir an einem neuen Ort für die kurdische Sprache, Kultur und Gemeinschaft.",

        description2:
            "Danke für deinen Besuch. MyKurda wird bald starten. Schau später gerne wieder vorbei.",

        tagline:
            "Auf Kurdisch, für Kurden.",

        contact:
            "Kontakt",

        aboutTitle:
            "Was ist MyKurda?",

        aboutIntro:
            "Ein neuer Ort für die kurdische Sprache, Kultur, Kreativität und Gemeinschaft.",

        featurePoemsTitle:
            "Gedichte & Sprüche",

        featurePoems:
            "Schreibe Gedichte, widme sie jemandem, teile sie mit der Gemeinschaft und verdiene Zêr durch Anerkennung.",

        featureGamesTitle:
            "Kurdische Spiele",

        featureGames:
            "Fordere andere Spieler in kurdischen Sprachspielen heraus und stelle dein Können unter Beweis.",

        featureLearnTitle:
            "Kurdisch lernen",

        featureLearn:
            "Lerne Kurdisch, sammle XP und steige in den MyKurda-Ligen auf.",

        featureSocialTitle:
            "Gemeinschaft",

        featureSocial:
            "Chatte mit deinen Freunden und knüpfe neue Kontakte innerhalb der kurdischen Gemeinschaft.",

        zerTitle:
            "Zêr",

        zerText:
            "Verdiene Zêr durch deine Aktivitäten und nutze es innerhalb von MyKurda.",

        comingFeature:
            "Das ist erst der Anfang.",

        bottomTagline:
            "Auf Kurdisch, für Kurden.",

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
            "MyKurda est actuellement en construction. Nous travaillons en coulisses pour créer un nouvel espace dédié à la langue, à la culture et à la communauté kurdes.",

        description2:
            "Merci pour votre visite. MyKurda sera bientôt disponible. Revenez nous voir prochainement.",

        tagline:
            "En kurde, pour les Kurdes.",

        contact:
            "Contact",

        aboutTitle:
            "Qu'est-ce que MyKurda ?",

        aboutIntro:
            "Un nouvel espace dédié à la langue kurde, à la culture, à la créativité et à la communauté.",

        featurePoemsTitle:
            "Poèmes & textes",

        featurePoems:
            "Écrivez des poèmes, dédiez-les à quelqu'un, partagez-les avec la communauté et gagnez des Zêr grâce aux réactions.",

        featureGamesTitle:
            "Jeux kurdes",

        featureGames:
            "Affrontez d'autres joueurs dans des jeux autour de la langue kurde et mettez vos connaissances à l'épreuve.",

        featureLearnTitle:
            "Apprendre le kurde",

        featureLearn:
            "Apprenez le kurde, gagnez de l'XP et progressez dans les ligues MyKurda.",

        featureSocialTitle:
            "Communauté",

        featureSocial:
            "Discutez avec vos amis et créez de nouveaux liens au sein de la communauté kurde.",

        zerTitle:
            "Zêr",

        zerText:
            "Gagnez des Zêr grâce à vos activités et utilisez-les sur MyKurda.",

        comingFeature:
            "Ce n'est que le début.",

        bottomTagline:
            "En kurde, pour les Kurdes.",

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
            "نحن نبني<br>شيئًا جميلًا.",

        description:
            "MyKurda قيد الإنشاء حاليًا. نعمل خلف الكواليس لإنشاء مساحة جديدة للغة والثقافة والمجتمع الكردي.",

        description2:
            "شكرًا لزيارتك. سيتم إطلاق MyKurda قريبًا. يُرجى العودة لزيارتنا لاحقًا.",

        tagline:
            "بالكردية، من أجل الكرد.",

        contact:
            "تواصل معنا",

        aboutTitle:
            "ما هو MyKurda؟",

        aboutIntro:
            "مساحة جديدة للغة الكردية والثقافة والإبداع والمجتمع.",

        featurePoemsTitle:
            "القصائد والأقوال",

        featurePoems:
            "اكتب قصائدك، وأهدها إلى شخص ما، وشاركها مع المجتمع واكسب Zêr من التفاعل معها.",

        featureGamesTitle:
            "ألعاب كردية",

        featureGames:
            "تحدَّ لاعبين آخرين في ألعاب تعتمد على اللغة الكردية واختبر مهاراتك.",

        featureLearnTitle:
            "تعلّم الكردية",

        featureLearn:
            "تعلّم الكردية، واكسب XP، وتقدّم في دوريات MyKurda.",

        featureSocialTitle:
            "المجتمع",

        featureSocial:
            "تحدث مع أصدقائك وابنِ علاقات جديدة داخل المجتمع الكردي.",

        zerTitle:
            "Zêr",

        zerText:
            "اكسب Zêr من خلال أنشطتك واستخدمه داخل MyKurda.",

        comingFeature:
            "هذه مجرد البداية.",

        bottomTagline:
            "بالكردية، من أجل الكرد.",

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
            "MyKurda şu anda yapım aşamasında. Kürt dili, kültürü ve toplumu için yeni bir alan oluşturmak üzere perde arkasında çalışıyoruz.",

        description2:
            "Ziyaretiniz için teşekkür ederiz. MyKurda çok yakında hizmete girecek. Lütfen daha sonra tekrar ziyaret edin.",

        tagline:
            "Kürtçe, Kürtler için.",

        contact:
            "İletişim",

        aboutTitle:
            "MyKurda nedir?",

        aboutIntro:
            "Kürt dili, kültürü, yaratıcılığı ve topluluğu için yeni bir alan.",

        featurePoemsTitle:
            "Şiirler ve sözler",

        featurePoems:
            "Şiirlerini yaz, birine ithaf et, toplulukla paylaş ve beğenilerden Zêr kazan.",

        featureGamesTitle:
            "Kürtçe oyunlar",

        featureGames:
            "Kürtçe dil oyunlarında diğer oyunculara karşı yarış ve becerilerini test et.",

        featureLearnTitle:
            "Kürtçe öğren",

        featureLearn:
            "Kürtçe öğren, XP kazan ve MyKurda liglerinde yüksel.",

        featureSocialTitle:
            "Topluluk",

        featureSocial:
            "Arkadaşlarınla sohbet et ve Kürt topluluğu içinde yeni bağlantılar kur.",

        zerTitle:
            "Zêr",

        zerText:
            "Etkinliklerin üzerinden Zêr kazan ve MyKurda içinde kullan.",

        comingFeature:
            "Bu sadece başlangıç.",

        bottomTagline:
            "Kürtçe, Kürtler için.",

        footer:
            "© 2026 MyKurda. Tüm hakları saklıdır."

    }

};


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
// ABOUT SECTION
// =========================================

const aboutToggle =
    document.getElementById("aboutToggle");

const aboutSection =
    document.querySelector(".about-section");


aboutToggle.addEventListener("click", () => {

    const isOpen =
        aboutSection.classList.toggle("open");

    aboutToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );

});


// =========================================
// MOUSE-FOLLOWING GLASS LIGHT
// =========================================

const glassCard =
    document.querySelector(".glass-card");


if (glassCard) {

    glassCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                glassCard.getBoundingClientRect();

            const x =
                ((event.clientX - rect.left) /
                    rect.width) * 100;

            const y =
                ((event.clientY - rect.top) /
                    rect.height) * 100;

            glassCard.style.setProperty(
                "--mouse-x",
                `${x}%`
            );

            glassCard.style.setProperty(
                "--mouse-y",
                `${y}%`
            );

            glassCard.classList.add(
                "mouse-active"
            );

        }
    );


    glassCard.addEventListener(
        "mouseleave",
        () => {

            glassCard.classList.remove(
                "mouse-active"
            );

            glassCard.style.setProperty(
                "--mouse-x",
                "50%"
            );

            glassCard.style.setProperty(
                "--mouse-y",
                "50%"
            );

        }
    );

}
