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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://api.btstu.cn/sjbz/api.php?lx=1920x1080", "https://img.xjh.me/random_img.php?type=bg&ctype=acg&return=302&device=web", "https://minimalistic-wallpaper.demolab.com/?random", "https://www.loremflickr.com/1920/1080", "https://www.picsum.photos/1920/1080", "https://www.placebear.com/1920/1080", "https://www.placebeard.it/1920/1080" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Vincenzo²²¹" 


global.devs = "916909297247" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916909297247";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_22_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk3LFxuICAgICAgICA4NyxcbiAgICAgICAgNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUzVTK1JUZEJRcWowZnFOSU1ERHVkZXJDMFduWTduMTBza2FwRjB0VDZHbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUTBobUZZSnRUUi1mek13ZGhvS0s0d1wiLFxuICBcInBob25lSWRcIjogXCI1NGY3MzQzNC1lZjU1LTRiMjEtOWUwMS0zZTAwNzQ5NTQ4NWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgOSxcbiAgICAgIDUxLFxuICAgICAgMTU2LFxuICAgICAgOTcsXG4gICAgICAxNzQsXG4gICAgICAxNDcsXG4gICAgICAxODEsXG4gICAgICAxNjksXG4gICAgICA5MyxcbiAgICAgIDEyNCxcbiAgICAgIDE0NyxcbiAgICAgIDExOSxcbiAgICAgIDkwLFxuICAgICAgMTQzLFxuICAgICAgMTgxLFxuICAgICAgMTc5LFxuICAgICAgMjMzLFxuICAgICAgMjQ2LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAyNTMsXG4gICAgICAyMjAsXG4gICAgICA1NCxcbiAgICAgIDExOSxcbiAgICAgIDIxMyxcbiAgICAgIDEzMyxcbiAgICAgIDE4LFxuICAgICAgMjE1LFxuICAgICAgMjAwLFxuICAgICAgMTEzLFxuICAgICAgMzIsXG4gICAgICAyMDcsXG4gICAgICAxODAsXG4gICAgICAxMDMsXG4gICAgICA0NSxcbiAgICAgIDI0NCxcbiAgICAgIDgzLFxuICAgICAgMTI2LFxuICAgICAgMjM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdCREQ4VFBNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTY5MDkyOTcyNDc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2MDU2NTQ3NDM4NjY1OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjZodTdjRUVNZmhvN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxWW1yVVJBcW1EZFRDVVN2VmNqSTV2cG84U2dvWkV4OXZORzg2Q2RnMTFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdQaHhTd0RRUFk2R1oxOEpaM2NQU2FDajd0bEdmWitsM000cUZoMXFXR3ZRajNrQ3crbEJrQm1EdTJZcW52bkRpZTRrQ2NRTjZiUXl1d0pDRDhYdEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9tbHl2YVlrb21vL1Y1ZkJGaUlLT1FrdGJQb1N1VkZNMjcrblhaUUJaenFDSU92UGdwS2pMV3lmQVVtT00wQVZmQjZ1aU9NbFl6TU96OFQweVZxVWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNjkwOTI5NzI0Nzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjUwNTcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHJHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMckcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJReU5uNUZSenBNWTNHTDhvbWlQcFdjVEk2Tmx3VXAvL2lmM25kZ2xHc21jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExOTAwNTYwOTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
