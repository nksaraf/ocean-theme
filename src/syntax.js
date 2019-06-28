export default {
  "comment": "var(grey)",
  "punctuation.definition.comment":  "var(grey)",

  "constant": "var(off_white)",
  "constant.numeric": "var(yellow)",
  "constant.character": "var(bright_green)",
  "constant.character.escape":  "var(magenta)",
  "constant.language": ["var(red)", "italic"],
  "constant.other": "var(blue)",

  "entity.name": "var(blue)",
  "entity.name.type": ["var(blue)", "italic"],
  "entity.name.function": "var(sea_green)",
  "function.call": {
    "scope": ["meta.function-call entity.name.function", "meta.function-call"],
    "style": "var(blue)"
  },
  "meta.function-call.arguments": "var(off_white)",

  // "entity.name.type": "var(orange)",
  "entity.name.tag": "var(red)",
  "entity.name.section": "",
  "entity.name.type.class": ["var(orange)", ""],
  "entity.other.inherited-class": ["var(blue)", "italic"],
  "entity.other.attribute-name": "var(magenta)",

  "punctuation": "var(light_grey)",
  "punctuation.accessor": "var(light_red)",
  "punctuation.separator": "var(light_red)",
  "punctuation.definition.comment":  "var(grey)",
  "punctuation.definition.keyword": "var(magenta)",
  "punctuation.section": "var(sea_green)",
  "punctuation.definition": "var(sea_green)",
  "punctuation.definition.variable": "var(off_white)",

  // "invalid.illegal": "",
  // "invalid.deprecated": "",

  "keyword.control": "var(magenta)",
  "export/import": {
    "scope": ["keyword.control.import", "keyword.control.export", "keyword.control.from"],
    "style": "var(light_sea_green)"
  },
  "keyword.operator": "var(sea_green)",
  // "keyword - keyword.operator, keyword.operator.word":  "var(magenta)",
  "keyword.other": "var(red)",

  "storage.type": "var(magenta)",
  "storage.modifier": "var(magenta)",

  "string.quoted": "var(green)",
  "string.quoted.triple": "var(sea_green)",
  "string.unquoted.interpolated": "var(magenta)",
  "string.unquoted.regexp": "var(red)",
  "string.template": "var(magenta)",

  "support.function": "var(red)",
  "support.class": ["var(red)", "italic"],
  "support.type":  ["var(red)", "italic"],
  "support.constant": "var(red)",
  "support.variable": "var(red)",
  "support.other": "var(red)",

  "variable.language": ["var(red)", "italic"],
  "variable.parameter": "var(orange)",
  "variable.other": "var(off_white)",
  "variable.object.property": "var(sea_green)",
  "meta.object-literal.key": "var(sea_green)"
};
