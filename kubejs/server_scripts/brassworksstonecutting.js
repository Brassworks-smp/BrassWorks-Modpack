// kubejs/server_scripts/brassworksstonecutting.js

ServerEvents.recipes(event => {
    const stoneTypes = [
        "andesite",
        "asurine",
        "calcite",
        "crimsite",
        "deepslate",
        "diorite",
        "scoria",
        "scorchia",
        "ochrum",
        "limestone",
        "granite",
        "dripstone",
        "tuff",
        "veridium"
    ]

    // Normal stone types
    stoneTypes.forEach(stone => {
        const tag = `create:stone_types/${stone}`
        const outputs = [
            `brassworks:${stone}_cut_polished_connecting`,
            `brassworks:${stone}_cut_small_brick_connecting`
        ]

        outputs.forEach(outputItem => {
            event.stonecutting(outputItem, `#${tag}`)
        })
    })

    // Rose Quartz blocks
    const roseQuartzBlocks = [
        'brassworks:rose_quartz_bricks',
        'brassworks:rose_quartz_bricks_connecting',
        'brassworks:rose_quartz_chiseled',
        'brassworks:rose_quartz_chiseled_connecting',
        'brassworks:rose_quartz_crushed',
        'brassworks:rose_quartz_crushed_connecting',
        'brassworks:rose_quartz_polished_block',
        'brassworks:rose_quartz_polished_block_connecting',
        'brassworks:rose_quartz_tiles_connecting',
        'brassworks:rose_quartz_squares_connecting',
        'brassworks:rose_quartz_squares'
    ]

    // From Create's polished rose quartz -> any rose quartz block (×2 output)
    roseQuartzBlocks.forEach(block => {
        event.stonecutting(Item.of(block, 2), 'create:polished_rose_quartz')
    })

    // From any rose quartz block -> any other rose quartz block (normal ×1)
    roseQuartzBlocks.forEach(input => {
        roseQuartzBlocks.forEach(output => {
            if (input !== output) { // avoid recipe from item to itself
                event.stonecutting(output, input)
            }
        })
    })
})
