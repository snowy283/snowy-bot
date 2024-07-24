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
    // Verify that the message was not sent by us
    if (user.ircUsername === USERNAME) return;

    // Check for command prefix
    if (message[0] !== ".") return;

    // Extract the command (the first word, lowercased)
    const command = message.split(" ")[0].toLowerCase();

    // Handle different commands
    switch(command) {
        case appPrefix + "hello":
            return await user.sendMessage(`Hello there, ${user.ircUsername}! My name is SnowyBot and i am coded by [fm11wfc https://osu.ppy.sh/users/35878601] B)`)
            
    }
}); // Add a semicolon here


const startOsuBot = async () => {
    try {
        await client.connect
        console.log("Connected to Bancho")

    } catch (err) {
        console.error(err)
    }
};

startOsuBot();
