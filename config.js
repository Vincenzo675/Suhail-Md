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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "918787487369" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918787487369";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_12_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDcyLFxuICAgICAgICA1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICA4NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MixcbiAgICAgICAgMjExLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NixcbiAgICAgICAgMjUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgODksXG4gICAgICAgIDE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImx2S3B5QW9NZTJJSUd3MHI4RG1HQVVibHU2bUVSS3hQanc1dC9nNUZpbXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkU2VGNkRnQ3U2R5MVZiUHppUVpoTXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzA1NzhhNDEtZDkyZi00Zjg5LWExYzktYzBiYTMzYzg4NmU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMTgyLFxuICAgICAgODIsXG4gICAgICAxNDMsXG4gICAgICA4NCxcbiAgICAgIDEwOSxcbiAgICAgIDEyNyxcbiAgICAgIDkzLFxuICAgICAgNTYsXG4gICAgICAxNzUsXG4gICAgICA1NCxcbiAgICAgIDIzMixcbiAgICAgIDYwLFxuICAgICAgMTk0LFxuICAgICAgODEsXG4gICAgICAxNDEsXG4gICAgICAxOTEsXG4gICAgICAxNTQsXG4gICAgICAyNDUsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAzOCxcbiAgICAgIDE4MyxcbiAgICAgIDEyMyxcbiAgICAgIDIzMixcbiAgICAgIDI0NixcbiAgICAgIDgyLFxuICAgICAgMTMyLFxuICAgICAgMjAxLFxuICAgICAgMjE5LFxuICAgICAgMjExLFxuICAgICAgMTg4LFxuICAgICAgMjE5LFxuICAgICAgMTMsXG4gICAgICAyNDUsXG4gICAgICAyMjQsXG4gICAgICA0LFxuICAgICAgMTYzLFxuICAgICAgMjQ1LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0UyVEJMWTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNjkwOTI5NzI0Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjYwNTY1NDc0Mzg2NjU6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdWh1N2NFRUpQZmhMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFZbXJVUkFxbURkVENVU3ZWY2pJNXZwbzhTZ29aRXg5dk5HODZDZGcxMUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZDlZT1R1VEx2ampaS0JwMnFIU0ozR282NzRKTVlTd0UwSVg2SU4wMDlNbEhJclNEQ0MyNklNVi9kdFc5YnkwUVBZZmNkOTBVYW9jWnF0K0FmT2htQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQXJwdTZjSEphVWE4ek9sNC9jck5yYUdMb3IvOTlpaDFQTEpRd3hjR1pJU3EvL1ZwRkdLelN2b3FSa3VRVU82d1VCZHgxS2JJalVkekk0dGhmUHVDQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2OTA5Mjk3MjQ3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3NDIzNThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Vincenzo¹²³』```", //*『sᴜʙsᴄʀɪʙᴇ • craftastic land』*\n youtube.com/@craftasticland?si=gzrDp2pEXpIiiqAk"),
 
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
  LANG: ( process.env.THEME ||  "VINCENZO"  ).toUpperCase(),



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
