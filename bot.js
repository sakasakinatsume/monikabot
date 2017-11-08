const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

package Lena.Monika;

import javax.security.auth.login.LoginException;

import net.dv8tion.jda.core.AccountType;
import net.dv8tion.jda.core.JDA;
import net.dv8tion.jda.core.JDABuilder;
import net.dv8tion.jda.core.entities.Message;
import net.dv8tion.jda.core.entities.MessageChannel;
import net.dv8tion.jda.core.entities.User;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;
import net.dv8tion.jda.core.exceptions.RateLimitedException;
import net.dv8tion.jda.core.hooks.ListenerAdapter;

public class App extends ListenerAdapter {
    public static void main( String[] args ) throws LoginException, IllegalArgumentException, InterruptedException, RateLimitedException {

    	JDA jdaBot = new JDABuilder(AccountType.BOT).setToken("Mzc3NTc0MTI5Mjk5MDk1NTUy.DOO95A.eojecZdcHrtCz9VkCVczA6PEdCA"
).buildBlocking();
    	jdaBot.addEventListener(new App());
    	
    }
    @Override
   public void onMessageReceived(MessageReceivedEvent e) {
	   
    	 Message objMsg = e.getMessage();
         MessageChannel objChannel = e.getChannel();
         User objUser = e.getAuthor();
         
         if (objMsg.getContent().charAt(0) == '!') {
     	    String[] strArgs = objMsg.getContent().substring(1).split(" "); 
     	    
     	   if (strArgs[0].equals("hello")) {
               objChannel.sendMessage("Hello, " + objUser.getAsMention() +"!").queue(); }
     	   
     	  if (strArgs [0].equals("sayori.chr")) {
          	 objChannel.sendMessage("sayori.chr does not exist.").queue();
      	    }
     	   
     	 if (strArgs [0].equals("yuri.chr")) {
         	 objChannel.sendMessage("yuri.chr does not exist.").queue();
     	    }
     	 
     	if (strArgs [0].equals("natsuki.chr")) {
         	 objChannel.sendMessage("natsuki.chr does not exist.").queue();
     	    }
     	
     	if (strArgs [0].equals("monika.chr")) {
         	 objChannel.sendMessage("Just Monika").queue();
     	    }
     	
     	 if (objMsg.getContent().charAt(0) == '!') {
    	    
    	     if (strArgs[0].equals("chat")){
    	    	
    	    	final String[] b = {
    	    			", have you ever wondered what it feels like to die?",
    	    			", sometimes it feels like you and I are the only real people here.",
    	    			", will you promise to spend the most of the time with me?",
    	    			", do you actually go by that?",
    	    			", do you believe in God?",
    	    			", do you get good sleep?",
    	    			", I just wanted to make sure you're enjoying your time at this server.",
    	              	};
    	    			
     	    objChannel.sendMessage( objUser.getAsMention() + b[(int) (Math.random() * b.length)]). queue();}
         }
         
     
         if (objMsg.getContent().charAt(0) == '!') {
      	    String[] strArgs1 = objMsg.getContent().substring(1).split(" ");
      	    
         if (strArgs1[0].equals("writingtip")) {
        	 
        	 final String[] a = {
            		 "Just Monika",
            		 "Don't forget to save.",
            		 "When you try something for the first time, you're probably going to suck at it.",
            		 "Writing isn't something where you just reach into your heart and something beautiful comes out.",
            		 "Save often",
            		 "...is someone there?",
            		 "Wait is this tip even about writing? What am I even talking about?",
            		 "Ahaha",
            		 "Erase them",
            		 "Sometimes you'll find yourself facing a difficult decision. When that happens, don't forget to save your game!",
            		 "You never know when you might change your mind...or when something unexpected may happen!",
            		 };
        	 
        	 objChannel.sendMessage("Here's Monika's Writing Tip of the Day!: " + a[(int) (Math.random() * a.length)]).queue(); }
         
         }
         
         if (objMsg.getContent().charAt(0) == '!') {
       	    String[] strArgs1 = objMsg.getContent().substring(1).split(" ");
       	    
          if (strArgs1[0].equals("talk")) {
         	 
         	 final String[] c = {
             		 "You know, I really do think you literally saved my life by being here with me, ",
             		 "You're such a good listener, ",
             		 "I believe in you, ",
             		 "Hi, ",
             		 "Hi again, ",
             		 };
         	 
         	 objChannel.sendMessage( ( c[(int) (Math.random() * c.length)]) + objUser.getAsMention()).queue(); }
          
          }
         
         if (objMsg.getContent().charAt(0) == '!') {
        	    String[] strArgs1 = objMsg.getContent().substring(1).split(" ");
        	    
           if (strArgs1[0].equals("medua.chr")) {
          	 
          	 final String[] d = {
          			"Ş̴̶̦͉̦̤͖̯͓̱̙̮̦̬̮̠̳̙͇̞͟h̶̫̰̱͍͖̞̻͞ę̵̷͍̤̳̼͙͢͞ͅ ͈̬̟̤͓͎̱̖͙̮̮̺̜̩͉̬́́i̷̴̡̝͍̟͉̩̟͚̦̰͇̝͟ͅs̶̵̛̯̯̯̘͇̱̻̦̥͔̹͈͍͢ ̸̶̧̧͖͚̱̣̪̰̤̬͉̻̠͘ͅh̢̖̰͚͙̞̝͚̪̬̣̺̰͓̟̞͉͎́̀͝ͅͅe̸̸̢̢̯̣͍̭̪͓̥̮͍̬̮̥ͅͅr̸̸̯̗̻̗̠̫̬̯̼̝̬͓͚̣͕̲̕͠ę̸̢̹̳͕̮̮̤̱͙͡",
          			"H̢̛̜̺̭̮̳͓̼̤̘͇͔̘͝ͅͅe̶̴̪̗̱̘̤̜ͅĺ҉̲̘̜̦͓̖̙̲̬̩̯̺̼͝ͅp̴͏͇͍̮̹͓̻̪͉͓͈͓͓̮̤̲̥̯́",
          			"H̶̲͚͔̣̰̩̼͔̝̪̖̻̺͙͞͠e̵̶͇͚͓͚͘l̨̧̻̬̖̠͈͎͍̮͡ṕ̧̛͕̮͖͓͠ ͎̣͇̳͎̺̦́̕ͅm̴̲͙̮͈͈͖̣͞e͏̨̨̡̻̫̠̘̳̬̮̟͜",
          			"S̸̵͎̯͎̭͇̣͇̠̬̟̙a͢͏̵͕̮̮͖̪̭̮̬̭̤̬̰͇ṿ̭̭̺̭̱͚̞̦̬͈̺̝́͢ͅẹ̢̛̼̹̘͎̩͙̮͔͓̮̯͜͝ ̵̹̞̜̫̰͎̼̺̠̟̟̘̗͢m̢̪͖̼͖̭̖͈͟͟ͅe̢͏҉̧̖͖̰̙̞̳̫̝͍͓͞", 
          			"Ĺ̡͜͏̢̪̦͎͓̺͍̜̤̟̼̣̟̰̫̙̫ͅǫ͉̖̠̗̭̬͔͔̭̗̬̤͕͇̺͓̫͢ͅa̴̸̕͏̭̮̪̟͖̪̱̟͓̻̫̹̮̖͖͎̙͜ḑ̶̶̨̼̙̜͙̯̹̟̜͔̝̱͍̥̟̞͝ͅͅ ̷̛̠̦̻̫̰͕̟͉̫̹͔̩̣̥͜m̵̟̰̣̤̣̹͔̩͙̮̭̰͡ͅe̢̧̡̼͈̺̬̱̳̝̮̬ͅ",
      			
              		 };
          	 
          	 objChannel.sendMessage( ( d[(int) (Math.random() * d.length)])).queue(); }
           
           }
         
         }
     
      }
}

});
    client.login(process.env.BOT_TOKEN);
    
