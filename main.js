function test(event){
    event.preventDefault();
    var uid=event.target.Email1.value;
    var uemail=event.target.Password1.value;
    var mobile=event.target.Mobile1.value;

    const obj={
        uid,
        uemail,
        mobile
    }


localStorage.setItem(obj.uid,JSON.stringify(obj))
//localStorage.setItem(obj.uemail,JSON.stringify(obj))
//localStorage.setItem(obj.mobile,JSON.stringify(obj))
showuser(obj)
}
function showuser(obj)
{
    const parente = document.getElementById('list')
    const childe=document.createElement('li')
    childe.textContent=obj.uid+' '+ obj.uemail+' '+obj.mobile;
    parente.appendChild(childe)

    const deletebutton=document.createElement('input')
    deletebutton.type="button"
    deletebutton.value='Delete'
    deletebutton.onclick=()=>{
        localStorage.removeItem(obj.uid)
        parente.removeChild(childe)
    }
    childe.appendChild(deletebutton)
    parente.appendChild(childe)
}