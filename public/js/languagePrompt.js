var language = localStorage['language'];


var translations = {
  english: [
    { id: 'title', text: 'MCSA Tygerberg Section' },
    { id: 'nav-title', text: 'MCSA Tygerberg Section' },
    { id: 'sections-dropdown', text: 'Sections' },
    { id: 'loginBtn', text: 'Login'},
    { id: 'logoutBtn', text: 'Logout'},
    { id: 'join-us-btn', text: 'Join Us'},
    { id: 'contact-us-btn', text: 'Contact Us' },
    { id: 'events-btn', text: 'Events'},
    { id: 'about-us-title', text: 'About Us'},
    { id: 'about-us-text', text:
        'The Tygerberg Section of the Mountain Club of South Africa (MCSA) was founded in 1979 and is one of the youngest of the 14 sections of the Mountain Club of South Africa. <br><br>The members are mostly from the northern suburbs of Cape Town.<br> <br>The Tygerberg section&#39;s activities are focused on hiking which varies from difficult wilderness hikes to family weekends with easy day hikes. <br> <br> The Mountain Club of South Africa was founded in 1891 and is one of only two mountain clubs in Africa which are affiliated to the world mountaineering body, the UIAA.'
    },
    {id: 'jan', text: 'January'},
    {id: 'feb', text: 'February'},
    {id: 'mar', text: 'March'},
    {id: 'apr', text: 'April'},
    {id: 'may', text: 'May'},
    {id: 'jun', text: 'June'},
    {id: 'jul', text: 'July'},
    {id: 'aug', text: 'August'},
    {id: 'sep', text: 'September'},
    {id: 'oct', text: 'October'},
    {id: 'nov', text: 'November'},
    {id: 'dec', text: 'December'},
    {id: 'contact-heading', 'text': 'Committee 2018'},
    {id: 'ch-1', text: 'Chairman'}, {id: 'ch-2', text: 'Vice Chairman'}, {id: 'ch-3', text: 'Secretary'}, {id: 'ch-4', text: 'Treasurer'}, {id: 'ch-5', text: 'Member for Hiking'}, {id: 'ch-6', text: 'Member for Communications'}, {id: 'ch-7', text: 'Member for Rock Climbing & Rescue'}, {id: 'ch-8', text: 'Property Manager'},
    {id: 'contact-details1', text: 'Contact Details'},{id: 'contact-details2', text: 'Contact Details'},{id: 'contact-details3', text: 'Contact Details'},{id: 'contact-details4', text: 'Contact Details'},{id: 'contact-details5', text: 'Contact Details'},{id: 'contact-details6', text: 'Contact Details'},{id: 'contact-details7', text: 'Contact Details'},{id: 'contact-details8', text: 'Contact Details'}
  ],
  afrikaans: [
    { id: 'title', text: 'BKSA Tygerberg Afdeling' },
    { id: 'nav-title', text: 'BKSA Tygerberg Afdeling' },
    { id: 'sections-dropdown', text: 'Afdelings' },
    { id: 'loginBtn', text: 'Teken Aan'},
    { id: 'logoutBtn', text: 'Teken Uit'},
    { id: 'join-us-btn', text: 'Sluit Aan'},
    { id: 'contact-us-btn', text: 'Kontak Ons' },
    { id: 'events-btn', text: 'Aktiwiteite'},
    { id: 'about-us-title', text: 'Oor ons'},
    { id: 'about-us-text', text:
        'Die Tygerberg Afdeling van die Bergklub van Suid Afrika (BKSA) is in 1979 gestig as een van die jongste van die 14 afdelings van die Bergklub van Suid Afrika.<br> <br> Die meeste lede is afkomstig van die noordelike voorstede van Kaapstad.<br> <br>Die Tygerberg Afdeling se aktiwiteite is hoofsaaklik ge-fokus op berg staptogte en wissel van\nmoeilike wildernis staptogte tot familie naweke met maklike dagstappe.<br><br>Die Bergklub van Suid Afrika is reeds in 1981 gestig en is een van slegs twee klubs in Afrika wat geaffilieer is aan die internasionale bergklim vereniging genaamd UIAA'
    },
    {id: 'jan', text: 'Januarie'},
    {id: 'feb', text: 'Februarie'},
    {id: 'mar', text: 'Maart'},
    {id: 'apr', text: 'April'},
    {id: 'may', text: 'Mei'},
    {id: 'jun', text: 'Junie'},
    {id: 'jul', text: 'Julie'},
    {id: 'aug', text: 'Augustus'},
    {id: 'sep', text: 'September'},
    {id: 'oct', text: 'Oktober'},
    {id: 'nov', text: 'November'},
    {id: 'dec', text: 'Desember'},
    {id: 'contact-heading', 'text': 'Bestuur 2018'},
    {id: 'ch-1', text: 'Voorsitter'}, {id: 'ch-2', text: 'Onder voorsitter '}, {id: 'ch-3', text: 'Sekretaresse'}, {id: 'ch-4', text: 'Tesourier'}, {id: 'ch-5', text: 'Lid vir Stap'}, {id: 'ch-6', text: ' Lid vir Skakeling'}, {id: 'ch-7', text: 'Lid vir Rotsklim & Berg redding'}, {id: 'ch-8', text: 'Grond Bestuurder'},
    ,{id: 'contact-details1', text: 'Kontak'},{id: 'contact-details2', text: 'Kontak'},{id: 'contact-details3', text: 'Kontak'},{id: 'contact-details4', text: 'Kontak'},{id: 'contact-details5', text: 'Kontak'},{id: 'contact-details6', text: 'Kontak'},{id: 'contact-details7', text: 'Kontak'},{id: 'contact-details8', text: 'Kontak'}
  ]
}


var navElements = [
  {id: 'title'},{id: 'nav-title'}, {id: 'sections-dropdown'}, {id: 'loginBtn'}, {id: 'logoutBtn'}, {id: 'join-us-btn'},
  {id: 'contact-us-btn'}, {id: 'events-btn'}, {id: 'about-us-title'}, {id: 'about-us-text'}, {id: 'jan'}, {id: 'feb'}, {id: 'mar'},
  {id: 'apr'}, {id: 'may'}, {id: 'jun'}, {id: 'jul'}, {id: 'aug'}, {id: 'sep'}, {id: 'oct'}, {id: 'nov'}, {id: 'dec'},
  {id: 'contact-heading'}, {id: 'ch-1'}, {id: 'ch-2'}, {id: 'ch-3'}, {id: 'ch-4'}, {id: 'ch-5'}, {id: 'ch-6'}, {id: 'ch-7'},
  {id: 'ch-8'}, {id: 'contact-details1'}, {id: 'contact-details2'}, {id: 'contact-details3'}, {id: 'contact-details4'}, {id: 'contact-details5'}, {id: 'contact-details6'}, {id: 'contact-details7'}, {id: 'contact-details8'}
];

for(var x = 0; x< navElements.length; x++){
  // if(document.getElementById(navElements[x].id) !== undefined || document.getElementById(navElements[x].id) !== null ){
    navElements[x].element = document.getElementById(navElements[x].id);
  // }
}

if(!language){
  swal({
     title: "Please select a language<br>Kies asseblief 'n taal" +
         "<br>" +
         '<button type="button" role="button" tabindex="0" class="SwalBtn1 customSwalBtn">' + 'English' + '</button>' +
         '<button type="button" role="button" tabindex="0" class="SwalBtn2 customSwalBtn">' + 'Afrikaans' + '</button>',
     html: "Some Text" +
         "<br>" +
         '<button type="button" role="button" tabindex="0" class="SwalBtn1 customSwalBtn">' + 'English' + '</button>' +
         '<button type="button" role="button" tabindex="0" class="SwalBtn2 customSwalBtn">' + 'Afrikaans' + '</button>',
     showCancelButton: false,
     showConfirmButton: false
  });
}
$(document).on('click', '.SwalBtn1', function() {
 //Some code 1
 localStorage['language'] = 'english';
 window.location.reload()
});
$(document).on('click', '.SwalBtn2', function() {
 //Some code 2
 localStorage['language'] = 'afrikaans';
 window.location.reload()

});

  switch(language){
    case 'english':
      navElements.forEach(function(element){
        translations[language].forEach(function(translation){
          if(translation.id === element.id){
            if(element.element){
              element.element.innerHTML = translation.text;
            }
          }
        })
      })
    break;
    case 'afrikaans':
    navElements.forEach(function(element){
      translations[language].forEach(function(translation){
        if(translation.id === element.id){
          if(element.element){
            element.element.innerHTML = translation.text;
          }
        }
      })
    })
    break;
    default:
    language = 'english';
    navElements.forEach(function(element){
      translations[language].forEach(function(translation){
        if(translation.id === element.id){
          if(element.element){
            element.element.innerHTML = translation.text;
          }
        }
      })
    })

  }
