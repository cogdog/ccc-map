// put in place the module number and the link to github edit space
function setSectionNumbers( modnum, submod, itemnum) {
	$("#ccmodsect").text(itemnum);
	
	$("a#gh-edit-link").attr('href', 'https://github.com/cogdog/ccc-map/blob/gh-pages/content/module' + modnum + '/' + submod + '/' + itemnum + '.html');
}
