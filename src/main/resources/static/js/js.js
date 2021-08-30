let stompClient = null

$("document").ready((e)=>{
    $(".enter-chat-room").click(()=>{
        let name = $("#name").val()
        localStorage.setItem("name",name)
        connect()
    })
})


function connect(){
    let socket = new SockJS("/chatServer")
    stompClient = Stomp.over(socket)
    stompClient.connect({},function(frame) {
        console.log("hey man")
        $(".home").css("display","none")
        $(".chat-box").css("display","block")
        stompClient.subscribe("/chat/chatBox",function (response) {
            showMessage(JSON.parse(response.body))
        })
    })
}

function showMessage(message) {
    $(".table12").prepend(`<th> ${message.name} <td>${message.text}</td></th>`)
}


$("#send").click(()=>{
    sendMessage()
})

function sendMessage() {
    let message = $("#message").val()
    let jasonOb = {
        name:localStorage.getItem("name"),
        text:message
    }
    stompClient.send("/chatting/message",{},JSON.stringify(jasonOb))
}
