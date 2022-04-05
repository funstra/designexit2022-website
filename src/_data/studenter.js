const { readdirSync } = require("fs");
const { resolve } = require("path");
const slug = require("slug");
const dir = resolve(__dirname, "../../", "assets", "alster");
function alst(student) {
  const s = slug(`${student.fnamn}-${student.enamn}`);
  const files = readdirSync(resolve(dir, s));
  const alsterFiles = files
    .filter(f => f.includes("alster"))
    .map(f => `alster/${s}/${f}`);
  return alsterFiles;
}
// TODO add aria labels for alster
module.exports = () => {
  const studenter = [
    {
      fnamn: "Marcus",
      enamn: "Aldrin",
      beskrivning:
        "Marcus Aldrin, 32 år, från Timrå, bor i Falun. Klassens smarta och charmiga programmerare som gärna hänger inne på MDN WEB Docs även på fritiden. Favoritämnena under utbildningen var visualisering och datamodellering och det var också under en av dessa kurser Marcus fick smeknamnet Tufte. Efter utbildningen vill Marcus gärna arbeta med att utveckla olika plattformar för kommunikation åt företag som enligt honom gör ”vettiga saker”.",
      links: {
        linkedin: "",
        facebook: "",
        instagram: "",
        dribbble: "",
        behance: "",
        flickr: "",
        hemsida: "",
      },
      alster: function () {
        return alst(this);
      },
    },
    {
      fnamn: "Emma",
      enamn: "Arnberg",
      beskrivning:
        "Emma Arnberg, 37 år, från världsmetropolen Kvarnsveden i Borlänge. Hur skulle vi under utbildningen ha klarat oss utan Emma? Klassens organisatör och informella projektledare. Hon är social och nyfiken och hennes envishet har tagit henne igenom två tjejklassiker, ett Tough Race, Tjurruset, men också kursen Statistisk analys. Under utbildningen har Emmas favorituppgifter varit att designa i Illustrator och Indesign, men också att skapa prototyper i Adobe XD. I framtiden vill hon gärna arbeta med grafisk design och projektledning på ett jobb där hon får utvecklas och vara kreativ.",
      links: {
        linkedin: "",
        facebook: "",
        instagram: "https://www.instagram.com/emmaskreativakaos/",
        dribbble: "",
        behance: "",
        flickr: "",
        hemsida: "",
      },
      alster: function () {
        return alst(this);
      },
    },
    {
      fnamn: "Martin",
      enamn: "Bergström",
      beskrivning:
        "Martin Bergström, 21 år, från Mockfjärd, under studietiden boende i Borlänge. Efter ett år på Systemvetenskapliga programmet insåg Martin att det han egentligen ville hålla på med var Informationsdesign och det är vi alla glada för. Den stora utmaningen för Martin är därför att få ihop schemat med att läsa två läsår samtidigt och även att bli kallad för Marcus av förvirrade lärare (nåja, halva namnet rätt). Det roligaste hittills under utbildningen enligt Martin har varit att skapa ett Magasin och att göra prototyper i Adobe XD. Martin är snäll, punktlig och intresserar sig för saker som kan beskrivas som ”nördiga”.",
      links: {
        linkedin: "",
        facebook: "",
        instagram: "",
        dribbble: "",
        behance: "",
        flickr: "",
        hemsida: "",
      },
      alster: function () {
        return alst(this);
      },
    },
    {
      fnamn: "Natthaphat",
      enamn: "Chankham",
      beskrivning:
        "Natthaphat Chankham, 26 år, bor i Falun. Vår snälla, omtänksamma Natte är språkligt begåvad och talar förutom svenska både engelska och thailändska flytande. Favorituppgifterna under utbildningen har varit att hålla på med grafisk design och animering, något som han också valde att fördjupa sig i. På fritiden gillar Natte att umgås med vänner och spela datorspel och vill i framtiden fortsätta att utvecklas inom och jobba med grafisk design.",
      links: {
        linkedin: "",
        facebook: "",
        instagram: "",
        dribbble: "",
        hemsida: "",
      },
      alster: function () {
        return alst(this);
      },
    },
    {
      fnamn: "Glenn",
      enamn: "Costello",
      beskrivning:
        "Glenn Costello, 31 år, från Isle of man, numera bosatt i Falun. Han är nyfiken och har många passioner i livet och den stora frågan vi ställer oss alla är ”när sover han egentligen?”. Det kan dock ge en förklaring till alla de koppar kaffe Glenn dricker under en dag. För Glenn har det roligaste under utbildningen har varit att skapa prototyper under kursen interaktionsdesign. Han inspireras av naturen och tar gärna med sig både kameran och familjen ut i naturen för att hitta spännande arter. Drömjobbet för Glenn vore att jobba för en organisation som arbetar för att bevara den biologiska mångfalden och som faktiskt gör skillnad i världen.",
      links: {
        linkedin: "",
        facebook: "",
        instagram: "https://www.instagram.com/gccostello/",
        dribbble: "",
        behance: "",
        flickr: "https://www.flickr.com/photos/gccostello/albums",
        hemsida: "",
      },
      alster: function () {
        return alst(this);
      },
    },
    {
      fnamn: "Cecilia",
      enamn: "Fredriksson",
      beskrivning:
        "Cecilia Fredriksson, 26 år, från Borlänge. Klassens Legally blonde som alltid lättar upp tråkiga seminarier. Hon gillar att fotografera och att resa. Ska du gå på italiensk restaurang så ska du ta med dig Cecilia som kan översätta menyn åt dig. En annan talang hon har är att sjunga i sömnen. Att ha fått lära sig att bygga ett varumärke från grunden och att skapa en stark logotyp har enligt henne varit det bästa med utbildningen. I framtiden vill Cissi gärna arbeta i olika projekt nära kreativa människor som hon själv. En dröm är också att starta eget företag.",
      links: {
        linkedin: "",
        facebook: "",
        instagram: "",
        dribbble: "",
        behance: "",
        flickr: "",
        hemsida: "",
      },
      alster: function () {
        return alst(this);
      },
    },
    {
      fnamn: "Klas",
      enamn: "Gråhns",
      beskrivning:
        "Klas Gråhns, 22 år, från Falun. Sitter du fast med kodproblem kan du vända dig till Klas som gärna hjälper till. Utöver att umgås med vänner och spela datorspel gillar han att resa och kan stoltsera med att ha besökt 17 olika länder. Under utbildningen har Klas intresserat sig särskilt för UX och front-end utveckling och som han också gärna vill jobba med i framtiden.",
      links: {
        linkedin: "",
        facebook: "",
        instagram: "",
        dribbble: "",
        behance: "",
        flickr: "",
        hemsida: "",
      },
      alster: function () {
        return alst(this);
      },
    },
    {
      fnamn: "Fredrik",
      enamn: "Johansson",
      beskrivning:
        "Fredrik Johansson, 26 år, från Falun, numera boende i Uppsala. Konstnärlig person som är duktig på att illustrera vilket märks i hans grafiska arbeten. Under studietiden har Fredrik tyckt det varit särskilt roligt att få designa sitt eget portfolio och att under ett eget projektarbete få fördjupa sig i prototypande. På fritiden ger han sig gärna ut i skogen för att campa och fiska. I framtiden vill han fortsätta att utvecklas inom grafisk design och så småningom arbeta mer inom UX och produktdesign.",
      links: {
        linkedin: "https://www.linkedin.com/in/fredrik-j-358783176/",
        facebook: "",
        instagram: "",
        dribbble: "",
        behance: "https://www.behance.net/fredrikjohanss11",
        flickr: "",
        hemsida: "https://www.johanssonfredrik.com",
      },
      alster: function () {
        return alst(this);
      },
    },
    {
      fnamn: "Berfin",
      enamn: "Kosmaz",
      beskrivning:
        "Berfin Kosmaz, 21 år, född och uppvuxen i Borlänge. Lugna, smarta Berfin är riktigt vass på Adobe Programmen och har hjälpt sina klasskompisar ur olika designknipor många gånger. Under studietiden har hon fördjupat sitt intresse för grafisk design och en nyfunnen passion är animering. Hon älskar att pyssla, titta på film och umgås med familj och vänner. Efter utbildningen vill Berfin hitta ett trivsamt arbete där hon får vara kreativ och gärna lite pysslig.",
      links: {
        linkedin: "",
        facebook: "",
        instagram: "",
        dribbble: "",
        behance: "",
        flickr: "",
        hemsida: "",
      },
      alster: function () {
        return alst(this);
      },
    },
    {
      fnamn: "Mia",
      enamn: "Lif",
      beskrivning:
        "Mia Lif, 37 år, från en liten by i Gagnef och bor nu i en något större by i Gagnef (hon har dock bott utanför kommungränsen). Klassens energiknippe som alltid har nära till skratt. Mia är mångsidig och älskar att skapa vilket hon fått ge utlopp för när hon läst sina favoritkurser Interaktions- och Informationsdesign. Några av hennes passioner i livet är odling, resor, återbruk, blommor, livemusik, måla, snowboard, bygga, möblera om… nämnde vi att hon var passionerad? Ett stort ögonblick för Mia var en gång när hon vann en skottkärra i en Instagramtävling. Efter utbildningen vill hon jobba med något kreativt, gärna på en kommunikationsbyrå.",
      links: {
        linkedin: "",
        facebook: "",
        instagram: "https://www.instagram.com/mialivdesign/",
        dribbble: "",
        behance: "",
        flickr: "",
        hemsida: "",
      },
      alster: function () {
        return alst(this);
      },
    },
    {
      fnamn: "Amanda",
      enamn: "Sellberg",
      beskrivning:
        "Amanda Sellberg, 29 år, bor i Säter. En nyfiken och social tjej som tycker om att skapa. Amanda är väldigt driven och vill alltid göra sitt bästa och det har också en förmåga att smitta av sig på hennes klasskompisar. Under utbildningen har hon trivts som allra bäst när hon fått utforma olika typer av grafiskt material. Favoritprogrammen är Illustrator, Adobe XD och Indesign. På fritiden umgås Amanda gärna med familj och vänner. Ett stort intresse är också inredning och att leta efter fina saker på loppisar. I framtiden drömmer hon om att hitta ett jobb där hon får vara kreativ och fortsätta utvecklas tillsammans med roliga kollegor.",
      links: {
        linkedin: "",
        facebook: "",
        instagram: "https://www.instagram.com/amandasellbergdesign/",
        dribbble: "",
        hemsida: "",
      },
      alster: function () {
        return alst(this);
      },
    },
    {
      fnamn: "Mia",
      enamn: "Engqvist",
      beskrivning:
        "Mia Wiklundh Engqvist, 33 år, från Sundborn utanför Falun. En lugn, ansvarsfull tjej som gillar att lära sig nya saker och gärna arbetar med att text och att skapa olika typer av grafiskt material. När hon inte åker land och rike runt för att gå på olika konserter gillar hon att träna och lyssna på podcasts. Det roligaste med utbildningen enligt Mia har varit att få lära sig front-end utveckling och fotografering. Efter utbildningen vill hon gärna fortsätta att utvecklas inom front-end och grafisk design.",
      links: {
        linkedin: "",
        facebook: "",
        instagram: "https://www.instagram.com/miaengqvistdesign/",
        dribbble: "",
        behance: "",
        flickr: "",
        hemsida: "",
      },
      alster: function () {
        return alst(this);
      },
    },
  ];
  studenter.sort((a, b) => {
    if (a.fnamn < b.fnamn) {
      return -1;
    }
    if (a.fnamn > b.fnamn) {
      return 1;
    }
    return 0;
  });

  return studenter;
};
