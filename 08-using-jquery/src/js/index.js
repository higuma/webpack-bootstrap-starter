// Import Sass
import '../scss/style.scss';

// Import Bootstrap JavaScript plugin
import 'bootstrap';

// Import (use) jQuery
import $ from 'jquery';

// jQuery & Bootstrap plugins code examples
// ----------------------------------------

// Add self links to headings with ID's
$('h2[id],h3[id],h4[id],h5[id],h6[id]').each(function() {
  $(this).append('<a class="link-heading" href="#' + this.id + '">#</a>');
});

// Enable Tooltips
$('[data-toggle="tooltip"]').tooltip();

// Enable Popovers
$('[data-toggle="popover"]').popover();

// Enable custom file browsers
['en','es','ja'].forEach(function(lang) {
  $('#custom-file-' + lang).on('change', function(event) {
    $('[for="custom-file-' + lang + '"]').text($(this).prop('files')[0].name);
  });
});

// Modal validation
$('.needs-validation').on('submit', function(event) {
  if (!this.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  $(this).addClass('was-validated');
});
