const removedRecipes=[
	'apotheosis:spawner/no_ai',
	'apotheosis:spawner/no_ai_inverted',
	'apotheosis:spawner/ignore_conditions',
	'apotheosis:spawner/ignore_conditions_inverted'
]

ServerEvents.recipes(event => {
	removedRecipes.forEach(recipe => {
        event.remove({ id: recipe});
    });
})