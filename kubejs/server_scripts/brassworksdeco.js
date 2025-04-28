// kubejs/server_scripts/item_tags.js

ServerEvents.tags('item', event => {
    const entries = [
        "brassworks:andesite_cut_polished_connecting",
        "brassworks:asurine_cut_polished_connecting",
        "brassworks:andesite_cut_small_brick_connecting",
        "brassworks:asurine_cut_small_brick_connecting",
        "brassworks:calcite_cut_polished_connecting",
        "brassworks:calcite_cut_small_brick_connecting",
        "brassworks:crimsite_cut_polished_connecting",
        "brassworks:crimsite_cut_small_brick_connecting",
        "brassworks:deepslate_cut_polished_connecting",
        "brassworks:deepslate_cut_small_brick_connecting",
        "brassworks:diorite_cut_polished_connecting",
        "brassworks:diorite_cut_small_brick_connecting",
        "brassworks:scoria_cut_small_brick_connecting",
        "brassworks:scoria_cut_polished_connecting",
        "brassworks:scorchia_cut_small_brick_connecting",
        "brassworks:scorchia_cut_polished_connecting",
        "brassworks:ochrum_cut_small_brick_connecting",
        "brassworks:ochrum_cut_polished_connecting",
        "brassworks:limestone_cut_small_brick_connecting",
        "brassworks:limestone_cut_polished_connecting",
        "brassworks:granite_cut_small_brick_connecting",
        "brassworks:granite_cut_polished_connecting",
        "brassworks:dripstone_cut_small_brick_connecting",
        "brassworks:dripstone_cut_polished_connecting",
        "brassworks:tuff_cut_polished_connecting",
        "brassworks:tuff_cut_small_brick_connecting",
        "brassworks:veridium_cut_polished_connecting",
        "brassworks:veridium_cut_small_brick_connecting",
        // skipping rose quartz
    ]

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

    stoneTypes.forEach(stone => {
        const tag = `create:stone_types/${stone}`
        entries.forEach(entry => {
            if (entry.includes(stone)) {
                event.add(tag, entry)
            }
        })
    })
})
