var english = true;
var nav1 = document.getElementById('nav1');
var nav2 = document.getElementById('nav2');
var nav3 = document.getElementById('nav3');
var nav4 = document.getElementById('nav4');
var snav1 = document.getElementById('snav1');
var snav2 = document.getElementById('snav2');
var snav3 = document.getElementById('snav3');
var snav4 = document.getElementById('snav4');

var nav1Title = {'eng': 'Join The Club!', 'afr': 'Sluuit Met Ons Aan!'};
var nav2Title = {'eng': 'Hiking Reports', 'afr': 'Stap Raporte'};
var nav3Title = {'eng': 'Program', 'afr': 'Program'};
var nav4Title = {'eng': 'Contact Us', 'afr': 'Kontak Ons'};
var snav1Title = {'eng': 'Join The Club!', 'afr': 'Sluuit Met Ons Aan!'};
var snav2Title = {'eng': 'Hiking Reports', 'afr': 'Stap Raporte'};
var snav3Title = {'eng': 'Program', 'afr': 'Program'};
var snav4Title = {'eng': 'Contact Us', 'afr': 'Kontak Ons'};

var home = document.getElementById('homeText');
var nav = document.getElementById('navTitle');
var join = document.getElementById('joinText');
var joinTitle = document.getElementById('joinTitle');
var newsletter = document.getElementById('newsletterText');
var program = document.getElementById('programText');
var language = document.getElementById('language');
var language2 = document.getElementById('language2');


var navTitle = {'eng': 'MCSA Tygerberg', 'afr': 'BKSA Tygerberg Afdeling'};
var homeText = {'eng': "The Tygerberg Section of the Mountain Club of South Africa (MCSA) was founded in 1979 and is one of the youngest of the 14 section of the Mountain Club of South Africa. The members are mostly from the norther suburbs of Cape Town. The Tygerberg section's activities are focused on hiking which varies from difficult wilderness hikes to family weekends with easy day hikes. The  Mountain Club of South Africa was founded in 1891 and is one of only two mountain clubs in Africa which are affiliated to the world mountaineering body, the UIAA. Detailed information is available on the web site of the Cape Town Section (See links to the other sections at the bottom of the page)", 'afr' : "Die Tygerberg Afdeling van die Bergklub van Suid Afrika (BKSA) is in 1979 gestig as een van die jongste van die 14 afdelings van die Bergklub van Suid Afrika. Die meeste lede is afkomstig van die noordelike voorstede van Kaapstad. Die Tygerberg Afdeling se aktiwiteite is hoofsaaklik ge-fokus op bergstap en wissel van moeilike wildernis staptogte tot familie naweke met maklike dagstappe. Die Bergklub van Suid Afrika is reeds in 1981 gestig en is een van slegs twee klubs in Afrika wat geaffilieer is aan die internasionale bergklim vereeniging genaamd UIAA. Meer besonderhede is beskikbaar op die webwerf van die Kaapse Afdeling (Volg die skakels na die ander afdelings onder aan die blad)"};
// var homeText = {'eng': "", 'afr' : ""};
var programText = {'eng': "Download the program below to obtain details about hiking trips arranged by the tygerberg section. Please contact the leader to make a reservation. Preference will be given to members. ", 'afr' : "Laai die program hieronder af om die besonderhede van staptogte wat deur die Tygerberg Afdeling aangebied word te bekom. Kontak die betrokke leier om 'n plek bespreking te maak. Lede geniet voorkeur."};
var newsletterText = {'eng': "Below is an archive of the Tygerberg section's old newsletters. It was decided in 2014 to no longer compile a comprehensive quarterly newsletter. Instead emails are send to the members on a more frequent basis.", 'afr' : "Onderstaande is 'n argief  van die Tygerberg Afdeling se nuusbriewe. Sedert 2014 is besluit om met die tegnologie veranderinge tred te hou en eerder gereelde e-posse aan klublede te stuur i.p.v. 'n lywige kwartaallikse nuusbrief."};
var joinText = {'eng': "Download and complete the form below to join the Tygerberg Section. Return the completed membership application form to the secretary. All club members must support the goals as detailed in the constitution.",'afr' : "Om aan te sluit as lid van die Tygerberg Afdeling van die Bergklub moet onderstaande vorm afgelaai word. Voltooi die vorm en stuur aan die sekretaris van die klub. Alle lede van die klub moet die doelstellings soos uiteengesit in die konstitusie ondersteun."};
var joinTitleText = {'eng': "Want to join us?",'afr' : "Wil jy aansluit?"};
var texts = {'home': homeText, 'join': joinText, 'newsletter': newsletterText, 'program': programText, 'joinTitle': joinTitleText, 'nav': navTitle};


function toggleLanguage(){
  if(english === true){
    nav1.innerHTML = nav1Title.eng;
    nav2.innerHTML = nav2Title.eng;
    nav3.innerHTML = nav3Title.eng;
    nav4.innerHTML = nav4Title.eng;
    snav1.innerHTML = snav1Title.eng;
    snav2.innerHTML = snav2Title.eng;
    snav3.innerHTML = snav3Title.eng;
    snav4.innerHTML = snav4Title.eng;

    home.innerHTML = texts.home.eng
    nav.innerHTML = texts.nav.eng
    join.innerHTML = texts.join.eng
    joinTitle.innerHTML = texts.joinTitle.eng
    newsletter.innerHTML = texts.newsletter.eng
    program.innerHTML = texts.program.eng
    language.innerHTML = "Change to  AFR <i class='flag-icon flag-icon-za '></i> "
    language2.innerHTML = "Change to  AFR <i class='flag-icon flag-icon-za '></i> "
  } else {
    nav1.innerHTML = nav1Title.afr;
    nav2.innerHTML = nav2Title.afr;
    nav3.innerHTML = nav3Title.afr;
    nav4.innerHTML = nav4Title.afr;
    snav1.innerHTML = snav1Title.afr;
    snav2.innerHTML = snav2Title.afr;
    snav3.innerHTML = snav3Title.afr;
    snav4.innerHTML = snav4Title.afr;
    nav.innerHTML = texts.nav.afr
    home.innerHTML = texts.home.afr
    join.innerHTML = texts.join.afr
    joinTitle.innerHTML = texts.joinTitle.afr
    program.innerHTML = texts.program.afr
    newsletter.innerHTML = texts.newsletter.afr
    language.innerHTML = "Change to ENG <i class='flag-icon flag-icon-gb '></i>"
    language2.innerHTML = "Change to ENG <i class='flag-icon flag-icon-gb '></i>"
  }

}



 function selectLanguage(lang) {
   english = lang;
   toggleLanguage();
 }

selectLanguage(false);
