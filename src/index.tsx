import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import { deletewebhook } from './commands/deletewebhook';
import manifest from '../manifest.json';
import Settings from './components/Settings';
import { webhookinfo } from './commands/webhookinfo';


const Patcher = create('WebhookManager');
const WebhookManager: Plugin = {
   ...manifest,

   onStart() {
      console.log("[WebhookManager] Hello World!");
      this.commands = [deletewebhook, webhookinfo];
   },
   onStop() {
      Patcher.unpatchAll();
      this.commands = [];
   },
   
   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(WebhookManager);
