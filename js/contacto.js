var checkauth=document.getElementById("autorizacion")

checkauth.onclick=function(){
    if(checkauth.checked==true){
        document.getElementById("btnEnviar").disabled=false;
    }else{
        document.getElementById("btnEnviar").disabled=true;

    }

}

