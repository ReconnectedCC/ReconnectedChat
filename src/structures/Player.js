/*
    SwitchChat Chatbox Module for SwitchCraft

    Copyright (c) 2019 Alessandro "Ale32bit"

    https://github.com/Ale32bit/SwitchChat
 */

module.exports = class Player {
    constructor(client, data){
        this.client = client;

        this.name = data.name;
        this.uuid = data.uuid;
        this.displayName = data.displayName || this.name;
        this.displayNameFormatted = data.displayNameFormatted || this.displayName;
        this.nickname = this.displayName;
        this.username = this.name;
        this.world = data.world;
        this.group = data.group || "default";
    }

    /**
     * Tell a message to a player
     * @param {string} message Content of the message
     * @param {string} [label] Label of the message
     * @param {string} [mode] Mode prefered to display the message. "markdown" and "format"
     * @example
     * player.tell("Hello, world!", "SteveBot", "markdown")
     */
    async tell (message, label, mode = "markdown") {
        if (this.client.hasCapability("tell")) {
            this.client._addMessage(JSON.stringify({
                type: "tell",
                user: this.name,
                text: message,
                name: label,
                mode: mode || "markdown",
            }))
        } else {
            throw "Missing 'tell' capability";
        }
    }

    toString() {
        return this.name;
    }

    get [Symbol.toStringTag]() {
        return "Player";
    }
};