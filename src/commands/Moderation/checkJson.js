const { SlashCommandBuilder, Guild } = require('discord.js')
const fs = require('fs');

//
// LOOK AT README.MD FIRST!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREATED BY JWILL
//

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stock-check')
    .setDescription('Check amount of stock left'),

  async execute (interaction) {
    const fs = require('fs')

    function countKeysAndReturnJSON (filePath) {
      try {
        const jsonData = fs.readFileSync(filePath, 'utf8')

        const jsonObject = JSON.parse(jsonData)

        const keyCount = Object.keys(jsonObject).length

        return {
          keyCount: keyCount,
          jsonObject: jsonObject
        }
      } catch (error) {
        console.error('Error:', error.message)
        return null
      }
    }

    const filePath = 'accounts.json'
    const result = countKeysAndReturnJSON(filePath)

    if (result) {
      console.log('Key Count:', result.keyCount)
      console.log('JSON Object:', result.jsonObject)

      await interaction.reply({ content: `Accounts left: ${result.keyCount}`})
    }
  }
}
