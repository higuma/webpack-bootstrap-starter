// Import Sass
import '../scss/style.scss';

// Import jQuery
import $ from 'jquery';

// Import required Bootstrap JavaScript plugins as ES6 modules
import 'bootstrap/js/src/button';
import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/collapse';
import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/tooltip';
import 'bootstrap/js/src/popover';

// jQuery & Bootstrap plugins code examples
// (same as step 8 but written in ES6 syntax)
// ------------------------------------------

// Add self links to headings with ID's
$('h2[id],h3[id],h4[id],h5[id],h6[id]').each((index, element) => {
  $(element).append(`<a class="link-heading" href="#${element.id}">#</a>`);
});

// Enable Tooltips
$('[data-toggle="tooltip"]').tooltip();

// Enable Popovers
$('[data-toggle="popover"]').popover();

// Enable custom file browsers
['en','es','ja'].forEach((lang) => {
  $(`#custom-file-${lang}`).on('change', (event) => {
    let target = event.target;
    $(`[for="custom-file-${lang}"]`).text($(target).prop('files')[0].name);
  });
});

// Modal validation
$('.needs-validation').on('submit', (event) => {
  let target = event.target;
  if (!target.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  $(target).addClass('was-validated');
});
