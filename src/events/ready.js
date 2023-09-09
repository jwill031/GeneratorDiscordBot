const mongoose = require('mongoose');
const mongodb = process.env.mongodburl;

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');

        if (!mongodb) return;

        await mongoose.connect(mongodb || '', {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        if (mongoose.connect) {
            console.log('> Database has started.')
        }

        async function pickPresence () {
            const option = Math.floor(Math.random() * statusArray.length);

            try {
                await client.user.setPresence({
                    activities: [
                        {
                            name: statusArray[option].content,
                            type: statusArray[option].type,

                        },
                    
                    ],

                    status: statusArray[option].status
                })
            } catch (error) {
                console.error(error);
            }
        }
    },
};