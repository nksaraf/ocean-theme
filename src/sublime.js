import colors from './colors';
import syntax from './syntax';
import globals from './globals';
import fs from 'fs';
import _ from 'lodash';

const theme = {};

const getSettingsFromList = (list) => ({ foreground: list[0], font_style: list[1] });

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
            ...getSettings(syntax[name].style)
        }
    } else {
        return {
            name,
            scope: name,
            ...getSettings(syntax[name])
        }
    }
};

const tokens = [];
for (const name in syntax) {
    tokens.push(getToken(name, syntax));
}

// const themeSyntax = tokens.map((token) => ({ ...token, settings: replaceValuesWithColor(token.settings) }));
theme.name  = "Ocean Color Scheme";
theme.variables = colors;
theme.rules = tokens;
theme.globals = globals;

fs.writeFileSync("./sublime/Ocean Color Scheme.sublime-color-scheme", JSON.stringify(theme, null, 2));
