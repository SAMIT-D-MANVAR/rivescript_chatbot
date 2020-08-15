//create a bot 
//rivescript is a simple scripting language used to build chatbots
                              //further reference documentation(rivescript.com
let bot = new RiveScript();  //this page performs submitting question and getting response from the bot
                             //we use rivescript library 


const message_container = document.querySelector('.messages');  //return first element from selector(selected one eg-message selector(class selector))
const form = document.querySelector('form');                    //the dataset is in the form to text file with .rive extension
const input_box = document.querySelector('input');


//selects dataset.Here we are taking dataset from gist(github).To learn more visit the official github website 
const brains = [
'https://gist.githubusercontent.com/SAMIT-D-MANVAR/5c0a432be5261255544ab49893201cef/raw/94dd26bf36b696ebcb3b650dfa12016f82b09f2f/brain.rive'
];

//after loading the data the asking question and getting reply from bot event starts
bot.loadFile(brains).then(botReady).catch(botNotReady);


form.addEventListener('submit', (e) => {  //event listener on the submitButton, listening for submit events
  e.preventDefault();                     //by pressing enter key
  selfReply(input_box.value);
  input_box.value = '';
});


function botReply(message){                              //display message of bot
  message_container.innerHTML += `<div class="bot">${message}</div>`;
  location.href = '#edge';
}


function selfReply(message){  
  message_container.innerHTML += `<div class="self">${message}</div>`;
  location.href = '#edge';
  
  bot.reply("local-user", message).then(function(reply) {
    botReply(reply);
  });
}


function botReady(){       //reply message function 
  bot.sortReplies();
  botReply('Hello my name is autobot. nice to meet you');
}


function botNotReady(err){
  console.log("An error has occurred.", err);
}