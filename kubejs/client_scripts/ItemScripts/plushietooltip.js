// Add tooltips using item registry instead
ItemEvents.tooltip(event => {
  event.add('brassworks:sniffer_plushie', [
    Text.of('Awarded to Event Winners').color('#c7954b'), // Yellow like the Orange Card tooltip
    Text.of('Congratulations on your victory!').color('#eeda78'), // Yellow like the Orange Card tooltip
    Text.of('Right click to equip or place as a decorative block').color('#c7954b') // Yellow like the Orange Card tooltip
  ])
})