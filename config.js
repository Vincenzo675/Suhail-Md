const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="craftybear3444@gmail.com"
global.location="Manipur,India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/IPyhdiW.mp4" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Vincenzo²²¹" 


global.devs = "916909297247" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916909297247";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://api.btstu.cn/sjbz/api.php?lx=1920x1080" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,916xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,916xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "916909297247,916xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_19_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA3LFxuICAgICAgICA5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDkwLFxuICAgICAgICA4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1LFxuICAgICAgICA4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDg2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNixcbiAgICAgICAgODYsXG4gICAgICAgIDI5LFxuICAgICAgICA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc2LFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI4LFxuICAgICAgICA4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMixcbiAgICAgICAgMTMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBBeDJ2Rk5kd3R3bUtYZFVZeUV6RUkwY0s3MHRlcm9UY1ZUeTI0TVVpT0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1FSkRBdmtuUW5lb2I5UjhNTWRqc3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2M4NjVkNzItMGY0Yi00Yjc3LWIzODItNDA5NTJiNGUwOTlkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDIwMSxcbiAgICAgIDE5NixcbiAgICAgIDEzMyxcbiAgICAgIDE2MyxcbiAgICAgIDIzMyxcbiAgICAgIDIyMCxcbiAgICAgIDE5MixcbiAgICAgIDIzMCxcbiAgICAgIDEyMCxcbiAgICAgIDE2MixcbiAgICAgIDc3LFxuICAgICAgMTc2LFxuICAgICAgMTUwLFxuICAgICAgOCxcbiAgICAgIDYzLFxuICAgICAgMTI1LFxuICAgICAgMTA1LFxuICAgICAgMjMsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgODYsXG4gICAgICAyMDQsXG4gICAgICAyMzksXG4gICAgICA3NCxcbiAgICAgIDE0NyxcbiAgICAgIDIxOSxcbiAgICAgIDUsXG4gICAgICAxMixcbiAgICAgIDE1MSxcbiAgICAgIDQzLFxuICAgICAgNDcsXG4gICAgICAyMzUsXG4gICAgICAxMSxcbiAgICAgIDIyOCxcbiAgICAgIDMxLFxuICAgICAgNDQsXG4gICAgICAxNDMsXG4gICAgICAzMSxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxNERDS0xMQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2OTA5Mjk3MjQ3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjYwNTY1NDc0Mzg2NjU6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0NodTdjRUVPYXJxclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxWW1yVVJBcW1EZFRDVVN2VmNqSTV2cG84U2dvWkV4OXZORzg2Q2RnMTFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFuMllVejFnL0JmaGtBZkkyaW9mOHVlWFFoZmxGcG95VEhZUVRlb3B1L0dFRTY5NVZEbDRCVmlrVWVJUG1mdE50OVQ3YlduMEtIanhwTHFHZGhyRkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlo2RFVZM2MvWU1qOFJ2aGE1V3o1eUZJYzg2VjhCTWtTMERLUkJUZm9GaEhsNktjempnTmx1K2NocHdsbDVXUmRXRXJ0NG1oSGJrY0JFVUxTcThmbUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNjkwOTI5NzI0NzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM1ODM3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxyR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHJHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUXlObjVGUnpwTVkzR0w4b21pUHBXY1RJNk5sd1VwLy9pZjNuZGdsR3NtYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTkwMDU2MDkzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Vincenzo Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Vincenzo²²¹ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Vincenzo",
  ownername:process.env.OWNER_NAME|| "Vince",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "VINCE"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
