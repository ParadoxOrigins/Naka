const { Language, util } = require("klasa");

module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {
            DEFAULT: (key) => `${key} n'a pas encore été traduit vers fr-FR.`,
            DEFAULT_LANGUAGE: "Langue par défaut",
            PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) => `Le prefix${Array.isArray(prefix) ?
                `/les prefixes pour cette guild sont: ${prefix.map(pre => `\`${pre}\``).join(", ")}` :
                ` sur cette guild est: \`${prefix}\``
            }`,
            SETTING_GATEWAY_EXPECTS_GUILD: "The parameter <Guild> expects either a Guild or a Guild Object.",
            SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `The value ${data} for the key ${key} does not exist.`,
            SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `The value ${data} for the key ${key} already exists.`,
            SETTING_GATEWAY_SPECIFY_VALUE: "You must specify the value to add or filter.",
            SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `The key ${key} is not an Array.`,
            SETTING_GATEWAY_KEY_NOEXT: (key) => `The key ${key} does not exist in the current data schema.`,
            SETTING_GATEWAY_INVALID_TYPE: "The type parameter must be either add or remove.",
            SETTING_GATEWAY_INVALID_FILTERED_VALUE: (piece, value) => `${piece.key} doesn't accept the value: ${value}`,
            RESOLVER_MULTI_TOO_FEW: (name, min = 1) => `Vous avez fourni trop peu de ${name}s. Au moins ${min} ${min === 1 ? "est" : "sont"} requis.`,
            RESOLVER_INVALID_BOOL: (name) => `${name} doit être true ou false.`,
            RESOLVER_INVALID_CHANNEL: (name) => `${name} doit être une mention ou une ID de salon valide.`,
            RESOLVER_INVALID_CUSTOM: (name, type) => `${name} doit être un ${type} valide.`,
            RESOLVER_INVALID_DATE: (name) => `${name} doit être une date valide.`,
            RESOLVER_INVALID_DURATION: (name) => `${name} doit être une durée valide.`,
            RESOLVER_INVALID_EMOJI: (name) => `${name} doit être un tag d'emoji custom ou une ID d'emoji valide.`,
            RESOLVER_INVALID_FLOAT: (name) => `${name} doit être un nombre valide.`,
            RESOLVER_INVALID_GUILD: (name) => `${name} doit être une ID de guild valide.`,
            RESOLVER_INVALID_INT: (name) => `${name} doit être un nombre entier valide.`,
            RESOLVER_INVALID_LITERAL: (name) => `Your option did not match the only possibility: ${name}`,
            RESOLVER_INVALID_MEMBER: (name) => `${name} must be a mention or valid user id.`,
            RESOLVER_INVALID_MESSAGE: (name) => `${name} must be a valid message id.`,
            RESOLVER_INVALID_PIECE: (name, piece) => `${name} must be a valid ${piece} name.`,
            RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} must follow this regex pattern \`${pattern}\`.`,
            RESOLVER_INVALID_ROLE: (name) => `${name} doit être une mention ou une ID de rôle valide.`,
            RESOLVER_INVALID_STRING: (name) => `${name} doit être un string valide.`,
            RESOLVER_INVALID_TIME: (name) => `${name} doit être une durée valide ou une date valide.`,
            RESOLVER_INVALID_URL: (name) => `${name} doit être un URL valide.`,
            RESOLVER_INVALID_USER: (name) => `${name} doit être une mention ou une ID d'utilisateur valide.`,
            RESOLVER_STRING_SUFFIX: " caractères",
            RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} doit être précisément ${min}${suffix}.`,
            RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} doit être entre ${min} et ${max}${suffix}.`,
            RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} doit être supérieur à ${min}${suffix}.`,
            RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} doit être inférieur à ${max}${suffix}.`,
            REACTIONHANDLER_PROMPT: "A quelle page voulez-vous sauter?",
            COMMANDMESSAGE_MISSING: "Vous avez oublié de spécifier un ou plusieurs arguments",
            COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} est un argument requis`,
            COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `Vous avez oublié de spécifier une option: (${possibles})`,
            COMMANDMESSAGE_NOMATCH: (possibles) => `L'option que vous avez spécifié ne fait pas partie des possibilités: (${possibles})`,
            // eslint-disable-next-line max-len
            MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time, abortOptions) => `${tag} | **${error}** | Vous avez **${time}** secondes pour répondre a cette question avec un argument valide. Tapez **${abortOptions.join("**, **")}** pour annuler.`,
            // eslint-disable-next-line max-len
            MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag, name, time, cancelOptions) => `${tag} | **${name}** est un argument répété | Vous avez **${time}** secondes pour répondre a cette question avec plusieurs arguments valide. Tapez **${cancelOptions.join("**, **")}** pour annuler.`,
            MONITOR_COMMAND_HANDLER_ABORTED: "Annulé",
            MONITOR_COMMAND_HANDLER_POSSIBILITIES: ["Annuler", "Arrêter"],
            MONITOR_COMMAND_HANDLER_REPEATING_POSSIBLITIES: ["Annuler"],
            INHIBITOR_COOLDOWN: (remaining) => `Vous venez d'utiliser cette commande. Vous pourrez de nouveau utiliser cette commande dans ${remaining} seconde${remaining === 1 ? "" : "s"}.`,
            INHIBITOR_DISABLED_GUILD: "Cette commande a été désactivé par un admin de cette guild.",
            INHIBITOR_DISABLED_GLOBAL: "Cette commande a été désactivé globalement par le propriétaire du bot.",
            INHIBITOR_MISSING_BOT_PERMS: (missing) => `Permissions insuffisantes, manquant: **${missing}**`,
            INHIBITOR_NSFW: "Vous ne pouvez pas utiliser de commandes NSFW en dehors d'un salon textuel NSFW.",
            INHIBITOR_PERMISSIONS: "Vous n'avez pas la permission d'utiliser cette commande.",
            INHIBITOR_REQUIRED_SETTINGS: (settings) => `La guild manque le paramètre **${settings.join(", ")}** ${settings.length !== 1 ? "s" : ""} et donc la commande ne peut pas être exécuté.`,
            INHIBITOR_RUNIN: (types) => `Cette commande est seulement disponible dans les salons de type ${types}.`,
            INHIBITOR_RUNIN_NONE: (name) => `La commande ${name} n'est pas configuré pour être exécuté dans aucun type de salons.`,
            COMMAND_BLACKLIST_DESCRIPTION: "Blacklist ou unblacklist des utilisateurs du bot",
            COMMAND_BLACKLIST_SUCCESS: (usersAdded, usersRemoved, guildsAdded, guildsRemoved) => [
                usersAdded.length ? `**Utilisateurs Ajoutées**\n${util.codeBlock("", usersAdded.join(", "))}` : "",
                usersRemoved.length ? `**Utilisateurs Enlevées**\n${util.codeBlock("", usersRemoved.join(", "))}` : "",
                guildsAdded.length ? `**Guilds Ajoutées**\n${util.codeBlock("", guildsAdded.join(", "))}` : "",
                guildsRemoved.length ? `**Guilds Enlevées**\n${util.codeBlock("", guildsRemoved.join(", "))}` : ""
            ].filter(val => val !== "").join("\n"),
            COMMAND_EVAL_DESCRIPTION: "Evalue du JavaScript. Réservé au propriétaire du bot.",
            COMMAND_EVAL_EXTENDEDHELP: [
                "La commande eval évalue le code tel quel, quelconque erreur qui surviendrait sera pris en charge.",
                "Accessoirement sa utilise la fonction de flags. écrivez --silent, --depth=number ou --async pour customisé l'output.",
                "Le flag --silent ne renverra pas d'output.",
                "Le flag --depth accepte un nombre, par example, --depth=2, pour customisé la profondeur d'util.inspect.",
                "Le flag --async flag va envelopper le code dans une fonction async, par contre, si vous voulez renvoyer quelque chose, vous devrez utiliser le mot-clé return.",
                "Le flag --showHidden va activer l'option showHidden d'util.inspect.",
                "Si l'output est trop large, cela enverra l'output dans un fichier, ou dans la console si le bot n'a pas la permission ATTACH_FILES."
            ].join("\n"),
            COMMAND_EVAL_ERROR: (time, output, type) => `**Erreur**:${output}\n**Type**:${type}\n${time}`,
            COMMAND_EVAL_OUTPUT: (time, output, type) => `**Output**:${output}\n**Type**:${type}\n${time}`,
            COMMAND_EVAL_SENDFILE: (time, type) => `L'output était trop large... le résultat a été envoyé dans un fichier.\n**Type**:${type}\n${time}`,
            COMMAND_EVAL_SENDCONSOLE: (time, type) => `l'Output était trop large... le résultat a été envoyé dans la console.\n**Type**:${type}\n${time}`,
            COMMAND_UNLOAD: (type, name) => `✅ ${type}: ${name} Déchargé`,
            COMMAND_UNLOAD_DESCRIPTION: "Unloads the klasa piece.",
            COMMAND_UNLOAD_WARN: "You probably don't want to unload that, since you wouldn't be able to run any command to enable it again",
            COMMAND_TRANSFER_ERROR: "❌ That file has been transfered already or never existed.",
            COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ Successfully transferred ${type}: ${name}.`,
            COMMAND_TRANSFER_FAILED: (type, name) => `Transfer of ${type}: ${name} to Client has failed. Please check your Console.`,
            COMMAND_TRANSFER_DESCRIPTION: "Transfers a core piece to its respective folder.",
            COMMAND_RELOAD: (type, name, time) => `✅ Reloaded ${type}: ${name}. (Took: ${time})`,
            COMMAND_RELOAD_FAILED: (type, name) => `❌ Failed to reload ${type}: ${name}. Please check your Console.`,
            COMMAND_RELOAD_ALL: (type, time) => `✅ Reloaded all ${type}. (Took: ${time})`,
            COMMAND_RELOAD_EVERYTHING: (time) => `✅ Reloaded everything. (Took: ${time})`,
            COMMAND_RELOAD_DESCRIPTION: "Reloads a klasa piece, or all pieces of a klasa store.",
            COMMAND_REBOOT: "Rebooting...",
            COMMAND_REBOOT_DESCRIPTION: "Reboots the bot.",
            COMMAND_LOAD: (time, type, name) => `✅ Successfully loaded ${type}: ${name}. (Took: ${time})`,
            COMMAND_LOAD_FAIL: "The file does not exist, or an error occurred while loading your file. Please check your console.",
            COMMAND_LOAD_ERROR: (type, name, error) => `❌ Failed to load ${type}: ${name}. Reason:${util.codeBlock("js", error)}`,
            COMMAND_LOAD_DESCRIPTION: "Load a piece from your bot.",
            COMMAND_PING: "Ping?",
            COMMAND_PING_DESCRIPTION: "Fait un test de connexion avec Discord.",
            COMMAND_PINGPONG: (diff, ping) => `Pong! (l'aller-retour a pris: ${diff}ms. Battement de coeur: ${ping}ms.)`,
            COMMAND_INVITE: () => [
                `Pour ajouter ${this.client.user.username} a votre serveur Discord:`,
                `<${this.client.invite}>`,
                util.codeBlock("", [
                    "Le lien d'invitation ci-dessus contient les permissions minimum pour que toutes les commandes fonctionnes.",
                    "Je sais que toutes les permissions ne sont pas toujours bien pour tout les serveurs, donc n'ayez pas peur d'en décocher.",
                    "Si vous essayez d'utiliser une commande qui a besoin de certaines permissions, le bot vous le fera savoir."
                ].join(" ")),
                "Veuillez adresser une issue a <https://github.com/ParadoxOrigins/Naka> si vous trouvez un quelconque bug."
            ],
            COMMAND_INVITE_DESCRIPTION: "Donne le lien d'invitation du bot.",
            COMMAND_INFO: [
                "Klasa est une framework 'plug-and-play' construit par dessus la librairie Discord.js.",
                "La plupart du code est modulaire, ce qui laisse les développeurs modifié Klasa pour convenir a leurs besoin.",
                "",
                "Quelques fonctions de Klasa:",
                "• 🐇💨 Chargement rapide avec support pour ES2017 (`async`/`await`)",
                "• 🎚🎛 Par-client/guild/user paramètres qui peuvent être étendu avec vos propres paramètres",
                "• 💬 Système de commandes customizable",
                "• 👀 Des \"Monitors\", which can watch messages and edits (for swear filters, spam protection, etc.)",
                "• ⛔ \"Inhibitors\", which can prevent commands from running based on any condition you wish to apply (for permissions, blacklists, etc.)",
                "• 🗄 \"Providers\", which simplify usage of any database of your choosing",
                "• ✅ \"Finalizers\", which run after successful commands (for logging, collecting stats, cleaning up responses, etc.)",
                "• ➕ \"Extendables\", which passively add methods, getters/setters, or static properties to existing Discord.js or Klasa classes",
                "• 🌐 \"Languages\", which allow you to localize your bot's responses",
                "• ⏲ \"Tasks\", which can be scheduled to run in the future, optionally repeating",
                "",
                "We hope to be a 100% customizable framework that can cater to all audiences. We do frequent updates and bugfixes when available.",
                "If you're interested in us, check us out at https://klasa.js.org"
            ],
            COMMAND_INFO_DESCRIPTION: "Provides some information about this bot.",
            COMMAND_HELP_DESCRIPTION: "Display help for a command.",
            COMMAND_HELP_NO_EXTENDED: "No extended help available.",
            COMMAND_HELP_DM: "📥 | The list of commands you have access to has been sent to your DMs.",
            COMMAND_HELP_NODM: "❌ | You have DMs disabled, I couldn't send you the commands in DMs.",
            COMMAND_HELP_USAGE: (usage) => `Usage :: ${usage}`,
            COMMAND_HELP_EXTENDED: "Extended Help ::",
            COMMAND_ENABLE: (type, name) => `+ Successfully enabled ${type}: ${name}`,
            COMMAND_ENABLE_DESCRIPTION: "Re-enables or temporarily enables a command/inhibitor/monitor/finalizer. Default state restored on reboot.",
            COMMAND_DISABLE: (type, name) => `+ Successfully disabled ${type}: ${name}`,
            COMMAND_DISABLE_DESCRIPTION: "Re-disables or temporarily disables a command/inhibitor/monitor/finalizer/event. Default state restored on reboot.",
            COMMAND_DISABLE_WARN: "You probably don't want to disable that, since you wouldn't be able to run any command to enable it again",
            COMMAND_CONF_NOKEY: "You must provide a key",
            COMMAND_CONF_NOVALUE: "You must provide a value",
            COMMAND_CONF_GUARDED: (name) => `${util.toTitleCase(name)} may not be disabled.`,
            COMMAND_CONF_UPDATED: (key, response) => `Successfully updated the key **${key}**: \`${response}\``,
            COMMAND_CONF_KEY_NOT_ARRAY: "This key is not array type. Use the action 'reset' instead.",
            COMMAND_CONF_GET_NOEXT: (key) => `The key **${key}** does not seem to exist.`,
            COMMAND_CONF_GET: (key, value) => `The value for the key **${key}** is: \`${value}\``,
            COMMAND_CONF_RESET: (key, response) => `The key **${key}** has been reset to: \`${response}\``,
            COMMAND_CONF_NOCHANGE: (key) => `The value for **${key}** was already that value.`,
            COMMAND_CONF_SERVER_DESCRIPTION: "Define per-guild settings.",
            COMMAND_CONF_SERVER: (key, list) => `**Guild Settings${key}**\n${list}`,
            COMMAND_CONF_USER_DESCRIPTION: "Define per-user settings.",
            COMMAND_CONF_USER: (key, list) => `**User Settings${key}**\n${list}`,
            COMMAND_STATS: (memUsage, uptime, users, guilds, channels, klasaVersion, discordVersion, processVersion, message) => [
                "= STATISTICS =",
                "",
                `• Mem Usage  :: ${memUsage} MB`,
                `• Uptime     :: ${uptime}`,
                `• Utilisateurs :: ${users}`,
                `• Guilds     :: ${guilds}`,
                `• Salons     :: ${channels}`,
                `• Klasa      :: v${klasaVersion}`,
                `• Discord.js :: v${discordVersion}`,
                `• Node.js    :: ${processVersion}`,
                `• Shard      :: ${(message.guild ? message.guild.shardID : 0) + 1} / ${this.client.options.totalShardCount}`
            ],
            COMMAND_STATS_DESCRIPTION: "Provides some details about the bot and stats.",
            MESSAGE_PROMPT_TIMEOUT: "The prompt has timed out."
        };
    }

    async init() {
        await super.init();
    }

};