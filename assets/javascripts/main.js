var mainsite = "www.wisevoter.org"
  , editsite = "edit.wisevoter.org";

function setEditorLink(){
  var editorLink = document.getElementById("editorLink")
  if (document.location.hostname === mainsite) {
    editorLink.href = editorLink.href.replace(mainsite,editsite);
  }
  return false;
}

window.onload = function(){
  setEditorLink();
}

// instantiate the bloodhound suggestion engine
var search = new Bloodhound({   
  datumTokenizer: function(d) {
      return Bloodhound.tokenizers.whitespace(d.text); 
    },
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../../search.json'
});
 
// initialize the bloodhound suggestion engine
search.initialize();

// instantiate the typeahead UI
$('.search-input').typeahead(null, {
  displayKey: 'href',
  source: search.ttAdapter(),
  templates: {
    suggestion: Handlebars.compile([
        '<div class="search-elem">',
        '<p class="search-text">{{text}}</p>',
        '<p class="search-category">{{category}}</p>',
        '<p class="search-href">{{href}}</p>',
        '</div>'
    ].join(''))
  }
});

function searchSubmit(){
  console.log("redirecting..")
}