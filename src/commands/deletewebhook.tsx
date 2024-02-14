import { sendReply } from "enmity/api/clyde";
import { REST } from "enmity/modules/common";
import { Command, ApplicationCommandOptionType, ApplicationCommandType, ApplicationCommandInputType } from "enmity/api/commands";

const deletewebhook: Command = {
    id: "deletewebhook",
    name: "deletewebhook",
    displayName: "Delete Webhook",

    description: "deletes a webhook if given a webhook url",
    displayDescription: "Deletes a webhook.",

    type: ApplicationCommandType.Chat,
    inputType: ApplicationCommandInputType.BuiltInText,

    options: [{
        name: "webhookurl",
        displayName: "url",
        description: "Input the url of the webhook",
        displayDescription: "Input the url of the webhook",
        type: ApplicationCommandOptionType.String,
        required: true
    }],

    execute: async function (args, message) {
        const webhookUrl = args[args.findIndex(i => i.name === "webhookurl")].value;

        try 
        {
            const res = await REST.delete(webhookUrl.value);
            if(res.result == 204) {
                return {
                    content: "Deleted webhook with result: " + res.result
                }
            }
            else
            {
                return sendReply(message?.channel.id ?? "0", "There was an error deleting the webhook. " + res.result);
            }    
        }
        catch
        {
            return sendReply(message?.channel.id ?? "0", "There was an error deleting the webhook.");
        }
        
        

    }
}
export { deletewebhook }