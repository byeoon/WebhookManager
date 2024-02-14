import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import { deletewebhook } from './commands/deletewebhook';
import manifest from '../manifest.json';
import Settings from './components/Settings';


const Patcher = create('WebhookDeleter');
const WebhookDeleter: Plugin = {
   ...manifest,

   onStart() {
      console.log("[WebhookDeleter] Hello World!");
      this.commands = [deletewebhook];
   },

   onStop() {
      Patcher.unpatchAll();
      this.commands = [];
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(WebhookDeleter);
