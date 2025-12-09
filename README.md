# Arelith Log Cleaner

A lightweight Electron desktop app for cleaning Neverwinter Nights Enhanced Edition log files. Filters out system messages, combat spam. Helping with summarizing, report creation and indexing of long conversations.

## Features

- Desktop application built with Electron
- Drag-and-drop log file upload
- Real-time filtering with customizable options
- Export cleaned logs or copy to clipboard
- Completely offline - no internet required
- Lightweight and portable

## Installation

### Prerequisites
- Node.js (v14 or later)

### Setup
```bash
git clone https://github.com/dripbilliam/ArelithLogCleaning.git
cd ArelithLogCleaning
npm install
```

## Usage

### Start the App
```bash
npm start
```

### Using the App
1. Click "Choose Log File" and select your NWN log file
2. Configure filtering options:
   - **Remove timestamps** - Strip `[CHAT WINDOW TEXT] [timestamp]` prefix
   - **Filter combat spam** - Remove combat rolls and damage
   - **Filter system messages** - Remove system notifications
   - **Aggressive NPC filtering** - Remove generic NPC dialogue
   - **Filter crafting rolls** - Remove crafting success/failure messages
   - **Filter menu dialogs** - Remove menu interaction text
   - **Filter [Tell] messages** - Remove private tells
3. Click "Process Log" to filter the file
4. View statistics and preview the cleaned output
5. Click "Export Cleaned Log" to save or "Copy to Clipboard"

### Finding Your Logs
NWN logs are typically located in:
- Windows: `Documents/Neverwinter Nights/logs/`
- Mac: `~/Documents/Neverwinter Nights/logs/`
- Linux: `~/.local/share/Neverwinter Nights/logs/`

## What Gets Filtered Out

- System messages (loading screens, area settings, player joins/leaves)
- Combat spam (attack rolls, damage, saves, immunities)
- Spell and skill usage notifications
- XP and adventuring bonuses
- Crafting rolls and trade skills
- Menu interactions and dialogs
- Untranslated `[Talk]` lines (non-common language)
- Quest objectives
- Summoning/commanding messages
- Equipment changes
- Skill checks (Climb, Hide, Spot, etc.)

## What Gets Kept

- Player dialogue in common language
- Player emotes and actions
- Character roleplay text
- Player whispers/shouts/says

## Customization

All filtering patterns can be modified in `cleaner.js`:

```javascript
const config = {
    playerMessagePatterns: [
        // Patterns that identify player messages
    ],
    excludePatterns: [
        // System messages to filter out
    ],
    craftingPatterns: [
        // Crafting-specific filters
    ],
    npcPatterns: [
        // NPC dialogue filters
    ]
};
```

## File Structure

- `main.js` - Electron main process
- `index.html` - App UI
- `cleaner.js` - Filtering logic and patterns
- `package.json` - Dependencies and scripts

## License

MIT
