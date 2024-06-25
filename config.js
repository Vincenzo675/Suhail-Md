const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "8787487369";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_22_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDg3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNixcbiAgICAgICAgMixcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY5LFxuICAgICAgICA5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU3LFxuICAgICAgICA0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3NixcbiAgICAgICAgOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI3LFxuICAgICAgICA0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxODksXG4gICAgICAgIDU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtaUZmM0M2U1h2SHRUQm9FMmx6RTByclRFdzVMdFJNWlJkWWJJaW5EWjhZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2ZEFjRVNyR1JOMkFjUXVJekl3TlhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhMzkwNDc1LTcyODQtNGFkOC04NDdmLThkY2ZkMjRkODdiY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAzOSxcbiAgICAgIDcxLFxuICAgICAgMjEzLFxuICAgICAgMTIyLFxuICAgICAgMTAxLFxuICAgICAgMjM5LFxuICAgICAgNDgsXG4gICAgICAxNzcsXG4gICAgICAxMjcsXG4gICAgICAxMzUsXG4gICAgICAyMjcsXG4gICAgICA4NSxcbiAgICAgIDEwMSxcbiAgICAgIDE2NSxcbiAgICAgIDM3LFxuICAgICAgMTYzLFxuICAgICAgMzQsXG4gICAgICA4MixcbiAgICAgIDEzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxOSxcbiAgICAgIDU1LFxuICAgICAgNDcsXG4gICAgICAzNyxcbiAgICAgIDMxLFxuICAgICAgNDMsXG4gICAgICA3NixcbiAgICAgIDI2LFxuICAgICAgMTU1LFxuICAgICAgMTg2LFxuICAgICAgNzksXG4gICAgICAxNDMsXG4gICAgICAxMzgsXG4gICAgICA2MCxcbiAgICAgIDEyOSxcbiAgICAgIDE1MixcbiAgICAgIDE5MixcbiAgICAgIDE1NCxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllIMTdINDdUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTg3ODc0ODczNjk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTcyNjA3MjIxNTU2Nzk6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOUHg3ZUlGRU9XMDZyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhTUzA5WDc4Z1dEbjZKODI3Y2dmeHg3bnFYL0pYd3ZNQUVuS2kyV2ZRRGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWnNmT3BsYTJweG5jTDN1NkpEYXhCaytTQ0xUY3d4T2RsZ1RpUnJXY25DbFc0U3JFdUVCVm1CM01INzY3MXpIZzFkUTZ4cm9BZWtKSXpOWm1HVUhJREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR0NxNDdSN2NNay83VjVhdm1tVWFWaEJiRXd1VnczYXlwRXNCei9Qc0NWN1F6QjQ1TEVDaU9UVXpsSUVSdnd6QWVhR2p3aG5FMHFqazRnc0htcjd4aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4Nzg3NDg3MzY5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzMTA5NTRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
