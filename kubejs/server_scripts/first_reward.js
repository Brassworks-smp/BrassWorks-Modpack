PlayerEvents.loggedIn(event => {
    const player = event.player;

    if (!player.persistentData.hasReceivedBundle) {
        player.persistentData.hasReceivedBundle = true;
        console.info(`[KubeJS] marking ${player.name.string} as received bundle`);

        // 1) build your bundle NBT as a JS object
        const bundleNbt = {
            Unbreakable: 1,
            HideFlags: 4,
            CustomModelData: 42069,
            display: {
                Name: '{"text":"🛍 Newcomer’s Starter Bundle","color":"#8edfdb"}',
                Lore: [
                    '{"text":"The Essentials for Your First Steps in Brassworks SMP","color":"#ff9966"}'
                ]
            },
            Items: [
                { id: "numismatics:bank_terminal", Count: 1 },
                { id: "numismatics:spur",          Count: 64 },
                { id: "create:builders_tea",       Count: 1 },
                {
                  id:    "minecraft:written_book",
                  Count: 1,
                  tag: {
                    CustomModelData: 69420,
                    author: "swzo",
                    display: {
                      Name: '{"text":"📘 Welcome to Brassworks!","color":"#ffcc33"}',
                      Lore: [
                        '{"text":"A Practical Guide for New Residents","color":"#ff6666"}'
                      ]
                    },
                    title:    "📘 Welcome to Brassworks SMP!",
                    resolved: 1,
                    pages:[
                        "[[\"\",{\"text\":\"📘\",\"color\":\"#ffcc66\"},{\"text\":\" \",\"color\":\"#ffcc66\",\"bold\":true},{\"text\":\"Welcome to \",\"color\":\"#ffcc66\"},{\"text\":\"Brassworks SMP\",\"color\":\"#ffcc66\",\"bold\":true},{\"text\":\"!\",\"color\":\"#ffcc66\"},\"\\n\",{\"text\":\"Your adventure (and grind) starts here.\",\"italic\":true,\"color\":\"#222222\"},{\"text\":\"\\n\\n\",\"italic\":true},{\"text\":\"(flip to next page)\",\"italic\":true,\"color\":\"#999999\"}]]",
                        "[[\"\",{\"text\":\"Hey there, adventurer!\",\"color\":\"#ff99cc\",\"bold\":true},\"\\nWelcome to the \",{\"text\":\"Brassworks SMP\",\"color\":\"#ffcc66\",\"bold\":true},\", where the builds are cool, the shops are thriving, and the economy runs on shiny coins called \",{\"text\":\"Spurs\",\"color\":\"#d57259\",\"hoverEvent\":{\"action\":\"show_item\",\"contents\":{\"id\":\"numismatics:spur\"}}},{\"text\":\".\",\"color\":\"#d57259\"},\" You’ve just spawned in, and guess what? You’re already kinda rich \",{\"text\":\"(not really)\",\"color\":\"#999999\"},\"\\n\\n\",{\"text\":\"(flip to next page)\",\"italic\":true,\"color\":\"#999999\"}]]",
                        "[[\"\",{\"text\":\"🎁 \",\"color\":\"#cc9966\"},{\"text\":\"Check Your Bundle!\",\"color\":\"#cc9966\",\"bold\":true},\"\\nInside your starter bundle, you’ll find:\\n\",{\"text\":\"64 Spurs\",\"color\":\"#d57259\",\"hoverEvent\":{\"action\":\"show_item\",\"contents\":{\"id\":\"numismatics:spur\",\"count\":64}},\"bold\":true},{\"text\":\",\",\"color\":\"#d57259\"},\" that’s your starting money. \",{\"text\":\"Spurs\",\"color\":\"#d57259\",\"hoverEvent\":{\"action\":\"show_item\",\"contents\":{\"id\":\"numismatics:spur\"}}},{\"text\":\" \",\"color\":\"#d57259\"},\"are the base currency of the server. Use them for trading, shopping, or hoarding like a dragon.\\n\",{\"text\":\"(flip to next page)\",\"italic\":true,\"color\":\"#999999\"}]]",
                        "[[\"\",{\"text\":\"Bank Terminal\",\"color\":\"#ff6666\",\"hoverEvent\":{\"action\":\"show_item\",\"contents\":{\"id\":\"numismatics:bank_terminal\"}},\"bold\":true},{\"text\":\":\",\"color\":\"#ff6666\"},\" It’s like an \",{\"text\":\"Ender Chest\",\"color\":\"#9933ff\"},\" for money. You can stash \",{\"text\":\"infinite\",\"bold\":true},\" \",{\"text\":\"Spurs\",\"color\":\"#d57259\",\"hoverEvent\":{\"action\":\"show_item\",\"contents\":{\"id\":\"numismatics:spur\"}}},\" and access them from any terminal. You can even break and place it again, and your funds stay safe. Just don’t try to smelt it.\\n\\n\",{\"text\":\"(flip to next page)\",\"italic\":true,\"color\":\"#999999\"}]]",
                        "[[\"💸 \",{\"text\":\"How to Earn More Spurs\",\"bold\":true},\"\\nWant more \",{\"text\":\"Spurs\",\"hoverEvent\":{\"action\":\"show_item\",\"contents\":{\"id\":\"numismatics:spur\"}},\"color\":\"#cc6666\"},\"?\\nHit \",{\"text\":\"H\",\"color\":\"#ffcc66\",\"bold\":true},\" (by default) to open the Missions Menu.\\nChoose a mission.\\nComplete it.\\nHit \",{\"text\":\"Claim Rewards\",\"color\":\"#ff99cc\",\"bold\":true},\" when you’re done.\\n\",{\"text\":\"💰 \",\"color\":\"#00cc33\"},{\"text\":\"Easy money.\",\"color\":\"#00cc33\",\"bold\":true},\"\\n\\n\",{\"text\":\"(flip to next page)\",\"italic\":true,\"color\":\"#999999\"}]]",
                        "[[\"\",{\"text\":\"📢 \",\"color\":\"#cc33cc\"},{\"text\":\"Events & Superpowers?!\",\"color\":\"#cc33cc\",\"bold\":true},\"\\nWe have events! Check out the \",{\"text\":\"#events channel\",\"bold\":true},\" on \",{\"text\":\"Discord.\",\"clickEvent\":{\"action\":\"open_url\",\"value\":\"https://discord.gg/nDhkgzAPR2\"},\"hoverEvent\":{\"action\":\"show_text\",\"contents\":\"Join Discord\"},\"color\":\"#5561f2\"},\"\\nEvent winners get \",{\"text\":\"Artifacts\",\"color\":\"#a18859\",\"bold\":true},\" – powerful items from the \",{\"text\":\"Artifacts Mod\",\"bold\":true,\"color\":\"#a18859\"},\" that grant crazy abilities like extra speed and regeneration.\\n\",{\"text\":\"Win\",\"color\":\"#ffcc66\",\"bold\":true},\", and flex your new powers.\\n\\n\",{\"text\":\"(flip to next page)\",\"italic\":true,\"color\":\"#999999\"}]]",
                        "[[\"\",{\"text\":\"🛒 \",\"color\":\"#ccccff\"},{\"text\":\"Trade, Build, Thrive\",\"color\":\"#ccccff\",\"bold\":true},\"\\n\",{\"text\":\"Brassworks\",\"color\":\"#ffcc66\"},\" encourages you to:\\nTrade with others\\nOpen shops at spawn\\nBecome the \",{\"text\":\"Jeff Bezos\",\"bold\":true},\" of Minecraft (with style)\\nWhether you’re a \",{\"text\":\"create mod\",\"color\":\"dark_aqua\"},\" genius or just a shopkeeper, the spawn market is the place to be.\\n\\n\",{\"text\":\"(flip to next page)\",\"italic\":true,\"color\":\"#999999\"}]]",
                        "[[\"🏁 \",{\"text\":\"That’s It!\",\"bold\":true},\"\\nYou’ve got:\\n\",{\"text\":\"✅\",\"color\":\"#00cc33\"},\" Starting cash\\n\",{\"text\":\"✅\",\"color\":\"#00cc33\"},\" A mobile, infinite bank\\n\",{\"text\":\"✅\",\"color\":\"#00cc33\"},\" A path to riches via missions\\n\",{\"text\":\"✅\",\"color\":\"#00cc33\"},\" Cool event prizes\\n\",{\"text\":\"✅\",\"color\":\"#00cc33\"},\" A player-driven economy to dive into\\nNow go out there and \",{\"text\":\"build something awesome\",\"bold\":true},\". Or sell something. Or both.\"]]",
                        "[[\"\\nSee you in the world,\\n– \",{\"text\":\"The Brassworks Team\",\"color\":\"#ffcc66\",\"bold\":true},{\"text\":\" 🛠\",\"color\":\"#ffcc66\"},\" (aka pipo & swzo)\"]]"
                    ]
                  }
                }
            ]
        };

        // 2) flatten it to a one‑line JSON string
        const nbtString = JSON.stringify(bundleNbt);

        player.give(Item.of('minecraft:bundle', bundleNbt));
        player.tell(Text.green("You have received the Newcomer’s Starter Bundle!"));
        console.info(`[KubeJS] gave bundle to ${player.name.string}`);
    }
});
