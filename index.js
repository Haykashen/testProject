const token = '6072684913:AAFk_IhFsI4_YMceNikYOlAxVrUSanITZ-Q';
const TelegramApi = require('node-telegram-bot-api')

const bot = new TelegramApi(token,{polling:true});
bot.setMyCommands([
    {command:'/start',description:'Приветствие'},
    {command:'/info',description:'Информация о боте'},
    {command:'/spec',description:'Кинуть саламчик'}
])

bot.on('message',async (message)=>{
    const text = message.text,
          chatId = message.chat.id;
   // console.log(message)
   // bot.sendMessage(chatId, `Ты мне написал ${text}`)
   if(text === '/start')
   {
     await bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/8d7/6f1/8d76f159-6795-37fd-8c64-04e195af9c61/192/29.webp')
     await bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/8d7/6f1/8d76f159-6795-37fd-8c64-04e195af9c61/192/32.webp')
     return bot.sendMessage(chatId,`Привет ${message.chat.first_name} ${message.chat.last_name}!`)
   }
   if(text === '/info')
   {
     await bot.sendMessage(chatId, `Добрый вечер ${message.chat.first_name} ${message.chat.last_name} ! В настоящее время данный бот находится в разработке, ожидайте релизную версию...(Created by dyadyushka GAG from Atlanta)`)
     return bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/8d7/6f1/8d76f159-6795-37fd-8c64-04e195af9c61/192/43.webp')
   } 
  if(text === '/spec')
  {
    await bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/7ee/1ac/7ee1ac07-8e74-4da4-b4b3-4a17ac329a6b/192/34.webp')
    return bot.sendAudio(chatId,'./Salam.mp3')
    bot.sendAudio
  }
  await bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/7ee/1ac/7ee1ac07-8e74-4da4-b4b3-4a17ac329a6b/3.webp')    
   return bot.sendMessage(chatId,`${message.chat.first_name} ${message.chat.last_name}, "Давай до свидания!"`)
})