const { Client, RichEmbed } = require('discord.js');
const client = new Client();

client.login(process.env.BOT_TOKEN);


client.on('ready', () => {
    console.log("Ready for use!");
}); 

client.on('message', message => {
    if(message.author.bot)
    {
        if(message.embeds)
        {
            const embedMsg = message.embeds.find(msg => msg.title === 'Gender');
            const ageMsg = message.embeds.find(msg => msg.title === 'Age');
            const specialMsg = message.embeds.find(msg => msg.title === 'Specials');
            if(embedMsg)
            {
                embedMsg.message.react('594015869546397714')
                .then(reaction => reaction.message.react('594017134661861378'))
                .then(reaction => reaction.message.react('594017703715536898'))
                .then(reaction => reaction.message.delete(20000))
                .catch(err => console.error);
            }
            if(ageMsg)
            {
                ageMsg.message.react('594112043263590420')
                .then(reaction => reaction.message.react('594155931781169172'))
                .then(reaction => reaction.message.react('594113333674901526'))
                .then(reaction => reaction.message.delete(20000))
                .catch(err => console.error);
            }
            if(specialMsg)
            {
                specialMsg.message.react('594110578864160779')
                .then(reaction => reaction.message.react('594379960718983189'))
                .then(reaction => reaction.message.react('594380303103950848'))
                .then(reaction => reaction.message.react('594380923869331457'))
                .then(reaction => reaction.message.react('594381108528021505'))
                .then(reaction => reaction.message.react('594381306658291712'))
                .then(reaction => reaction.message.react('594381527765221386'))
                .then(reaction => reaction.message.react('594381988794859520'))
                .then(reaction => reaction.message.delete(20000))
                .catch(err => console.error);
            }
        }
        return;
    }
    if(message.content.toLowerCase() === 'm!gender')
    {
        const embed = new RichEmbed();
        embed.setTitle("Gender");
        embed.setColor("#EAC8D8");
        embed.setDescription("---Genders!---\n" +
        "<:nekohug:594015869546397714> - Male\n" +
        "<:tamamowink:594017134661861378> - Female\n" +
        "<:woke:594017703715536898> - Non Binary\n");
        embed.setFooter("React to add and unreact to remove role, this will delete in 20 seconds!");
        message.channel.send(embed)
        message.delete(30000)
    }
    if(message.content.toLowerCase() === 'm!age')
    {
        const ageEmbed = new RichEmbed();
        ageEmbed.setTitle("Age");
        ageEmbed.setColor("#EAC8D8");
        ageEmbed.setDescription("---Age!---\n" +
        "<:UWU:594112043263590420> - 13 - 14\n" +
        "<:nekosip:594155931781169172> - 15 - 17\n" +
        "<:LEWD:594113333674901526> - 18 - 20+\n");
        ageEmbed.setFooter("React to add and unreact to remove role, this will delete in 20 seconds!");
        message.channel.send(ageEmbed);
        message.delete(30000)
    }
    if(message.content.toLowerCase() === 'm!specials')
    {
        const specialEmbed = new RichEmbed();
        specialEmbed.setTitle("Specials");
        specialEmbed.setColor("#EAC8D8")
        specialEmbed.setDescription("---Specials!---\n" +
        "<:Hmph:594110578864160779> - Likes to Sing!\n" +
        "<:patpat:594379960718983189> - Likes Anime!\n" +
        "<:lewdies:594380303103950848> - Likes to Draw!\n" +
        "<:LewdMegumin:594380923869331457> - North America\n" +
        "<:blooshie:594381108528021505> - Europe\n" +
        "<:remVV:594381306658291712> - Asia\n" +
        "<:SagiriShy:594381527765221386> - South America\n" +
        "<:tachi_smile:594381988794859520> - Africa\n")
        specialEmbed.setFooter("React to add and unreact to remove role, this will delete in 20 seconds!");
        message.channel.send(specialEmbed);
        message.delete(300000)
    } 
});

client.on('messageReactionAdd', (reaction, user) => {
    var roleName = reaction.emoji.name;
    var member = reaction.message.guild.members.find(member => member.id === user.id)

    //Gender
    if(roleName === "nekohug") //Male
    {
        console.log("REEADY");
        member.addRole('593980811951210497');
    }

    if(roleName === "tamamowink") //Female
    {
        member.addRole('593981647683190784');
    }

    if(roleName === "woke") //Non Binary
    {
        member.addRole('593981645095436288');
    }

    //Age

    if(roleName === "UWU") // 13 - 14
    {
        member.addRole('593981648756801583');
    }

    if(roleName === "nekosip") // 15 - 17
    {
        member.addRole('593981651508527104');
    }

    if(roleName === "LEWD") // 18 - 20 +
    {
        member.addRole('593981705212264465');
    }

    //Specials

    if(roleName === "Hmph") // Likes to Sing
    {
        member.addRole('593981705992404994');
    }
    if(roleName === "patpat") // Likes Anime
    {
        member.addRole('593981706654973973');
    }
    if(roleName === "lewdies") // Likes to Draw
    {
        member.addRole('593982194402328607');
    }
    if(roleName === "LewdMegumin") // North America
    {
        member.addRole('593982195417481225');
    }
    if(roleName === "blooshie") // Europe
    {
        member.addRole('593982196209942528');
    }
    if(roleName === "remVV") // Asia
    {
        member.addRole('593982196285440012');
    }
    if(roleName === "SagiriShy") // South America
    {
        member.addRole('593982197518696449');
    }
    if(roleName === "Ltachi_smile") // Africa
    {
        member.addRole('5593982197707571231');
    }

});

client.on('messageReactionRemove', (reaction, user) => {
    var roleName = reaction.emoji.name;
    var member = reaction.message.guild.members.find(member => member.id === user.id)

    //Gender
    if(roleName === "nekohug") //Male
    {
        member.removeRole('593980811951210497');
    }

    if(roleName === "tamamowink") //Female
    {
        member.removeRole('593981647683190784');
    }

    if(roleName === "woke") //Non Binary
    {
        member.removeRole('593981645095436288');
    }

    //Age
    
    if(roleName === "UWU") // 13 - 14
    {
        member.removeRole('593981648756801583');
    }

    if(roleName === "nekosip") // 15 - 17
    {
        member.removeRole('593981651508527104');
    }

    if(roleName === "LEWD") // 18 - 20 +
    {
        member.removeRole('593981705212264465');
    }

    //Specials

    if(roleName === "Hmph") // Likes to Sing
    {
        member.removeRole('593981705992404994');
    }
    if(roleName === "patpat") // Likes Anime
    {
        member.removeRole('593981706654973973');
    }
    if(roleName === "lewdies") // Likes to Draw
    {
        member.removeRole('593982194402328607');
    }
    if(roleName === "LewdMegumin") // North America
    {
        member.removeRole('593982195417481225');
    }
    if(roleName === "blooshie") // Europe
    {
        member.removeRole('593982196209942528');
    }
    if(roleName === "remVV") // Asia
    {
        member.removeRole('593982196285440012');
    }
    if(roleName === "SagiriShy") // South America
    {
        member.removeRole('593982197518696449');
    }
    if(roleName === "Ltachi_smile") // Africa
    {
        member.removeRole('5593982197707571231');
    }
}); 
