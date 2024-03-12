import { FormRow, View, ScrollView, Text, FormSwitch } from 'enmity/components'
import { SettingsStore } from 'enmity/api/settings';
import { Constants, React, StyleSheet } from 'enmity/metro/common'
import manifest from '../../manifest.json';
import { getByProps } from "enmity/metro";
import {Linking} from "enmity/metro/common"

const Clipboard = getByProps("setString");
const { default: Button } = getByProps("ButtonColors", "ButtonSizes");

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
  
   const styles = StyleSheet.createThemedStyleSheet({
      title: {
         flexDirection: "column",
      },
      pluginTitle: {
         fontSize: 30,
         paddingTop: 20,
         paddingLeft: 20,
         paddingRight: 30,
         color: Constants.ThemeColorMap.HEADER_PRIMARY,
      },
      pluginAuthor: {
         fontSize: 12,
         paddingLeft: 45,
         color: Constants.ThemeColorMap.HEADER_SECONDARY,
      },
      br: {
         fontSize: 0,
         paddingTop: 20,
         paddingLeft: 20,
         paddingRight: 30,
         color: Constants.ThemeColorMap.HEADER_SECONDARY,
      },
      tab: {
         fontSize: 14,
         paddingTop: 20,
         paddingLeft: 20,
         paddingRight: 25,
         color: Constants.ThemeColorMap.HEADER_SECONDARY,
      }
   })
   return (
      <ScrollView>
         <View style={styles.title}>
            <Text style={styles.pluginTitle}>WebhookManager</Text>
            <Text style={styles.pluginAuthor}>Developed by byron</Text>
            <Text style={styles.pluginAuthor}>Version {manifest.version}</Text>
            <Text style={styles.br}> </Text>
            <Text style={styles.br}> </Text>

            <Button
            color={Button.Colors.BRAND}
            text={"Copy Plugin Link"}
            size={Button.Sizes.SMALL}
            onPress={() => {
            Clipboard.setString(
               "https://raw.githubusercontent.com/byeoon/WebhookManager/main/dist/WebhookManager.js"
            );
        }}
      />
        <Text style={styles.br}> </Text>

        <Button
        color={Button.Colors.BRAND}
        text={"Visit GitHub Repository"}
        size={Button.Sizes.SMALL}
        onPress={() => {
         Linking.openURL("https://github.com/byeoon/WebhookManager");
        }}
      />
        <Text style={styles.br}> </Text>
        <Text style={styles.br}> </Text>

      <Text style={styles.pluginAuthor}>Changelog: {manifest.changelog}</Text>

         </View>
      </ScrollView>
   )
};