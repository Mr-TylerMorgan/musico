const { Listener } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
class GuildMemberAddListener extends Listener {
	constructor() {
		super('guildMemberAddMemberLog', {
			emitter: 'client',
			event: 'guildMemberAdd',
			category: 'client'
		});
	}

	async exec(member) {
		const memberlog = this.client.settings.get(member.guild.id, 'member-log', undefined);
		if (memberlog) {
			const embed = new MessageEmbed()
				.setColor('GREEN')
				.setThumbnail(member.user.displayAvatarURL())
				.setDescription(`Welcome **${member.user.username}**\nHope you have a wonderfull time here`)
				.setAuthor(`${member.user.tag} (${member.id})`, member.user.displayAvatarURL())
				.setFooter('User joined')
				.setTimestamp();

			return this.client.channels.cache.get(memberlog).send(embed);
		}
	}
}

module.exports = GuildMemberAddListener;
