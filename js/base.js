//this expands and reduces articles and vertical menu sections
function expand(div,id){    
        if($('#' + div).hasClass('summary')){
                $().click(function () {
                  $('#' + div).removeClass("summary", 1000).addClass("full_view", 1000);
		  $(location).attr('href','#'+ id );
                  $('#button_' + div).addClass("collapse", 1000);
         
                });
        }
        else{
                $().click(function () {
         
                  $('#' + div).removeClass("full_view", 1000).addClass("summary", 1000);
		  $(location).attr('href','#'+ id );
                  $('#button_' + div).removeClass("collapse", 1000);
         
                });
        };

};

function collapse_all(){
	$(location).attr('href','#');
	$('div.full_view').removeClass('full_view').addClass('summary');
	$('div.button').removeClass('collapse');
};


//This sorts articles by tags
$(document).ready(function() {
	$('ul#filter a').click(function() {
		$(this).css('outline','none');
		$('ul#filter .current').removeClass('current');
		$(this).parent().addClass('current');
		
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
				
		if(filterVal == 'all') {
			$('ul#articles_container li.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			
			$('ul#articles_container li').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut('normal').addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		
		return false;
	});
});


//This sorts articles by author name
$(document).ready(function() {
	$('div#authors a').click(function() {
		$(this).css('outline','none');
		$('div#authors .current').removeClass('current');
		$(this).parent().addClass('current');
		
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
				
		if(filterVal == 'all') {
			$('ul#articles_container li.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			
			$('ul#articles_container li').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut('normal').addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		
		return false;
	});
});