const {
  SlashCommandBuilder,
  RequestMethod,
  EmbedBuilder
} = require('discord.js')


//
// LOOK AT README.MD FIRST!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREATED BY JWILL
//

let keyVal = 0

module.exports = {
  data: new SlashCommandBuilder()
    .setName('generate')
    .setDescription('Generate an account.'),

  async execute (i) {
    const fs = require('fs')
    const { member } = i

    //finding role that has gen access
    const roleID = 'ROLE_ID_HERE';
    const role = i.guild.roles.cache.get(roleID)

    if (!member.roles.cache.has(role.id)) {
      return i.reply({ content: `You don't have the permissions for this.` })
    } else {
      function readAndDeleteKeyFromJSON (filename, keyToDelete) {
        try {
          const data = JSON.parse(fs.readFileSync(filename, 'utf8'))

          if (data.hasOwnProperty(keyToDelete)) {
            const deletedValue = data[keyToDelete]

            delete data[keyToDelete]

            fs.writeFileSync(filename, JSON.stringify(data, null, 2))

            return deletedValue
          } else {
            return null
          }
        } catch (error) {
          return null
        }
      }

      if (readAndDeleteKeyFromJSON) {
        keyVal++
      }

      const filename = 'accounts.json'
      const keyToDelete = `${keyVal}`

      const deletedValue = readAndDeleteKeyFromJSON(filename, keyToDelete)

      const loggingChannelID = 'CHANNEL_ID_HERE'
      const channel = await i.guild.channels.cache.get(loggingChannelID)

      if (deletedValue !== null) {
        await channel.send(
          `An account was generated by ${i.user.tag} deleted key '${keyToDelete}' with value: ${deletedValue}`
        )

        const embed = new EmbedBuilder()
          .setDescription(
            `Here is your requested account: \`\`\`${deletedValue}\`\`\``
          )
          .setColor('Blue')
          .setAuthor({ name: i.user.tag, iconURL: i.user.avatarURL() })

        await i.reply({ embeds: [embed] })
      } else {
        console.log(`Key '${keyToDelete}' not found or an error occurred.`)
      }
    }
  }
}
