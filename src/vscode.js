import workbench from './workbench';
import colors from './colors';
import syntax from './syntax';
import fs from 'fs';
import _ from 'lodash';

const theme = {};

const replaceWithColor = (value) => {
    return value.replace(/var\((\S*)\)/g, (_, p1) => {
        return `${colors[p1]}`;
    });
};

const replaceValuesWithColor = (object) => {
    const processed = {};
    for (const prop in object) {
        processed[prop] = replaceWithColor(object[prop]);
    }
    return processed;
}

const themeWorkbench = replaceValuesWithColor(workbench);

const getSettingsFromList = (list) => ({ foreground: list[0], fontStyle: list[1] });

const getSettings = (style) => {
    if (style.length === 0) {
        return {};
    }
    return  _.isString(style)
    ? { foreground: style }
    : getSettingsFromList(style)
};

const getToken = (name, syntax) => {
    if (_.isPlainObject(syntax[name])) {
        return {
            name,
            scope: syntax[name].scope,
            settings: getSettings(syntax[name].style)
        }
    } else {
        return {
            name,
            scope: name,
            settings: getSettings(syntax[name])
        }
    }
};

const tokens = [];
for (const name in syntax) {
    tokens.push(getToken(name, syntax));
}

const themeSyntax = tokens.map((token) => ({ ...token, settings: replaceValuesWithColor(token.settings) }));
theme.name  = "Ocean Theme";
theme.colors = themeWorkbench;
theme.tokenColors = themeSyntax;

let palette = [];
palette.push('@Ocean');
for (const color in colors) {
    palette.push({ color: colors[color], name: color });
}

fs.writeFileSync("./themes/Ocean Theme-color-theme.json", JSON.stringify(theme, null, 2));
fs.writeFileSync("./palettes/ocean.palette.json", JSON.stringify(palette, null, 2));
