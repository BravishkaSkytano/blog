/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => FrontmatterModified
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  frontmatterProperty: "modified",
  createdDateProperty: "",
  momentFormat: "",
  storeHistoryLog: false,
  historyNewestFirst: false,
  historyMaxItems: 0,
  excludedFolders: [],
  useKeyupEvents: false,
  onlyUpdateExisting: false,
  timeout: 10,
  excludeField: "exclude_modified_update",
  appendField: "append_modified_update",
  appendMaximumFrequency: "day"
  // Append a maximum of 1 row per 'unit'
};
var FrontmatterModifiedSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Modified date property").setDesc("The name of the YAML/frontmatter property to update when your note is modified").addText((text) => text.setPlaceholder("modified").setValue(this.plugin.settings.frontmatterProperty).onChange(async (value) => {
      this.plugin.settings.frontmatterProperty = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Created date property (optional)").setDesc("Optional. Add a created property name, and the plugin will also update the note creation date.").addText((text) => text.setPlaceholder("created").setValue(this.plugin.settings.createdDateProperty).onChange(async (value) => {
      this.plugin.settings.createdDateProperty = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Date format").setDesc("This is in MomentJS format. Leave blank for the default ATOM format.").addText((text) => text.setPlaceholder("ATOM format").setValue(this.plugin.settings.momentFormat).onChange(async (value) => {
      this.plugin.settings.momentFormat = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Store history of all updates").setDesc(`Instead of storing only the last modified time, this will turn your "${this.plugin.settings.frontmatterProperty}" frontmatter property into a list of all of the dates/times you've edited this note.`).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.storeHistoryLog).onChange(async (value) => {
        this.plugin.settings.storeHistoryLog = value;
        await this.plugin.saveSettings();
        this.display();
      });
    });
    if (this.plugin.settings.storeHistoryLog) {
      new import_obsidian.Setting(containerEl).setName("Frequency of updates").setDesc("The plugin will store a maximum of 1 history entry per minute, hour, day, etc. If there are multiple edits in the specified period, the last edit entry will be updated instead.").addDropdown((dropdown) => {
        ["minute", "hour", "day", "week", "month", "quarter", "year"].forEach((unit) => dropdown.addOption(unit, unit));
        dropdown.setValue(this.plugin.settings.appendMaximumFrequency || "").onChange(async (value) => {
          this.plugin.settings.appendMaximumFrequency = value;
          await this.plugin.saveSettings();
        });
      });
      new import_obsidian.Setting(containerEl).setName("Order to store the history items").addDropdown((dropdown) => {
        dropdown.addOption("newest", "Newest item at start of list");
        dropdown.addOption("oldest", "Oldest item at start of list");
        dropdown.setValue(this.plugin.settings.historyNewestFirst ? "newest" : "oldest").onChange(async (value) => {
          this.plugin.settings.historyNewestFirst = value === "newest";
          await this.plugin.saveSettings();
        });
      });
      new import_obsidian.Setting(containerEl).setName("Maximum number of history items").setDesc("Leave blank or zero for unlimited history items.").addText((text) => text.setPlaceholder("Unlimited").setValue(this.plugin.settings.historyMaxItems === 0 ? "" : this.plugin.settings.historyMaxItems.toString()).onChange(async (value) => {
        const num = parseInt(value, 10);
        this.plugin.settings.historyMaxItems = num > 0 ? num : 0;
        await this.plugin.saveSettings();
      }));
    }
    new import_obsidian.Setting(containerEl).setName("Vault options").setHeading();
    new import_obsidian.Setting(containerEl).setName("Exclude folders").setDesc("Add a list of folders to exclude, one folder per line. All subfolders will be also excluded.").addTextArea((text) => text.setValue(this.plugin.settings.excludedFolders.join("\n")).onChange(async (value) => {
      this.plugin.settings.excludedFolders = value.split("\n").map((x) => x.trim()).filter((x) => !!x);
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Only update existing fields").setDesc("If you turn this on, it will only update a frontmatter field *if that field already exists*.").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.onlyUpdateExisting).onChange(async (value) => {
        this.plugin.settings.onlyUpdateExisting = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Use typing events instead of Obsidian events").setDesc(`If you make changes to a file using an external editor and Obsidian is currently open, Obsidian
will register this as a modification and update the frontmatter. If you don't want this to happen, and only
want the frontmatter when you are making changes inside Obsidian, you can try this mode. It watches for typing 
events, and then updates the frontmatter only when you type. This means that some events like updating your note 
or properties using your mouse will not cause the modified field to update. You will need to restart Obsidian 
after this change.`).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.useKeyupEvents).onChange(async (value) => {
        this.plugin.settings.useKeyupEvents = value;
        await this.plugin.saveSettings();
      });
    });
  }
};

// src/main.ts
var FrontmatterModified = class extends import_obsidian2.Plugin {
  constructor() {
    super(...arguments);
    this.timer = {};
  }
  async onload() {
    await this.loadSettings();
    if (!this.settings.useKeyupEvents) {
      this.registerEvent(this.app.workspace.on("editor-change", (_editor, info) => {
        if (info.file instanceof import_obsidian2.TFile) {
          this.updateFrontmatter(info.file);
        }
      }));
    } else if (this.settings.useKeyupEvents) {
      this.registerDomEvent(document, "keyup", (ev) => {
        if (!ev.ctrlKey && !ev.altKey && !ev.metaKey && /^.$/u.test(ev.key)) {
          try {
            if (ev.target.closest(".markdown-source-view .cm-editor")) {
              this.updateFrontmatter(ev.view.app.workspace.activeEditor.file);
            }
          } catch (e) {
          }
        }
      });
    }
    this.addSettingTab(new FrontmatterModifiedSettingTab(this.app, this));
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  /**
   * Use a timeout to update the metadata only once the user has stopped typing.
   * If the user keeps typing, then it will reset the timeout and start again from zero.
   *
   * Obsidian doesn't appear to correctly handle this situation otherwise, and pops an
   * error to say "<File> has been modified externally, merging changes automatically."
   *
   * @param {TFile} file
   */
  async updateFrontmatter(file) {
    clearTimeout(this.timer[file.path]);
    this.timer[file.path] = window.setTimeout(() => {
      var _a, _b;
      const cache = this.app.metadataCache.getFileCache(file);
      if (this.settings.onlyUpdateExisting && !((_a = cache == null ? void 0 : cache.frontmatter) == null ? void 0 : _a.hasOwnProperty(this.settings.frontmatterProperty))) {
      } else if ((_b = cache == null ? void 0 : cache.frontmatter) == null ? void 0 : _b[this.settings.excludeField]) {
      } else if (this.settings.excludedFolders.some((folder) => file.path.startsWith(folder + "/"))) {
      } else {
        this.app.fileManager.processFrontMatter(file, (frontmatter) => {
          const now = (0, import_obsidian2.moment)();
          if (this.settings.createdDateProperty && !frontmatter[this.settings.createdDateProperty]) {
            frontmatter[this.settings.createdDateProperty] = (0, import_obsidian2.moment)(file.stat.ctime).format(this.settings.momentFormat);
          }
          const isAppendArray = this.settings.storeHistoryLog || frontmatter[this.settings.appendField] === true;
          const desc = this.settings.historyNewestFirst;
          let secondsSinceLastUpdate = Infinity;
          let previousEntryMoment;
          if (frontmatter[this.settings.frontmatterProperty]) {
            let previousEntry = frontmatter[this.settings.frontmatterProperty];
            if (isAppendArray && Array.isArray(previousEntry)) {
              previousEntry = previousEntry[desc ? 0 : previousEntry.length - 1];
            }
            previousEntryMoment = (0, import_obsidian2.moment)(previousEntry, this.settings.momentFormat, true);
            if (previousEntryMoment.isValid()) {
              secondsSinceLastUpdate = now.diff(previousEntryMoment, "seconds");
            }
          }
          if (secondsSinceLastUpdate > 30) {
            let newEntry = now.format(this.settings.momentFormat);
            if (isAppendArray) {
              let entries = frontmatter[this.settings.frontmatterProperty] || [];
              if (!Array.isArray(entries))
                entries = [entries];
              if (entries.length) {
                if (previousEntryMoment && now.isSame(previousEntryMoment, this.settings.appendMaximumFrequency)) {
                  entries[desc ? 0 : entries.length - 1] = newEntry;
                } else {
                  desc ? entries.unshift(newEntry) : entries.push(newEntry);
                }
                if (this.settings.historyMaxItems && entries.length > this.settings.historyMaxItems) {
                  entries = desc ? entries.slice(0, this.settings.historyMaxItems) : entries.slice(-this.settings.historyMaxItems);
                }
              } else {
                entries.push(newEntry);
              }
              newEntry = entries;
            }
            frontmatter[this.settings.frontmatterProperty] = newEntry;
          }
        });
      }
    }, this.settings.timeout * 1e3);
  }
};
