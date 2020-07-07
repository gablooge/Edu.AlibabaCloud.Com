var title_content = document.getElementsByClassName("title-content")[0].innerText
var number_btn_list = document.getElementsByName("number_btn")
var locs = location.href.split("/")

var answerChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"]
var textFile = "";
var makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});
    return window.URL.createObjectURL(data);
};

function getData(no){
  let item = number_btn_list[no];
  var myAnswer = [];
  item.click();
  let questionItem = document.getElementsByClassName("question-item")[no];
  textFile += questionItem.innerText + "\r\n\r\n";
  let qi = questionItem.querySelectorAll("input");
  for (let j = 0; j < qi.length; j++) {
  	if(qi[j].checked){
  		myAnswer.push(answerChoice[j]);
  	}
  }
  textFile += "My Answer: "+myAnswer.join()+"\r\n\r\n";
  
  if((no+1) < number_btn_list.length){
  	console.log(no+1);
  	getData(no+1)
  }else{
  	console.log(textFile)
	var link = document.createElement("a");
	link.setAttribute("href", makeTextFile(textFile));
	link.style.display = 'none';
	link.setAttribute("download", locs[locs.length-1]+". Exam - "+title_content+".txt");
	link.innerHTML = "Click Here to download";
	document.body.appendChild(link);
	link.click();
	link.remove();
	console.log("finish...");
  }
}
getData(0);
