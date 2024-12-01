# Sammantfattning av projekt + teoretiska frågor

1. Du sammanfattar ditt projekt i README.md och reflekterar kring styrkor och ev brister. Max 500 ord.

1. Sammanfattning: jag har börjat med att bygga vidare u1-portfolio projektet med javaScript.
   Jag har inte ändrat själva designen så märkvärdigt men ändrade innehållet på alla sidor.
   Med presentationstexten, egen CV med flera jobb och utbildningar hämtas från en json fil.
   Hämtade alla project med title, beskrivning och länken från mina gitHub publica repos via GitHub API's, kombinerad med en json fil för bilder och netlify länkar. Har använd moduler(ES6) på script filer för rendering av header och footer på alla sidor med en function call. Nästan all rendering av html sidor görs med javaScript. Har lagt till en modal med animation på index sidan med både html, css och javaScript. Har på flera ställen element som visas eller döljs, tex: modal knappen, döljer modal i mobil versionen etc. Är validerat, och inga errors i console.

- Index sidan: förutom header och footer som renderas med javaScript innehåller presentationen med bilden responsiv och en modal som visas med button click.
- About sidan: förutom header och footer innehåller en kort text om mig, om mina jobb och utbildningar med flera poster. Data hämtas från En jason fil som innehåller både jobb delen och utbildnings delen sorterad under workexperiences och educations. Allt renderas med javaScript.
- Technologies sidan: Alla projekt som finns i sidan har hämtats från mina publica repos med GitHub API och vissa delar i card hämtas från json fill som innehåller bilder och länkar till Netlify. Jag har publicerat alla de projekt på sidan på Netlify.
  Har försökt organisera filerna i varsin katalog.har jobbat växlande med två olika brancher "dev-kemal" och "dev-kemal2"och main branchen använde merge då och då..
  Det som var joobigast är att använda data från både en API man fetcar och en json fil och använda delar av deras data i samma funktion och rendering, modal var ganska ny för mig, det tog lite tid att fixa det.
  Jag kände att jag lät kan rendera html filer med javaSscript och hämta data från API eller json fil.

2. Du svarar på dessa frågor (max 800 ord):

2a. Vad kan man utveckla m.h.a av Javascript inom frontend?

- Man kan använda javaScript inom frontend kan vara
- interaktiv gränssnitt: modaler, navigerins menyer, slideshow, scroll-effekt, dölja/visa element mm.
- Formulär, validering, hantera dem dynamisk, autokomplettering tex.
- Animeringar och effekter av CSS, responsiv design
- dynamiska sidor, interaktiva kartor
- Hantering av media, spelutveckling, E-handel, checkout, AI, maskinlärning och mycket mycket mer...
  Alltså javaScript är mycket flexibelt. Man utveckla från små till fullständiga komplexa applikationer som körs direkt i webläsaren.

2b. Vad är JSON och hur används det inom frontend?

- JSON (JavaScript Object Notation) är format för att lagra och utbyta data och det är lättare att läsa/skriva av både människor och maskiner. tex data från server eller API.
- Strukturen är string, den representerar data i form av nyckel-värde par. JSON liknar javaScript-object men egentligen oberoende format som olika progammeringsspråk kan använda.
  inom frontend kan man använda JSON tex:
  för dataöverföring mellan frontend och backend "ex: fetch API",
  att lagra och hantera data i frontend "tex: localStorage".
  att bygga dynamiska gränssnit "tex dynamisk innehåll på en websida". Det finns flera oråden som JSON kan användas.

2c. Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

- HTTP HyperText Transfer Protokoll är en protokoll som används för att överföra data över webben, också grunden för kommunikationen mellan klienter och servrar.
- Som frontend utvecklare är det viktig att förstå och behärska HTTP och dess protokoll (regelverk).
- De flesta webapplikationer integrerar med APIer, tex:REST API'er. Och för att kunna integrera med dem krävs de kunskap om GET, POST, PUT och DELETE. Också statuskoder, headers.
- man måste förstå tex HTTP-caching (minimera laddsningstid, reducera antal förfrågningar).
- Grundläggande HTTP-koncept är att känna till:
  ** GET: Hämta data
  ** POST: Skicka data till servern
  ** PUT: Uppdatera resurser
  ** DELETE: Ta bort resurser
  ** Status koder: 2xx Success OK, 3xx Redirect, 4xx Error hos klienten, 5xx Server error
  ** HTTP-Headers: Request headers, Response headers
  \*\* Cookies och Sessions.

Sammanfattningsvis är HTTP grunden för all webutveckling., och varje utvecklare bör förstå det.

Mvh
Kemal
