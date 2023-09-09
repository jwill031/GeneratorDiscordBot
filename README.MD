You will need to do the following:
    - npm i discord.js
    - npm i fs


- create a file named accounts.json OUTSIDE OF SRC.
- format json file like followed (
        {
            "1": "account1",
            "2": "account2",
            "3": "account3",
            "4": "account4",
            "5": "account5",
        }
    )
    MAKE SURE TO STAY IN ORDER FOR THE KEY NAMES E.G. 1,2,3,4,5,6,7,8,9 IF YOU DO NOT IT WILL NOT WORK, the value is free to change as you wish.

    THE FILE MUST BE NAMED accounts.json unless you change the variable in generateAccount.js line 55 (const filename = whatever_its_called.json) AND in checkJson.js on line 35 (const filePath = 'whatever_its_called.json')

    FOR AN EXAMPLE SEE accounts.json

please dont attempt to use this if your new to javascript/ discord.js.

As of now it is quite basic, it takes the first value from the json file, returns it in an embed on discord and then deletes it from the json file.
It also logs the account and who generated it in the specified logging channel you need to set in GENERATE.JS
You're also required to have a role to be able to generate also specified in generate.js.
You can do a lot with this using a database, including upload accounts, add/remove users that can access it, have moderators of the panel easier etc