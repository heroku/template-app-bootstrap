// Replace each {{app-name}} with the real name application
jQuery(document).ready(function($) {

    // We could define it from HTML
    if (nameApp == undefined) var nameApp = "your-app";

    // We look into the DOM per each element with {{app-name}}
    $('*:contains("{{app-name}}")').each(function() {

        // jQuery :contains selector return every node in its tree. We just want the real container (= just 1 child)    
        if($(this).children().length < 1) {

            // We replace {{app-name}} for your new Application name and we assigned into itself
            $(this).html($(this).html().replace("{{app-name}}",nameApp));
            
        }
    });
    
});
