debugger;
function book(bookId,title,authorName){
    this.bookId=bookId;
    this.title=title;
    this.authorName=authorName;
}
 function bookToString(book){
     if (book!=null){
        return book.bookId+" "+book.title +" "+book.authorName;
     }else{
         return "Book DNE"
     }
    
}
let booklist=[];//when var html can pick it up, same with using let
booklist[0]=new book("ABC1","Scott's Book", "Scott Grote");
//let book1= booklist[0];
booklist[1]=new book("ABC1","Scott's Book", "Scott Grote");
booklist[2]=new book("ABC2","Scott's Book", "Scott Grote");
booklist[3]=new book("ABC3","Scott's Book", "Scott Grote");
booklist[4]=new book("ABC4","Scott's Book", "Scott Grote");
booklist[5]=new book("ABC5","Scott's Book", "Scott Grote");
booklist[6]=new book("ABC6","Scott's Book", "Scott Grote");
booklist[7]=new book("ABC7","Scott's Book", "Scott Grote");
booklist[8]=new book("ABC8","Scott's Book", "Scott Grote");
//addsElement(bookToString(booklist[0]));
//deletesIt();

function addsElement(textToAdd){
    let tag6 = document.createElement("p");
    let text6= document.createTextNode(textToAdd);
    tag6.appendChild(text6);
    let element6=document.getElementById("new");
    element6.appendChild(tag6);
}


function deletesIt(){
    var node;
    node = document.getElementById("new");
    node.removeChild(node.firstElementChild);
}
function formatsPage(booklist1){
    //debugger;
    for( i=0;i<booklist1.length;i++){
        addsElement(bookToString(booklist1[i]));
    }
}

function deletesBooks(){//this removes all the nodes--books!
    //debugger;
    let node = document.getElementById("new");
    while(node.lastElementChild){
        node.removeChild(node.firstElementChild);
    }
}

var indexNumber=2;
//formatsPage(booklist);
function pullRecords(index=2){
    index=index-100;
    //debugger;
    deletesBooks();
   
    let number1=booklist.length;
    if (number1>6){
        let indexS=((index-1)*6)+1;
        let indexE=(index*6)+1;
        if(indexE>number1){
            indexE=number1;
        }
        for(i=indexS;i<indexE;i++){
            addsElement(bookToString(booklist[i]));
        }
    }
}

function showsID(idClicked){
    alert(idClicked);
}
function addButton(){
    debugger;
    let buttonTag = document.createElement("button");
    buttonTag.innerHTML="this button was added by me";
    let buttonApp= document.getElementById("notnew");
    buttonApp.appendChild(buttonTag);
    buttonTag.addEventListener ("click", function(){
        alert("hi there youve discovered");
    }) 
}
function addButtonToGroup(){
    debugger;
    let buttonTag = document.createElement("button");
    buttonTag.innerHTML="this button was added by me";

    let nodex= document.getElementById("new1");
    let y=nodex.childNodes;
    console.log(y);
    y[14].after(buttonTag);



    //let buttonApp= document.getElementById("new1");
    //buttonApp.appendChild(buttonTag);
}
function addbuttonGroup(){
    for(i=0;i<7;i++){

    }
}
function addOne(){
    debugger;
    let newDiv= document.createElement("div");
    let theBody= document.getElementById("new1");
    theBody.after(newDiv);
    let newP=document.createElement("p");
    let text9= document.createTextNode("called this p this");
    newP.appendChild(text9);
    theBody.appendChild(newP);

}
//addOne();
function addsButtons(){
    let newDiv= document.createElement("button");
    

}
