module.exports = {
    config: {
      name: 'crear_canal',
      description: 'Nuevo personaje',
      usage: `!crear_canal <icon> <channel_name>`,
    },
    async run(bot, message, args) {
      const icon = args[0];
      const channelName = args.slice(1).join(' ');
  
      if (!icon || !channelName) {
        return message.reply('Debes proporcionar un icono y un nombre para el nuevo canal.');
      }
  
      try {
        const currentChannel = message.channel;
        const guild = message.guild;
  
        const formattedIcon = `『${icon}』`;
        const newChannel = await guild.channels.create(`${formattedIcon}${channelName}`, { type: 'GUILD_TEXT', parent: '1134868832041832468' });
  
        message.channel.send(`Canal '${newChannel.name}' creado correctamente en la categoría '${currentChannel.parent.name}'.`);
      } catch (error) {
        console.error('Error al crear el canal:', error);
        message.reply('Hubo un error al crear el canal. Por favor, inténtalo de nuevo más tarde.');
      }
    },
  };
  