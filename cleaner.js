const config = {
    playerMessagePatterns: [
        /\]\s+(?:(?!Planar Portal|Script |Active ))((?:\[Talk\]\s+)?('{2})?[A-Z][^:\]]{0,30}('{2})?:|\S+\s+(casts|uses|says|shouts|whispers)\s)/,
    ],
    
    excludePatterns: [
        /^\[Talk\]/i,
        /^\[Shout\]/i,
        /^\[Whisper\]/i,
        /Loading Screen/i,
        /Area Setting/i,
        /Piety:/i,
        /Active Cooldowns/i,
        /Scry is once again available/i,
        /Food: /i,
        /Water: /i,
        /Rest: /i,
        /Lost Item/i,
        /Acquired Item/i,
        /The time is/i,
        /Current Roleplay Bonus:/i,
        /Available Crafting Points:/i,
        /Stored Adventuring XP:/i,
        /Skill Armor Check Penalt/i,
        /: Where would you like to go today\?/i,
        /Select action/i,
        /Use object/i,
        /has joined as a player/i,
        /has left as a player/i,
        /Welcome to Arelith/i,
        /You receive.*roleplay bonus/i,
        /Portalling/i,
        /NWN Engine/i,
        /subdual mode/i,
        /messages in the.*faction/i,
        /select.*message.*read/i,
        /to post a message/i,
        /\*Roll result:/i,
        /\*Rolls.*dice/i,
        /uses item's special power/i,
        /Day \d+, Month/i,
        /This object is locked/i,
        /You have refreshed/i,
        /Resting\./i,
        /Cancelled Rest/i,
        /flagged as away/i,
        /You are now observing/i,
        /Select the player you want to observe/i,
        /XP Gained:/i,
        /Sale value of item:/i,
        / casts /i,
        / uses /i,
        / by [A-Z]/i,
        /] [A-Z][^:]+: What item do you wish/i,
        /] [A-Z][^:]+: Message board/i,
        /] [A-Z][^:]+: Select the message/i,
        /] [A-Z][^:]+: \[Continue\]$/i,
        /] [A-Z][^:]+: \[Next page\]$/i,
        /] [A-Z][^:]+: \[Previous page\]$/i,
        /] [A-Z][^:]+: \[Remove message\]$/i,
        /] [A-Z][^:]+: You retrieve/i,
        /] [A-Z][^:]+: Remove: \[/i,
        /] [A-Z][^:]+: Next$/i,
        /^Planar Portal/i,
        /^Association Agent/i,
        /^Gondolier:/i,
        /^Script /i,
        /has a timer of/i,
        / is once again available/i,
        /^Active /i,
        /^\*Departs on/i,
        /^In a great cavern/i,
        /^You cannot/i,
        /Resisted \d+ damage/i,
        /Immune \d+ of /i,
        /Immune to (Critical Hits|Sneak Attacks)/i,
        /Tumble:/i,
        /Healed -?\d+ HP\./i,
        /\bObjective \d+:/i,
        /\bArcane Flux:/i,
        /\bSneak Attack :/i,
        /\bAoO :/i,
        /\bFoB :/i,
        /\bPA :/i,
        /\bOff Hand :/i,
        /\bExpertise :/i,
        / : (Climb|Tumble|Hide|Move Silently|Spot|Listen|Search|Disable Trap|Open Lock|Pick Pocket|Set Trap|Taunt|Use Magic Device|Parry|Discipline|Concentration) : \*(success|failure)\* :/i,
        /\bTake 20 :/i,
        /\bSpell Interrupted/i,
        /\bSpell Replenished/i,
        /\bInit Roll:/i,
        /SR check:/i,
        / : (FORT|WILL|REFL|REF) vs\. /i,
        / : (Fortitude Save|Will Save|Reflex Save) vs\. /i,
        / : FORT : \(/i,
        / : (Fortitude Save|Will Save|Reflex Save) : \*(success|failure)\* :/i,
        /: Immune to (Poison|Critical Hits|Sneak Attacks|Mind-Affecting|Disease)/i,
        /Adventuring Bonus:/i,
        /damages .+: \d+/i,
        /-\[C\.Shot: (Leg|Arm|Head|Torso)\]->/i,
        /Coup De Grace :/i,
        /-automatic hit->/i,
        /: (Concentration|Heal): \(/i,
        /Disease: Incubation Started/i,
        /\[CC:\d+%\]/i,
        /\[hit\]/i,
        /\[miss\]/i,
        /\[CRIT\]/i,
        /\[FAIL\]/i,
        /increased by \d+/i,
        /decreased by \d+/i,
        /Reduced \d+ damage/i,
        /Acquired Item:/i,
        /You follow me/i,
        /Protect me!/i,
        /Guard me real good/i,
        /You have to fight!/i,
        /Oww\.\.\. I'm hurt/i,
        /I may get killed/i,
        /Time to run away!/i,
        /has been destroyed/i,
        /You have equipped/i,
        /You have unequipped/i,
        /Please make a selection/i,
        /Fetching for:/i,
        /Found:/i,
        /unsummoning /i,
        /You have died:/i,
        /Summoned .+ (Rat|Stag|Zombie)/i,
        /Reminder: Your DM badge/i,
    ],

    craftingPatterns: [
        /: Mastery .* : \*(success|failure)\*/i,
        /: Trade Skill .* : \*(success|failure)\*/i,
    ],

    npcPatterns: [
        /: Take a look/i,
        /: I make you bleed!/i,
        /: Smash you!/i,
        /: Me fight good!/i,
        /\[OK\]$/i,
        /\[Buy/i,
        /\[Withdraw\]$/i,
        /\[Current balance:/i,
        /Newly Saved Items:/i,
        /: \[Und\] /i,
        /: \[Something has opened\]/i,
        /Area name is:/i,
        /Maximum Strength reached/i,
        /Player list:/i,
    ],

    menuDialogPattern: /:\s*\[[^\]]+\]\s*$/,
    tellPattern: /\[Tell\]/i
};

let processedLog = [];
let originalFileName = '';


const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');
const processBtn = document.getElementById('processBtn');
const exportBtn = document.getElementById('exportBtn');
const copyBtn = document.getElementById('copyBtn');
const logOutput = document.getElementById('logOutput');
const emptyState = document.getElementById('emptyState');
const outputContainer = document.getElementById('outputContainer');
const stats = document.getElementById('stats');
const optRemovePrefix = document.getElementById('optRemovePrefix');
const optFilterCombat = document.getElementById('optFilterCombat');
const optFilterSystem = document.getElementById('optFilterSystem');
const optFilterNPC = document.getElementById('optFilterNPC');
const optFilterCrafting = document.getElementById('optFilterCrafting');
const optFilterMenuDialog = document.getElementById('optFilterMenuDialog');
const optFilterTells = document.getElementById('optFilterTells');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        originalFileName = file.name.replace('.txt', '');
        fileName.textContent = file.name;
        processBtn.disabled = false;
    } else {
        fileName.textContent = 'No file selected';
        processBtn.disabled = true;
    }
});

processBtn.addEventListener('click', async () => {
    const file = fileInput.files[0];
    if (!file) return;

    processBtn.disabled = true;
    processBtn.textContent = 'Processing...';

    try {
        const text = await file.text();
        processLog(text);
        
        exportBtn.disabled = false;
        copyBtn.disabled = false;
        processBtn.textContent = 'Process Log';
    } catch (error) {
        alert('Error processing file: ' + error.message);
        processBtn.textContent = 'Process Log';
    }
    
    processBtn.disabled = false;
});

// Export button handler
exportBtn.addEventListener('click', () => {
    if (processedLog.length === 0) return;

    const blob = new Blob([processedLog.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cleaned-${originalFileName}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Copy button handler
copyBtn.addEventListener('click', async () => {
    if (processedLog.length === 0) return;

    try {
        await navigator.clipboard.writeText(processedLog.join('\n'));
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    } catch (error) {
        alert('Failed to copy to clipboard: ' + error.message);
    }
});

function shouldKeepLine(line) {
    if (!line.trim()) return false;
    
    if (!line.includes('[CHAT WINDOW TEXT]')) return false;
    
    if (optFilterTells.checked) {
        if (config.tellPattern.test(line)) return false;
    }
    
    if (optFilterSystem.checked) {
        for (let i = 0; i < config.excludePatterns.length; i++) {
            if (config.excludePatterns[i].test(line)) {
                if (line.includes('[Tell]') && /] [A-Z][^:]+: \[Tell\]/.test(line)) {
                    continue;
                }
                return false;
            }
        }
    }

    if (optFilterNPC.checked) {
        const isNPC = config.npcPatterns.some(pattern => pattern.test(line));
        if (isNPC) return false;
    }

    if (optFilterCrafting.checked) {
        const isCrafting = config.craftingPatterns.some(pattern => pattern.test(line));
        if (isCrafting) return false;
    }

    if (optFilterMenuDialog.checked) {
        if (config.menuDialogPattern.test(line)) return false;
    }
    
    const isPlayerMessage = config.playerMessagePatterns.some(pattern => pattern.test(line));
    if (!isPlayerMessage) return false;
    
    return true;
}

function removeTimestampPrefix(line) {
    if (!optRemovePrefix.checked) return line;
    
    const match = line.match(/^\[CHAT WINDOW TEXT\]\s*\[[^\]]+\]\s*(.+)$/);
    if (match) {
        return match[1];
    }
    
    return line;
}

function processLog(content) {
    const lines = content.split(/\r?\n/);
    const filteredLines = [];
    let totalLines = 0;

    for (const line of lines) {
        if (!line.trim()) continue;
        totalLines++;
        
        if (shouldKeepLine(line)) {
            const cleaned = removeTimestampPrefix(line);
            filteredLines.push(cleaned);
        }
    }

    processedLog = filteredLines;

    const reductionPercent = totalLines > 0 
        ? ((1 - filteredLines.length / totalLines) * 100).toFixed(1) 
        : 0;

    document.getElementById('totalLines').textContent = totalLines.toLocaleString();
    document.getElementById('filteredLines').textContent = filteredLines.length.toLocaleString();
    document.getElementById('reductionPercent').textContent = reductionPercent + '%';
    
    stats.style.display = 'grid';

    if (filteredLines.length === 0) {
        logOutput.innerHTML = '<div style="text-align: center; color: #6c757d; padding: 40px;">No lines matched the filter criteria.</div>';
    } else {
        logOutput.innerHTML = filteredLines
            .map(line => `<div class="log-line">${escapeHtml(line)}</div>`)
            .join('');
    }

    emptyState.style.display = 'none';
    outputContainer.style.display = 'block';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

[optRemovePrefix, optFilterCombat, optFilterSystem, optFilterNPC, optFilterCrafting, optFilterMenuDialog, optFilterTells].forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (fileInput.files[0] && processedLog.length >= 0) {
            processBtn.click();
        }
    });
});
