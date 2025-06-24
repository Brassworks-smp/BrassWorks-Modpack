let tooltipData = {};

try {
  tooltipData = JsonIO.read('kubejs/assets/tooltip_data.json');
  if (!tooltipData || typeof tooltipData !== 'object') throw 'Invalid JSON structure';
} catch (e) {
  console.error('[Tooltip Loader] Failed to read or parse tooltip_data.json:', e);
  tooltipData = {};
}

const colorOrange = 0xc7954b;
const colorYellow = 0xeeda78;
const colorPink = 0xfc54fc;
const colorPurple = 0xa800a8;

ItemEvents.tooltip((tooltip) => {
  Object.entries(tooltipData).forEach(([itemId, data]) => {
    // 🔧 Minimal change: allow tag support
    const itemOrTag = itemId.startsWith('#') ? Ingredient.of(itemId) : itemId;

    tooltip.addAdvanced(itemOrTag, (item, advanced, text) => {
      const itemName = text.get(0);
      text.remove(0);

      const insertLines = [];

      const formatKeyHint = (keyName, keyColor) => Text.empty()
        .append(Text.of("[").darkGray())
        .append(Text.of(keyName).color(keyColor))
        .append(Text.of("]").darkGray());

      if (tooltip.shift) {
        // Show Shift hint if there's content
        if (data.shift?.summary || data.shift?.controls) {
          insertLines.push([
            Text.of("Hold ").darkGray(),
            formatKeyHint("Shift", 0xffffff),
            Text.of(" for Summary").darkGray(),
          ]);
        }

        // Show actual Shift content if it exists
        if (data.shift?.summary) {
          insertLines.push([]);
          data.shift.summary.forEach(line => {
            insertLines.push([createFormattedTextObject(line)]);
          });
        }

        if (data.shift?.controls) {
          data.shift.controls.forEach(control => {
            insertLines.push([]);
            insertLines.push([
              Text.of(control.requiresHold ? "Hold " : "When ").gray(),
              Text.of(control.control).gray()
            ]);
            control.text.forEach(line => {
              insertLines.push([Text.of(" ").append(createFormattedTextObject(line))]);
            });
          });
        }

        // Still show gray Ctrl hint if ctrl content exists
        if (data.ctrl?.controls?.length > 0) {
          insertLines.push([]);
          insertLines.push([
            Text.of("Hold ").darkGray(),
            formatKeyHint("Ctrl", 0xaaaaaa),
            Text.of(" for Controls").darkGray()
          ]);
        }

      } else if (tooltip.ctrl && data.ctrl?.controls?.length > 0) {
        insertLines.push([
          Text.of("Hold ").darkGray(),
          formatKeyHint("Ctrl", 0xffffff),
          Text.of(" for Controls").darkGray(),
        ]);

        data.ctrl.controls.forEach(control => {
          insertLines.push([]);
          insertLines.push([
            Text.of(control.requiresHold ? "Hold " : "When ").gray(),
            Text.of(control.control).gray()
          ]);
          control.text.forEach(line => {
            insertLines.push([Text.of(" ").append(createFormattedTextObject(line))]);
          });
        });

      } else {
        // Neither held — show Shift and Ctrl hints if applicable
        if (data.shift?.summary || data.shift?.controls) {
          insertLines.push([
            Text.of("Hold ").darkGray(),
            formatKeyHint("Shift", 0xaaaaaa),
            Text.of(" for Summary").darkGray()
          ]);
        }

        if (data.ctrl?.controls?.length > 0) {
          insertLines.push([
            Text.of("Hold ").darkGray(),
            formatKeyHint("Ctrl", 0xaaaaaa),
            Text.of(" for Controls").darkGray()
          ]);
        }
      }

      text.add(0, itemName);
      for (let i = insertLines.length - 1; i >= 0; i--) {
        text.add(1, insertLines[i]);
      }
    });
  });
});

function createFormattedTextObject(line) {
  const base = Text.empty();
  const regex = /(\$.*?\$)|(\^.*?\^)|(#.*?#)|([^$^#]+)/g;
  let match;

  while ((match = regex.exec(line)) !== null) {
    let segment = match[0];

    if (segment.startsWith('$')) {
      base.append(Text.of(segment.slice(1, -1)).color(colorYellow));
    } else if (segment.startsWith('^')) {
      base.append(Text.of(segment.slice(1, -1)).color(colorPink));
    } else if (segment.startsWith('#')) {
      base.append(Text.of(segment.slice(1, -1)).color(colorPurple));
    } else {
      base.append(Text.of(segment).color(colorOrange));
    }
  }

  return base;
}
