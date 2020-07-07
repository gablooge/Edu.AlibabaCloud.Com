
var i = 187;
var dataTable = new Array();
var tableHeaders = ["No.", "Title", "Description", "URL"];
var url_ = 'https://edu.alibabacloud.com/clouder/exam/intro/';
dataTable.push(tableHeaders);

function loadPage(id){
	var ifrm = document.createElement('iframe');

	ifrm.setAttribute('id', 'ifrm'); 
	var el = document.getElementById('content-container');
	el.parentNode.insertBefore(ifrm, el);
	ifrm.style.display = "none"
	ifrm.addEventListener("load", function(){
		var nd = [id-5, ifrm.contentWindow.document.getElementsByClassName("e-title")[0].innerText, ifrm.contentWindow.document.getElementsByClassName("e-sub-title")[0].innerText, url_+''+id];
		console.log(nd)
		dataTable.push(nd);
		if(id < 233){
			ifrm.remove();
			loadPage(id+1);
		}else{
			console.log(id+" Data All Loaded...")
			console.log("generating csv...");
			let csvContent = "data:text/csv;charset=utf-8,";
			dataTable.forEach(function(rowArray) {
			    let row = rowArray.join(",");
			    csvContent += row + "\r\n";
			});
			console.log("downlading csv...");
			var encodedUri = encodeURI(csvContent);
			var link = document.createElement("a");
			link.setAttribute("href", encodedUri);
			link.style.display = 'none';
			link.setAttribute("download", "abc-exam.csv");
			link.innerHTML = "Click Here to download";
			document.body.appendChild(link);
			link.click();
			link.remove();
			console.log("finish...");

		}
		
	});
	ifrm.setAttribute('src', url_+''+id);
}
loadPage(i);



// do {
// 	var ifrm = document.createElement('iframe');

// 	ifrm.setAttribute('id', 'ifrm'); 
// 	var el = document.getElementById('content-container');
// 	el.parentNode.insertBefore(ifrm, el);
// 	ifrm.style.display = "none"
// 	ifrm.addEventListener("load", function(){

// 	});
// 	ifrm.setAttribute('src', url_+''+i);

// 	// while (ifrm.contentWindow.document.getElementsByClassName("e-title").length < 1) {
// 	// 	console.log("Waiting... "+i)
// 	// 	ifrm.contentWindow.document.getElementsByClassName("e-title")
// 	// }
// 	dataTable.push([i-5, ifrm.contentWindow.document.getElementsByClassName("e-title")[0].innerText, ifrm.contentWindow.document.getElementsByClassName("e-sub-title")[0].innerText, url_+''+i]);

// 	ifrm.remove()
// 	console.log("..."+i);
// 	i++;
// }
// while (i < 234);

