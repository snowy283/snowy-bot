/* made by fm11wfc https://osu.ppy.sh/users/35878601
*/

const Banchojs =  require("bancho.js")
const { USERNAME, PASSWORD } = require("./secret.js")

const client = new Banchojs.BanchoClient({
    username: USERNAME,
    password: PASSWORD
});

const appPrefix = ".";

client.on("PM", async ({message, user}) => {
    if (user.ircUsername === USERNAME) return;
    
    if (message[0] !== ".") return;
    
    const command = message.split(" ")[0].toLowerCase();

    
    switch(command) {
        case appPrefix + "hello":
            return await user.sendMessage(`Hello there, ${user.ircUsername}! My name is SnowyBot and i am coded by [fm11wfc https://osu.ppy.sh/users/35878601] B), btw how is your day? I hope it's good :)`)
            
    }
}); 


const startOsuBot = async () => {
    try {
        await client.connect
        console.log("Connected to Bancho")

    } catch (err) {
        console.error(err)
    }
};

startOsuBot();
