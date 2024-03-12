import { sendReply } from "enmity/api/clyde";
import { REST } from "enmity/modules/common";
import { Command, ApplicationCommandOptionType, ApplicationCommandType, ApplicationCommandInputType } from "enmity/api/commands";

const sendwebhook: Command = {
    id: "sendwebhook",
    name: "sendwebhookmessage",
    displayName: "sendwebhookmessage",

    description: "Send a message through a webhook.",
    displayDescription: "Send a message through a webhook.",

    type: ApplicationCommandType.Chat,
    inputType: ApplicationCommandInputType.BuiltInText,

    options: [{
        name: "url",
        displayName: "url",
        description: "The URL of the webhook.",
        displayDescription: "The URL of the webhook.",
        type: ApplicationCommandOptionType.String,
        required: true
    }],

    execute: async function (args, message) {
        const webhookUrl = args[args.findIndex(i => i.name === "url")].value;

        /* Work in progress, since sending was broken in a later API update
        const res = new XMLHttpRequest();
        res.open("POST", "" + webhookUrl);
        res.setRequestHeader('Content-type', 'application/json');
        res.setRequestHeader('Accept', 'application/json');
        res.setRequestHeader('Accept-Language', 'en');
        */

        try {
            const res = await REST.delete(webhookUrl);
            console.log("[WebhookManager] Webhook deletion response: " + JSON.stringify(res));
            if (res.ok == true) {
                sendReply(message?.channel.id ?? "0", "Webhook deleted successfully.");
            }
            else {
                console.log("[WebhookManager] Webhook deletion failed, output: " + res.status);
                sendReply(message?.channel.id ?? "0", "There was an error deleting the webhook. Check the console for more info.");
            }
        }
        catch
        {
            console.log("[WebhookManager] Webhook deletion failed.");
            sendReply(message?.channel.id ?? "0", "There was an error deleting the webhook.");
        }
    }
}
export { sendwebhook }