export default {
  // "contrastActiveBorder": "var(ocean_dark)", //An extra border around active elements to separate them from others for greater contrast.
  // "contrastBorder": "var(ocean_dark)", //An extra border around elements to separate them from others for greater contrast.

  "focusBorder": "var(white)00", //Overall border color for focused elements. This color is only used if not overridden by a component.
  "foreground": "var(off_white)", //Overall foreground color. This color is only used if not overridden by a component.
  "widget.shadow": "var(ocean_dark)50", //Shadow color of widgets such as Find/Replace inside the editor.
  //"selection.background": "", //Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
  //"descriptionForeground": "", //Foreground color for description text providing additional information, for example for a label.
  "errorForeground": "var(red)", //Overall foreground color for error messages (this color is only used if not overridden by a component).

  "textBlockQuote.background": "var(ocean_dark)", //Background color for block quotes in text.
  "textBlockQuote.border": "var(ocean_dark)", //Border color for block quotes in text.
  "textCodeBlock.background": "var(ocean)", //Background color for code blocks in text.
  "textLink.activeForeground": "var(off_white)", //Foreground color for links in text when clicked on and on mouse hover.
  "textLink.foreground": "var(light_sea_green)", //Foreground color for links in text.
  // "textPreformat.foreground": "", //Foreground color for preformatted text segments.
  // "textSeparator.foreground": "", //Color for text separators.

  "button.background": "var(light_sea_green)", //Button background color.
  "button.foreground": "var(black)", //Button foreground color.
  "button.hoverBackground": "var(blue)", //Button background color when hovering.

  "dropdown.background": "var(ocean)", //Dropdown background.
  "dropdown.listBackground": "var(ocean)", //Dropdown list background.
  "dropdown.border": "var(ocean)", //Dropdown border.
  "dropdown.foreground": "var(off_white)", //Dropdown foreground.

  "input.background": "var(ocean_dark)", //Input box background.
  "input.border": "var(ocean)", //Input box border.
  "input.foreground": "var(white)", //Input box foreground.
  "input.placeholderForeground": "var(ocean_light)", //Input box foreground color for placeholder text.
  // "inputOption.activeBorder": "", //Border color of activated options in input fields.
  // "inputValidation.errorBackground": "", //Input validation background color for error severity.
  // "inputValidation.errorForeground": "", //Input validation foreground color for error severity.
  // "inputValidation.errorBorder": "", //Input validation border color for error severity.
  // "inputValidation.infoBackground": "", //Input validation background color for information severity.
  // "inputValidation.infoForeground": "", //Input validation foreground color for information severity.
  // "inputValidation.infoBorder": "", //Input validation border color for information severity.
  // "inputValidation.warningBackground": "", //Input validation background color for information warning.
  // "inputValidation.warningForeground": "", //Input validation foreground color for warning severity.
  // "inputValidation.warningBorder": "", //Input validation border color for warning severity.

  "scrollbar.shadow": "var(ocean_dark)70", //Scrollbar slider shadow to indicate that the view is scrolled.
  // "scrollbarSlider.activeBackground": "", //Scrollbar slider background color when clicked on.
  // "scrollbarSlider.background": "", //Scrollbar slider background color.
  // "scrollbarSlider.hoverBackground": "", //Scrollbar slider background color when hovering.

  "badge.foreground": "var(black)", //Badge foreground color.
  "badge.background": "var(off_white)", //Badge background color.

  "progressBar.background": "var(light_sea_green)", //Background color of the progress bar shown for long running operations.

  "list.activeSelectionBackground": "var(ocean_light)50", //List/Tree background color for the selected item when the list/tree is active.
  "list.activeSelectionForeground": "var(light_sea_green)", //List/Tree foreground color for the selected item when the list/tree is active.
  "list.dropBackground": "var(ocean_light)50", //List/Tree drag and drop background when moving items around using the mouse.
  "list.focusBackground": "var(ocean_light)50", //List/Tree background color for the focused item when the list/tree is active.
  // "list.focusForeground": "", //List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
  // "list.highlightForeground": "", //List/Tree foreground color of the match highlights when searching inside the list/tree.
  "list.hoverBackground": "var(ocean_light)20", //List/Tree background when hovering over items using the mouse.
  "list.hoverForeground": "var(off_white)", //List/Tree foreground when hovering over items using the mouse.
  "list.inactiveSelectionBackground": "var(ocean_light)30", //List/Tree background color for the selected item when the list/tree is inactive.
  "list.inactiveSelectionForeground": "var(light_sea_green)", //List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
  // "list.inactiveFocusBackground": "", //List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
  // "list.invalidItemForeground": "", //List/Tree foreground color for invalid items, for example an unresolved root in explorer.
  // "list.errorForeground": "", //Foreground color of list items containing errors.
  // "list.warningForeground": "", //Foreground color of list items containing warnings.
  // "listFilterWidget.background": "", //List/Tree Filter background color of typed text when searching inside the list/tree.
  // "listFilterWidget.outline": "", //List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
  // "listFilterWidget.noMatchesOutline": "", //List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.

  "activityBar.background": "var(ocean_dark)", //Activity Bar background color.
  "activityBar.dropBackground": "var(ocean_light)30", //Drag and drop feedback color for the Activity Bar items.
  "activityBar.foreground": "var(white)", //Activity bar foreground color (for example used for the icons).
  "activityBar.inactiveForeground": "var(ocean_light)", //Activity bar item foreground color when it is inactive.
  "activityBar.border": "var(ocean_dark)", //Activity Bar border color with the Side Bar.
  "activityBarBadge.background": "var(light_sea_green)", //Activity notification badge background color.
  "activityBarBadge.foreground": "var(black)", //Activity notification badge foreground color.

  "sideBar.background": "var(ocean_dark)", //Side Bar background color.
  "sideBar.foreground": "var(ocean_light)", //Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
  "sideBar.border": "var(ocean_dark)", //Side Bar border color on the side separating the editor.
  "sideBar.dropBackground": "var(ocean_dark)30", //Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search.
  "sideBarTitle.foreground": "var(off_white)", //Side Bar title foreground color.
  "sideBarSectionHeader.background": "var(ocean_dark)", //Side Bar section header background color.
  "sideBarSectionHeader.foreground": "var(off_white)", //Side Bar section header foreground color.
  "sideBarSectionHeader.border": "var(ocean_dark)", //Side bar section header border color.

  "editorGroup.border": "var(ocean_dark)30",
  "editorGroupHeader.tabsBackground": "var(ocean_dark)",
  "editorGroupHeader.noTabsBackground": "var(ocean_dark)",
  // "editorGroup.dropBackground": "",
  // "editorGroup.emptyBackground": "",//Background color of an empty editor group.
  // "editorGroup.focusedEmptyBorder": "", //Border color of an empty editor group that is focused
  "tab.activeBorder": "var(light_sea_green)",
  "tab.activeForeground": "var(white)",
  "tab.activeBackground": "var(ocean)",
  "tab.activeModifiedBorder": "var(ocean_light)",
  "tab.hoverBackground": "var(ocean)",
  "tab.border": "var(ocean_dark)",
  "tab.inactiveBackground": "var(ocean_dark)",
  "tab.inactiveForeground": "var(ocean_light)",
  "tab.unfocusedActiveBorder": "var(ocean_light)",
  "tab.unfocusedActiveForeground": "var(off_white)",
  // "tab.unfocusedInactiveForeground": "",

  "editor.background": "var(ocean)", //Editor background color.
  "editor.foreground": "var(off_white)", //Editor default foreground color.
  "editorLineNumber.foreground": "var(grey)", //Color of editor line numbers.
  "editorLineNumber.activeForeground": "var(light_grey)", //Color of the active editor line number.
  // "editorCursor.background": "", //The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
  "editorCursor.foreground": "var(orange)", //Color of the editor cursor.

  "editor.selectionBackground": "var(ocean_light)80", //Color of the editor selection.
  // "editor.selectionForeground": "", //Color of the selected text for high contrast.
  "editor.inactiveSelectionBackground": "var(light_sea_green)10", //Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
  "editor.selectionHighlightBackground": "var(light_sea_green)15", //Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
  "editor.selectionHighlightBorder": "var(transparent)", //Border color for regions with the same content as the selection.

  "editor.wordHighlightBackground": "var(blue)25", //Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
  "editor.wordHighlightBorder": "var(transparent)", //Border color of a symbol during read-access, for example when reading a variable.
  // "editor.wordHighlightStrongBackground": "", //Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
  // "editor.wordHighlightStrongBorder": "", //Border color of a symbol during write-access, for example when writing to a variable.

  "editor.findMatchBackground": "var(light_red)75", //Color of the current search match.
  "editor.findMatchHighlightBackground": "var(orange)75", //Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
  // "editor.findRangeHighlightBackground": "", //Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.
  "editor.findMatchBorder": "var(transparent)", //Border color of the current search match.
  "editor.findMatchHighlightBorder": "var(transparent)", //Border color of the other search matches.
  "editor.findRangeHighlightBorder": "var(transparent)", //Border color the range limiting the search (Enable 'Find in Selection' in the find widget).

  "editor.hoverHighlightBackground": "var(light_sea_green)20", //Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.

  "editor.lineHighlightBackground": "var(transparent)", //Background colo for the highlight of line at the cursor position.
  "editor.lineHighlightBorder": "var(transparent)", //Background color for the border around the line at the cursor position.

  "editorLink.activeForeground": "var(transparent)", //Color of active links.

  // "editor.rangeHighlightBackground": "", //Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
  // "editor.rangeHighlightBorder": "", //Background color of the border around highlighted ranges.

  // "editorWhitespace.foreground": "", //Color of whitespace characters in the editor.

  "editorIndentGuide.background": "var(grey)30", //Color of the editor indentation guides.
  "editorIndentGuide.activeBackground": "var(light_grey)30", //Color of the active editor indentation guide.

  // "editorRuler.foreground": "", //Color of the editor rulers.

  // "editorCodeLens.foreground": "", //Foreground color of an editor CodeLens.

  "editorBracketMatch.background": "var(blue)50", //Background color behind matching brackets.
  "editorBracketMatch.border": "var(transparent)", //Color for matching brackets boxes.

  "editorOverviewRuler.border": "var(ocean_dark)", //Color of the overview ruler border.
  // "editorOverviewRuler.findMatchForeground": "", //Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
  // "editorOverviewRuler.rangeHighlightForeground": "", //Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
  // "editorOverviewRuler.selectionHighlightForeground": "", //Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
  // "editorOverviewRuler.wordHighlightForeground": "", //Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
  // "editorOverviewRuler.wordHighlightStrongForeground": "", //Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
  "editorOverviewRuler.modifiedForeground": "var(blue)50", //Overview ruler marker color for modified content.
  "editorOverviewRuler.addedForeground": "var(green)50", //Overview ruler marker color for added content.
  "editorOverviewRuler.deletedForeground": "var(red)50", //Overview ruler marker color for deleted content.
  "editorOverviewRuler.errorForeground": "var(red)80", //Overview ruler marker color for errors.
  "editorOverviewRuler.warningForeground": "var(yellow)50", //Overview ruler marker color for warnings.
  // "editorOverviewRuler.infoForeground": "", //Overview ruler marker color for infos.
  // "editorOverviewRuler.bracketMatchForeground": "", //Overview ruler marker color for matching brackets.

  "editorError.foreground": "var(red)90", //Foreground color of error squiggles in the editor.
  "editorError.border": "var(transparent)", //Border color of error boxes in the editor.
  "editorWarning.foreground": "var(yellow)90", //Foreground color of warning squiggles in the editor.
  "editorWarning.border": "var(transparent)", //Border color of warning boxes in the editor.
  "editorInfo.foreground": "var(light_grey)90", //Foreground color of info squiggles in the editor.
  "editorInfo.border": "var(transparent)", //Border color of info boxes in the editor.
  "editorHint.foreground": "var(light_grey)90", //Foreground color of hints in the editor.
  "editorHint.border": "var(transparent)", //Border color of hint boxes in the editor.

  "editorUnnecessaryCode.border": "var(ocean_light)", //Border color of unnecessary (unused) source code in the editor.
  // "editorUnnecessaryCode.opacity": "0.5", //Opacity of unnecessary (unused) source code in the editor.

  "editorGutter.background": "var(ocean)", //Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
  "editorGutter.modifiedBackground": "var(blue)50", //Editor gutter background color for lines that are modified.
  "editorGutter.addedBackground": "var(green)50", //Editor gutter background color for lines that are added.
  "editorGutter.deletedBackground": "var(red)50", //Editor gutter background color for lines that are deleted.

  "editorSuggestWidget.background": "var(ocean_dark)",
  "editorSuggestWidget.border": "var(ocean_dark)10",
  "editorSuggestWidget.foreground": "var(off_white)",
  "editorSuggestWidget.highlightForeground": "var(light_sea_green)",
  "editorSuggestWidget.selectedBackground": "var(black)50",
  "editorWarning.foreground": "var(yellow)70",
  "editorWhitespace.foreground": "var(off_white)35",
  "editorWidget.background": "var(ocean_dark)",
  "editorWidget.border": "var(ocean_dark)",
  "editorWidget.resizeBorder": "var(light_sea_green)",

  // "diffEditor.insertedTextBackground": "", //Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
  // "diffEditor.insertedTextBorder": "", //Outline color for the text that got inserted.
  // "diffEditor.removedTextBackground": "", //Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
  // "diffEditor.removedTextBorder": "", //Outline color for text that got removed.
  // "diffEditor.border": "", //Border color between the two text editors.

  // "debugExceptionWidget.background": "", //Exception widget background color.
  // "debugExceptionWidget.border": "", //Exception widget border color.

  // "editorMarkerNavigation.background": "", //Editor marker navigation widget background.
  // "editorMarkerNavigationError.background": "", //Editor marker navigation widget error color.
  // "editorMarkerNavigationWarning.background": "", //Editor marker navigation widget warning color.
  // "editorMarkerNavigationInfo.background": "", //Editor marker navigation widget info color.

  // "peekView.border": "", //Color of the peek view borders and arrow.
  // "peekViewEditor.background": "", //Background color of the peek view editor.
  // "peekViewEditorGutter.background": "", //Background color of the gutter in the peek view editor.
  // "peekViewEditor.matchHighlightBackground": "", //Match highlight color in the peek view editor.
  // "peekViewEditor.matchHighlightBorder": "", //Match highlight border color in the peek view editor.
  // "peekViewResult.background": "", //Background color of the peek view result list.
  // "peekViewResult.fileForeground": "", //Foreground color for file nodes in the peek view result list.
  // "peekViewResult.lineForeground": "", //Foreground color for line nodes in the peek view result list.
  // "peekViewResult.matchHighlightBackground": "", //Match highlight color in the peek view result list.
  // "peekViewResult.selectionBackground": "", //Background color of the selected entry in the peek view result list.
  // "peekViewResult.selectionForeground": "", //Foreground color of the selected entry in the peek view result list.
  // "peekViewTitle.background": "", //Background color of the peek view title area.
  // "peekViewTitleDescription.foreground": "", //Color of the peek view title info.
  // "peekViewTitleLabel.foreground": "", //Color of the peek view title.

  // "merge.currentHeaderBackground": "", //Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
  // "merge.currentContentBackground": "", //Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
  // "merge.incomingHeaderBackground": "", //Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
  // "merge.incomingContentBackground": "", //Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
  // "merge.border": "", //Border color on headers and the splitter in inline merge conflicts.
  // "merge.commonContentBackground": "", //Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
  // "merge.commonHeaderBackground": "", //Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
  // "editorOverviewRuler.currentContentForeground": "", //Current overview ruler foreground for inline merge conflicts.
  // "editorOverviewRuler.incomingContentForeground": "", //Incoming overview ruler foreground for inline merge conflicts.
  // "editorOverviewRuler.commonContentForeground": "", //Common ancestor overview ruler foreground for inline merge conflicts.

  "panel.background": "var(ocean_dark)", //Panel background color.
  "panel.border": "var(ocean_dark)", //Panel border color to separate the panel from the editor.
  "panel.dropBackground": "var(ocean_dark)70", //Drag and drop feedback color for the panel title items. The color should have transparency so that the panel entries can still shine through.
  "panelTitle.activeBorder": "var(ocean_dark)", //Border color for the active panel title.
  "panelTitle.activeForeground": "var(white)", //Title color for the active panel.
  "panelTitle.inactiveForeground": "var(ocean_light)", //Title color for the inactive panel.

  "statusBar.background": "var(ocean_dark)", //Standard Status Bar background color.
  "statusBar.foreground": "var(ocean_light)", //Status Bar foreground color.
  "statusBar.border": "var(ocean_dark)", //Status Bar border color separating the Status Bar and editor.
  "statusBar.debuggingBackground": "var(light_sea_green)", //Status Bar background color when a program is being debugged.
  "statusBar.debuggingForeground": "var(black)", //Status Bar foreground color when a program is being debugged.
  "statusBar.debuggingBorder": "var(light_sea_green)", //Status Bar border color separating the Status Bar and editor when a program is being debugged.
  "statusBar.noFolderForeground": "var(ocean_light)", //Status Bar foreground color when no folder is opened.
  "statusBar.noFolderBackground": "var(ocean_dark)", //Status Bar background color when no folder is opened.
  "statusBar.noFolderBorder": "var(ocean_dark)", //Status Bar border color separating the Status Bar and editor when no folder is opened.
  "statusBarItem.activeBackground": "var(ocean)", //Status Bar item background color when clicking.
  "statusBarItem.hoverBackground": "var(ocean_light)20", //Status Bar item background color when hovering.
  "statusBarItem.prominentForeground": "var(black)", //Status Bar prominent items foreground color.
  "statusBarItem.prominentBackground": "var(light_sea_green)", //Status Bar prominent items background color.
  "statusBarItem.prominentHoverBackground": "var(blue)", //Status Bar prominent items background color when hovering.

  "titleBar.activeBackground": "var(ocean_dark)", //Title Bar background when the window is active.
  "titleBar.activeForeground": "var(off_white)", //Title Bar foreground when the window is active.
  "titleBar.inactiveBackground": "var(ocean_grey)", //Title Bar background when the window is inactive.
  "titleBar.inactiveForeground": "var(ocean_light)", //Title Bar foreground when the window is inactive.
  "titleBar.border": "var(ocean_dark)00", //Title bar border color.

  // "menubar.selectionForeground": "", //Foreground color of the selected menu item in the menubar.
  // "menubar.selectionBackground": "", //Background color of the selected menu item in the menubar.
  // "menubar.selectionBorder": "", //Border color of the selected menu item in the menubar.
  "menu.foreground": "var(off_white)", //Foreground color of menu items.
  "menu.background": "var(ocean_dark)", //Background color of menu items.
  "menu.selectionForeground": "var(white)", //Foreground color of the selected menu item in menus.
  "menu.selectionBackground": "var(ocean_light)50", //Background color of the selected menu item in menus.
  // "menu.selectionBorder": "var", //Border color of the selected menu item in menus.
  // "menu.separatorBackground": "", //Color of a separator menu item in menus.

  // "notificationCenter.border": "", //Notification Center border color.
  // "notificationCenterHeader.foreground": "", //Notification Center header foreground color.
  // "notificationCenterHeader.background": "", //Notification Center header background color.
  // "notificationToast.border": "", //Notification toast border color.
  // "notifications.foreground": "", //Notification foreground color.
  // "notifications.background": "", //Notification background color.
  // "notifications.border": "", //Notification border color separating from other notifications in the Notification Center.
  // "notificationLink.foreground": "", //Notification links foreground color.

  "notification.background": "var(ocean)",
  "notification.foreground": "var(off_white)",
  // "notification.buttonBackground": "",
  // "notification.buttonForeground": "",
  // "notification.buttonHoverBackground": "",
  // "notification.errorBackground": "",
  // "notification.errorForeground": "",
  // "notification.infoBackground": "",
  // "notification.infoForeground": "",
  // "notification.warningBackground": "",
  // "notification.warningForeground": "",

  "extensionButton.prominentForeground": "var(light_sea_green)", //Extension view button foreground color (for example <strong>Install</strong> button).
  "extensionButton.prominentBackground": "var(black)", //Extension view button background color.
  "extensionButton.prominentHoverBackground": "var(blue)", //Extension view button background hover color.

  // "pickerGroup.border": "", //Quick picker (Quick Open) color for grouping borders.
  // "pickerGroup.foreground": "", //Quick picker (Quick Open) color for grouping labels.

  "terminal.background": "var(ocean_dark)", //The background of the Integrated Terminal's viewport.
  "terminal.border": "var(ocean_dark)", //The color of the border that separates split panes within the terminal. This defaults to panel.border.
  "terminal.foreground": "var(off_white)", //The default foreground color of the Integrated Terminal.
  "terminal.ansiBlack": "var(grey)", //'Black' ANSI color in the terminal.
  "terminal.ansiBlue": "var(blue)", //'Blue' ANSI color in the terminal.
  "terminal.ansiCyan": "var(sea_green)", //'Cyan' ANSI color in the terminal.
  "terminal.ansiGreen": "var(green)", //'Green' ANSI color in the terminal.
  "terminal.ansiMagenta": "var(magenta)", //'Magenta' ANSI color in the terminal.
  "terminal.ansiRed": "var(red)", //'Red' ANSI color in the terminal.
  "terminal.ansiWhite": "var(off_white)", //'White' ANSI color in the terminal.
  "terminal.ansiYellow": "var(yellow)", //'Yellow' ANSI color in the terminal.
  "terminal.ansiBrightBlack": "var(grey)", //'BrightBlack' ANSI color in the terminal.
  "terminal.ansiBrightBlue": "var(bright_blue)", //'BrightBlue' ANSI color in the terminal.
  "terminal.ansiBrightCyan": "var(bright_sea_green)", //'BrightCyan' ANSI color in the terminal.
  "terminal.ansiBrightGreen": "var(bright_green)", //'BrightGreen' ANSI color in the terminal.
  "terminal.ansiBrightMagenta": "var(bright_magenta)", //'BrightMagenta' ANSI color in the terminal.
  "terminal.ansiBrightRed": "var(red)", //'BrightRed' ANSI color in the terminal.
  "terminal.ansiBrightWhite": "var(off_white)", //'BrightWhite' ANSI color in the terminal.
  "terminal.ansiBrightYellow": "var(bright_yellow)", //'BrightYellow' ANSI color in the terminal.
  "terminal.selectionBackground": "var(ocean_light)50", //The selection background color of the terminal.
  // "terminalCursor.background": "", //The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
  "terminalCursor.foreground": "var(orange)", //The foreground color of the terminal cursor.

  "debugToolBar.background": "var(ocean_dark)", //Debug toolbar background color.
  // "debugToolBar.border": "", //Debug toolbar border color.
  // "editor.stackFrameHighlightBackground": "", //Background color of the top stack frame highlight in the editor.
  // "editor.focusedStackFrameHighlightBackground": "", //Background color of the focused stack frame highlight in the editor.

  "welcomePage.background": "var(ocean)", //Background color for the Welcome page.
  "welcomePage.buttonBackground": "var(ocean_dark)", //Background color for the buttons on the Welcome page.
  "welcomePage.buttonHoverBackground": "var(ocean_light)20", //Hover background color for the buttons on the Welcome page.
  "walkThrough.embeddedEditorBackground": "var(ocean)", //Background color for the embedded editors on the Interactive Playground.

  "gitDecoration.addedResourceForeground": "var(green)", //Color for added Git resources. Used for file labels and the SCM viewlet.
  "gitDecoration.modifiedResourceForeground": "var(blue)", //Color for modified Git resources. Used for file labels and the SCM viewlet.
  "gitDecoration.deletedResourceForeground": "var(red)", //Color for deleted Git resources. Used for file labels and the SCM viewlet.
  "gitDecoration.untrackedResourceForeground": "var(yellow)", //Color for untracked Git resources. Used for file labels and the SCM viewlet.
  // "gitDecoration.ignoredResourceForeground": "", //Color for ignored Git resources. Used for file labels and the SCM viewlet.
  // "gitDecoration.conflictingResourceForeground": "", //Color for conflicting Git resources. Used for file labels and the SCM viewlet.
  // "gitDecoration.submoduleResourceForeground": "", //Color for submodule resources.

  "settings.headerForeground": "var(light_sea_green)", //The foreground color for a section header or active title.
  "settings.modifiedItemIndicator": "var(sea_green)", //The line that indicates a modified setting.
  "settings.dropdownBackground": "var(ocean_dark)", //Dropdown background.
  "settings.dropdownForeground": "var(off_white)", //Dropdown foreground.
  "settings.dropdownBorder": "var(ocean_dark)", //Dropdown border.
  "settings.dropdownListBorder": "var(ocean_dark)", //Dropdown list border.
  "settings.checkboxBackground": "var(ocean_dark)", //Checkbox background.
  "settings.checkboxForeground": "var(white)", //Checkbox foreground.
  "settings.checkboxBorder": "var(ocean_dark)", //Checkbox border.
  "settings.textInputBackground": "var(ocean_dark)", //Text input box background.
  "settings.textInputForeground": "var(green)", //Text input box foreground.
  "settings.textInputBorder": "var(ocean_dark)", //Text input box border.
  "settings.numberInputBackground": "var(ocean_dark)", //Number input box background.
  "settings.numberInputForeground": "var(yellow)", //Number input box foreground.
  "settings.numberInputBorder": "var(ocean_dark)", //Number input box border.

  "breadcrumb.foreground": "var(ocean_light)", //Color of breadcrumb items.
  "breadcrumb.background": "var(ocean_dark)30", //Background color of breadcrumb items.
  "breadcrumb.focusForeground": "var(off_white)", //Color of focused breadcrumb items.
  "breadcrumb.activeSelectionForeground": "var(light_sea_green)", //Color of selected breadcrumb items.
  "breadcrumbPicker.background": "var(ocean_dark)", //Background color of breadcrumb item picker.

  // "editor.snippetTabstopHighlightBackground": "", //Highlight background color of a snippet tabstop.
  // "editor.snippetTabstopHighlightBorder": "", //Highlight border color of a snippet tabstop.
  // "editor.snippetFinalTabstopHighlightBackground": "", //Highlight background color of the final tabstop of a snippet.
  // "editor.snippetFinalTabstopHighlightBorder": "", //Highlight border color of the final tabstop of a snippet.
}
