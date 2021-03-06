// The Mediator Pattern
function Member(name) {
    this.name = name;
    this.chatroom = null;
}

Member.prototype = {
    send:function(message, toMember) {
        // args: message, person from, person to
        this.chatroom.send(message, this, toMember);
    },

    receive:function(message, fromMember) {
        console.log(`From ${fromMember.name} to ${this.name}: ${message}`)
    }
}



// keep track of the current members in the chatroom
function Chatroom() {
    this.members = {}
}


Chatroom.prototype = {
    addMember:function(member) {
        // use the name of the member you want to add as a key
        this.members[member.name] = member;
        // set the chatroom to the chat room their in (this one)
        member.chatroom = this;
    },
    // args:msg, whoMsgFrom, whoMsgTo
    send:function(message, fromMember, toMember) {
        toMember.receive(message, fromMember)
    }
}

const chat = new Chatroom()

const bob = new Member("bob")
const tim = new Member("tim")
const ali = new Member("ali")

// add members to chatroom
chat.addMember(bob)
chat.addMember(tim)
chat.addMember(ali)

// send a message
bob.send("this is bobs message", ali)
ali.send("thank you for the msg bob :)", bob);
tim.send("What's up", ali)