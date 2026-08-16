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


// Close menu when clicking outside

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
            "مای کوردە هێشتا لە دروستکردندایە. لە پشت پەردەوە بە دڵ و گیان کار دەکەین بۆ دروستکردنی شوێنێکی نوێ بۆ زمانی کوردی، کەلتوور و کۆمەڵگەی کوردی.",

        description2:
            "سوپاس بۆ سەردانکردنت. مای کوردە بە زووانە دەکرێتەوە. تکایە دواتر دووبارە سەردانمان بکە.",

        tagline:
            "بە کوردی، بۆ کوردان.",

        contact:
            "پەیوەندی",

        footer:
            "© 2026 مای کوردە. هەموو مافەکان پارێزراون."

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
            "Auf Kurdisch, für Kurdinnen und Kurden.",

        contact:
            "Kontakt",

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
            "ماي كوردا قيد الإنشاء حاليًا. نعمل خلف الكواليس لإنشاء مساحة جديدة للغة والثقافة والمجتمع الكردي.",

        description2:
            "شكرًا لزيارتك. سيتم إطلاق ماي كوردا قريبًا. يرجى العودة مرة أخرى لاحقًا.",

        tagline:
            "بالكردية، من أجل الكرد.",

        contact:
            "تواصل معنا",

        footer:
            "© 2026 ماي كوردا. جميع الحقوق محفوظة."

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


            // Update translated elements

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


            // Update selected language

            currentLanguage.textContent =
                languageNames[language];


            // Update document language

            document.documentElement.lang =
                language;


            // RTL languages

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


            // Close menu

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