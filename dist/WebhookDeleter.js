function b(e){window.enmity.plugins.registerPlugin(e)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const s=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token;const k=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function v(e){return window.enmity.patcher.create(e)}function m(e,n,t,r){window.enmity.clyde.sendReply(e,n,t,r)}var c;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(c||(c={}));var u;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(u||(u={}));var i;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(i||(i={}));var h;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(h||(h={}));var w;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(w||(w={}));var a;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(a||(a={}));const S={id:"deletewebhook",name:"deletewebhook",displayName:"deletewebhook",description:"deletes a webhook if given a webhook url",displayDescription:"Deletes a webhook.",type:u.Chat,inputType:i.BuiltInText,options:[{name:"webhookurl",displayName:"url",description:"Input the url of the webhook you are trying to delete",displayDescription:"Input the url of the webhook you are trying to delete",type:w.String,required:!0}],execute:async function(e,n){var t,r,d;const g=e[e.findIndex(l=>l.name==="webhookurl")].value;try{const l=await k.delete(g);return l.result==!0?m((t=n==null?void 0:n.channel.id)!=null?t:"0","Webhook deleted successfully."):(console.log("[WebhookDeleter] Webhook deletion failed, output: "+l.result),m((r=n==null?void 0:n.channel.id)!=null?r:"0","There was an error deleting the webhook. Check the console for more info."))}catch{return console.log("[WebhookDeleter] Webhook deletion failed."),m((d=n==null?void 0:n.channel.id)!=null?d:"0","There was an error deleting the webhook. Check the console for more info.")}}};var F="WebhookDeleter",f="1.0.0",y="Deletes webhooks by using a command.",B=[{name:"byron",id:"639577344276692992"}],x="#00007d",D="https://github.com/byeoon/WebhookDeleter",R={name:F,version:f,description:y,authors:B,color:x,sourceUrl:D};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl,o.ScrollView,o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const M=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel;const I=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var W=({settings:e})=>s.createElement(M,{label:"Example Setting",trailing:s.createElement(I,{value:e.get("example",!0),onValueChange:()=>e.toggle("example",!0)})});const L=v("WebhookDeleter"),N={...R,onStart(){console.log("[WebhookDeleter] Hello World!"),this.commands=[S]},onStop(){L.unpatchAll(),this.commands=[]},getSettingsPanel({settings:e}){return s.createElement(W,{settings:e})}};b(N);
