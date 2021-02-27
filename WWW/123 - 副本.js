window.onload = function(){
    var btn = document.querySelector('input');
    var text = document.querySelector('textarea');
    var list = document.querySelector('#list');
    var colors = ["a","b"];
    var nub = 0;

    /*检测输入框是否有内容*/
    btn.onclick = function(){
        if(text.value.trim() == ""){
        alert("内容不能为空");
        return false;
    }

    /*表格样式*/
    var li = document.createElement("ul");
    li.innerHTML = text.value;
    if(list.children[0]&&list.children[0].className=="a"){
        li.className = "b";
    } else {
        li.className = "a";
    }
    var a = null;

    /*创建节点*/
    list.appendChild(li,list.children[0]);
    text.value = "";
    nub++;
};
};
