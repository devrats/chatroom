/*   Created by IntelliJ IDEA.
 *   Author: Devvrat Sharma (devrats)
 *   Date: 30-Aug-21
 *   Time: 5:09 PM
 *   File: Controller.java
 */

package com.example.chatroom;


import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @MessageMapping("message")
    @SendTo("/chat/chatBox")
    @ResponseBody
    public Message message(@RequestBody Message message){
        return message;
    }
}