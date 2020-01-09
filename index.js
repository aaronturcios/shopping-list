function createListHtml(value){
	return `<li><span class="shopping-item">${value}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
}
// adds shopping item to the list 

function addShoppingItem() {
	$('#js-shopping-list-form').on('submit', function(e){
		e.preventDefault();

		const value = $('#shopping-list-entry').val();
		console.log(value);

		$('.shopping-list').append($(createListHtml(value)));
		$('#shopping-list-entry').val('');
	})
}
// removes shopping item from the list 

function removeItem(){
	$('.shopping-list').on('click', '.shopping-item-delete', function(e){
		e.preventDefault();
		$(e.target).closest('li').remove();
	})
}

// checks off items

function checkOffItem(){
	$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
		e.preventDefault();
		$(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

	})
;
};


$(addShoppingItem)
$(checkOffItem)
$(removeItem)