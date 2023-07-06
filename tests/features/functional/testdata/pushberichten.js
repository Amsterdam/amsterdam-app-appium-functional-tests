const titels = [
    "Groene oase in Amstel III: Gemeenschappelijke moestuinen voor bewoners",
    "Duurzaam pendelen: Amstel III introduceert fietsdeelprogramma met elektrische fietsen",
    "Elektrisch delen: Autodeelplatform met elektrische auto's gelanceerd in Amstel III",
    "Zen in de natuur: Wekelijkse yoga- en meditatiesessies in het groene park van Amstel III",
    "Lokale kunstenaars verfraaien muren met prachtige muurschilderingen in Amstel III",
    "Energietransitie in Amstel III: Programma voor energiezuinige woningen gestart",
    "Lokaal en vers: Boerenmarkt in Amstel III verbindt bewoners met lokale producenten",
    "Duurzaam watergebruik: Amstel III moedigt bewoners aan om regenwater op te vangen",
    "Koken met impact: Gratis workshops over duurzaam koken en voedselverspilling in Amstel III",
    "Composteerrevolutie: Buurtcomposteerprogramma in Amstel III voor groenere tuinen"
];

const tekst = [
    "In Amstel III kunnen bewoners binnenkort genieten van gemeenschappelijke moestuinen. Vers groenten en kruiden verbouwen wordt eenvoudig en duurzaam.",
    "Amstel III maakt groen woon-werkverkeer mogelijk met een nieuw fietsdeelprogramma. Elektrische fietsen zijn beschikbaar voor bewoners, voor een duurzaam en gezond transport.",
    "Amstel III zet in op duurzame mobiliteit met een autodeelplatform vol elektrische auto's. Bewoners kunnen gemakkelijk auto's delen en zo bijdragen aan een groenere omgeving.",
    "Ontspan en kom tot rust tijdens de wekelijkse yoga- en meditatiesessies in het groene park van Amstel III. Geniet van de natuurlijke omgeving en verbeter je welzijn.",
    "Amstel III krijgt een kleurrijke make-over door lokale kunstenaars. Saaie muren worden omgetoverd tot prachtige muurschilderingen, waardoor de wijk tot leven komt.",
    "Amstel III biedt bewoners subsidies en advies om hun huizen energiezuiniger te maken. Een stap richting duurzaam wonen en een groenere toekomst.",
    "Kom naar de boerenmarkt in Amstel III en geniet van verse, biologische producten rechtstreeks van lokale boeren. Een duurzame en smakelijke keuze.",
    "Leer duurzaam koken en ontdek hoe je voedselverspilling kunt verminderen tijdens de gratis workshops in Amstel III. Een smakelijke en milieubewuste ervaring.",
    "Amstel III lanceert een revolutionair buurtcomposteerprogramma. Bewoners kunnen organisch afval omzetten in vruchtbare compost voor groenere tuinen en een duurzamere leefomgeving."
]

export const randomtitel = titels[Math.floor(Math.random() * titels.length)];
export const randomtekst = tekst[Math.floor(Math.random() * tekst.length)];