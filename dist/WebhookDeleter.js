function k(e){window.enmity.plugins.registerPlugin(e)}const i=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token;const v=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const y=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function f(e){return window.enmity.patcher.create(e)}function d(e,t,s,m){window.enmity.clyde.sendReply(e,t,s,m)}var a;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(a||(a={}));var u;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(u||(u={}));var w;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(w||(w={}));var g;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(g||(g={}));var c;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(c||(c={}));var b;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(b||(b={}));const D={id:"deletewebhook",name:"deletewebhook",displayName:"deletewebhook",description:"Deletes a webhook",displayDescription:"Deletes a webhook.",type:u.Chat,inputType:w.BuiltInText,options:[{name:"webhookurl",displayName:"url",description:"Input the url of the webhook you are trying to delete",displayDescription:"Input the url of the webhook you are trying to delete",type:c.String,required:!0}],execute:async function(e,t){var s,m,h;const S=e[e.findIndex(l=>l.name==="webhookurl")].value;try{const l=await v.delete(S);return console.log("[WebhookDeleter] Webhook deletion response: "+JSON.stringify(l)),l.ok==!0?d((s=t==null?void 0:t.channel.id)!=null?s:"0","Webhook deleted successfully."):(console.log("[WebhookDeleter] Webhook deletion failed, output: "+l.status),d((m=t==null?void 0:t.channel.id)!=null?m:"0","There was an error deleting the webhook. Check the console for more info."))}catch{return console.log("[WebhookDeleter] Webhook deletion failed."),d((h=t==null?void 0:t.channel.id)!=null?h:"0","There was an error deleting the webhook.")}}};var R="WebhookDeleter",F="1.0.0",E="Delete webhooks with a slash command.",B=[{name:"byron",id:"639577344276692992"}],M="#00007d",x="https://github.com/byeoon/WebhookDeleter",N=["Updated the settings tab to look cleaner."],W={name:R,version:F,description:E,authors:B,color:M,sourceUrl:x,changelog:N};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const L=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const r=o.Text;o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable;const I=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const U=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var V=({settings:e})=>{const t=y.createThemedStyleSheet({title:{flexDirection:"column"},pluginTitle:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:i.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:45,color:i.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:i.ThemeColorMap.HEADER_SECONDARY},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:i.ThemeColorMap.HEADER_SECONDARY}});return n.createElement(L,null,n.createElement(I,{style:t.title},n.createElement(r,{style:t.pluginTitle},"WebhookDeleter"),n.createElement(r,{style:t.pluginAuthor},"Developed by byron"),n.createElement(r,{style:t.pluginAuthor},"Version 1.0.0"),n.createElement(r,{style:t.br}," "),n.createElement(r,{style:t.tab},"Settings (No Settings Available)")),n.createElement(U,{label:""}))};const H=f("WebhookDeleter"),z={...W,onStart(){console.log("[WebhookDeleter] Hello World!"),this.commands=[D]},onStop(){H.unpatchAll(),this.commands=[]},getSettingsPanel({settings:e}){return n.createElement(V,{settings:e})}};k(z);
