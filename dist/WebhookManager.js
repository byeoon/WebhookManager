function k(e){window.enmity.plugins.registerPlugin(e)}const u=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const r=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token;const g=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const S=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function v(e){return window.enmity.patcher.create(e)}function d(e,n,l,i){window.enmity.clyde.sendReply(e,n,l,i)}var b;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(b||(b={}));var h;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(h||(h={}));var c;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(c||(c={}));var f;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(f||(f={}));var w;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(w||(w={}));var y;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(y||(y={}));const M={id:"deletewebhook",name:"deletewebhook",displayName:"deletewebhook",description:"Deletes a webhook",displayDescription:"Deletes a webhook.",type:h.Chat,inputType:c.BuiltInText,options:[{name:"webhookurl",displayName:"url",description:"Input the url of the webhook you are trying to delete",displayDescription:"Input the url of the webhook you are trying to delete",type:w.String,required:!0}],execute:async function(e,n){var l,i,m;const t=e[e.findIndex(s=>s.name==="webhookurl")].value;try{const s=await g.delete(t);return console.log("[WebhookManager] Webhook deletion response: "+JSON.stringify(s)),s.ok==!0?d((l=n==null?void 0:n.channel.id)!=null?l:"0","Webhook deleted successfully."):(console.log("[WebhookManager] Webhook deletion failed, output: "+s.status),d((i=n==null?void 0:n.channel.id)!=null?i:"0","There was an error deleting the webhook. Check the console for more info."))}catch{return console.log("[WebhookManager] Webhook deletion failed."),d((m=n==null?void 0:n.channel.id)!=null?m:"0","There was an error deleting the webhook.")}}},R={id:"webhookinfo",name:"webhookinfo",displayName:"webhookinfo",description:"Gets information on who created the webhook and extra details.",displayDescription:"Gets information on who created the webhook and extra details.",type:h.Chat,inputType:c.BuiltInText,options:[{name:"webhookurl",displayName:"url",description:"Input the url of the webhook you are trying to retrieve info from.",displayDescription:"Input the url of the webhook you are trying to retrieve info from.",type:w.String,required:!0}],execute:async function(e,n){var l,i;const m=e[e.findIndex(t=>t.name==="webhookurl")].value;try{const t=await g.get(m);return console.log("[WebhookManager] Webhook GET response: "+JSON.stringify(t)),d((l=n==null?void 0:n.channel.id)!=null?l:"0",`Information properly recieved. 
 Username `+t.name+`
 Profile: https://img.discord.dog/`+t.user.id)}catch(t){return console.log("[WebhookManager] Webhook GET failed: "+t),d((i=n==null?void 0:n.channel.id)!=null?i:"0","There was an error getting information the webhook.")}}};var F="WebhookManager",E="1.0.0.1",x="Manage your webhooks easily; delete, send messages, get info and more.",B=[{name:"byron",id:"639577344276692992"}],D="#00007d",W="https://github.com/byeoon/WebhookManager",I=["Bug fixes and better error handling"],N={name:F,version:E,description:x,authors:B,color:D,sourceUrl:W,changelog:I};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const L=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const a=o.Text;o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable;const U=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const G=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var V=({settings:e})=>{const n=S.createThemedStyleSheet({title:{flexDirection:"column"},pluginTitle:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:u.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:45,color:u.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:u.ThemeColorMap.HEADER_SECONDARY},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:u.ThemeColorMap.HEADER_SECONDARY}});return r.createElement(L,null,r.createElement(U,{style:n.title},r.createElement(a,{style:n.pluginTitle},"WebhookManager"),r.createElement(a,{style:n.pluginAuthor},"Developed by byron"),r.createElement(a,{style:n.pluginAuthor},"Version 1.0.2"),r.createElement(a,{style:n.br}," "),r.createElement(a,{style:n.tab},"Settings (None)")),r.createElement(G,{label:""}))};const H=v("WebhookManager"),P={...N,onStart(){console.log("[WebhookManager] Hello World!"),this.commands=[M,R]},onStop(){H.unpatchAll(),this.commands=[]},getSettingsPanel({settings:e}){return r.createElement(V,{settings:e})}};k(P);
