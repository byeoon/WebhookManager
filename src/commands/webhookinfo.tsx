import { sendReply } from "enmity/api/clyde";
import { REST } from "enmity/modules/common";
import { Command, ApplicationCommandOptionType, ApplicationCommandType, ApplicationCommandInputType } from "enmity/api/commands";

const webhookinfo: Command = {
    id: "webhookinfo",
    name: "webhookinfo",
    displayName: "webhookinfo",

    description: "Retrieve information about a webhook.",
    displayDescription: "Retrieve information about a webhook.",

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
            await fetch(webhookUrl).then(res => res.json())
            .then(res => {
            console.log("[WebhookManager] Webhook GET response: " + JSON.stringify(res));
            sendReply(message?.channel.id ?? "0", `# Webhook Information: \n
            Webhook Username: ` + res.name + `\n
            Webhook ID: ` + res.id + `\n 
            Webhook Token: ` + res.token + `\n
            Channel ID: ` + res.channel_id + `\n
            Server ID:` + res.guild_id + `\n
            Webhook Profile Picture: [Click Me](https://cdn.discordapp.com/avatars/` + res.id + `/` + res.avatar + `.png)` + `\n
            Webhook Type: ` + res.type + `\n \n` +

            `# Webhook Creator Information: \n ` +
           `Creator User ID:` + res.user.id + ` \n
            Creator Username:` + res.user.name + `\n 
            Creator Profile: [Click Me](https://img.discord.dog/` + res.user.id + `) \n`
            );
        })
        }
        catch (error)
        {
            console.log("[WebhookManager] Webhook GET failed: " + error);
            sendReply(message?.channel.id ?? "0", "There was an error getting information the webhook. Check the console for further information.");
        }
    }
}
export { webhookinfo }