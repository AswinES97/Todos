

$(document).ready(()=>{
    const uname = document.getElementById("username");
    const pass = document.getElementById("password");
    const check={
        unamechk: "admin",
        passchk: "12345"
    }

    const login=()=>{
        window.location.href="todo.html"
    }

    const check1=(e,fn)=>{
        if(uname.value===check.unamechk && pass.value===check.passchk){
           e.preventDefault();

            fn();
        }
        else{
            alert("invalid");
        }
    }
    
    $("#btn").on('click',(e)=>{
        check1(e,login);
    })
}
)