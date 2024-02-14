import { sendReply } from "enmity/api/clyde";
import { REST } from "enmity/modules/common";
import { Command, ApplicationCommandOptionType, ApplicationCommandType, ApplicationCommandInputType } from "enmity/api/commands";

const deletewebhook: Command = {
    id: "deletewebhook",
    name: "deletewebhook",
    displayName: "deletewebhook",

    description: "deletes a webhook if given a webhook url",
    displayDescription: "Deletes a webhook.",

    type: ApplicationCommandType.Chat,
    inputType: ApplicationCommandInputType.BuiltInText,

    options: [{
        name: "webhookurl",
        displayName: "url",
        description: "Input the url of the webhook you are trying to delete",
        displayDescription: "Input the url of the webhook you are trying to delete",
        type: ApplicationCommandOptionType.String,
        required: true
    }],

    execute: async function (args, message) {
        const webhookUrl = args[args.findIndex(i => i.name === "webhookurl")].value;

        try 
        {
            const res = await REST.delete(webhookUrl);
            if(res.result == true) {
                return sendReply(message?.channel.id ?? "0", "Webhook deleted successfully.");
            }
            else
            {
                console.log("[WebhookDeleter] Webhook deletion failed, output: " + res.result);
                return sendReply(message?.channel.id ?? "0", "There was an error deleting the webhook. Check the console for more info.");
            }    
        }
        catch
        {
            console.log("[WebhookDeleter] Webhook deletion failed.");
            return sendReply(message?.channel.id ?? "0", "There was an error deleting the webhook. Check the console for more info.");
        }
    }
}
export { deletewebhook }