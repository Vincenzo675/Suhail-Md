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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_43_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjExLFxuICAgICAgICA0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNixcbiAgICAgICAgMTMwLFxuICAgICAgICA2NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAzNixcbiAgICAgICAgMTkwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2LFxuICAgICAgICA4NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3LFxuICAgICAgICAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK1kvZjJmRm4zdFpaOGVicGEzSGJpblJUVHY3dVgyR1Q2WDRkejlVemplRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidnBkbmFQY0xTVnkxdi03RXA4SXJmZ1wiLFxuICBcInBob25lSWRcIjogXCJhZDM5OGJkOS0xMTdkLTRjYmEtYjY4NC1lMWFjN2I2ODkyNjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgMjA5LFxuICAgICAgNzAsXG4gICAgICA1NSxcbiAgICAgIDEyOSxcbiAgICAgIDMxLFxuICAgICAgNSxcbiAgICAgIDEwNSxcbiAgICAgIDMyLFxuICAgICAgMzYsXG4gICAgICAxNjQsXG4gICAgICAyMTksXG4gICAgICAyMjYsXG4gICAgICA2OSxcbiAgICAgIDE0MCxcbiAgICAgIDE4MCxcbiAgICAgIDY2LFxuICAgICAgMTcsXG4gICAgICA3LFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDE3MyxcbiAgICAgIDIxOSxcbiAgICAgIDE1NixcbiAgICAgIDIxMyxcbiAgICAgIDE3NixcbiAgICAgIDIyLFxuICAgICAgNDAsXG4gICAgICAxMjksXG4gICAgICA4NixcbiAgICAgIDEzMCxcbiAgICAgIDE1NSxcbiAgICAgIDksXG4gICAgICAyMjUsXG4gICAgICAxNTcsXG4gICAgICAyMjEsXG4gICAgICAyMDYsXG4gICAgICAxMDYsXG4gICAgICAxNTYsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIWVc1TVY3UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2OTA5Mjk3MjQ3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NjA1NjU0NzQzODY2NTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p5aHU3Y0VFTnZ0aExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMVltclVSQXFtRGRUQ1VTdlZjakk1dnBvOFNnb1pFeDl2Tkc4NkNkZzExST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDaE16N3RqMWEzblJzNXNmWk1tb0crTmpLcEVvSDYrWXhWNFFRWG1RdmZkR1MvbGVSbEp6YXNlNG1zcFpOWEJBd1g0dkFqazl2dTk5YlJDamE3L2pCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzTHpKQ2pqaWxkUVVZbWlDaUt6Ykc5MmJFWVMwTURYdm1FU0h1VTJLQ3hLMEcvUnpPOEs1OXNMYmtidU5BQ1RjSXZ2VFdDS3JMSE40VEhmVHNqTFBpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTY5MDkyOTcyNDc6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc0NDIyMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
