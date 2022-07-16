document.querySelector("#turn").onclick=function(){
    var source = document.querySelector(".e1").value
    document.querySelector(".e2").innerHTML = html2md(source);
    hljs.highlightAll();
};