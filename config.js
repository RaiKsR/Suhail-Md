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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923051391007";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923051391007";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923051391007,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_52_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM4LFxuICAgICAgICA5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICA4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDksXG4gICAgICAgIDY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5LFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgODUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4MVZmVDJjUGQ4MzZNVkQ5b3BpbWgxdkdiMlZBSGRlS1R4amkrWkVPUFd3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA1MTM5MTAwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjkyREY1MzE1MjBGMDhBNkExMDI4NkI4M0ZGMUZGNERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NTkxOTQ4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDUxMzkxMDA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NzU1N0JFMkNEMTdDN0QzMjAzMzA4RTVCRUU0MThBMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc1OTE5NDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQXNIUHQ0MHpSQnVlS1JDa3pQTVEzUVwiLFxuICBcInBob25lSWRcIjogXCJmY2FmYTAxOC05YmViLTQ4ODgtYTUzZC0wMzI2MDkwNjA1MTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMzcsXG4gICAgICA2OSxcbiAgICAgIDE3LFxuICAgICAgMTgwLFxuICAgICAgMTkxLFxuICAgICAgMjA4LFxuICAgICAgMTMyLFxuICAgICAgMTY5LFxuICAgICAgMTA2LFxuICAgICAgOTQsXG4gICAgICA2MSxcbiAgICAgIDExNixcbiAgICAgIDI0NSxcbiAgICAgIDIxNSxcbiAgICAgIDIwOSxcbiAgICAgIDQyLFxuICAgICAgMTEwLFxuICAgICAgMjEyLFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMTg5LFxuICAgICAgMTE5LFxuICAgICAgNjAsXG4gICAgICAxNzcsXG4gICAgICAyNTEsXG4gICAgICAxMDIsXG4gICAgICAxMjQsXG4gICAgICAxMjcsXG4gICAgICAyMTQsXG4gICAgICAxMjQsXG4gICAgICA5NyxcbiAgICAgIDE3MixcbiAgICAgIDI0MCxcbiAgICAgIDE4NyxcbiAgICAgIDE3MSxcbiAgICAgIDIyMSxcbiAgICAgIDI0LFxuICAgICAgMjMxLFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldYVzJDVFRLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNTEzOTEwMDc6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyOTI3OTE4Njk0NTQ2OjEwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuqngeKYhlNUUkFOR0VS4piG6qeCXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmZpdnBjSEVJUy9nYk1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvQWtqaXRSc3NsamJYT0tZY0c1a1E4YnhVdkdydGtFMmk3QStyaS9tYVhzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVva09ZOE9RRlpSVzdmTDYycGF5dXd3WlpveU5TWHo3aVFuWkNYY25TL0ZmTmh2d043cEdKRm13RzM5YzIrb1FKemhTQWx4NCtERVVJUFZSQ2ZwUUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndoc1hHUFMrZmpCclVuN1UwUVlsMDdTa2ZEdE5yVkZpQ0VuNTMzQ2NwcWpzRTVTTkxxN2JCZDFHS3MxZmkvRm1PcFYxMUMxdUIvY0ZQT1hYSWVUREJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA1MTM5MTAwNzoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc1OTE5NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZHZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZkdi5qc29uIjogIntcImtleURhdGFcIjpcIjlzaVNiZ2hyeDhDb2c0ak1zb0dqN1lSejZVUlhmWDdMS1k5TTZCTEdVUjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyODMxMTEyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3NTQwODgwMzU0XCJ9Igp9"  // PUT your SESSION_ID 


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

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
