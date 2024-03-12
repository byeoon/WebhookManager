import { sendReply } from "enmity/api/clyde";
import { REST } from "enmity/modules/common";
import { Command, ApplicationCommandOptionType, ApplicationCommandType, ApplicationCommandInputType } from "enmity/api/commands";

const deletewebhook: Command = {
    id: "deletewebhook",
    name: "deletewebhook",
    displayName: "deletewebhook",

    description: "Delete a webhook.",
    displayDescription: "Delete a webhook.",

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
export { deletewebhook }