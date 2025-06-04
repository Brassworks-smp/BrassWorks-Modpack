// 1) Tag for deployer inputs
ServerEvents.tags('item', event => {
    event.add('kubejs:moss_deployer_inputs', [
        'minecraft:moss_block',
        'minecraft:vines'
    ])
})

ServerEvents.recipes(event => {

    const mossing_tools = [
        'minecraft:moss_block',
        'minecraft:vine'
    ]

    const mossing_recipes = [
        { output: 'minecraft:mossy_cobblestone',    input: 'minecraft:cobblestone' },
        { output: 'quark:mossy_cobblestone_bricks', input: 'quark:cobblestone_bricks' },
        { output: 'minecraft:mossy_stone_bricks',   input: 'minecraft:stone_bricks' },
        { output: 'createdeco:mossy_red_bricks',    input: 'minecraft:bricks' },          // special case
        { output: 'createdeco:mossy_verdant_bricks',input: 'createdeco:verdant_bricks' },
        { output: 'createdeco:mossy_umber_bricks',  input: 'createdeco:umber_bricks' },
        { output: 'createdeco:mossy_pearl_bricks',  input: 'createdeco:pearl_bricks' },
        { output: 'createdeco:mossy_scarlet_bricks',input: 'createdeco:scarlet_bricks' },
        { output: 'createdeco:mossy_blue_bricks',   input: 'createdeco:blue_bricks' },
        { output: 'createdeco:mossy_dusk_bricks',   input: 'createdeco:dusk_bricks' },
        { output: 'createdeco:mossy_dean_bricks',   input: 'createdeco:dean_bricks' }
    ]

    mossing_tools.forEach(tool => {
        const toolName = tool.split(':')[1]

        mossing_recipes.forEach(recipe => {
            const output = recipe.output
            const input  = recipe.input
            const base   = input.replace(':', '_')
            const mossy  = output.split(':')[1]

            const id = `kubejs:deploying/${base}_to_${mossy}_with_${toolName}`

            if (typeof event.recipes.deploying === 'function') {
                event.recipes.deploying(output, input, tool).id(id)
            } else {
                event.custom({
                    type: 'create:deploying',
                    ingredients: [
                        { item: input },
                        { item: tool }
                    ],
                    results: [{ item: output }]
                }).id(id)
            }
        })
    })
})