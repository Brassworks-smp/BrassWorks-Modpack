import os
import json


plank_types = [
    {"name": "oak", "log": "minecraft:block/oak_log", "planks": "minecraft:block/oak_planks", "log_top": "minecraft:block/oak_log_top"},
    {"name": "spruce", "log": "minecraft:block/spruce_log", "planks": "minecraft:block/spruce_planks", "log_top": "minecraft:block/spruce_log_top"},
    {"name": "birch", "log": "minecraft:block/birch_log", "planks": "minecraft:block/birch_planks", "log_top": "minecraft:block/birch_log_top"},
    {"name": "jungle", "log": "minecraft:block/jungle_log", "planks": "minecraft:block/jungle_planks", "log_top": "minecraft:block/jungle_log_top"},
    {"name": "acacia", "log": "minecraft:block/acacia_log", "planks": "minecraft:block/acacia_planks", "log_top": "minecraft:block/acacia_log_top"},
    {"name": "dark_oak", "log": "minecraft:block/dark_oak_log", "planks": "minecraft:block/dark_oak_planks", "log_top": "minecraft:block/dark_oak_log_top"},
    {"name": "mangrove", "log": "minecraft:block/mangrove_log", "planks": "minecraft:block/mangrove_planks", "log_top": "minecraft:block/mangrove_log_top"},
    {"name": "cherry", "log": "minecraft:block/cherry_log", "planks": "minecraft:block/cherry_planks", "log_top": "minecraft:block/cherry_log_top"},
    {"name": "willow", "log": "environmental:block/willow_log", "planks": "environmental:block/willow_planks", "log_top": "environmental:block/willow_log_top"},
    {"name": "pine", "log": "environmental:block/pine_log", "planks": "environmental:block/pine_planks", "log_top": "environmental:block/pine_log_top"},
    {"name": "plum", "log": "environmental:block/plum_log", "planks": "environmental:block/plum_planks", "log_top": "environmental:block/plum_log_top"},
    {"name": "wisteria", "log": "environmental:block/wisteria_log", "planks": "environmental:block/wisteria_planks", "log_top": "environmental:block/wisteria_log_top"},
    {"name": "ancient", "log": "quark:block/ancient_log", "planks": "quark:block/ancient_planks", "log_top": "quark:block/ancient_log_top"},
    {"name": "azalea", "log": "quark:block/azalea_log", "planks": "quark:block/azalea_planks", "log_top": "quark:block/azalea_log_top"},
    {"name": "blossom", "log": "quark:block/blossom_log", "planks": "quark:block/blossom_planks", "log_top": "quark:block/blossom_log_top"},
    {"name": "bamboo", "log": "minecraft:block/bamboo_block", "planks": "minecraft:block/bamboo_planks", "log_top": "minecraft:block/bamboo_block_top"},
    {"name": "crimson", "log": "minecraft:block/crimson_stem", "planks": "minecraft:block/crimson_planks", "log_top": "minecraft:block/crimson_stem_top"},
    {"name": "warped", "log": "minecraft:block/warped_stem", "planks": "minecraft:block/warped_planks", "log_top": "minecraft:block/warped_stem_top"},
    {"name": "pale_oak", "log": "vanillabackport:block/pale_oak_log", "planks": "vanillabackport:block/pale_oak_planks", "log_top": "vanillabackport:block/pale_oak_log_top"}
]

def create_directories():
    """Create necessary directory structure"""
    os.makedirs("create/models/block/large_water_wheel", exist_ok=True)

def generate_individual_models():
    """Generate individual model files for each wood type"""
    for plank in plank_types:
        large_water_wheel_model = {
            "parent": "create:block/large_water_wheel/textures",
            "loader": "forge:obj",
            "flip_v": True,
            "model": "create:models/block/large_water_wheel/waterwheel_large.obj",
            "textures": {
                "log": plank["log"],
                "planks": plank["planks"],
                "log_top": plank["log_top"]
            },
            "display": {
                "gui": {
                    "rotation": [30, 225, 0],
                    "translation": [0, 0, 0],
                    "scale": [0.25, 0.25, 0.25]
                },
                "fixed": {
                    "rotation": [90, 0, 0],
                    "translation": [0, 0, 0],
                    "scale": [0.2, 0.2, 0.2]
                },
                "thirdperson_righthand": {
                    "rotation": [75, 45, 0],
                    "translation": [0, 2.5, 0],
                    "scale": [0.2, 0.2, 0.2]
                },
                "thirdperson_lefthand": {
                    "rotation": [75, 45, 0],
                    "translation": [0, 2.5, 0],
                    "scale": [0.2, 0.2, 0.2]
                },
                "firstperson_righthand": {
                    "rotation": [0, 45, 0],
                    "scale": [0.2, 0.2, 0.2]
                },
                "firstperson_lefthand": {
                    "rotation": [0, 225, 0],
                    "scale": [0.2, 0.2, 0.2]
                }
            }
        }
        filename = f"create/models/block/large_water_wheel/item_{plank['name']}.json"
        with open(filename, 'w') as f:
            json.dump(large_water_wheel_model, f, indent=2)
        
        print(f"Generated: {filename}")

def main():
    """Main function to generate all files"""
    print("Creating directories...")
    create_directories()
    
    print("Generating individual large water wheel model files...")
    generate_individual_models()
    
    print(f"\nAll large water wheel model files generated successfully!")
    print(f"Generated {len(plank_types)} individual models")
    print("Files created in create/models/block/large_water_wheel/ directory")
    print("\nGenerated files:")
    for plank in plank_types:
        print(f"  - item_{plank['name']}.json")

if __name__ == "__main__":
    main()