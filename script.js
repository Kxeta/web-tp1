var buttons = document.getElementsByTagName('button');

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', 
                                function(e) { 
                                    if(e.target.parentElement.className.indexOf("expandido") >= 0){
                                        e.target.parentElement.className = "";
                                    }else{
                                        
                                        e.target.parentElement.className = "expandido" 
                                    }
                                }
                                , false)
}
