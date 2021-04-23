var socket = io();
      var button = document
        .getElementById("button")
        .addEventListener("click", () => {
          var msg = document.getElementById("data").value;
          socket.emit("message", msg);
          document.getElementById("data").value="";
        });
        socket.on('in-msg',(data)=>{
            var gag=document.createElement('button')
            gag.innerHTML=data
            gag.classList.add('msg-list')
            document.getElementById('ul').appendChild(gag)
        })