var Sinth = (function() {
"use strict";
var SinthBrowser = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
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

  // node-stub:sass
  var sass_exports = {};
  __export(sass_exports, {
    default: () => sass_default
  });
  var sass_default;
  var init_sass = __esm({
    "node-stub:sass"() {
      sass_default = {};
    }
  });

  // ../sinth-package/src/browser/compile.ts
  var compile_exports = {};
  __export(compile_exports, {
    compileSinth: () => compileSinth
  });

  // ../sinth-package/src/core/types.ts
  var TT = /* @__PURE__ */ ((TT3) => {
    TT3[TT3["LBRACE"] = 0] = "LBRACE";
    TT3[TT3["RBRACE"] = 1] = "RBRACE";
    TT3[TT3["LPAREN"] = 2] = "LPAREN";
    TT3[TT3["RPAREN"] = 3] = "RPAREN";
    TT3[TT3["COLON"] = 4] = "COLON";
    TT3[TT3["COMMA"] = 5] = "COMMA";
    TT3[TT3["EQUALS"] = 6] = "EQUALS";
    TT3[TT3["DOT"] = 7] = "DOT";
    TT3[TT3["LBRACKET"] = 8] = "LBRACKET";
    TT3[TT3["RBRACKET"] = 9] = "RBRACKET";
    TT3[TT3["STRING"] = 10] = "STRING";
    TT3[TT3["NUMBER"] = 11] = "NUMBER";
    TT3[TT3["BOOL_TRUE"] = 12] = "BOOL_TRUE";
    TT3[TT3["BOOL_FALSE"] = 13] = "BOOL_FALSE";
    TT3[TT3["NULL_LIT"] = 14] = "NULL_LIT";
    TT3[TT3["RAW_BLOCK"] = 15] = "RAW_BLOCK";
    TT3[TT3["IDENT"] = 16] = "IDENT";
    TT3[TT3["KW_IMPORT"] = 17] = "KW_IMPORT";
    TT3[TT3["KW_AS"] = 18] = "KW_AS";
    TT3[TT3["KW_CSS"] = 19] = "KW_CSS";
    TT3[TT3["KW_COMPONENT"] = 20] = "KW_COMPONENT";
    TT3[TT3["KW_STYLE"] = 21] = "KW_STYLE";
    TT3[TT3["KW_SCRIPT"] = 22] = "KW_SCRIPT";
    TT3[TT3["KW_GLOBAL"] = 23] = "KW_GLOBAL";
    TT3[TT3["KW_PAGE"] = 24] = "KW_PAGE";
    TT3[TT3["KW_LANG"] = 25] = "KW_LANG";
    TT3[TT3["KW_CUSTOM_EL"] = 26] = "KW_CUSTOM_EL";
    TT3[TT3["KW_CUSTOM"] = 27] = "KW_CUSTOM";
    TT3[TT3["KW_IF"] = 28] = "KW_IF";
    TT3[TT3["KW_ELSE"] = 29] = "KW_ELSE";
    TT3[TT3["KW_FOR"] = 30] = "KW_FOR";
    TT3[TT3["KW_IN"] = 31] = "KW_IN";
    TT3[TT3["KW_REMOVE"] = 32] = "KW_REMOVE";
    TT3[TT3["KW_FUNCTION"] = 33] = "KW_FUNCTION";
    TT3[TT3["KW_RETURN"] = 34] = "KW_RETURN";
    TT3[TT3["OP_PLUS"] = 35] = "OP_PLUS";
    TT3[TT3["OP_MINUS"] = 36] = "OP_MINUS";
    TT3[TT3["OP_STAR"] = 37] = "OP_STAR";
    TT3[TT3["OP_SLASH"] = 38] = "OP_SLASH";
    TT3[TT3["OP_MOD"] = 39] = "OP_MOD";
    TT3[TT3["OP_SEMI"] = 40] = "OP_SEMI";
    TT3[TT3["OP_LT"] = 41] = "OP_LT";
    TT3[TT3["OP_GT"] = 42] = "OP_GT";
    TT3[TT3["OP_NEQ"] = 43] = "OP_NEQ";
    TT3[TT3["OP_EQEQ"] = 44] = "OP_EQEQ";
    TT3[TT3["OP_LTEQ"] = 45] = "OP_LTEQ";
    TT3[TT3["OP_GTEQ"] = 46] = "OP_GTEQ";
    TT3[TT3["OP_ARROW"] = 47] = "OP_ARROW";
    TT3[TT3["OP_NOT"] = 48] = "OP_NOT";
    TT3[TT3["EOF"] = 49] = "EOF";
    return TT3;
  })(TT || {});
  var SinthError = class _SinthError extends Error {
    constructor(rawMsg, loc, sourceLine) {
      super(_SinthError.buildMessage(rawMsg, loc, sourceLine));
      this.rawMsg = rawMsg;
      this.loc = loc;
      this.sourceLine = sourceLine;
      Object.setPrototypeOf(this, _SinthError.prototype);
    }
    static buildMessage(msg, loc, sourceLine) {
      let s = `Error: ${msg}`;
      if (loc) {
        s += `
  at: ${loc.file} (line ${loc.line}, col ${loc.col})`;
        if (sourceLine !== void 0) {
          const lineNum = String(loc.line).padStart(4);
          const pointer = " ".repeat(Math.max(0, loc.col - 1)) + "^";
          s += `
${lineNum} | ${sourceLine}
     | ${pointer}`;
        }
      }
      return s;
    }
    withSource(lines) {
      if (!this.loc || this.sourceLine !== void 0) return this;
      const line = lines[this.loc.line - 1] ?? "";
      return new _SinthError(this.rawMsg, this.loc, line);
    }
  };
  var SinthWarning = class {
    static emit(msg, loc) {
      const where = loc ? `
  at: ${loc.file}:${loc.line}` : "";
      process.stderr.write(`\x1B[33mWarning:\x1B[0m ${msg}${where}
`);
    }
  };

  // ../sinth-package/src/core/lexer.ts
  var KEYWORDS = {
    "import": 17 /* KW_IMPORT */,
    "as": 18 /* KW_AS */,
    "css": 19 /* KW_CSS */,
    "component": 20 /* KW_COMPONENT */,
    "style": 21 /* KW_STYLE */,
    "script": 22 /* KW_SCRIPT */,
    "global": 23 /* KW_GLOBAL */,
    "page": 24 /* KW_PAGE */,
    "lang": 25 /* KW_LANG */,
    "true": 12 /* BOOL_TRUE */,
    "false": 13 /* BOOL_FALSE */,
    "null": 14 /* NULL_LIT */,
    "custom-element": 26 /* KW_CUSTOM_EL */,
    "custom": 27 /* KW_CUSTOM */,
    "if": 28 /* KW_IF */,
    "else": 29 /* KW_ELSE */,
    "elif": 29 /* KW_ELSE */,
    "for": 30 /* KW_FOR */,
    "in": 31 /* KW_IN */,
    "remove": 32 /* KW_REMOVE */,
    "function": 33 /* KW_FUNCTION */,
    "return": 34 /* KW_RETURN */
  };
  var Lexer = class {
    constructor(src, file) {
      this.src = src;
      this.file = file;
      this.pos = 0;
      this.line = 1;
      this.col = 1;
      this.rawBlockPending = false;
    }
    tokenize() {
      const tokens = [];
      while (true) {
        this.skipWS();
        if (this.pos >= this.src.length) break;
        const loc = this.loc();
        const ch = this.src[this.pos];
        if (ch === "(") {
          tokens.push(this.single(2 /* LPAREN */, loc));
          continue;
        }
        if (ch === ")") {
          tokens.push(this.single(3 /* RPAREN */, loc));
          continue;
        }
        if (ch === "}") {
          tokens.push(this.single(1 /* RBRACE */, loc));
          continue;
        }
        if (ch === ",") {
          tokens.push(this.single(5 /* COMMA */, loc));
          continue;
        }
        if (ch === ".") {
          tokens.push(this.single(7 /* DOT */, loc));
          continue;
        }
        if (ch === ":") {
          tokens.push(this.single(4 /* COLON */, loc));
          continue;
        }
        if (ch === "[") {
          tokens.push(this.single(8 /* LBRACKET */, loc));
          continue;
        }
        if (ch === "]") {
          tokens.push(this.single(9 /* RBRACKET */, loc));
          continue;
        }
        if (ch === "=" && this.src[this.pos + 1] === "=") {
          this.adv();
          this.adv();
          tokens.push({ type: 44 /* OP_EQEQ */, value: "==", loc });
          continue;
        }
        if (ch === "!" && this.src[this.pos + 1] === "=") {
          this.adv();
          this.adv();
          tokens.push({ type: 43 /* OP_NEQ */, value: "!=", loc });
          continue;
        }
        if (ch === "!") {
          tokens.push(this.single(48 /* OP_NOT */, loc));
          continue;
        }
        if (ch === ">" && this.src[this.pos + 1] === "=") {
          this.adv();
          this.adv();
          tokens.push({ type: 46 /* OP_GTEQ */, value: ">=", loc });
          continue;
        }
        if (ch === "<" && this.src[this.pos + 1] === "=") {
          this.adv();
          this.adv();
          tokens.push({ type: 45 /* OP_LTEQ */, value: "<=", loc });
          continue;
        }
        if (ch === "=") {
          tokens.push(this.single(6 /* EQUALS */, loc));
          continue;
        }
        if (ch === "+") {
          tokens.push(this.single(35 /* OP_PLUS */, loc));
          continue;
        }
        if (ch === "*") {
          tokens.push(this.single(37 /* OP_STAR */, loc));
          continue;
        }
        if (ch === "/") {
          tokens.push(this.single(38 /* OP_SLASH */, loc));
          continue;
        }
        if (ch === "%") {
          tokens.push(this.single(39 /* OP_MOD */, loc));
          continue;
        }
        if (ch === ";") {
          tokens.push(this.single(40 /* OP_SEMI */, loc));
          continue;
        }
        if (ch === "<") {
          tokens.push(this.single(41 /* OP_LT */, loc));
          continue;
        }
        if (ch === ">") {
          tokens.push(this.single(42 /* OP_GT */, loc));
          continue;
        }
        if (ch === "-" && this.src[this.pos + 1] === ">") {
          this.adv();
          this.adv();
          tokens.push({ type: 47 /* OP_ARROW */, value: "->", loc });
          continue;
        }
        if (ch === "-" && !this.isDigit(this.src[this.pos + 1] ?? "")) {
          tokens.push(this.single(36 /* OP_MINUS */, loc));
          continue;
        }
        if (ch === "{") {
          if (this.rawBlockPending) {
            this.rawBlockPending = false;
            tokens.push(this.readRawBlock(loc));
          } else {
            tokens.push(this.single(0 /* LBRACE */, loc));
          }
          continue;
        }
        if (ch === '"' || ch === "'") {
          tokens.push(this.readString(loc));
          continue;
        }
        if (this.isDigit(ch) || ch === "-" && this.isDigit(this.src[this.pos + 1] ?? "")) {
          tokens.push(this.readNumber(loc));
          continue;
        }
        if (this.isIdentStart(ch)) {
          const tok = this.readIdent(loc);
          if (tok.type === 21 /* KW_STYLE */ || tok.type === 22 /* KW_SCRIPT */ || tok.type === 20 /* KW_COMPONENT */ || tok.type === 26 /* KW_CUSTOM_EL */ || tok.type === 27 /* KW_CUSTOM */) {
            this.rawBlockPending = true;
          }
          tokens.push(tok);
          continue;
        }
        throw new SinthError(`Unexpected character '${ch}'`, loc);
      }
      tokens.push({ type: 49 /* EOF */, value: "", loc: this.loc() });
      return tokens;
    }
    skipWS() {
      while (this.pos < this.src.length) {
        const ch = this.src[this.pos];
        if (ch === " " || ch === "	" || ch === "\r" || ch === "\n") {
          this.adv();
          continue;
        }
        if (ch === "-" && this.src[this.pos + 1] === "-") {
          if (this.src[this.pos + 2] === "[") {
            this.adv();
            this.adv();
            this.adv();
            let depth = 1;
            while (this.pos < this.src.length && depth > 0) {
              if (this.src[this.pos] === "-" && this.src[this.pos + 1] === "-" && this.src[this.pos + 2] === "[") {
                depth++;
                this.adv();
                this.adv();
                this.adv();
              } else if (this.src[this.pos] === "]" && this.src[this.pos + 1] === "-" && this.src[this.pos + 2] === "-") {
                depth--;
                this.adv();
                this.adv();
                this.adv();
              } else {
                this.adv();
              }
            }
            if (depth > 0) throw new SinthError("Unterminated block comment --[ ... ]--", this.loc());
          } else {
            while (this.pos < this.src.length && this.src[this.pos] !== "\n") this.adv();
          }
          continue;
        }
        break;
      }
    }
    readRawBlock(loc) {
      this.adv();
      const start = this.pos;
      let depth = 1;
      while (this.pos < this.src.length && depth > 0) {
        const ch = this.src[this.pos];
        if (ch === '"' || ch === "'" || ch === "`") {
          this.skipRawString(ch);
          continue;
        }
        if (ch === "/" && this.src[this.pos + 1] === "/") {
          while (this.pos < this.src.length && this.src[this.pos] !== "\n") this.adv();
          continue;
        }
        if (ch === "/" && this.src[this.pos + 1] === "*") {
          this.adv();
          this.adv();
          while (this.pos < this.src.length - 1 && !(this.src[this.pos] === "*" && this.src[this.pos + 1] === "/")) {
            this.adv();
          }
          this.adv();
          this.adv();
          continue;
        }
        if (ch === "{") {
          depth++;
          this.adv();
        } else if (ch === "}") {
          depth--;
          if (depth > 0) this.adv();
        } else {
          this.adv();
        }
      }
      const content = this.src.substring(start, this.pos);
      this.adv();
      return { type: 15 /* RAW_BLOCK */, value: content, loc };
    }
    skipRawString(quote) {
      this.adv();
      while (this.pos < this.src.length) {
        const c = this.src[this.pos];
        if (c === "\\") {
          this.adv();
          this.adv();
          continue;
        }
        if (c === quote) {
          this.adv();
          return;
        }
        if (quote === "`" && c === "$" && this.src[this.pos + 1] === "{") {
          this.adv();
          this.adv();
          let d = 1;
          while (this.pos < this.src.length && d > 0) {
            if (this.src[this.pos] === "{") d++;
            else if (this.src[this.pos] === "}") d--;
            this.adv();
          }
          continue;
        }
        this.adv();
      }
    }
    readString(loc) {
      const quote = this.src[this.pos];
      this.adv();
      let result = "";
      while (this.pos < this.src.length && this.src[this.pos] !== quote) {
        if (this.src[this.pos] === "\\") {
          this.adv();
          const e = this.src[this.pos];
          switch (e) {
            case "\\":
              result += "\\";
              break;
            case '"':
              result += '"';
              break;
            case "'":
              result += "'";
              break;
            case "n":
              result += "\n";
              break;
            case "r":
              result += "\r";
              break;
            case "t":
              result += "	";
              break;
            case "$":
              result += "$";
              break;
            case "{":
              result += "{";
              break;
            case "u": {
              this.adv();
              if (this.src[this.pos] === "{") {
                this.adv();
                let hex = "";
                while (this.src[this.pos] !== "}") {
                  hex += this.src[this.pos];
                  this.adv();
                }
                result += String.fromCodePoint(parseInt(hex, 16));
              } else {
                const hex = this.src.substring(this.pos, this.pos + 4);
                result += String.fromCharCode(parseInt(hex, 16));
                this.pos += 3;
                this.col += 3;
              }
              break;
            }
            default:
              throw new SinthError(`Unknown escape sequence \\${e}`, loc);
          }
          this.adv();
        } else {
          result += this.src[this.pos];
          this.adv();
        }
      }
      if (this.pos >= this.src.length) throw new SinthError("Unterminated string literal", loc);
      this.adv();
      return { type: 10 /* STRING */, value: result, loc };
    }
    readNumber(loc) {
      let s = "";
      if (this.src[this.pos] === "-") {
        s += "-";
        this.adv();
      }
      while (this.isDigit(this.src[this.pos] ?? "")) {
        s += this.src[this.pos];
        this.adv();
      }
      if (this.src[this.pos] === "." && this.isDigit(this.src[this.pos + 1] ?? "")) {
        s += ".";
        this.adv();
        while (this.isDigit(this.src[this.pos] ?? "")) {
          s += this.src[this.pos];
          this.adv();
        }
      }
      return { type: 11 /* NUMBER */, value: s, loc };
    }
    readIdent(loc) {
      let s = "";
      while (this.pos < this.src.length && this.isIdentCont(this.src[this.pos])) {
        s += this.src[this.pos];
        this.adv();
      }
      const kw = KEYWORDS[s];
      return { type: kw !== void 0 ? kw : 16 /* IDENT */, value: s, loc };
    }
    adv() {
      const ch = this.src[this.pos++];
      if (ch === "\n") {
        this.line++;
        this.col = 1;
      } else {
        this.col++;
      }
    }
    single(type, loc) {
      this.adv();
      return { type, value: this.src[this.pos - 1], loc };
    }
    loc() {
      return { file: this.file, line: this.line, col: this.col };
    }
    isDigit(c) {
      return c >= "0" && c <= "9";
    }
    isIdentStart(c) {
      return /[a-zA-Z_$\u00C0-\uFFFF]/.test(c);
    }
    isIdentCont(c) {
      return /[a-zA-Z0-9_$\-\u00C0-\uFFFF]/.test(c);
    }
  };

  // ../sinth-package/src/core/expr.ts
  function compileExprToJS(expr, loopVars, namespace) {
    switch (expr.kind) {
      case "literal":
        if (!expr.value) return "null";
        if (expr.value.kind === "str") {
          const sv = expr.value.value;
          if (sv.startsWith("__ARR__")) return sv.slice(7);
          if (sv.startsWith("__VAR__")) return sv.slice(7);
          return JSON.stringify(sv);
        }
        if (expr.value.kind === "num") return String(expr.value.value);
        if (expr.value.kind === "bool") return String(expr.value.value);
        return "null";
      case "variable":
        if (loopVars && expr.name) {
          const dotIdx = expr.name.indexOf(".");
          const root = dotIdx !== -1 ? expr.name.substring(0, dotIdx) : expr.name;
          if (loopVars.has(root)) {
            return `_ctx.${expr.name}`;
          }
        }
        return namespace ? namespace + "_" + (expr.name ?? "undefined") : expr.name ?? "undefined";
      case "binary": {
        const l = compileExprToJS(expr.left, loopVars, namespace);
        const r = compileExprToJS(expr.right, loopVars, namespace);
        const o = expr.op === "and" ? "&&" : expr.op === "or" ? "||" : expr.op;
        return `(${l} ${o} ${r})`;
      }
      case "unary": {
        const o = expr.op === "not" ? "!" : expr.op;
        return `${o}(${compileExprToJS(expr.operand, loopVars, namespace)})`;
      }
      case "assign": {
        const v = expr.right ? compileExprToJS(expr.right, loopVars, namespace) : "null";
        const t = namespace ? namespace + "_" + expr.target : expr.target;
        return `${t} ${expr.op} ${v}`;
      }
      case "index":
        return `${compileExprToJS(expr.object, loopVars, namespace)}[${compileExprToJS(expr.key, loopVars, namespace)}]`;
      case "postfix":
        const t2 = namespace ? namespace + "_" + expr.target : expr.target;
        return `${t2}${expr.op}`;
      case "call": {
        const callee = compileExprToJS(expr.callee, loopVars, namespace);
        if (callee === "remove") {
          const arg = expr.args && expr.args[0] ? compileExprToJS(expr.args[0], loopVars, namespace) : "''";
          return `(function(){ var _el=document.getElementById(${arg}); if(_el)_el.remove(); })()`;
        }
        const args = (expr.args ?? []).map((a) => compileExprToJS(a, loopVars, namespace)).join(", ");
        if (expr.args && expr.args.length === 0 && /\.length$/.test(callee)) {
          return callee;
        }
        return `${callee}(${args})`;
      }
      default:
        return "";
    }
  }
  function compileIfToJS(ifBlock) {
    const cond = compileExprToJS(ifBlock.condition);
    const ifJS = bodyToJS(ifBlock.body);
    const elseJS = ifBlock.elseBody ? bodyToJS(ifBlock.elseBody) : "";
    let js = `if (${cond}) {
${ifJS}}
`;
    if (elseJS) js += `else {
${elseJS}}
`;
    return js;
  }
  function bodyToJS(children) {
    return children.filter((c) => c.kind === "assign_stmt" || c.kind === "if" || c.kind === "return" || c.kind === "expr").map((c) => {
      if (c.kind === "assign_stmt") return `  ${compileExprToJS(c.expression)};
`;
      if (c.kind === "return") return `  return ${c.expression ? compileExprToJS(c.expression) : ""};
`;
      if (c.kind === "if") return compileIfToJS(c).replace(/^/gm, "  ") + "\n";
      if (c.kind === "expr") return `  ${compileExprToJS(c.expression)};
`;
      return "";
    }).join("");
  }

  // ../sinth-package/src/core/parser.ts
  var Parser = class _Parser {
    constructor(tokens, file) {
      this.tokens = tokens;
      this.file = file;
      this.pos = 0;
      this.loopVar = null;
      this._varDecls = [];
      this._visited = /* @__PURE__ */ new Set();
    }
    parse() {
      let isPage = false;
      const imports = [];
      const meta = [];
      const defs = [];
      const functions = [];
      const uses = [];
      const styles = [];
      const scripts = [];
      const customEls = [];
      const varDecls = [];
      this._varDecls = varDecls;
      if (this.check(24 /* KW_PAGE */)) {
        this.consume(24 /* KW_PAGE */);
        isPage = true;
      }
      while (this.check(17 /* KW_IMPORT */)) imports.push(this.parseImport());
      while (this.isMetaStart()) {
        const entry = this.parseMeta();
        meta.push(entry);
        if (entry.key === "title") isPage = true;
      }
      while (this.check(16 /* IDENT */) && this.peek().value === "var") {
        const vd = this.parseVarDeclaration();
        if (vd) {
          varDecls.push(vd);
        }
      }
      while (!this.check(49 /* EOF */)) {
        if (this.check(20 /* KW_COMPONENT */)) {
          defs.push(this.parseCompDef());
        } else if (this.check(33 /* KW_FUNCTION */)) {
          functions.push(this.parseFunctionDef());
        } else if (this.check(21 /* KW_STYLE */)) {
          styles.push(this.parseStyleBlock());
        } else if (this.check(22 /* KW_SCRIPT */)) {
          scripts.push(this.parseScriptBlock());
        } else if (this.check(26 /* KW_CUSTOM_EL */) || this.check(27 /* KW_CUSTOM */)) {
          customEls.push(this.parseCustomEl());
        } else if (this.check(16 /* IDENT */) && this.peek().value === "var") {
          const vd = this.parseVarDeclaration();
          if (vd) varDecls.push(vd);
        } else if (this.check(28 /* KW_IF */)) {
          const ifNode = this.parseIfBlock();
          uses.push(...this.flattenIfToUses(ifNode, scripts));
        } else if (this.check(30 /* KW_FOR */)) {
          const forNode = this.parseForLoop();
          uses.push({ kind: "use", name: "__IF_ROOT__", attrs: [], children: [forNode], loc: forNode.loc });
        } else if (this.check(2 /* LPAREN */)) {
          const loc = this.peek().loc;
          this.consume(2 /* LPAREN */);
          const expr = this.parseExpression();
          if (!expr) throw new SinthError("Expected expression after '('", loc);
          if (!this.check(3 /* RPAREN */)) throw new SinthError("Expected ')'", loc);
          this.consume(3 /* RPAREN */);
          uses.push({ kind: "use", name: "__IF_ROOT__", attrs: [], children: [{ kind: "expr", expression: expr, loc }], loc });
        } else if (this.check(16 /* IDENT */)) {
          const savedPos = this.pos;
          const identName = this.peek().value;
          const nextType = this.tokens[this.pos + 1]?.type;
          const isComparison = [44 /* OP_EQEQ */, 43 /* OP_NEQ */, 41 /* OP_LT */, 42 /* OP_GT */, 45 /* OP_LTEQ */, 46 /* OP_GTEQ */].includes(nextType);
          const isLogicAndOr = nextType === 16 /* IDENT */ && (this.tokens[this.pos + 1]?.value === "and" || this.tokens[this.pos + 1]?.value === "or");
          if (isComparison || isLogicAndOr) {
            throw new SinthError(
              `Unexpected expression '${identName} ...' at top level. Did you mean to wrap this in an 'if' block?`,
              this.peek().loc
            );
          }
          if (nextType === 6 /* EQUALS */ || nextType === 35 /* OP_PLUS */ && this.tokens[this.pos + 2]?.type === 6 /* EQUALS */ || nextType === 36 /* OP_MINUS */ && this.tokens[this.pos + 2]?.type === 6 /* EQUALS */) {
            this.consume(16 /* IDENT */);
            let op = "=";
            if (this.check(35 /* OP_PLUS */)) {
              this.consume(35 /* OP_PLUS */);
              op = "+=";
            } else if (this.check(36 /* OP_MINUS */)) {
              this.consume(36 /* OP_MINUS */);
              op = "-=";
            }
            this.consume(6 /* EQUALS */);
            const expr = this.parseExpression();
            if (expr) {
              const js = `${identName} ${op} ${compileExprToJS(expr)};
sinthRender();`;
              scripts.push({ raw: js, attrs: {}, loc: this.peek().loc });
            }
            continue;
          }
          if (nextType === 2 /* LPAREN */ && identName[0] === identName[0].toLowerCase()) {
            this.consume(16 /* IDENT */);
            this.consume(2 /* LPAREN */);
            const args = [];
            if (!this.check(3 /* RPAREN */)) {
              args.push(this.parseExpression());
              while (this.check(5 /* COMMA */)) {
                this.consume(5 /* COMMA */);
                args.push(this.parseExpression());
              }
            }
            this.consume(3 /* RPAREN */);
            const expr = { kind: "call", callee: { kind: "variable", name: identName }, args };
            uses.push({ kind: "use", name: "__IF_ROOT__", attrs: [], children: [{ kind: "expr", expression: expr, loc: this.peek().loc }], loc: this.peek().loc });
          } else {
            this.pos = savedPos;
            uses.push(this.parseCompUse());
          }
        } else throw new SinthError(
          `Unexpected token '${this.peek().value}' (${TT[this.peek().type]}) at top level`,
          this.peek().loc
        );
      }
      this._visited.clear();
      return { filePath: this.file, isPage, imports, meta, defs, functions, uses, styles, scripts, customEls, varDecls };
    }
    flattenIfToUses(ifNode, scripts) {
      const bodyHasComp = ifNode.body.some((c) => c.kind === "use");
      const elseHasComp = (ifNode.elseBody ?? []).some((c) => c.kind === "use");
      if (!bodyHasComp && !elseHasComp) {
        scripts.push({ raw: compileIfToJS(ifNode), attrs: {}, loc: ifNode.loc });
        return [];
      }
      const syntheticUse = {
        kind: "use",
        name: "__IF_ROOT__",
        attrs: [],
        children: [ifNode],
        loc: ifNode.loc
      };
      return [syntheticUse];
    }
    // imports
    parseImport() {
      const loc = this.consume(17 /* KW_IMPORT */).loc;
      if (this.check(19 /* KW_CSS */)) {
        this.consume(19 /* KW_CSS */);
        return { kind: "css", path: this.consume(10 /* STRING */).value, loc };
      }
      if (this.check(10 /* STRING */)) {
        return { kind: "sinth", path: this.consume(10 /* STRING */).value, loc };
      }
      if (this.check(16 /* IDENT */)) {
        const name = this.consume(16 /* IDENT */).value;
        let alias;
        if (this.check(18 /* KW_AS */)) {
          this.consume(18 /* KW_AS */);
          alias = this.consume(16 /* IDENT */).value;
        }
        return { kind: "js", name, alias, loc };
      }
      throw new SinthError(`Expected import path, library name, or 'css'`, loc);
    }
    // metadata
    isMetaStart() {
      if (!this.check(16 /* IDENT */)) return false;
      return this.tokens[this.pos + 1]?.type === 6 /* EQUALS */;
    }
    parseMeta() {
      const loc = this.peek().loc;
      const key = this.consume(16 /* IDENT */).value;
      this.consume(6 /* EQUALS */);
      return { key, value: this.parseLiteral(), loc };
    }
    // var declarations
    parseVarDeclaration() {
      const loc = this.peek().loc;
      this.consume(16 /* IDENT */);
      const typeTok = this.consume(16 /* IDENT */);
      let typeStr = typeTok.value;
      if (this.check(8 /* LBRACKET */) && this.tokens[this.pos + 1]?.type === 9 /* RBRACKET */) {
        this.consume(8 /* LBRACKET */);
        this.consume(9 /* RBRACKET */);
        typeStr = "str[]";
      }
      if (!["int", "str", "bool", "str[]", "obj", "ui"].includes(typeStr)) {
        throw new SinthError(`Unknown type '${typeStr}'. Expected: int, str, bool, str[], obj, component`, typeTok.loc);
      }
      const nameTok = this.consume(16 /* IDENT */);
      let val = null;
      if (this.check(6 /* EQUALS */)) {
        this.consume(6 /* EQUALS */);
        if (this.check(8 /* LBRACKET */)) {
          val = this.parseArrayLiteral();
        } else if (this.check(16 /* IDENT */) || this.check(2 /* LPAREN */)) {
          const savedPos = this.pos;
          const expr = this.parseExpression();
          if (expr && (expr.kind !== "literal" || expr.kind === "literal" && expr.value?.kind === "str" && expr.value.value.startsWith("__VAR__"))) {
            val = { kind: "str", value: `__EXPR__${JSON.stringify(expr)}` };
          } else {
            this.pos = savedPos;
            val = this.parseLiteral();
          }
        } else if (this.check(11 /* NUMBER */)) {
          val = this.parseLiteral();
        } else {
          val = this.parseLiteral();
        }
      }
      return { kind: "var", name: nameTok.value, varType: typeStr, value: val, loc };
    }
    parseArrayLiteral() {
      this.consume(8 /* LBRACKET */);
      const items = [];
      while (!this.check(9 /* RBRACKET */) && !this.check(49 /* EOF */)) {
        if (this.check(0 /* LBRACE */)) {
          items.push(this.parseObjectLiteral());
        } else if (this.check(10 /* STRING */)) {
          items.push(this.consume(10 /* STRING */).value);
        } else if (this.check(11 /* NUMBER */)) {
          items.push(parseFloat(this.consume(11 /* NUMBER */).value));
        } else if (this.check(12 /* BOOL_TRUE */)) {
          this.consume(12 /* BOOL_TRUE */);
          items.push(true);
        } else if (this.check(13 /* BOOL_FALSE */)) {
          this.consume(13 /* BOOL_FALSE */);
          items.push(false);
        } else if (this.check(14 /* NULL_LIT */)) {
          this.consume(14 /* NULL_LIT */);
          items.push(null);
        }
        if (this.check(5 /* COMMA */)) this.consume(5 /* COMMA */);
        else break;
      }
      this.consume(9 /* RBRACKET */);
      return { kind: "str", value: `__ARR__${JSON.stringify(items)}` };
    }
    parseObjectLiteral() {
      this.consume(0 /* LBRACE */);
      const obj = {};
      while (!this.check(1 /* RBRACE */) && !this.check(49 /* EOF */)) {
        const key = this.consume(16 /* IDENT */).value;
        this.consume(4 /* COLON */);
        if (this.check(10 /* STRING */)) {
          obj[key] = this.consume(10 /* STRING */).value;
        } else if (this.check(11 /* NUMBER */)) {
          obj[key] = parseFloat(this.consume(11 /* NUMBER */).value);
        } else if (this.check(12 /* BOOL_TRUE */)) {
          this.consume(12 /* BOOL_TRUE */);
          obj[key] = true;
        } else if (this.check(13 /* BOOL_FALSE */)) {
          this.consume(13 /* BOOL_FALSE */);
          obj[key] = false;
        } else if (this.check(14 /* NULL_LIT */)) {
          this.consume(14 /* NULL_LIT */);
          obj[key] = null;
        } else if (this.check(16 /* IDENT */)) {
          obj[key] = `__VAR__${this.consume(16 /* IDENT */).value}`;
        } else {
          throw new SinthError(`Expected literal value for key '${key}'`, this.peek().loc);
        }
        if (this.check(5 /* COMMA */)) this.consume(5 /* COMMA */);
      }
      this.consume(1 /* RBRACE */);
      return obj;
    }
    parseExpression(skipBinary = false) {
      if (this._visited.has(this.pos)) throw new SinthError("Circular expression reference", this.peek().loc);
      this._visited.add(this.pos);
      const tok = this.peek();
      if (tok.type === 16 /* IDENT */ && tok.value === "not" || tok.type === 48 /* OP_NOT */) {
        if (tok.type === 16 /* IDENT */) this.consume(16 /* IDENT */);
        else this.consume(48 /* OP_NOT */);
        const operand = this.parseExpression();
        if (!operand) throw new SinthError("Expected expression after 'not'", tok.loc);
        const unaryExpr = { kind: "unary", op: "not", operand };
        return this.parseBinaryRHS(this.parseCallExpr(this.parsePostfix(unaryExpr)));
      }
      if (this.check(2 /* LPAREN */)) {
        this.consume(2 /* LPAREN */);
        const inner = this.parseExpression();
        if (!inner) throw new SinthError("Expected expression after '('", this.peek().loc);
        if (!this.check(3 /* RPAREN */)) throw new SinthError("Expected closing ')'", this.peek().loc);
        this.consume(3 /* RPAREN */);
        const result = this.parseCallExpr(this.parsePostfix(inner));
        return skipBinary ? result : this.parseBinaryRHS(result);
      }
      if (this.check(10 /* STRING */) || this.check(11 /* NUMBER */) || this.check(12 /* BOOL_TRUE */) || this.check(13 /* BOOL_FALSE */) || this.check(14 /* NULL_LIT */) || this.check(0 /* LBRACE */) || this.check(8 /* LBRACKET */)) {
        const lit = this.parseLiteral();
        const base = { kind: "literal", value: lit };
        return this.parseBinaryRHS(this.parseCallExpr(this.parsePostfix(base)));
      }
      if (tok.type === 32 /* KW_REMOVE */) {
        const name = this.consume(32 /* KW_REMOVE */).value;
        return this.parseBinaryRHS(this.parseCallExpr({ kind: "variable", name }));
      }
      if (tok.type === 16 /* IDENT */) {
        let memo = false;
        let rawName = this.consume(16 /* IDENT */).value;
        if (rawName.startsWith("$")) {
          memo = true;
          rawName = rawName.substring(1);
        }
        const name = rawName;
        let varExpr;
        if (this.check(7 /* DOT */)) {
          this.consume(7 /* DOT */);
          const propName = this.consume(16 /* IDENT */).value;
          const fullName = `${name}.${propName}`;
          varExpr = { kind: "variable", name: fullName };
        } else {
          varExpr = { kind: "variable", name };
        }
        const indexedExpr = this.parsePostfix(varExpr);
        if (indexedExpr !== varExpr) {
          return this.parseBinaryRHS(this.parseCallExpr(indexedExpr));
        }
        const nextType = this.tokens[this.pos]?.type;
        if (nextType === 35 /* OP_PLUS */ && this.tokens[this.pos + 1]?.type === 6 /* EQUALS */) {
          this.consume(35 /* OP_PLUS */);
          this.consume(6 /* EQUALS */);
          const rhs = this.parseExpression();
          if (!rhs) throw new SinthError("Expected expression after +=", this.peek().loc);
          return { kind: "assign", target: varExpr.name, op: "+=", right: rhs };
        }
        if (nextType === 36 /* OP_MINUS */ && this.tokens[this.pos + 1]?.type === 6 /* EQUALS */) {
          this.consume(36 /* OP_MINUS */);
          this.consume(6 /* EQUALS */);
          const rhs = this.parseExpression();
          if (!rhs) throw new SinthError("Expected expression after -=", this.peek().loc);
          return { kind: "assign", target: varExpr.name, op: "-=", right: rhs };
        }
        if (nextType === 6 /* EQUALS */) {
          this.consume(6 /* EQUALS */);
          const rhs = this.parseExpression();
          if (!rhs) throw new SinthError("Expected expression after =", this.peek().loc);
          return { kind: "assign", target: varExpr.name, op: "=", right: rhs };
        }
        return this.parseBinaryRHS(this.parseCallExpr(varExpr));
      }
      return null;
    }
    parsePrimary() {
      const tok = this.peek();
      if (tok.type === 11 /* NUMBER */ || tok.type === 10 /* STRING */ || tok.type === 12 /* BOOL_TRUE */ || tok.type === 13 /* BOOL_FALSE */ || tok.type === 14 /* NULL_LIT */) {
        const lit = this.parseLiteral();
        return { kind: "literal", value: lit };
      }
      if (tok.type === 16 /* IDENT */) {
        let memo = false;
        let rawName = this.consume(16 /* IDENT */).value;
        if (rawName.startsWith("$")) {
          memo = true;
          rawName = rawName.substring(1);
        }
        const name = rawName;
        let expr;
        if (this.check(7 /* DOT */)) {
          this.consume(7 /* DOT */);
          expr = { kind: "variable", name: name + "." + this.consume(16 /* IDENT */).value };
        } else {
          expr = { kind: "variable", name };
        }
        if (memo) expr.memo = true;
        return expr;
      }
      if (tok.type === 2 /* LPAREN */) {
        this.consume(2 /* LPAREN */);
        const inner = this.parseExpression();
        this.consume(3 /* RPAREN */);
        return inner;
      }
      if (tok.type === 0 /* LBRACE */) {
        const obj = this.parseObjectLiteral();
        return { kind: "literal", value: { kind: "str", value: JSON.stringify(obj) } };
      }
      throw new SinthError(`Expected expression`, this.peek().loc);
    }
    parseComparison(left) {
      const savedPos = this.pos;
      const t = this.peek().type;
      let op = null;
      if (t === 44 /* OP_EQEQ */) op = "==";
      else if (t === 43 /* OP_NEQ */) op = "!=";
      else if (t === 41 /* OP_LT */) op = "<";
      else if (t === 42 /* OP_GT */) op = ">";
      else if (t === 45 /* OP_LTEQ */) op = "<=";
      else if (t === 46 /* OP_GTEQ */) op = ">=";
      if (!op) return left;
      this.pos++;
      const rightPrimary = this.parsePrimary();
      const rightWithPostfix = this.parsePostfix(rightPrimary);
      const rightWithCall = this.parseCallExpr(rightWithPostfix);
      const right = this.parseArithmetic(rightWithCall);
      if (!right) {
        this.pos = savedPos;
        return left;
      }
      if (this.pos === savedPos) return { kind: "binary", left, op, right };
      return { kind: "binary", left, op, right };
    }
    parseLogical(left) {
      const savedPos = this.pos;
      const t = this.peek().type;
      let op = null;
      if (t === 16 /* IDENT */ && this.peek().value === "and") op = "and";
      else if (t === 16 /* IDENT */ && this.peek().value === "or") op = "or";
      if (!op) return left;
      this.pos++;
      const right = this.parseExpression();
      if (!right) {
        this.pos = savedPos;
        return left;
      }
      return this.parseLogical({ kind: "binary", left, op, right });
    }
    parseArithmetic(left) {
      while (true) {
        const t = this.peek().type;
        let op = null;
        if (t === 35 /* OP_PLUS */) op = "+";
        else if (t === 36 /* OP_MINUS */) op = "-";
        else if (t === 37 /* OP_STAR */) op = "*";
        else if (t === 38 /* OP_SLASH */) op = "/";
        else if (t === 39 /* OP_MOD */) op = "%";
        if (!op) break;
        this.pos++;
        const rightPrimary = this.parsePrimary();
        const rightWithPostfix = this.parsePostfix(rightPrimary);
        const rightWithCall = this.parseCallExpr(rightWithPostfix);
        const right = rightWithCall;
        if (!right) throw new SinthError(`Expected expression after '${op}'`, this.peek().loc);
        left = { kind: "binary", left, op, right };
      }
      return left;
    }
    parseBinaryRHS(left) {
      left = this.parseArithmetic(left);
      left = this.parseComparison(left);
      left = this.parseLogical(left);
      return left;
    }
    parsePostfix(base) {
      let expr = base;
      while (this.check(8 /* LBRACKET */)) {
        this.consume(8 /* LBRACKET */);
        const key = this.parseExpression();
        if (!key) throw new SinthError("Expected expression inside [...]", this.peek().loc);
        this.consume(9 /* RBRACKET */);
        expr = { kind: "index", object: expr, key };
      }
      return expr;
    }
    parseCallExpr(expr) {
      while (this.check(2 /* LPAREN */)) {
        this.consume(2 /* LPAREN */);
        const args = [];
        if (!this.check(3 /* RPAREN */)) {
          args.push(this.parseExpression());
          while (this.check(5 /* COMMA */)) {
            this.consume(5 /* COMMA */);
            args.push(this.parseExpression());
          }
        }
        if (!this.check(3 /* RPAREN */)) throw new SinthError("Expected ')' after arguments", this.peek().loc);
        this.consume(3 /* RPAREN */);
        expr = { kind: "call", callee: expr, args };
      }
      return expr;
    }
    // component definitions
    parseFunctionDef() {
      const loc = this.consume(33 /* KW_FUNCTION */).loc;
      const name = this.consume(16 /* IDENT */).value;
      if (name[0] === name[0].toUpperCase() && name[0] !== name[0].toLowerCase()) {
        throw new SinthError(`Function '${name}' must start with lowercase. Use 'component' for uppercase names.`, loc);
      }
      const params = this.parseParamDecls();
      let returnType;
      if (this.check(47 /* OP_ARROW */)) {
        this.consume(47 /* OP_ARROW */);
        const typeTok = this.consume(16 /* IDENT */);
        if (!["int", "str", "bool", "str[]", "obj", "ui"].includes(typeTok.value)) {
          throw new SinthError(`Unknown return type '${typeTok.value}'. Expected: int, str, bool, str[], obj, ui`, typeTok.loc);
        }
        returnType = typeTok.value;
      }
      if (!this.check(0 /* LBRACE */)) throw new SinthError("Expected '{' after function signature", this.peek().loc);
      this.consume(0 /* LBRACE */);
      const body = this.parseUnifiedBody();
      this.consume(1 /* RBRACE */);
      return { name, params, returnType, body, loc };
    }
    parseCompDef() {
      const loc = this.consume(20 /* KW_COMPONENT */).loc;
      const name = this.consume(16 /* IDENT */).value;
      const params = this.parseParamDecls();
      const rawTok = this.consume(15 /* RAW_BLOCK */);
      const { body, styles, scripts } = this.parseCompBody(rawTok.value, rawTok.loc);
      return { name, params, body, styles, scripts, loc };
    }
    parseCustomEl() {
      const loc = this.peek().loc;
      if (this.check(26 /* KW_CUSTOM_EL */)) this.consume(26 /* KW_CUSTOM_EL */);
      else if (this.check(27 /* KW_CUSTOM */)) this.consume(27 /* KW_CUSTOM */);
      const sinthName = this.consume(16 /* IDENT */).value;
      let exportTag;
      if (this.check(2 /* LPAREN */)) {
        this.consume(2 /* LPAREN */);
        while (!this.check(3 /* RPAREN */)) {
          const attrName = this.consume(16 /* IDENT */).value;
          if (attrName === "export") {
            this.consume(4 /* COLON */);
            if (!this.check(41 /* OP_LT */)) throw new SinthError("Expected '<tag/>' after 'export:'", this.peek().loc);
            this.consume(41 /* OP_LT */);
            exportTag = this.consume(16 /* IDENT */).value;
            if (!this.check(38 /* OP_SLASH */)) throw new SinthError("Expected '/>' in tag literal", this.peek().loc);
            this.consume(38 /* OP_SLASH */);
            this.consume(42 /* OP_GT */);
          }
          if (!this.check(3 /* RPAREN */)) this.consume(5 /* COMMA */);
        }
        this.consume(3 /* RPAREN */);
      }
      if (this.check(15 /* RAW_BLOCK */)) {
        const rawTok = this.consume(15 /* RAW_BLOCK */);
        const tokens = new Lexer(rawTok.value, rawTok.loc.file).tokenize();
        const sub = new _Parser(tokens, rawTok.loc.file);
        sub._varDecls = this._varDecls;
        const parsed = sub.parseBodyContents();
        return { sinthName, tagName: sinthName.toLowerCase(), exportTag, params: [], body: parsed.body, styles: parsed.styles, scripts: parsed.scripts, varDecls: this._varDecls, loc };
      }
      if (!this.check(0 /* LBRACE */)) throw new SinthError("Expected '{' after custom element declaration", this.peek().loc);
      this.consume(0 /* LBRACE */);
      const body = [];
      const styles = [];
      const scripts = [];
      const varDecls = [];
      while (!this.check(1 /* RBRACE */) && !this.check(49 /* EOF */)) {
        if (this.check(21 /* KW_STYLE */)) {
          styles.push(this.parseStyleBlock());
        } else if (this.check(22 /* KW_SCRIPT */)) {
          scripts.push(this.parseScriptBlock());
        } else if (this.check(16 /* IDENT */) && this.peek().value === "var") {
          const vd = this.parseVarDeclaration();
          if (vd) varDecls.push(vd);
        } else if (this.check(28 /* KW_IF */)) {
          body.push(this.parseIfBlock());
        } else if (this.check(30 /* KW_FOR */)) {
          body.push(this.parseForLoop());
        } else if (this.check(16 /* IDENT */)) {
          body.push(this.parseCompUse());
        } else if (this.check(10 /* STRING */)) {
          body.push({ kind: "text", value: this.consume(10 /* STRING */).value, loc: this.peek().loc });
        } else throw new SinthError(`Unexpected token in custom element body`, this.peek().loc);
      }
      this.consume(1 /* RBRACE */);
      return { sinthName, tagName: sinthName.toLowerCase(), exportTag, params: [], body, styles, scripts, varDecls, loc };
    }
    parseReturnStmt() {
      const loc = this.consume(34 /* KW_RETURN */).loc;
      let expression;
      if (!this.check(1 /* RBRACE */) && !this.check(49 /* EOF */) && !this.check(28 /* KW_IF */) && !this.check(30 /* KW_FOR */) && !this.check(34 /* KW_RETURN */)) {
        expression = this.parseExpression() ?? void 0;
      }
      return { kind: "return", expression, loc };
    }
    parseParamDecls() {
      const params = [];
      if (!this.check(2 /* LPAREN */)) return params;
      this.consume(2 /* LPAREN */);
      while (!this.check(3 /* RPAREN */)) {
        const ploc = this.peek().loc;
        let pname;
        let paramType;
        if (this.check(16 /* IDENT */) && ["int", "str", "bool", "str[]", "obj"].includes(this.peek().value) && this.tokens[this.pos + 1]?.type === 16 /* IDENT */) {
          paramType = this.consume(16 /* IDENT */).value;
          pname = this.consume(16 /* IDENT */).value;
        } else {
          const nameTok = this.check(16 /* IDENT */) ? this.consume(16 /* IDENT */) : this.consume(this.peek().type);
          pname = nameTok.value;
        }
        let defaultVal;
        if (this.check(6 /* EQUALS */)) {
          this.consume(6 /* EQUALS */);
          defaultVal = this.parseLiteral();
        }
        params.push({ name: pname, paramType, defaultVal, loc: ploc });
        if (!this.check(3 /* RPAREN */)) this.consume(5 /* COMMA */);
      }
      this.consume(3 /* RPAREN */);
      return params;
    }
    parseCompBody(raw, loc) {
      const tokens = new Lexer(raw, loc.file).tokenize();
      const sub = new _Parser(tokens, loc.file);
      sub._varDecls = this._varDecls;
      return sub.parseBodyContents();
    }
    parseBodyContents() {
      const body = [], styles = [], scripts = [];
      while (!this.check(49 /* EOF */)) {
        if (this.check(21 /* KW_STYLE */)) {
          styles.push(this.parseStyleBlock());
        } else if (this.check(22 /* KW_SCRIPT */)) {
          scripts.push(this.parseScriptBlock());
        } else if (this.check(10 /* STRING */)) {
          const loc = this.peek().loc;
          body.push({ kind: "text", value: this.consume(10 /* STRING */).value, loc });
        } else if (this.check(16 /* IDENT */) && this.peek().value === "var") {
          const vd = this.parseVarDeclaration();
          if (vd) this._varDecls.push(vd);
          continue;
        } else if (this.check(34 /* KW_RETURN */)) {
          body.push(this.parseReturnStmt());
        } else if (this.check(28 /* KW_IF */)) {
          body.push(this.parseIfBlock());
        } else if (this.check(30 /* KW_FOR */)) {
          body.push(this.parseForLoop());
        } else if (this.check(16 /* IDENT */)) {
          body.push(this.parseCompUse());
        } else throw new SinthError(
          `Unexpected token '${this.peek().value}' in component body`,
          this.peek().loc
        );
      }
      return { body, styles, scripts };
    }
    // if / else blocks
    parseIfBlock() {
      const loc = this.consume(28 /* KW_IF */).loc;
      const condition = this.parseExpression();
      if (!condition) throw new SinthError("Expected condition after 'if'", this.peek().loc);
      let persist = false;
      if (this.check(16 /* IDENT */) && this.peek().value === "persist") {
        this.consume(16 /* IDENT */);
        persist = true;
      }
      this.consume(0 /* LBRACE */);
      const body = this.parseUnifiedBody();
      this.consume(1 /* RBRACE */);
      const elseBody = this.parseElseChain();
      return { kind: "if", condition, body, elseBody, persist, loc };
    }
    parseElseChain() {
      if (!this.check(29 /* KW_ELSE */)) return void 0;
      const elseTok = this.consume(29 /* KW_ELSE */);
      if (this.check(0 /* LBRACE */)) {
        this.consume(0 /* LBRACE */);
        const body = this.parseUnifiedBody();
        this.consume(1 /* RBRACE */);
        return body;
      }
      if (this.check(28 /* KW_IF */) || elseTok.value === "elif") {
        const ifBlock = this.parseIfContinue(elseTok);
        return [ifBlock];
      }
      throw new SinthError("Expected '{', 'if', or 'elif' after 'else'", this.peek().loc);
    }
    parseIfContinue(elseTok) {
      let condition;
      if (elseTok.value === "elif") {
        condition = this.parseExpression();
        if (!condition) throw new SinthError("Expected condition after 'elif'", this.peek().loc);
      } else {
        this.consume(28 /* KW_IF */);
        condition = this.parseExpression();
        if (!condition) throw new SinthError("Expected condition after 'if'", this.peek().loc);
      }
      if (!this.check(0 /* LBRACE */)) throw new SinthError("Expected '{' after condition", this.peek().loc);
      this.consume(0 /* LBRACE */);
      const body = this.parseUnifiedBody();
      this.consume(1 /* RBRACE */);
      const elseBody = this.parseElseChain();
      return { kind: "if", condition, body, elseBody, loc: elseTok.loc };
    }
    parseRawIfStatement() {
      this.consume(28 /* KW_IF */);
      const cond = this.parseExpression();
      if (!cond) throw new SinthError("Expected condition after 'if'", this.peek().loc);
      const condJS = compileExprToJS(cond);
      this.consume(0 /* LBRACE */);
      let depth = 1;
      const bodyTokens = [];
      while (depth > 0 && !this.check(49 /* EOF */)) {
        const t = this.peek();
        if (t.type === 0 /* LBRACE */) depth++;
        else if (t.type === 1 /* RBRACE */) {
          depth--;
          if (depth === 0) break;
        }
        bodyTokens.push(this.consume(t.type));
      }
      this.consume(1 /* RBRACE */);
      const rawBody = bodyTokens.map((t) => {
        if (t.type === 10 /* STRING */) return '"' + t.value + '"';
        return t.value;
      }).join(" ");
      let result = `if (${condJS}) { ${rawBody} }`;
      if (this.check(29 /* KW_ELSE */)) {
        this.consume(29 /* KW_ELSE */);
        if (this.check(28 /* KW_IF */)) {
          const elseIfJS = this.parseRawIfStatement();
          result += ` else ${elseIfJS}`;
        } else {
          this.consume(0 /* LBRACE */);
          depth = 1;
          const elseTokens = [];
          while (depth > 0 && !this.check(49 /* EOF */)) {
            const t = this.peek();
            if (t.type === 0 /* LBRACE */) depth++;
            else if (t.type === 1 /* RBRACE */) {
              depth--;
              if (depth === 0) break;
            }
            elseTokens.push(this.consume(t.type));
          }
          this.consume(1 /* RBRACE */);
          const elseBody = elseTokens.map((t) => {
            if (t.type === 10 /* STRING */) return '"' + t.value + '"';
            return t.value;
          }).join(" ");
          result += ` else { ${elseBody} }`;
        }
      }
      return result;
    }
    parseUnifiedBody() {
      const children = [];
      while (!this.check(1 /* RBRACE */) && !this.check(49 /* EOF */)) {
        if (this.check(34 /* KW_RETURN */)) {
          children.push(this.parseReturnStmt());
          continue;
        }
        if (this.check(28 /* KW_IF */)) {
          children.push(this.parseIfBlock());
          continue;
        }
        if (this.check(30 /* KW_FOR */)) {
          children.push(this.parseForLoop());
          continue;
        }
        if (this.check(2 /* LPAREN */)) {
          const loc = this.peek().loc;
          const expr = this.parseExpression();
          if (expr) {
            children.push({ kind: "expr", expression: expr, loc });
          }
          continue;
        }
        if (this.check(16 /* IDENT */)) {
          const savedPos = this.pos;
          const name = this.peek().value;
          const nextType = this.tokens[this.pos + 1]?.type;
          if (nextType === 6 /* EQUALS */ || nextType === 35 /* OP_PLUS */ && this.tokens[this.pos + 2]?.type === 6 /* EQUALS */ || nextType === 36 /* OP_MINUS */ && this.tokens[this.pos + 2]?.type === 6 /* EQUALS */) {
            this.consume(16 /* IDENT */);
            let op = "=";
            if (this.check(35 /* OP_PLUS */)) {
              this.consume(35 /* OP_PLUS */);
              op = "+=";
            } else if (this.check(36 /* OP_MINUS */)) {
              this.consume(36 /* OP_MINUS */);
              op = "-=";
            }
            this.consume(6 /* EQUALS */);
            const rhs = this.parseExpression();
            if (!rhs) throw new SinthError("Expected expression after assignment", this.peek().loc);
            children.push({ kind: "assign_stmt", expression: { kind: "assign", target: name, op, right: rhs }, loc: this.peek().loc });
            continue;
          }
          this.pos = savedPos;
        }
        if (this.check(10 /* STRING */)) {
          const loc = this.peek().loc;
          let leftExpr = { kind: "literal", value: { kind: "str", value: this.consume(10 /* STRING */).value } };
          while (this.check(35 /* OP_PLUS */)) {
            this.consume(35 /* OP_PLUS */);
            let rhs = null;
            if (this.check(10 /* STRING */)) {
              rhs = { kind: "literal", value: { kind: "str", value: this.consume(10 /* STRING */).value } };
            } else if (this.check(16 /* IDENT */)) {
              const rhsName = this.consume(16 /* IDENT */).value;
              rhs = { kind: "variable", name: rhsName };
            } else {
              rhs = this.parseExpression(true);
            }
            if (!rhs) throw new SinthError("Expected expression after +", this.peek().loc);
            leftExpr = { kind: "binary", left: leftExpr, op: "+", right: rhs };
          }
          children.push({ kind: "expr", expression: leftExpr, loc });
          continue;
        }
        if (this.check(32 /* KW_REMOVE */)) {
          const loc = this.consume(32 /* KW_REMOVE */).loc;
          if (this.check(10 /* STRING */)) {
            const target = this.consume(10 /* STRING */).value;
            children.push({ kind: "remove", target, loc });
          } else {
            throw new SinthError(
              `Expected a string after 'remove', got '${this.peek().value}'. Use remove "id".`,
              this.peek().loc
            );
          }
          continue;
        }
        if (this.check(16 /* IDENT */) && this.peek().value === "var") {
          const vd = this.parseVarDeclaration();
          if (vd) this._varDecls.push(vd);
          continue;
        }
        if (this.check(16 /* IDENT */)) {
          const loc = this.peek().loc;
          const name = this.peek().value;
          const nextType = this.tokens[this.pos + 1]?.type;
          const nextNextType = this.tokens[this.pos + 2]?.type;
          if (nextType === 7 /* DOT */ && (nextNextType === 6 /* EQUALS */ || nextNextType === 35 /* OP_PLUS */ && this.tokens[this.pos + 3]?.type === 6 /* EQUALS */ || nextNextType === 36 /* OP_MINUS */ && this.tokens[this.pos + 3]?.type === 6 /* EQUALS */)) {
            let fullName = this.consume(16 /* IDENT */).value;
            this.consume(7 /* DOT */);
            fullName = fullName + "." + this.consume(16 /* IDENT */).value;
            let op = "=";
            const afterDotType = this.tokens[this.pos]?.type;
            if (afterDotType === 35 /* OP_PLUS */ && this.tokens[this.pos + 1]?.type === 6 /* EQUALS */) {
              this.consume(35 /* OP_PLUS */);
              op = "+=";
            } else if (afterDotType === 36 /* OP_MINUS */ && this.tokens[this.pos + 1]?.type === 6 /* EQUALS */) {
              this.consume(36 /* OP_MINUS */);
              op = "-=";
            }
            this.consume(6 /* EQUALS */);
            const rhs = this.parseExpression();
            if (!rhs) throw new SinthError("Expected expression after assignment", this.peek().loc);
            const assignExpr = { kind: "assign", target: fullName, op, right: rhs };
            children.push({ kind: "assign_stmt", expression: assignExpr, loc });
            continue;
          }
          const isSimpleAssign = nextType === 6 /* EQUALS */;
          const isPlusAssign = nextType === 35 /* OP_PLUS */ && this.tokens[this.pos + 2]?.type === 6 /* EQUALS */;
          const isMinusAssign = nextType === 36 /* OP_MINUS */ && this.tokens[this.pos + 2]?.type === 6 /* EQUALS */;
          if (isSimpleAssign || isPlusAssign || isMinusAssign) {
            this.consume(16 /* IDENT */);
            let op = "=";
            if (isPlusAssign) {
              this.consume(35 /* OP_PLUS */);
              op = "+=";
            } else if (isMinusAssign) {
              this.consume(36 /* OP_MINUS */);
              op = "-=";
            }
            this.consume(6 /* EQUALS */);
            const rhs = this.parseExpression();
            if (!rhs) throw new SinthError("Expected expression after assignment", this.peek().loc);
            const assignExpr = { kind: "assign", target: name, op, right: rhs };
            children.push({ kind: "assign_stmt", expression: assignExpr, loc });
            continue;
          }
          if (nextType === 2 /* LPAREN */) {
            const identName = this.peek().value;
            const isMemo = identName.startsWith("$");
            const realName = isMemo ? identName.substring(1) : identName;
            if (realName[0] === realName[0].toUpperCase() && realName[0] !== realName[0].toLowerCase()) {
              children.push(this.parseCompUse());
            } else {
              this.consume(16 /* IDENT */);
              this.consume(2 /* LPAREN */);
              const args = [];
              if (!this.check(3 /* RPAREN */)) {
                args.push(this.parseExpression());
                while (this.check(5 /* COMMA */)) {
                  this.consume(5 /* COMMA */);
                  args.push(this.parseExpression());
                }
              }
              this.consume(3 /* RPAREN */);
              const callExpr = { kind: "call", callee: { kind: "variable", name: realName }, args, memo: isMemo || void 0 };
              children.push({ kind: "expr", expression: callExpr, loc });
            }
            continue;
          }
          if (nextType === 0 /* LBRACE */ || nextType === 15 /* RAW_BLOCK */) {
            children.push(this.parseCompUse());
            continue;
          }
          if (nextType === 7 /* DOT */) {
            let fullName = this.consume(16 /* IDENT */).value;
            this.consume(7 /* DOT */);
            fullName = fullName + "." + this.consume(16 /* IDENT */).value;
            if (this.check(2 /* LPAREN */)) {
              this.consume(2 /* LPAREN */);
              const args = [];
              if (!this.check(3 /* RPAREN */)) {
                args.push(this.parseExpression());
                while (this.check(5 /* COMMA */)) {
                  this.consume(5 /* COMMA */);
                  args.push(this.parseExpression());
                }
              }
              this.consume(3 /* RPAREN */);
              children.push({ kind: "expr", expression: { kind: "call", callee: { kind: "variable", name: fullName }, args }, loc });
            } else {
              children.push({ kind: "expr", expression: { kind: "variable", name: fullName }, loc });
            }
            continue;
          }
          if (nextType === 8 /* LBRACKET */) {
            this.consume(16 /* IDENT */);
            const varExpr = { kind: "variable", name };
            const indexedExpr = this.parsePostfix(varExpr);
            children.push({ kind: "expr", expression: indexedExpr, loc });
            continue;
          }
          this.consume(16 /* IDENT */);
          children.push({ kind: "expr", expression: { kind: "variable", name }, loc });
          continue;
        }
        if (children.length > 0) {
          const lastChild = children[children.length - 1];
          if (lastChild.kind === "text" || lastChild.kind === "expr" || lastChild.kind === "assign_stmt") {
            const nextTT = this.tokens[this.pos]?.type;
            if (nextTT === 10 /* STRING */ || nextTT === 11 /* NUMBER */ || nextTT === 12 /* BOOL_TRUE */ || nextTT === 13 /* BOOL_FALSE */ || nextTT === 14 /* NULL_LIT */ || nextTT === 16 /* IDENT */ && this.tokens[this.pos]?.value !== "var" && this.tokens[this.pos]?.value !== "if" && this.tokens[this.pos]?.value !== "for" && this.tokens[this.pos]?.value !== "else" && this.tokens[this.pos]?.value !== "and" && this.tokens[this.pos]?.value !== "or" && this.tokens[this.pos]?.value[0] !== this.tokens[this.pos]?.value[0]?.toUpperCase()) {
              throw new SinthError(
                `Unexpected ${TT[nextTT]}. Use '+' to concatenate values.`,
                this.peek().loc
              );
            }
          }
        }
      }
      return children;
    }
    parseForLoop() {
      const loc = this.consume(30 /* KW_FOR */).loc;
      const firstVar = this.consume(16 /* IDENT */).value;
      let keyVar;
      let itemVar;
      let indexVar;
      if (this.check(5 /* COMMA */)) {
        this.consume(5 /* COMMA */);
        const secondVar = this.consume(16 /* IDENT */).value;
        if (this.check(5 /* COMMA */)) {
          this.consume(5 /* COMMA */);
          keyVar = firstVar;
          itemVar = secondVar;
          indexVar = this.consume(16 /* IDENT */).value;
        } else {
          itemVar = firstVar;
          indexVar = secondVar;
        }
      } else {
        itemVar = firstVar;
      }
      if (!this.check(31 /* KW_IN */)) throw new SinthError("Expected 'in' after loop variable", this.peek().loc);
      this.consume(31 /* KW_IN */);
      let arrayVar = this.consume(16 /* IDENT */).value;
      while (this.check(7 /* DOT */)) {
        this.consume(7 /* DOT */);
        const propName = this.consume(16 /* IDENT */).value;
        if (this.check(2 /* LPAREN */)) {
          this.consume(2 /* LPAREN */);
          const args = [];
          if (!this.check(3 /* RPAREN */)) {
            if (this.check(10 /* STRING */)) args.push(this.consume(10 /* STRING */).value);
            else if (this.check(11 /* NUMBER */)) args.push(this.consume(11 /* NUMBER */).value);
            while (this.check(5 /* COMMA */)) {
              this.consume(5 /* COMMA */);
              if (this.check(10 /* STRING */)) args.push(this.consume(10 /* STRING */).value);
              else if (this.check(11 /* NUMBER */)) args.push(this.consume(11 /* NUMBER */).value);
            }
          }
          this.consume(3 /* RPAREN */);
          arrayVar = arrayVar + "." + propName + "(" + args.map((a) => JSON.stringify(a)).join(",") + ")";
        } else {
          arrayVar = arrayVar + "." + propName;
        }
      }
      if (keyVar === void 0 && indexVar !== void 0) {
        const srcDecl = this._varDecls.find((d) => d.name === arrayVar);
        if (srcDecl && srcDecl.varType === "obj") {
          const val = srcDecl.value;
          const isArray = val && val.kind === "str" && val.value.startsWith("__ARR__");
          if (!isArray) {
            keyVar = itemVar;
            itemVar = indexVar;
            indexVar = void 0;
          }
        }
      }
      if (!this.check(0 /* LBRACE */)) throw new SinthError("Expected '{' after for..in expression", this.peek().loc);
      this.consume(0 /* LBRACE */);
      this.loopVar = itemVar;
      const body = this.parseChildList();
      this.loopVar = null;
      this.consume(1 /* RBRACE */);
      return { kind: "for", keyVar, itemVar, indexVar, arrayVar, body, loc };
    }
    parseCompUse() {
      const loc = this.peek().loc;
      const name = this.consume(16 /* IDENT */).value;
      const attrs = [];
      if (this.check(2 /* LPAREN */)) {
        this.consume(2 /* LPAREN */);
        while (!this.check(3 /* RPAREN */)) {
          const aloc = this.peek().loc;
          const aname = this.consume(16 /* IDENT */).value;
          let value = null;
          if (this.check(4 /* COLON */)) {
            this.consume(4 /* COLON */);
            if (this.isEventAttr(aname)) {
              if (this.check(10 /* STRING */)) {
                value = this.parseLiteral();
              } else {
                const savedPos = this.pos;
                const expr = this.parseExpression();
                if (expr && (this.check(5 /* COMMA */) || this.check(3 /* RPAREN */) || this.check(40 /* OP_SEMI */) || this.check(28 /* KW_IF */))) {
                  const actions = [{ kind: "expr", expr }];
                  while (this.check(40 /* OP_SEMI */)) {
                    this.consume(40 /* OP_SEMI */);
                    if (this.check(28 /* KW_IF */)) {
                      const jsIf = this.parseRawIfStatement();
                      actions.push({ kind: "if", js: jsIf });
                    } else {
                      const next = this.parseExpression();
                      if (next) actions.push({ kind: "expr", expr: next });
                      else break;
                    }
                  }
                  const hasIf = actions.some((a) => a.kind === "if");
                  if (actions.length === 1 && !hasIf) {
                    const single = actions[0].expr;
                    value = { kind: "str", value: "__EXPR__" + JSON.stringify(single) };
                  } else {
                    const partsJS = [];
                    for (const a of actions) {
                      if (a.kind === "if") {
                        partsJS.push(a.js);
                      } else {
                        partsJS.push(compileExprToJS(a.expr) + ";");
                      }
                    }
                    value = { kind: "str", value: "__ACTION_JS__" + partsJS.join(" ") };
                  }
                } else {
                  this.pos = savedPos;
                  value = this.parseLiteral();
                }
              }
            } else {
              if (this.check(10 /* STRING */) || this.check(11 /* NUMBER */) || this.check(12 /* BOOL_TRUE */) || this.check(13 /* BOOL_FALSE */) || this.check(14 /* NULL_LIT */) || this.check(8 /* LBRACKET */) || this.check(0 /* LBRACE */)) {
                value = this.parseLiteral();
              } else if (this.check(16 /* IDENT */) || this.check(2 /* LPAREN */) || this.check(11 /* NUMBER */)) {
                const savedPos = this.pos;
                const expr = this.parseExpression();
                if (expr && (this.check(5 /* COMMA */) || this.check(3 /* RPAREN */))) {
                  value = { kind: "str", value: "__EXPR__" + JSON.stringify(expr) };
                } else {
                  this.pos = savedPos;
                  if (this.check(16 /* IDENT */)) {
                    value = { kind: "str", value: this.consume(16 /* IDENT */).value };
                  } else {
                    value = this.parseLiteral();
                  }
                }
              } else {
                value = this.parseLiteral();
              }
            }
          }
          attrs.push({ name: aname, value, loc: aloc });
          if (!this.check(3 /* RPAREN */)) this.consume(5 /* COMMA */);
        }
        this.consume(3 /* RPAREN */);
      }
      const children = [];
      if (this.check(15 /* RAW_BLOCK */)) {
        const rawTok = this.consume(15 /* RAW_BLOCK */);
        const tokens = new Lexer(rawTok.value, rawTok.loc.file).tokenize();
        const sub = new _Parser(tokens, rawTok.loc.file);
        sub._varDecls = this._varDecls;
        children.push(...sub.parseChildList());
      } else if (this.check(0 /* LBRACE */)) {
        this.consume(0 /* LBRACE */);
        children.push(...this.parseChildList());
        this.consume(1 /* RBRACE */);
      }
      return { kind: "use", name, attrs, children, loc };
    }
    isEventAttr(name) {
      return name.startsWith("on") && name.length > 2 && name[2] === name[2].toUpperCase();
    }
    parseChildList() {
      const children = [];
      let _iter = 0;
      while (!this.check(49 /* EOF */) && !this.check(1 /* RBRACE */)) {
        if (++_iter > 1e3) throw new SinthError("Infinite loop in children", this.peek().loc);
        if (this.check(2 /* LPAREN */)) {
          const loc = this.peek().loc;
          this.consume(2 /* LPAREN */);
          let expr = this.parseExpression(true);
          if (!expr) throw new SinthError("Expected expression after '('", this.peek().loc);
          if (!this.check(3 /* RPAREN */)) throw new SinthError("Expected ')'", this.peek().loc);
          this.consume(3 /* RPAREN */);
          while (this.check(35 /* OP_PLUS */)) {
            this.consume(35 /* OP_PLUS */);
            let rhs = null;
            if (this.check(10 /* STRING */)) {
              rhs = { kind: "literal", value: { kind: "str", value: this.consume(10 /* STRING */).value } };
            } else if (this.check(16 /* IDENT */)) {
              const rhsName = this.consume(16 /* IDENT */).value;
              rhs = { kind: "variable", name: rhsName };
            } else {
              rhs = this.parseExpression(true);
            }
            if (!rhs) throw new SinthError("Expected expression after +", this.peek().loc);
            expr = { kind: "binary", left: expr, op: "+", right: rhs };
          }
          children.push({ kind: "expr", expression: expr, loc });
          continue;
        }
        if (this.check(10 /* STRING */)) {
          const loc = this.peek().loc;
          let leftExpr = { kind: "literal", value: { kind: "str", value: this.consume(10 /* STRING */).value } };
          while (this.check(35 /* OP_PLUS */)) {
            this.consume(35 /* OP_PLUS */);
            let rhs = null;
            if (this.check(10 /* STRING */)) {
              rhs = { kind: "literal", value: { kind: "str", value: this.consume(10 /* STRING */).value } };
            } else if (this.check(16 /* IDENT */)) {
              const rhsName = this.consume(16 /* IDENT */).value;
              if (this.check(2 /* LPAREN */)) {
                this.consume(2 /* LPAREN */);
                const args = [];
                if (!this.check(3 /* RPAREN */)) {
                  args.push(this.parseExpression());
                  while (this.check(5 /* COMMA */)) {
                    this.consume(5 /* COMMA */);
                    args.push(this.parseExpression());
                  }
                }
                this.consume(3 /* RPAREN */);
                rhs = { kind: "call", callee: { kind: "variable", name: rhsName }, args };
              } else if (this.check(7 /* DOT */)) {
                this.consume(7 /* DOT */);
                rhs = { kind: "variable", name: rhsName + "." + this.consume(16 /* IDENT */).value };
              } else {
                rhs = { kind: "variable", name: rhsName };
              }
            } else {
              rhs = this.parseExpression(true);
            }
            if (!rhs) throw new SinthError("Expected expression after +", this.peek().loc);
            leftExpr = { kind: "binary", left: leftExpr, op: "+", right: rhs };
          }
          children.push({ kind: "expr", expression: leftExpr, loc });
        } else if (this.check(16 /* IDENT */) && this.peek().value === "var") {
          const vd = this.parseVarDeclaration();
          if (vd) this._varDecls.push(vd);
          continue;
        } else if (this.check(34 /* KW_RETURN */)) {
          children.push(this.parseReturnStmt());
          continue;
        } else if (this.check(28 /* KW_IF */)) {
          children.push(this.parseIfBlock());
          continue;
        } else if (this.check(30 /* KW_FOR */)) {
          children.push(this.parseForLoop());
          continue;
        } else if (this.check(16 /* IDENT */)) {
          const loc = this.peek().loc;
          const rawName = this.peek().value;
          const nextType = this.tokens[this.pos + 1]?.type;
          if (nextType === 6 /* EQUALS */ || nextType === 35 /* OP_PLUS */ && this.tokens[this.pos + 2]?.type === 6 /* EQUALS */ || nextType === 36 /* OP_MINUS */ && this.tokens[this.pos + 2]?.type === 6 /* EQUALS */) {
            this.consume(16 /* IDENT */);
            let op = "=";
            if (this.check(35 /* OP_PLUS */)) {
              this.consume(35 /* OP_PLUS */);
              op = "+=";
            } else if (this.check(36 /* OP_MINUS */)) {
              this.consume(36 /* OP_MINUS */);
              op = "-=";
            }
            this.consume(6 /* EQUALS */);
            const rhs = this.parseExpression();
            if (!rhs) throw new SinthError("Expected expression after assignment", this.peek().loc);
            children.push({ kind: "assign_stmt", expression: { kind: "assign", target: rawName, op, right: rhs }, loc });
            continue;
          }
          if (nextType === 7 /* DOT */) {
            let rawFirst = this.consume(16 /* IDENT */).value;
            const isMemo = rawFirst.startsWith("$");
            const firstPart = isMemo ? rawFirst.slice(1) : rawFirst;
            this.consume(7 /* DOT */);
            const fullName = firstPart + "." + this.consume(16 /* IDENT */).value;
            const afterDotType = this.tokens[this.pos]?.type;
            if (afterDotType === 35 /* OP_PLUS */) {
              let leftExpr = { kind: "variable", name: fullName };
              while (this.check(35 /* OP_PLUS */)) {
                this.consume(35 /* OP_PLUS */);
                let rhs = null;
                if (this.check(10 /* STRING */)) {
                  rhs = { kind: "literal", value: { kind: "str", value: this.consume(10 /* STRING */).value } };
                } else if (this.check(16 /* IDENT */)) {
                  const rhsName = this.consume(16 /* IDENT */).value;
                  if (this.check(7 /* DOT */)) {
                    this.consume(7 /* DOT */);
                    rhs = { kind: "variable", name: rhsName + "." + this.consume(16 /* IDENT */).value };
                  } else {
                    rhs = { kind: "variable", name: rhsName };
                  }
                } else {
                  rhs = this.parseExpression(true);
                }
                if (!rhs) throw new SinthError("Expected expression after +", this.peek().loc);
                leftExpr = { kind: "binary", left: leftExpr, op: "+", right: rhs };
              }
              children.push({ kind: "expr", expression: leftExpr, loc });
            } else if (this.loopVar && fullName.split(".")[0] === this.loopVar) {
              children.push({ kind: "expr", expression: { kind: "variable", name: fullName }, loc });
            } else if (afterDotType === 2 /* LPAREN */) {
              this.consume(2 /* LPAREN */);
              const args = [];
              if (!this.check(3 /* RPAREN */)) {
                args.push(this.parseExpression());
                while (this.check(5 /* COMMA */)) {
                  this.consume(5 /* COMMA */);
                  args.push(this.parseExpression());
                }
              }
              this.consume(3 /* RPAREN */);
              const callExpr = { kind: "call", callee: { kind: "variable", name: fullName }, args, memo: isMemo || void 0 };
              children.push({ kind: "expr", expression: callExpr, loc });
            } else if (afterDotType === 0 /* LBRACE */ || afterDotType === 15 /* RAW_BLOCK */) {
              throw new SinthError(`Unexpected dot notation before component usage`, loc);
            } else {
              const varExpr = { kind: "variable", name: fullName };
              if (isMemo) varExpr.memo = true;
              children.push({ kind: "expr", expression: varExpr, loc });
            }
            continue;
          } else if (nextType === 35 /* OP_PLUS */) {
            const name = this.consume(16 /* IDENT */).value;
            let leftExpr = { kind: "variable", name };
            while (this.check(35 /* OP_PLUS */)) {
              this.consume(35 /* OP_PLUS */);
              let rhs = null;
              if (this.check(10 /* STRING */)) {
                rhs = { kind: "literal", value: { kind: "str", value: this.consume(10 /* STRING */).value } };
              } else if (this.check(16 /* IDENT */)) {
                const rhsName = this.consume(16 /* IDENT */).value;
                if (this.check(7 /* DOT */)) {
                  this.consume(7 /* DOT */);
                  rhs = { kind: "variable", name: rhsName + "." + this.consume(16 /* IDENT */).value };
                } else {
                  rhs = { kind: "variable", name: rhsName };
                }
              } else {
                rhs = this.parseExpression(true);
              }
              if (!rhs) throw new SinthError("Expected expression after +", this.peek().loc);
              leftExpr = { kind: "binary", left: leftExpr, op: "+", right: rhs };
            }
            children.push({ kind: "expr", expression: leftExpr, loc });
          } else if (this.loopVar && rawName === this.loopVar) {
            this.consume(16 /* IDENT */);
            children.push({ kind: "expr", expression: { kind: "variable", name: rawName }, loc });
          } else if (nextType === 8 /* LBRACKET */) {
            const name = this.consume(16 /* IDENT */).value;
            const varExpr = { kind: "variable", name };
            let indexedExpr = this.parsePostfix(varExpr);
            if (this.check(35 /* OP_PLUS */)) {
              let leftExpr = indexedExpr;
              while (this.check(35 /* OP_PLUS */)) {
                this.consume(35 /* OP_PLUS */);
                let rhs = null;
                if (this.check(10 /* STRING */)) {
                  rhs = { kind: "literal", value: { kind: "str", value: this.consume(10 /* STRING */).value } };
                } else if (this.check(16 /* IDENT */)) {
                  const rhsName = this.consume(16 /* IDENT */).value;
                  if (this.check(7 /* DOT */)) {
                    this.consume(7 /* DOT */);
                    rhs = { kind: "variable", name: rhsName + "." + this.consume(16 /* IDENT */).value };
                  } else {
                    rhs = { kind: "variable", name: rhsName };
                  }
                } else {
                  rhs = this.parseExpression(true);
                }
                if (!rhs) throw new SinthError("Expected expression after +", this.peek().loc);
                leftExpr = { kind: "binary", left: leftExpr, op: "+", right: rhs };
              }
              children.push({ kind: "expr", expression: leftExpr, loc });
            } else {
              children.push({ kind: "expr", expression: indexedExpr, loc });
            }
          } else if (nextType === 2 /* LPAREN */) {
            const identName = this.peek().value;
            const isMemo = identName.startsWith("$");
            const realName = isMemo ? identName.substring(1) : identName;
            if (realName[0] === realName[0].toUpperCase() && realName[0] !== realName[0].toLowerCase()) {
              children.push(this.parseCompUse());
              continue;
            } else {
              this.consume(16 /* IDENT */);
              this.consume(2 /* LPAREN */);
              const args = [];
              if (!this.check(3 /* RPAREN */)) {
                args.push(this.parseExpression());
                while (this.check(5 /* COMMA */)) {
                  this.consume(5 /* COMMA */);
                  args.push(this.parseExpression());
                }
              }
              this.consume(3 /* RPAREN */);
              let finalExpr = { kind: "call", callee: { kind: "variable", name: realName }, args, memo: isMemo || void 0 };
              while (this.check(35 /* OP_PLUS */)) {
                this.consume(35 /* OP_PLUS */);
                let rhs = null;
                if (this.check(10 /* STRING */)) {
                  rhs = { kind: "literal", value: { kind: "str", value: this.consume(10 /* STRING */).value } };
                } else if (this.check(16 /* IDENT */)) {
                  rhs = this.parseExpression();
                } else {
                  rhs = this.parseExpression(true);
                }
                if (!rhs) throw new SinthError("Expected expression after +", this.peek().loc);
                finalExpr = { kind: "binary", left: finalExpr, op: "+", right: rhs };
              }
              children.push({ kind: "expr", expression: finalExpr, loc });
              continue;
            }
          } else if (nextType === 0 /* LBRACE */ || nextType === 15 /* RAW_BLOCK */) {
            children.push(this.parseCompUse());
            continue;
          } else {
            const name = this.consume(16 /* IDENT */).value;
            children.push({ kind: "expr", expression: { kind: "variable", name }, loc });
          }
        }
        if (children.length > 0) {
          const lastChild = children[children.length - 1];
          if (lastChild.kind === "text" || lastChild.kind === "expr" || lastChild.kind === "assign_stmt") {
            const nextTT = this.tokens[this.pos]?.type;
            if (nextTT === 10 /* STRING */ || nextTT === 11 /* NUMBER */ || nextTT === 12 /* BOOL_TRUE */ || nextTT === 13 /* BOOL_FALSE */ || nextTT === 14 /* NULL_LIT */ || nextTT === 16 /* IDENT */ && this.tokens[this.pos]?.value !== "var" && this.tokens[this.pos]?.value !== "if" && this.tokens[this.pos]?.value !== "for" && this.tokens[this.pos]?.value !== "else" && this.tokens[this.pos]?.value !== "and" && this.tokens[this.pos]?.value !== "or" && this.tokens[this.pos]?.value[0] !== this.tokens[this.pos]?.value[0]?.toUpperCase()) {
              throw new SinthError(
                `Unexpected ${TT[nextTT]}. Use '+' to concatenate values.`,
                this.peek().loc
              );
            }
          }
        }
        if (!this.check(1 /* RBRACE */) && !this.check(49 /* EOF */)) {
          throw new SinthError(`Unexpected token '${this.peek().value}' in children`, this.peek().loc);
        }
      }
      return children;
    }
    // style & script blocks
    parseStyleBlock() {
      const loc = this.consume(21 /* KW_STYLE */).loc;
      let global = false, lang = "css", target;
      const extraAttrs = {};
      while (!this.check(15 /* RAW_BLOCK */) && !this.check(49 /* EOF */)) {
        if (this.check(23 /* KW_GLOBAL */)) {
          global = true;
          this.consume(23 /* KW_GLOBAL */);
        } else if (this.check(25 /* KW_LANG */)) {
          this.consume(25 /* KW_LANG */);
          this.consume(6 /* EQUALS */);
          const lv = this.consume(10 /* STRING */).value;
          if (lv !== "css" && lv !== "scss") throw new SinthError(`Unsupported style lang '${lv}'`, loc);
          lang = lv;
        } else if (this.check(16 /* IDENT */)) {
          if (this.tokens[this.pos + 1]?.type !== 6 /* EQUALS */) {
            target = this.consume(16 /* IDENT */).value;
          } else {
            const k = this.consume(16 /* IDENT */).value;
            this.consume(6 /* EQUALS */);
            extraAttrs[k] = this.consume(10 /* STRING */).value;
          }
        } else throw new SinthError(`Unexpected token '${this.peek().value}' in style modifiers`, this.peek().loc);
      }
      return { global, lang, raw: this.consume(15 /* RAW_BLOCK */).value, target, extraAttrs, loc };
    }
    parseScriptBlock() {
      const loc = this.consume(22 /* KW_SCRIPT */).loc;
      const attrs = {};
      while (!this.check(15 /* RAW_BLOCK */) && !this.check(49 /* EOF */)) {
        const key = this.consume(16 /* IDENT */).value;
        if (this.check(6 /* EQUALS */)) {
          this.consume(6 /* EQUALS */);
          attrs[key] = this.consume(10 /* STRING */).value;
        } else {
          attrs[key] = "true";
        }
      }
      return { raw: this.consume(15 /* RAW_BLOCK */).value, attrs, loc };
    }
    parseLiteral() {
      const tok = this.peek();
      if (this.check(8 /* LBRACKET */)) {
        return this.parseArrayLiteral();
      }
      if (this.check(0 /* LBRACE */)) {
        const obj = this.parseObjectLiteral();
        return { kind: "str", value: JSON.stringify(obj) };
      }
      if (this.check(10 /* STRING */)) {
        this.consume(10 /* STRING */);
        return { kind: "str", value: tok.value };
      }
      if (this.check(11 /* NUMBER */)) {
        this.consume(11 /* NUMBER */);
        return { kind: "num", value: parseFloat(tok.value) };
      }
      if (this.check(12 /* BOOL_TRUE */)) {
        this.consume(12 /* BOOL_TRUE */);
        return { kind: "bool", value: true };
      }
      if (this.check(13 /* BOOL_FALSE */)) {
        this.consume(13 /* BOOL_FALSE */);
        return { kind: "bool", value: false };
      }
      if (this.check(14 /* NULL_LIT */)) {
        this.consume(14 /* NULL_LIT */);
        return { kind: "null" };
      }
      throw new SinthError(`Expected literal value, got '${tok.value}' (${TT[tok.type]})`, tok.loc);
    }
    peek() {
      return this.tokens[this.pos];
    }
    check(t) {
      return this.tokens[this.pos]?.type === t;
    }
    consume(t) {
      const tok = this.tokens[this.pos];
      if (tok.type !== t) {
        throw new SinthError(
          `Expected ${TT[t]}, got '${tok.value}' (${TT[tok.type]})`,
          tok.loc
        );
      }
      this.pos++;
      return tok;
    }
  };

  // ../sinth-package/src/utils.ts
  function fnv1a(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h.toString(16).padStart(8, "0").slice(0, 8);
  }
  function camelToKebab(s) {
    const vp = s.match(/^(Webkit|Moz|Ms)(.+)$/);
    if (vp) return `-${vp[1].toLowerCase()}-${camelToKebab(vp[2])}`;
    return s.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);
  }
  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function escAttr(s) {
    return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  }
  function litToString(lit) {
    switch (lit.kind) {
      case "str":
        return lit.value;
      case "num":
        return String(lit.value);
      case "bool":
        return String(lit.value);
      case "null":
        return "";
    }
  }
  function interpolateAttr(text, params) {
    let s = text.replace(/\\\{/g, "\0LB\0");
    s = s.replace(/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g, (_, n) => params.get(n) ?? `{${n}}`);
    return s.replace(/\x00LB\x00/g, "{");
  }
  function renderText(text, params) {
    const rawSlots = /* @__PURE__ */ new Map();
    let counter = 0;
    let s = text.replace(/\\\$/g, "\0DOLLAR\0");
    s = s.replace(/\$([a-zA-Z_][a-zA-Z0-9_]*)/g, (_, n) => {
      const val = params.get(n);
      if (val === void 0) return `$${n}`;
      if (n === "slot") {
        const ph = `\0RAW${counter++}\0`;
        rawSlots.set(ph, val);
        return ph;
      }
      return val;
    });
    s = esc(s);
    for (const [ph, val] of rawSlots) s = s.replace(ph, val);
    s = s.replace(/\x00DOLLAR\x00/g, "$");
    const braceRe = /\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;
    let m;
    while ((m = braceRe.exec(s)) !== null) {
      SinthWarning.emit(
        `Use $param for text interpolation; {param} is for attributes. Found '${m[0]}' in text.`
      );
    }
    return s;
  }

  // ../sinth-package/src/core/runtime/helpers.ts
  function generateHelpers(opts) {
    const { needsExpr, needsIf, needsFor, needsDelay, needsMixed, ns } = opts;
    const X = ns ? "__X" + ns : "__X";
    let helpers = "";
    if (needsExpr || needsIf || needsFor) {
      helpers += `
var sinthExpr = function(el) {
  try {
    let exprFn = ${X}[el.dataset.exprId];
    if (exprFn) el.textContent = exprFn({});
  } catch(e) {}
};
`;
    }
    if (needsIf || needsMixed) {
      helpers += `
function sinthReplaceInsert(t, anchor, ifId, replaceId) {
  if (anchor) {
    let cur = anchor.nextSibling;
    while (cur && cur !== t) { let nx = cur.nextSibling; cur.remove(); cur = nx; }
  } else {
    anchor = document.createElement('span');
    anchor.style.display = 'none';
    anchor.dataset.sinthIfAnchor = ifId;
    t.parentNode.insertBefore(anchor, t);
  }
  let _rp = null, _rpParent = null, _rpNext = null;
  if (replaceId) {
    if (anchor._sinthReplaced) {
      _rp = anchor._sinthReplaced;
      _rpParent = anchor._sinthReplacedParent;
      _rpNext = anchor._sinthReplacedNext;
      if (_rp.parentNode) _rp.parentNode.removeChild(_rp);
    } else {
      _rp = document.getElementById(replaceId);
      if (_rp) {
        _rpParent = _rp.parentNode;
        _rpNext = _rp.nextSibling;
        _rp.parentNode.removeChild(_rp);
        anchor._sinthReplaced = _rp;
        anchor._sinthReplacedParent = _rpParent;
        anchor._sinthReplacedNext = _rpNext;
      }
    }
  }
  let frag = document.createRange().createContextualFragment(t.innerHTML);
  frag.querySelectorAll('.sinth-expr').forEach(sinthExpr);
  if (${needsDelay}) {
    frag.querySelectorAll('[data-sinth-delay]').forEach(sinthDelay);
    frag.querySelectorAll('[data-sinth-delay-expr-id]').forEach(function(el) { sinthDelayExpr(el, {}); });
  }
  let fragFirst = frag.firstChild;
  let fragLast = frag.lastChild;
  if (_rpParent && _rpNext) {
    _rpParent.insertBefore(frag, _rpNext);
  } else if (_rpParent) {
    _rpParent.appendChild(frag);
  } else {
    t.parentNode.insertBefore(frag, t);
  }
  if (replaceId && anchor) {
    anchor._sinthInsertedFirst = fragFirst;
    anchor._sinthInsertedLast = fragLast;
  }
  return anchor;
}
`;
    }
    if (needsDelay) {
      helpers += `
function sinthDelay(el) {
  if (el.dataset.sinthDelayDone) { return; }
  el.dataset.sinthDelayDone = '1';
  let ms = parseInt(el.dataset.sinthDelay) || 0;
  let hideEl = el.dataset.sinthDelayHide !== 'false';
  let show = function() {
    if (hideEl) el.style.display = '';
    el.querySelectorAll('.sinth-expr').forEach(sinthExpr);
  };
  if (hideEl) {
    el.style.display = 'none';
    if (ms > 0) setTimeout(show, ms);
    else show();
  } else {
    if (ms > 0) setTimeout(show, ms);
    else show();
  }
}
function sinthDelayExpr(el, _ctx) {
  if (el.dataset.sinthDelayDone) return;
  el.dataset.sinthDelayDone = '1';
  _ctx = _ctx || {};
  try {
    let fn = ${X}[el.dataset.sinthDelayExprId];
    let ms = fn ? parseInt(fn(_ctx)) || 0 : 0;
    let hideEl = el.dataset.sinthDelayHide !== 'false';
    let show = function() {
      if (hideEl) el.style.display = '';
      el.querySelectorAll('.sinth-expr').forEach(sinthExpr);
    };
    if (hideEl) {
      el.style.display = 'none';
      if (ms > 0) setTimeout(show, ms);
      else show();
    } else {
      if (ms > 0) setTimeout(show, ms);
      else show();
    }
  } catch(e) {}
}
`;
    }
    if (needsIf) {
      helpers += `
function sinthIfBlock(t) {
  let ifId = t.dataset.sinthIfId;
  let anchor = t.parentNode.querySelector('[data-sinth-if-anchor="' + ifId + '"]');
  let condFn = ${X}[t.dataset.sinthIfExpr];
  let cond = condFn ? condFn() : false;
  if (cond) {
    let elseA = t.parentNode.querySelector('[data-sinth-if-anchor="__else__' + ifId + '"]');
    if (elseA) {
      let c = elseA.nextSibling;
      while (c && c !== t) { let n = c.nextSibling; c.remove(); c = n; }
      elseA.remove();
    }
    if (t.dataset.sinthIfPersist === "true" && anchor) return;
    if (anchor && anchor._sinthReplaced && !t.dataset.sinthIfDelayHide) return;
    let _hasContent = anchor || t.parentNode.querySelector('[data-sinth-if-anchor="__else__' + ifId + '"]');
    if (t.dataset.sinthIfDelayHide === 'false' && t.dataset.sinthIfDelay && _hasContent) {
      let dms = parseInt(t.dataset.sinthIfDelay) || 0;
      setTimeout(function() {
        sinthReplaceInsert(t, anchor, ifId, t.dataset.sinthIfReplace);
      }, dms);
    } else {
      anchor = sinthReplaceInsert(t, anchor, ifId, t.dataset.sinthIfReplace);
    }
  } else {
    let runElse = function() {
      if (t.dataset.sinthIfPersist === "true") return;
      if (anchor) {
        if (anchor._sinthReplaced) {
          let insFirst = anchor._sinthInsertedFirst;
          let insLast = anchor._sinthInsertedLast;
          let rpParent = anchor._sinthReplacedParent;
          let rpNext = anchor._sinthReplacedNext;
          if (insFirst && insLast) {
            let cur = insFirst;
            while (cur && cur !== insLast) {
              let next = cur.nextSibling;
              cur.remove();
              cur = next;
            }
            if (insLast) insLast.remove();
          }
          if (rpParent && rpNext) {
            rpParent.insertBefore(anchor._sinthReplaced, rpNext);
          } else if (rpParent) {
            rpParent.appendChild(anchor._sinthReplaced);
          }
          if (anchor._sinthReplaced) {
            anchor._sinthReplaced.querySelectorAll('.sinth-expr').forEach(sinthExpr);
            if (anchor._sinthReplaced.dataset.sinthDelay) {
              delete anchor._sinthReplaced.dataset.sinthDelayDone;
              sinthDelay(anchor._sinthReplaced);
            }
            anchor._sinthReplaced = null;
            anchor._sinthReplacedParent = null;
            anchor._sinthReplacedNext = null;
            anchor._sinthInsertedFirst = null;
            anchor._sinthInsertedLast = null;
          }
        } else {
          let cur2 = anchor.nextSibling;
          while (cur2 && cur2 !== t) { let nx2 = cur2.nextSibling; cur2.remove(); cur2 = nx2; }
        }
        anchor.remove();
      }
      let elseT = t.nextElementSibling;
      if (elseT && elseT.hasAttribute('data-sinth-else')) {
        let elseIfId = elseT.dataset.sinthIfId;
        let ea = t.parentNode.querySelector('[data-sinth-if-anchor="__else__' + elseIfId + '"]');
        if (ea) {
          let cur3 = ea.nextSibling;
          while (cur3 && cur3 !== t) { let nx3 = cur3.nextSibling; cur3.remove(); cur3 = nx3; }
        } else {
          ea = document.createElement('span');
          ea.style.display = 'none';
          ea.dataset.sinthIfAnchor = '__else__' + elseIfId;
          t.parentNode.insertBefore(ea, t);
        }
        let ef = document.createRange().createContextualFragment(elseT.innerHTML);
        ef.querySelectorAll('.sinth-expr').forEach(sinthExpr);
        if (${needsDelay}) {
          ef.querySelectorAll('[data-sinth-delay]').forEach(sinthDelay);
          ef.querySelectorAll('[data-sinth-delay-expr-id]').forEach(function(el) { sinthDelayExpr(el, {}); });
        }
        let innerTemplates = ef.querySelectorAll('template[data-sinth-if-expr]');
        t.parentNode.insertBefore(ef, t);
        for (let i = 0; i < innerTemplates.length; i++) sinthIfBlock(innerTemplates[i]);
        ef.querySelectorAll('[data-sinth-delay]').forEach(function(el) {
          delete el.dataset.sinthDelayDone;
          sinthDelay(el);
        });
      } else {
        let ea2 = t.parentNode.querySelector('[data-sinth-if-anchor="__else__' + ifId + '"]');
        if (ea2) {
          let ec = ea2.nextSibling;
          while (ec && ec !== t) { let en = ec.nextSibling; ec.remove(); ec = en; }
          ea2.remove();
        }
        if (anchor) {
          let ac = anchor.nextSibling;
          while (ac && ac !== t) { let an = ac.nextSibling; ac.remove(); ac = an; }
        }
      }
    };
    let elseT = t.nextElementSibling;
    if (elseT && elseT.hasAttribute('data-sinth-else') && elseT.dataset.sinthIfDelayHide === 'false' && elseT.dataset.sinthIfDelay && anchor) {
      let edms = parseInt(elseT.dataset.sinthIfDelay) || 0;
      setTimeout(runElse, edms);
    } else {
      runElse();
    }
  }
}
`;
    }
    if (needsFor) {
      helpers += `
function hashString(str) {
  let hash = 0, i, chr;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return String(hash);
}
function sinthForBlock(t) {
  t.querySelectorAll('template[data-sinth-if-expr]').forEach(function(innerT) {
    innerT.dataset.sinthForHandled = '1';
  });
  let source = _sinthForData[t.dataset.sinthFor];
  if (source === undefined) source = [];
  let newHash = '';
  try { newHash = hashString(JSON.stringify(source)); } catch(e) { newHash = ''; }
  if (t.dataset.sinthForHash && t.dataset.sinthForHash === newHash) return;
  t.dataset.sinthForHash = newHash;
  let isObj = (typeof source === 'object' && source !== null && !Array.isArray(source));
  let entries;
  if (isObj) {
    entries = Object.entries(source);
  } else {
    if (!Array.isArray(source)) source = [];
    entries = source.map(function(item, index) { return [index, item]; });
  }
  let anchorId = t.dataset.sinthForExpr || t.dataset.sinthFor;
  let anchor = null;
  if (t.parentNode) {
    let all = t.parentNode.querySelectorAll('[data-sinth-for-anchor]');
    for (let i = 0; i < all.length; i++) {
      if (all[i].dataset.sinthForAnchor === anchorId) { anchor = all[i]; break; }
    }
  }
  if (anchor) {
    let cur2 = anchor.nextSibling;
    while (cur2 && cur2 !== t) { let nx2 = cur2.nextSibling; cur2.remove(); cur2 = nx2; }
    anchor.remove();
  }
  let fa = document.createElement('span');
  fa.style.display = 'none';
  fa.dataset.sinthForAnchor = anchorId;
  t.parentNode && t.parentNode.insertBefore(fa, t);
  let _loopIdx = 0;
  let tplContent = t.innerHTML;
  entries.forEach(function(entry) {
    let _k = entry[0], _v = entry[1];
    let _item = t.dataset.sinthItem || '__item__';
    let _key = t.dataset.sinthKey || null;
    let _idx = t.dataset.sinthIndex || null;
    _loopIdx++;
    let loopCtx = {};
    if (_item) loopCtx[_item] = _v;
    if (_key) loopCtx[_key] = _k;
    if (_idx) loopCtx[_idx] = _loopIdx - 1;
    let frag = document.createRange().createContextualFragment(tplContent);
    frag.querySelectorAll('.sinth-expr').forEach(function(el) {
      try { let fn = ${X}[el.dataset.exprId]; if (fn) el.textContent = fn(loopCtx); } catch(e) {}
      el.classList.remove('sinth-expr');
    });
    frag.querySelectorAll('[data-sinth-delay-expr-id]').forEach(function(el) {
      sinthDelayExpr(el, loopCtx);
    });    
    frag.querySelectorAll('[onclick*="_ctx."]').forEach(function(el) {
      var onclick = el.getAttribute('onclick');
      for (var key in loopCtx) {
        onclick = onclick.split('_ctx.' + key).join(JSON.stringify(loopCtx[key]));
      }
      el.setAttribute('onclick', onclick);
    });
    frag.querySelectorAll('template[data-sinth-if-expr]').forEach(function(ifT) {
      let condFn = ${X}[ifT.dataset.sinthIfExpr];
      let cond = condFn ? condFn(loopCtx) : false;
      if (cond) {
        let ifFrag = document.createRange().createContextualFragment(ifT.innerHTML);
        ifFrag.querySelectorAll('.sinth-expr').forEach(function(el2) {
          try { let fn2 = ${X}[el2.dataset.exprId]; if (fn2) el2.textContent = fn2(loopCtx); } catch(e) {}          el2.classList.remove('sinth-expr');
        });
        ifT.replaceWith(ifFrag);
      } else {
        ifT.remove();
      }
    });
    t.parentNode && t.parentNode.insertBefore(frag, t);
  });
}
`;
    }
    return helpers;
  }

  // ../sinth-package/src/core/runtime/render.ts
  function buildRenderBody(opts) {
    const { bodyHTML, logicBlocks, mixedBlocks, needsLogic, needsMixed, needsIf, needsFor, needsExpr, needsDelay, exprVarUpdates, ns } = opts;
    const X = ns ? "__X" + ns : "__X";
    let renderBody = "";
    renderBody += `  let _sx = window.scrollX, _sy = window.scrollY;
`;
    if (needsLogic) {
      renderBody += logicBlocks.map((b) => b.replace(/^/gm, "  ")).join("\n") + "\n";
    }
    if (needsMixed) {
      for (const mb of mixedBlocks) {
        const ifJS = mb.ifJS ? mb.ifJS.trim() : "";
        const elseJS = mb.elseJS ? mb.elseJS.trim() : "";
        renderBody += `  (function() {
    let __el = document.getElementById(${JSON.stringify(mb.replaceId || mb.id)});
    if (__el) {
      let __condFn = ${X}[${mb.conditionJS}];
      if (__condFn ? __condFn() : false) {
        ${ifJS}
        __el.innerHTML = ${JSON.stringify(mb.ifHTML)};
      } else {
        ${elseJS}
        __el.innerHTML = ${JSON.stringify(mb.elseHTML)};
      }
      __el.querySelectorAll('.sinth-expr').forEach(sinthExpr);
      __el.querySelectorAll('.sinth-expr').forEach(function(el) { el.classList.remove('sinth-expr'); });      
      __el.querySelectorAll('template[data-sinth-if-expr]').forEach(sinthIfBlock);
      ${needsDelay ? `__el.querySelectorAll('[data-sinth-delay]').forEach(sinthDelay);
      __el.querySelectorAll('[data-sinth-delay-expr-id]').forEach(function(el) { sinthDelayExpr(el, {}); });` : ""}
    }
  })();
`;
      }
    }
    renderBody += `  document.querySelectorAll('[data-sinth-remove]').forEach(function(el) {
    let target = document.getElementById(el.dataset.sinthRemove);
    if (target) target.remove();
  });
`;
    if (needsFor) {
      renderBody += `  document.querySelectorAll('template[data-sinth-for], template[data-sinth-for-expr]').forEach(sinthForBlock);
`;
    }
    if (needsIf) {
      renderBody += `  document.querySelectorAll('template[data-sinth-if-expr]').forEach(function(t) { var p = t.parentElement; while(p && p.tagName !== 'TEMPLATE') p = p.parentElement; if (!p || (!p.hasAttribute('data-sinth-for') && !p.hasAttribute('data-sinth-for-expr'))) sinthIfBlock(t); });
`;
    }
    renderBody += `  document.querySelectorAll('[data-sinth-value]').forEach(function(el) {
    try { if (document.activeElement !== el) { let v=el.dataset.sinthValue; el.value = ${X}[v] ? ${X}[v]({}) : ''; } } catch(e) {}
  });
`;
    renderBody += `  document.querySelectorAll('[data-sinth-step]').forEach(function(el) {
    try { let s=el.dataset.sinthStep; el.step = ${X}[s] ? ${X}[s]({}) : 1; } catch(e) {}
  });
`;
    renderBody += `  document.querySelectorAll('[data-sinth-checked]').forEach(function(el) {
    try { let c=el.dataset.sinthChecked; el.checked = ${X}[c] ? !!${X}[c]({}) : false; } catch(e) {}
  });
`;
    if (exprVarUpdates) {
      renderBody += `  ${exprVarUpdates}
`;
    }
    if (bodyHTML.includes("data-sinth-checked-expr")) {
      renderBody += `  document.querySelectorAll('[data-sinth-checked-expr]').forEach(function(el) {
    try {
      let exprFn = ${X}[el.dataset.sinthCheckedExpr];
      if (exprFn) el.checked = !!exprFn({});
    } catch(e) {}
  });
`;
    }
    if (needsDelay) {
      renderBody += `  document.querySelectorAll('[data-sinth-delay]').forEach(function(el) {
    let newContent = '';
    el.querySelectorAll('.sinth-expr').forEach(function(exprEl) {
      let exprFn = ${X}[exprEl.dataset.exprId];
      if (exprFn) newContent += exprFn({});
    });
    if (el._sinthLastContent === undefined) {
      el._sinthLastContent = newContent;
    } else if (el._sinthLastContent !== newContent) {
      el._sinthLastContent = newContent;
      delete el.dataset.sinthDelayDone;
    }
  });
  document.querySelectorAll('[data-sinth-delay-expr-id]').forEach(function(el) { sinthDelayExpr(el, {}); });
`;
    }
    if (needsExpr) {
      renderBody += `  document.querySelectorAll('.sinth-expr').forEach(function(el) {
    let delayParent = el.closest('[data-sinth-delay]');
    if (!delayParent || delayParent.dataset.sinthDelayDone) {
      sinthExpr(el);
    }
  });
`;
    }
    renderBody += `  document.querySelectorAll('[data-sinth-style]').forEach(function(el) {
    try {
      let d = el.dataset.sinthStyle.split(';');
      for (let i = 0; i < d.length; i++) {
        let p = d[i].split(':');
        if (p.length === 2) {
          let fn = ${X}[p[1]];
          if (fn) el.style[p[0]] = fn({});
        }
      }
    } catch(e) {}
  });
`;
    renderBody += `  document.querySelectorAll('[data-sinth-hide]').forEach(function(el) {
    let exprId = el.dataset.sinthHide;
    if (exprId) {
      try {
        let exprFn = ${X}[exprId];
        if (exprFn) el.style.display = exprFn({}) ? 'none' : '';
      } catch(e) {}
    } else {
      el.style.display = 'none';
    }
  });
`;
    renderBody += `  document.querySelectorAll('[data-sinth-fullscreen]').forEach(function(el) {
    let exprId = el.dataset.sinthFullscreen;
    if (exprId) {
      try {
        let exprFn = ${X}[exprId];
        if (exprFn) {
          if (exprFn({})) {
            if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
          } else {
            if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
          }
        }
      } catch(e) {}
    }
  });
`;
    if (needsDelay) {
      renderBody += `  setTimeout(function() {
    document.querySelectorAll('[data-sinth-delay]').forEach(sinthDelay);
    document.querySelectorAll('[data-sinth-delay-expr-id]').forEach(function(el) { sinthDelayExpr(el, {}); });
  }, 0);
`;
    }
    renderBody += `  window.scrollTo(_sx, _sy);
`;
    return renderBody;
  }

  // ../sinth-package/src/core/builtins.ts
  var BUILTIN_MAP = {
    // structural
    Main: { tag: "main" },
    Header: { tag: "header" },
    Footer: { tag: "footer" },
    Nav: { tag: "nav" },
    Section: { tag: "section" },
    Article: { tag: "article" },
    Aside: { tag: "aside" },
    Div: { tag: "div" },
    Span: { tag: "span" },
    Hero: { tag: "section", defaultClass: "hero" },
    Container: { tag: "div", defaultClass: "container" },
    Grid: { tag: "div", defaultClass: "grid" },
    Flex: { tag: "div", defaultClass: "flex" },
    Stack: { tag: "div", defaultClass: "stack" },
    Row: { tag: "div", defaultClass: "row" },
    Column: { tag: "div", defaultClass: "col" },
    CardGrid: { tag: "div", defaultClass: "card-grid" },
    // typography
    Heading: { tag: "h1" },
    SubHeading: { tag: "p", defaultClass: "subheading" },
    Paragraph: { tag: "p" },
    Lead: { tag: "p", defaultClass: "lead" },
    Small: { tag: "small" },
    Strong: { tag: "strong" },
    Em: { tag: "em" },
    Code: { tag: "code" },
    Pre: { tag: "pre" },
    Blockquote: { tag: "blockquote" },
    Mark: { tag: "mark" },
    Label: { tag: "label" },
    Abbr: { tag: "abbr" },
    Del: { tag: "del" },
    Ins: { tag: "ins" },
    Sub: { tag: "sub" },
    Sup: { tag: "sup" },
    Data: { tag: "data" },
    Time: { tag: "time" },
    Bdi: { tag: "bdi" },
    Bdo: { tag: "bdo" },
    Cite: { tag: "cite" },
    Dfn: { tag: "dfn" },
    Kbd: { tag: "kbd" },
    Samp: { tag: "samp" },
    Var: { tag: "var" },
    Address: { tag: "address" },
    Ruby: { tag: "ruby" },
    Rt: { tag: "rt" },
    Rp: { tag: "rp" },
    // interactive
    Button: { tag: "button" },
    Link: { tag: "a" },
    NavLink: { tag: "a" },
    Select: { tag: "select" },
    Form: { tag: "form" },
    Fieldset: { tag: "fieldset" },
    Legend: { tag: "legend" },
    Details: { tag: "details" },
    Summary: { tag: "summary" },
    Dialog: { tag: "dialog" },
    Textarea: { tag: "textarea" },
    Datalist: { tag: "datalist" },
    Optgroup: { tag: "optgroup" },
    Option: { tag: "option" },
    Progress: { tag: "progress" },
    Meter: { tag: "meter" },
    Output: { tag: "output" },
    Map: { tag: "map" },
    // media
    Picture: { tag: "picture" },
    Video: { tag: "video" },
    Audio: { tag: "audio" },
    Figure: { tag: "figure" },
    Figcaption: { tag: "figcaption" },
    Canvas: { tag: "canvas" },
    Svg: { tag: "svg" },
    IFrame: { tag: "iframe" },
    Object: { tag: "object" },
    // void elements
    Img: { tag: "img", voidEl: true },
    Logo: { tag: "img", voidEl: true },
    Input: { tag: "input", voidEl: true },
    Checkbox: { tag: "input", voidEl: true },
    Hr: { tag: "hr", voidEl: true },
    Br: { tag: "br", voidEl: true },
    Wbr: { tag: "wbr", voidEl: true },
    Source: { tag: "source", voidEl: true },
    Embed: { tag: "embed", voidEl: true },
    Col: { tag: "col", voidEl: true },
    Area: { tag: "area", voidEl: true },
    // lists
    Ul: { tag: "ul" },
    Ol: { tag: "ol" },
    Li: { tag: "li" },
    Dl: { tag: "dl" },
    Dt: { tag: "dt" },
    Dd: { tag: "dd" },
    // tables
    Table: { tag: "table" },
    Caption: { tag: "caption" },
    Thead: { tag: "thead" },
    Tbody: { tag: "tbody" },
    Tfoot: { tag: "tfoot" },
    Tr: { tag: "tr" },
    Th: { tag: "th" },
    Td: { tag: "td" },
    Colgroup: { tag: "colgroup" },
    // utility
    Template: { tag: "template" },
    Slot: { tag: "slot" },
    NoScript: { tag: "noscript" },
    RawHTML: { tag: "__RAW__" }
  };
  var VOID_TAGS = /* @__PURE__ */ new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ]);

  // ../sinth-package/src/core/style-processor.ts
  var SINTH_PSEUDO_CLASS = {
    onHover: ":hover",
    onFocus: ":focus",
    onActive: ":active",
    onVisited: ":visited",
    onChecked: ":checked",
    onDisabled: ":disabled",
    onEnabled: ":enabled",
    onRequired: ":required",
    onOptional: ":optional",
    onValid: ":valid",
    onInvalid: ":invalid",
    onPlaceholderShown: ":placeholder-shown",
    onFocusWithin: ":focus-within",
    onFocusVisible: ":focus-visible",
    onFirst: ":first-child",
    onLast: ":last-child",
    onFirstOfType: ":first-of-type",
    onLastOfType: ":last-of-type",
    onEmpty: ":empty",
    onTarget: ":target",
    onLink: ":link"
  };
  var SINTH_PSEUDO_ELEMENT = {
    before: "::before",
    after: "::after",
    placeholder: "::placeholder",
    selection: "::selection",
    firstLine: "::first-line",
    firstLetter: "::first-letter",
    marker: "::marker",
    backdrop: "::backdrop"
  };
  function sinthCompToSelector(name) {
    const info = BUILTIN_MAP[name];
    if (!info) return name.toLowerCase();
    if (info.defaultClass) {
      const classes = info.defaultClass.split(" ").map((c) => `.${c}`).join("");
      return `${info.tag}${classes}`;
    }
    return info.tag;
  }
  function preprocessSinthStyle(raw) {
    const lines = raw.split("\n");
    const result = [];
    for (const line of lines) {
      const trimmed = line.trim();
      const indent = line.match(/^(\s*)/)?.[1] ?? "";
      if (!trimmed) {
        result.push(line);
        continue;
      }
      if (trimmed.startsWith("--") && !trimmed.startsWith("--[")) {
        continue;
      }
      if (trimmed.startsWith("//") || trimmed.startsWith("/*") || trimmed.startsWith("*")) {
        result.push(line);
        continue;
      }
      const mediaMatch = trimmed.match(/^media\s*\(([^)]+)\)\s*(\{?\s*)$/);
      if (mediaMatch) {
        const params = parseSinthMediaParams(mediaMatch[1]);
        result.push(`${indent}@media (${params}) {`);
        continue;
      }
      const blockMatch = trimmed.match(/^([a-zA-Z][a-zA-Z0-9]*)(\s*\{\s*)$/);
      if (blockMatch) {
        const keyword = blockMatch[1];
        const pseudoCls = SINTH_PSEUDO_CLASS[keyword];
        if (pseudoCls) {
          result.push(`${indent}&${pseudoCls} {`);
          continue;
        }
        const pseudoEl = SINTH_PSEUDO_ELEMENT[keyword];
        if (pseudoEl) {
          result.push(`${indent}&${pseudoEl} {`);
          continue;
        }
        if (/^[A-Z]/.test(keyword) && BUILTIN_MAP[keyword]) {
          result.push(`${indent}${sinthCompToSelector(keyword)} {`);
          continue;
        }
      }
      const varPropMatch = trimmed.match(/^var\s+(--[a-zA-Z][a-zA-Z0-9-]*)\s*:\s*["']?([^"';]+)["']?\s*;?\s*$/);
      if (varPropMatch) {
        result.push(`${indent}${varPropMatch[1]}: ${varPropMatch[2].trim()};`);
        continue;
      }
      result.push(line);
    }
    return result.join("\n");
  }
  function parseSinthMediaParams(params) {
    const parts = params.split(",").map((p) => {
      const m = p.trim().match(/^([a-zA-Z]+)\s*:\s*["']?([^"',]+)["']?\s*$/);
      if (!m) return p.trim();
      return `${camelToKebab(m[1])}: ${m[2].trim()}`;
    });
    return parts.join(") and (");
  }
  function convertCSSProps(css) {
    return css.split("\n").map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return line;
      if (trimmed === "}" || trimmed.startsWith("}")) return line;
      if (trimmed.startsWith("//") || trimmed.startsWith("/*") || trimmed.startsWith("*")) return line;
      if (trimmed.startsWith("@")) return line;
      if (trimmed.includes("{")) return line;
      const m = line.match(/^(\s*)([a-zA-Z][a-zA-Z0-9-]*)(\s*:\s*)(.+?)(\s*;?\s*)$/);
      if (!m) return line;
      const [, indent, rawProp, , rawVal] = m;
      const hasCamelCase = /[a-z][A-Z]/.test(rawProp) || /^[A-Z]/.test(rawProp);
      const hasQuotedVal = /^["']/.test(rawVal.trim());
      if (!hasCamelCase && !hasQuotedVal) return line;
      let val = rawVal.trim();
      if (val.endsWith(";")) val = val.slice(0, -1).trimEnd();
      if (val.startsWith('"') && val.endsWith('"') || val.startsWith("'") && val.endsWith("'")) {
        val = val.slice(1, -1);
      }
      return `${indent}${camelToKebab(rawProp)}: ${val};`;
    }).join("\n");
  }
  function processStyleBlock(block, hash, params = /* @__PURE__ */ new Map()) {
    let raw = block.raw;
    if (params.size > 0) raw = interpolateAttr(raw, params);
    raw = preprocessSinthStyle(raw);
    if (block.lang === "css" && raw.includes("&")) {
      SinthWarning.emit(
        `'&' (CSS nesting) found in style block. Nested selectors require a modern browser or lang="scss".`,
        block.loc
      );
    }
    let css = convertCSSProps(raw);
    if (block.lang === "scss") {
      try {
        const sass = (init_sass(), __toCommonJS(sass_exports));
        css = sass.compileString(css).css;
      } catch (e) {
        const err = e;
        if (err.code === "MODULE_NOT_FOUND" || err.message?.includes("Cannot find module")) {
          throw new SinthError("SCSS requires the 'sass' package. Install with: npm install sass");
        }
        throw new SinthError(`SCSS compilation failed: ${err.message ?? String(e)}`);
      }
    }
    if (block.target) {
      const selector = sinthCompToSelector(block.target);
      css = `${selector} {
${css}
}`;
    }
    if (!block.global) css = scopeCSS(css, hash);
    return css;
  }
  function scopeCSS(css, hash) {
    return processRules(css, `[data-s="${hash}"]`);
  }
  function processRules(css, attr) {
    let out = "", i = 0;
    while (i < css.length) {
      if (/\s/.test(css[i])) {
        out += css[i++];
        continue;
      }
      if (css[i] === "/" && css[i + 1] === "*") {
        const end2 = css.indexOf("*/", i + 2);
        if (end2 === -1) {
          out += css.substring(i);
          break;
        }
        out += css.substring(i, end2 + 2);
        i = end2 + 2;
        continue;
      }
      const braceIdx = findCSSBrace(css, i);
      if (braceIdx === -1) {
        out += css.substring(i);
        break;
      }
      const selector = css.substring(i, braceIdx).trim();
      const { content, end } = extractCSSBlock(css, braceIdx);
      if (/^@(-webkit-|-moz-)?keyframes/.test(selector)) {
        out += `${selector} {${content}}
`;
      } else if (/^@(media|supports|layer|container)/.test(selector)) {
        out += `${selector} {
${processRules(content, attr)}
}
`;
      } else if (selector.startsWith("@")) {
        out += `${selector} {${content}}
`;
      } else if (selector.length > 0) {
        out += `${scopeSelectors(selector, attr)} {${content}}
`;
      }
      i = end;
    }
    return out;
  }
  function scopeSelectors(selList, attr) {
    return selList.split(",").map((s) => {
      s = s.trim();
      if (!s) return "";
      if (/^(html|body|:root)(\s|$|{|,)/.test(s)) return s;
      const m = s.match(/^(.*?)((?::{1,2}[a-zA-Z-]+(?:\([^)]*\))?)+)$/);
      if (m && m[1].trim()) {
        return `${attr} ${m[1].trimEnd()}${m[2]}, ${m[1].trimEnd()}${attr}${m[2]}`;
      }
      return `${attr} ${s}, ${s}${attr}`;
    }).filter(Boolean).join(",\n");
  }
  function findCSSBrace(css, from) {
    let i = from;
    while (i < css.length) {
      if (css[i] === '"' || css[i] === "'") {
        const q = css[i++];
        while (i < css.length && css[i] !== q) {
          if (css[i] === "\\") i++;
          i++;
        }
        i++;
      } else if (css[i] === "{") {
        return i;
      } else {
        i++;
      }
    }
    return -1;
  }
  function extractCSSBlock(css, openBrace) {
    let i = openBrace + 1, depth = 1;
    while (i < css.length && depth > 0) {
      if (css[i] === '"' || css[i] === "'") {
        const q = css[i++];
        while (i < css.length && css[i] !== q) {
          if (css[i] === "\\") i++;
          i++;
        }
        i++;
      } else if (css[i] === "/" && css[i + 1] === "*") {
        i += 2;
        while (i < css.length - 1 && !(css[i] === "*" && css[i + 1] === "/")) i++;
        i += 2;
      } else if (css[i] === "{") {
        depth++;
        i++;
      } else if (css[i] === "}") {
        depth--;
        if (depth > 0) i++;
        else break;
      } else {
        i++;
      }
    }
    return { content: css.substring(openBrace + 1, i), end: i + 1 };
  }

  // ../sinth-package/src/core/compiler.ts
  var EVENT_RE = /^on[A-Z]/;
  function eventAttrName(name) {
    return EVENT_RE.test(name) ? name.toLowerCase() : null;
  }
  var INLINE_STYLE_PROPS = /* @__PURE__ */ new Set([
    "color",
    "backgroundColor",
    "backgroundImage",
    "backgroundSize",
    "backgroundPosition",
    "fontSize",
    "fontWeight",
    "fontFamily",
    "fontStyle",
    "fontVariant",
    "lineHeight",
    "letterSpacing",
    "textAlign",
    "textDecoration",
    "textTransform",
    "whiteSpace",
    "wordBreak",
    "wordWrap",
    "textOverflow",
    "margin",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "padding",
    "paddingTop",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "width",
    "height",
    "minWidth",
    "maxWidth",
    "minHeight",
    "maxHeight",
    "display",
    "flexDirection",
    "flexWrap",
    "flex",
    "flexGrow",
    "flexShrink",
    "flexBasis",
    "justifyContent",
    "alignItems",
    "alignContent",
    "alignSelf",
    "gap",
    "rowGap",
    "columnGap",
    "gridTemplateColumns",
    "gridTemplateRows",
    "gridColumn",
    "gridRow",
    "gridArea",
    "position",
    "top",
    "right",
    "bottom",
    "left",
    "zIndex",
    "border",
    "borderTop",
    "borderBottom",
    "borderLeft",
    "borderRight",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderRadius",
    "outline",
    "outlineWidth",
    "outlineStyle",
    "outlineColor",
    "outlineOffset",
    "boxShadow",
    "textShadow",
    "opacity",
    "visibility",
    "overflow",
    "overflowX",
    "overflowY",
    "objectFit",
    "objectPosition",
    "cursor",
    "userSelect",
    "pointerEvents",
    "resize",
    "transform",
    "transition",
    "animation",
    "animationDuration",
    "animationDelay",
    "listStyle",
    "listStyleType",
    "listStylePosition",
    "verticalAlign",
    "float",
    "clear",
    "content",
    "quotes"
  ]);
  function inlineFunctionBody(fnDef, args, ctx) {
    const paramMap = /* @__PURE__ */ new Map();
    for (let i = 0; i < fnDef.params.length && i < args.length; i++) {
      paramMap.set(fnDef.params[i].name, compileExprToJS(args[i], ctx.loopVars, ctx.namespace));
    }
    const subExpr = (expr) => {
      if (expr.kind === "variable" && expr.name && paramMap.has(expr.name)) {
        return { kind: "variable", name: paramMap.get(expr.name) };
      }
      if (expr.kind === "binary") {
        return { ...expr, left: expr.left ? subExpr(expr.left) : void 0, right: expr.right ? subExpr(expr.right) : void 0 };
      }
      if (expr.kind === "unary") {
        return { ...expr, operand: expr.operand ? subExpr(expr.operand) : void 0 };
      }
      if (expr.kind === "assign") {
        if (expr.target && paramMap.has(expr.target)) {
          return { ...expr, target: paramMap.get(expr.target), right: expr.right ? subExpr(expr.right) : void 0 };
        }
        return { ...expr, right: expr.right ? subExpr(expr.right) : void 0 };
      }
      if (expr.kind === "postfix" && expr.target && paramMap.has(expr.target)) {
        return { ...expr, target: paramMap.get(expr.target), op: expr.op };
      }
      if (expr.kind === "index") {
        return { ...expr, object: expr.object ? subExpr(expr.object) : void 0, key: expr.key ? subExpr(expr.key) : void 0 };
      }
      if (expr.kind === "call") {
        return { ...expr, callee: expr.callee ? subExpr(expr.callee) : void 0, args: expr.args?.map((a) => subExpr(a)) };
      }
      return expr;
    };
    const subChild = (child) => {
      switch (child.kind) {
        case "assign_stmt":
          return { ...child, expression: subExpr(child.expression) };
        case "if": {
          const ib = child;
          return {
            ...ib,
            condition: subExpr(ib.condition),
            body: ib.body.map(subChild),
            elseBody: ib.elseBody?.map(subChild)
          };
        }
        case "return":
          return { ...child, expression: child.expression ? subExpr(child.expression) : void 0 };
        default:
          return child;
      }
    };
    const statements = [];
    for (const c of fnDef.body) {
      const substituted = subChild(c);
      if (substituted.kind === "assign_stmt") {
        statements.push(compileExprToJS(substituted.expression, ctx.loopVars, ctx.namespace) + ";");
      } else if (substituted.kind === "expr") {
        statements.push(compileExprToJS(substituted.expression, ctx.loopVars, ctx.namespace) + ";");
      } else if (substituted.kind === "if") {
        statements.push(compileIfToJS(substituted));
      } else if (substituted.kind === "return") {
      } else if (substituted.kind === "for") {
        const fl = substituted;
        const bodyStmts = fl.body.map((bc) => {
          const s = subChild(bc);
          if (s.kind === "assign_stmt") return compileExprToJS(s.expression) + ";";
          if (s.kind === "if") return compileIfToJS(s);
          if (s.kind === "expr") return compileExprToJS(s.expression) + ";";
          return "";
        }).filter(Boolean).join(" ");
        statements.push(`for (let ${fl.itemVar} of ${fl.arrayVar}) { ${bodyStmts} }`);
      }
    }
    if (statements.length === 0) return null;
    return statements.join(" ");
  }
  function resolveBuiltinTag(name, attrs) {
    if (name === "Heading") {
      const la = attrs.find((a) => a.name === "level");
      const lv = la?.value?.kind === "num" ? Math.min(6, Math.max(1, la.value.value)) : 1;
      if (!la) SinthWarning.emit(`Heading used without 'level' attribute, defaulting to h1`);
      return { tag: `h${lv}`, voidEl: false };
    }
    const info = BUILTIN_MAP[name];
    if (info) return { tag: info.tag, defaultClass: info.defaultClass, voidEl: info.voidEl ?? false };
    SinthWarning.emit(`Unknown component '${name}', treating as <${name.toLowerCase()}>`);
    return { tag: name.toLowerCase(), voidEl: false };
  }
  function registerExpr(ctx, expr) {
    let jsExpr = compileExprToJS(expr, ctx.loopVars, ctx.namespace);
    if (ctx.scopePrefix && ctx.scopeVar && expr.kind === "variable" && expr.name && ctx.varDecls?.some((v) => v.name === expr.name)) {
      jsExpr = `_ctx.${ctx.scopePrefix}${expr.name}`;
    }
    const existing = ctx.exprMap.get(jsExpr);
    if (existing !== void 0) return existing;
    const id = ctx.exprRegistry.length;
    ctx.exprRegistry.push(jsExpr);
    ctx.exprMap.set(jsExpr, id);
    return id;
  }
  function emitCEAction(ctx, eventName, handlerBody) {
    if (!ctx.ceActionHandlers) ctx.ceActionHandlers = [];
    const idx = ctx.ceActionHandlers.length;
    ctx.ceActionHandlers.push(`function(e, host) { ${handlerBody} }`);
    return `data-sinth-ce-${eventName}="${idx}"`;
  }
  function renderAttr(attr, paramMap, ctx) {
    const { name, value } = attr;
    const renderFn = ctx.namespace ? "sinthRender_" + ctx.namespace : "sinthRender";
    if (value === null) return name;
    if (value.kind === "null") return "";
    if (value.kind === "bool") return value.value ? name : "";
    if (name === "model" && value?.kind === "str") {
      let vName = interpolateAttr(value.value, paramMap);
      if (ctx.scopePrefix && ctx.scopeVar && ctx.varDecls?.some((v) => v.name === vName)) {
        vName = `${ctx.scopePrefix}${vName}`;
      }
      if (ctx.namespace) vName = ctx.namespace + "_" + vName;
      const varDecl = ctx?.varDecls?.find((v) => v.name === vName);
      const rhs = varDecl && varDecl.varType === "int" ? `Number(e.target.value) || 0` : `e.target.value`;
      const renderCall = ctx.scopeVar ? `${ctx.scopeVar}._render()` : renderFn + "()";
      const handlerBody = `${vName} = ${rhs}; ${renderCall}`;
      if (ctx.scopePrefix) {
        const oninputAttr = emitCEAction(ctx, "input", handlerBody);
        return `${oninputAttr} value="${escAttr(vName)}"`;
      }
      return `oninput="(function(e){ ${handlerBody} })(event)" value="${escAttr(vName)}"`;
    }
    if (name === "step" && value?.kind === "str") {
      const raw2 = value.value;
      if (raw2.startsWith("__EXPR__")) {
        try {
          const expr = JSON.parse(raw2.substring(8));
          if (expr.kind === "variable" && expr.name) {
            const stepExprId = registerExpr(ctx, expr);
            return `data-sinth-step="${stepExprId}"`;
          }
        } catch {
        }
      }
    }
    if (name === "delay") {
      if (value.kind === "num") {
        return `data-sinth-delay="${value.value}"`;
      }
      const v = litToString(value);
      if (/^\d+$/.test(v)) return `data-sinth-delay="${escAttr(v)}"`;
      if (v.startsWith("__EXPR__")) {
        try {
          const expr = JSON.parse(v.substring(8));
          const id2 = registerExpr(ctx, expr);
          return `data-sinth-delay-expr-id="${id2}"`;
        } catch {
        }
      }
      const id = registerExpr(ctx, { kind: "variable", name: v });
      return `data-sinth-delay-expr-id="${id}"`;
    }
    if (name === "hide") {
      if (value === null) return `data-sinth-hide=""`;
      if (value && value.kind === "bool") {
        return value.value ? `data-sinth-hide=""` : "";
      }
      if (value?.kind === "str") {
        const v = value.value;
        if (v === "true") return `data-sinth-hide=""`;
        if (v === "false") return "";
        if (v.startsWith("__EXPR__")) {
          try {
            const expr = JSON.parse(v.substring(8));
            const id = registerExpr(ctx, expr);
            return `data-sinth-hide="${id}"`;
          } catch {
            return "";
          }
        }
      }
      return "";
    }
    if (name === "fullscreen") {
      if (value?.kind === "str") {
        const v = value.value;
        if (v.startsWith("__EXPR__")) {
          try {
            const expr = JSON.parse(v.substring(8));
            const id = registerExpr(ctx, expr);
            return `data-sinth-fullscreen="${id}"`;
          } catch {
            return "";
          }
        }
      }
      return "";
    }
    if (name === "fullscreenSync") {
      if (value?.kind === "str") {
        const raw2 = value.value;
        if (raw2.startsWith("__EXPR__")) {
          try {
            const expr = JSON.parse(raw2.substring(8));
            if (expr.kind === "variable" && expr.name) {
              return `data-sinth-fullscreen-sync="${escAttr(expr.name)}"`;
            }
          } catch {
          }
        }
        return `data-sinth-fullscreen-sync="${escAttr(raw2)}"`;
      }
      return "";
    }
    if (name === "checked") {
      return value?.kind === "bool" && value.value ? "checked" : "";
    }
    if (value.kind === "num") return `${name}="${value.value}"`;
    let raw = value.value;
    if (raw.startsWith("__ACTION_JS__")) {
      const js = raw.substring("__ACTION_JS__".length);
      const ev2 = eventAttrName(name);
      if (ev2) return `${ev2}="(function(){ ${js.replace(/"/g, "&quot;")}; ${renderFn}(); })()"`;
      return `${name}="${escAttr(js)}"`;
    }
    if (raw.startsWith("__MULTI_EXPR__")) {
      const exprJson = raw.substring("__MULTI_EXPR__".length);
      try {
        const exprs = JSON.parse(exprJson);
        const jsExprs = exprs.map((e) => compileExprToJS(e, void 0, ctx.namespace)).join("; ");
        const ev2 = eventAttrName(name);
        let bumps = "";
        if (ctx.diffingEnabled) {
          const targets = [];
          for (const e of exprs) {
            if (e.kind === "assign" && e.target) targets.push(e.target);
          }
          if (targets.length) bumps = ";" + targets.map((t) => `window._bump&&window._bump('${t.replace(/'/g, "\\'")}')`).join(";");
        }
        if (ev2) return `${ev2}="(function(){ ${jsExprs.replace(/"/g, "&quot;")}${bumps}; ${renderFn}(); })()"`;
        return `${name}="${escAttr(jsExprs)}"`;
      } catch {
      }
    }
    if (raw.startsWith("__EXPR__")) {
      const exprJson = raw.substring("__EXPR__".length);
      try {
        const expr = JSON.parse(exprJson);
        const ev2 = eventAttrName(name);
        if (ev2 && expr.kind === "call" && expr.callee?.kind === "variable") {
          const fnName = expr.callee.name;
          const fnDef = fnName ? ctx.functionDefs.find((f) => f.name === fnName) : void 0;
          if (fnDef) {
            const inlinedJS = inlineFunctionBody(fnDef, expr.args ?? [], ctx);
            if (inlinedJS) {
              return `${ev2}="(function(){ ${inlinedJS.replace(/"/g, "&quot;")}; ${renderFn}(); })()"`;
            }
          }
        }
        let jsExpr = compileExprToJS(expr, ctx?.loopVars, ctx.namespace);
        if (ctx.scopePrefix && ctx.scopeVar) {
          if (expr.kind === "variable" && expr.name && ctx.varDecls?.some((v) => v.name === expr.name)) {
            jsExpr = `${ctx.scopePrefix}${expr.name}`;
          } else if (expr.kind === "assign" && expr.target && ctx.varDecls?.some((v) => v.name === expr.target)) {
            jsExpr = jsExpr.replace(new RegExp(`^${expr.target}\\b`), `${ctx.scopePrefix}${expr.target}`);
          }
        }
        const renderCall = ctx.scopeVar ? `${ctx.scopeVar}._render()` : renderFn + "()";
        let bump = "";
        if (ctx.diffingEnabled && expr.kind === "assign" && expr.target) {
          bump = `;window._bump&&window._bump('${expr.target.replace(/'/g, "\\'")}')`;
        }
        if (ev2) {
          const handlerBody = `${jsExpr}${bump}; ${renderCall}`;
          if (ctx.scopePrefix) {
            return emitCEAction(ctx, ev2, handlerBody);
          }
          return `${ev2}="(function(){ ${handlerBody.replace(/"/g, "&quot;")} })()"`;
        }
        return `${name}="${escAttr(jsExpr)}"`;
      } catch {
      }
    }
    raw = interpolateAttr(raw, paramMap);
    const ev = eventAttrName(name);
    if (ev) {
      const call = raw.includes("(") ? raw : raw + "()";
      return `${ev}="${escAttr(call)};${renderFn}()"`;
    }
    return `${name}="${escAttr(raw)}"`;
  }
  function substituteParamsInExpr(expr, params) {
    if (expr.kind === "variable" && expr.name && params.has(expr.name)) {
      const val = params.get(expr.name);
      if (val.startsWith("__LIT__")) {
        return { kind: "literal", value: { kind: "str", value: val.slice(7) } };
      }
      if (val.startsWith("__EXPR__")) {
        try {
          return JSON.parse(val.substring(8));
        } catch {
          return expr;
        }
      }
      return { kind: "literal", value: { kind: "str", value: val } };
    }
    if (expr.kind === "binary") {
      return {
        ...expr,
        left: expr.left ? substituteParamsInExpr(expr.left, params) : void 0,
        right: expr.right ? substituteParamsInExpr(expr.right, params) : void 0
      };
    }
    if (expr.kind === "unary" && expr.operand) {
      return { ...expr, operand: substituteParamsInExpr(expr.operand, params) };
    }
    return expr;
  }
  function exprDeps(expr, declaredVars) {
    const deps = /* @__PURE__ */ new Set();
    function walk(e) {
      if (!e) return;
      if (e.kind === "variable" && e.name && declaredVars.has(e.name)) deps.add(e.name);
      if (e.kind === "binary") {
        walk(e.left);
        walk(e.right);
      }
      if (e.kind === "unary") walk(e.operand);
      if (e.kind === "call") {
        e.args?.forEach(walk);
      }
      if (e.kind === "index") {
        walk(e.object);
        walk(e.key);
      }
      if (e.kind === "assign") {
        if (e.target && declaredVars.has(e.target)) deps.add(e.target);
        walk(e.right);
      }
    }
    walk(expr);
    return [...deps].join(",");
  }
  function renderChild(child, ctx, params, depth) {
    if (depth > 64) throw new SinthError("Maximum component nesting depth (64) exceeded.");
    switch (child.kind) {
      case "text":
        return renderText(child.value, params);
      case "expr": {
        if (!child.expression) return "";
        if (child.expression.kind === "variable" && child.expression.name && params.has(child.expression.name)) {
          const val = params.get(child.expression.name);
          if (val.startsWith("__LIT__")) {
            return esc(val.slice(7));
          }
          if (val.startsWith("__RAW__")) {
            return val.slice(7);
          }
          if (val.startsWith("__VAR__")) {
            const exprId2 = registerExpr(ctx, { kind: "variable", name: val.slice(7) });
            return `<span class="sinth-expr" data-expr-id="${exprId2}"${ctx.diffingEnabled ? ` data-sinth-deps="${exprDeps(child.expression, ctx.declaredVars ?? /* @__PURE__ */ new Set())}"` : ""}></span>`;
          }
          if (val.startsWith("__EXPR__")) {
            try {
              const expr2 = JSON.parse(val.substring(8));
              const exprId2 = registerExpr(ctx, expr2);
              return `<span class="sinth-expr" data-expr-id="${exprId2}"${ctx.diffingEnabled ? ` data-sinth-deps="${exprDeps(child.expression, ctx.declaredVars ?? /* @__PURE__ */ new Set())}"` : ""}></span>`;
            } catch {
              return esc(val);
            }
          }
          return esc(val);
        }
        if (child.expression.kind === "call" && child.expression.callee?.kind === "variable") {
          const fnName = child.expression.callee.name;
          const isMemo = child.expression.memo === true;
          if (isMemo) {
            if (fnName && fnName.includes(".")) {
              SinthWarning.emit(`'$' on '${fnName}()' has no effect \u2014 dotted calls cannot be memoized.`);
              ctx.logicBlocks.push(compileExprToJS(child.expression, void 0, ctx.namespace) + ";");
              return "";
            }
            const js = compileExprToJS(child.expression);
            ctx.logicBlocks.push(`if(!_memo_${fnName}_done){_memo_${fnName}=${js};_memo_${fnName}_done=true;}`);
            const exprId2 = registerExpr(ctx, { kind: "variable", name: `_memo_${fnName}` });
            return `<span class="sinth-expr" data-expr-id="${exprId2}"></span>`;
          }
          if (fnName && fnName.includes(".")) {
            ctx.logicBlocks.push(compileExprToJS(child.expression, void 0, ctx.namespace) + ";");
            return "";
          }
          if (fnName === "remove" && child.expression.args && child.expression.args.length === 1) {
            const arg = child.expression.args[0];
            if (arg.kind === "literal" && arg.value?.kind === "str") {
              return `<span data-sinth-remove="${esc(arg.value.value)}"></span>`;
            }
          }
          const fnDef = fnName ? ctx.functionDefs.find((f) => f.name === fnName) : void 0;
          if (fnDef && fnDef.returnType === "ui") {
            const callArgs = child.expression.args ?? [];
            const localParams = /* @__PURE__ */ new Map();
            for (let i = 0; i < fnDef.params.length && i < callArgs.length; i++) {
              const arg = callArgs[i];
              if (arg.kind === "literal" && arg.value?.kind === "str") {
                localParams.set(fnDef.params[i].name, "__LIT__" + arg.value.value);
              } else if (arg.kind === "variable" && arg.name) {
                localParams.set(fnDef.params[i].name, "__VAR__" + arg.name);
              } else {
                const exprId2 = registerExpr(ctx, arg);
                localParams.set(fnDef.params[i].name, "__EXPRID__" + exprId2);
              }
            }
            const substituteExpr = (expr2, pm) => {
              if (expr2.kind === "variable" && pm.has(expr2.name)) {
                const pv = pm.get(expr2.name);
                if (pv.startsWith("__LIT__")) return { kind: "literal", value: { kind: "str", value: pv.slice(7) } };
                if (pv.startsWith("__EXPRID__")) {
                  const id = parseInt(pv.slice(10), 10);
                  return { kind: "expr_ref", exprId: id };
                }
                return { kind: "variable", name: pv.slice(7) };
              }
              if (expr2.kind === "binary") return { ...expr2, left: substituteExpr(expr2.left, pm), right: substituteExpr(expr2.right, pm) };
              if (expr2.kind === "unary") return { ...expr2, operand: substituteExpr(expr2.operand, pm) };
              if (expr2.kind === "call") return { ...expr2, callee: substituteExpr(expr2.callee, pm), args: expr2.args?.map((a) => substituteExpr(a, pm)) };
              if (expr2.kind === "index") return { ...expr2, object: substituteExpr(expr2.object, pm), key: substituteExpr(expr2.key, pm) };
              if (expr2.kind === "assign") {
                const target = expr2.target;
                if (target && pm.has(target)) {
                  const pv = pm.get(target);
                  if (pv.startsWith("__VAR__")) {
                    return { ...expr2, target: pv.slice(7), right: expr2.right ? substituteExpr(expr2.right, pm) : void 0 };
                  }
                }
                return { ...expr2, right: expr2.right ? substituteExpr(expr2.right, pm) : void 0 };
              }
              return expr2;
            };
            const substituteChild = (c, pm) => {
              if (c.kind === "expr") return { ...c, expression: substituteExpr(c.expression, pm) };
              if (c.kind === "assign_stmt") return { ...c, expression: substituteExpr(c.expression, pm) };
              if (c.kind === "return" && c.expression) return { ...c, expression: substituteExpr(c.expression, pm) };
              if (c.kind === "if") {
                const ib = c;
                return { ...ib, condition: substituteExpr(ib.condition, pm), body: ib.body.map((bc) => substituteChild(bc, pm)), elseBody: ib.elseBody?.map((bc) => substituteChild(bc, pm)) };
              }
              if (c.kind === "for") {
                const fl = c;
                return { ...fl, body: fl.body.map((bc) => substituteChild(bc, pm)) };
              }
              if (c.kind === "use") {
                const u = c;
                const sa = u.attrs.map((a) => {
                  if (a.value?.kind === "str") {
                    let raw = a.value.value;
                    if (raw.startsWith("__EXPR__")) {
                      try {
                        const expr2 = JSON.parse(raw.substring(8));
                        const substituted = substituteExpr(expr2, pm);
                        return { ...a, value: { kind: "str", value: "__EXPR__" + JSON.stringify(substituted) } };
                      } catch {
                      }
                    }
                    if (raw.startsWith("__ACTION_JS__")) {
                      return { ...a, value: { kind: "str", value: raw } };
                    }
                    if (raw.startsWith("__MULTI_EXPR__")) {
                      try {
                        const exprs = JSON.parse(raw.substring("__MULTI_EXPR__".length));
                        const substituted = exprs.map((e) => substituteExpr(e, pm));
                        return { ...a, value: { kind: "str", value: "__MULTI_EXPR__" + JSON.stringify(substituted) } };
                      } catch {
                      }
                    }
                    for (const [pn, pv] of pm) {
                      if (pv.startsWith("__LIT__")) raw = raw.replace(new RegExp(`\\b${pn}\\b`, "g"), pv.slice(7));
                      if (pv.startsWith("__VAR__")) raw = raw.replace(new RegExp(`\\b${pn}\\b`, "g"), pv.slice(7));
                    }
                    return { ...a, value: { kind: "str", value: raw } };
                  }
                  return a;
                });
                return { ...u, attrs: sa, children: u.children.map((cc) => substituteChild(cc, pm)) };
              }
              return c;
            };
            return fnDef.body.map((c) => renderChild(substituteChild(c, localParams), ctx, localParams, depth + 1)).join("");
          }
        }
        if (child.expression.kind === "expr_ref" && child.expression.exprId !== void 0) {
          return `<span class="sinth-expr" data-expr-id="${child.expression.exprId}"></span>`;
        }
        if (child.expression.kind === "literal" && child.expression.value) {
          return esc(litToString(child.expression.value));
        }
        if (child.expression.kind === "variable" && child.expression.name && !ctx.loopVars?.has(child.expression.name)) {
          const exprId2 = registerExpr(ctx, child.expression);
          return `<span class="sinth-expr" data-expr-id="${exprId2}"${ctx.diffingEnabled ? ` data-sinth-deps="${exprDeps(child.expression, ctx.declaredVars ?? /* @__PURE__ */ new Set())}"` : ""}></span>`;
        }
        let expr = child.expression;
        if (params.size > 0) {
          expr = substituteParamsInExpr(expr, params);
        }
        const exprId = registerExpr(ctx, expr);
        return `<span class="sinth-expr" data-expr-id="${exprId}"${ctx.diffingEnabled ? ` data-sinth-deps="${exprDeps(child.expression, ctx.declaredVars ?? /* @__PURE__ */ new Set())}"` : ""}></span>`;
      }
      case "assign_stmt": {
        ctx.logicBlocks.push(compileExprToJS(child.expression, void 0, ctx.namespace) + ";");
        return "";
      }
      case "remove": {
        return `<span data-sinth-remove="${esc(child.target)}"></span>`;
      }
      case "return":
        return "";
      case "if":
        return renderIfBlock(child, ctx, params, depth);
      case "for": {
        const loopVars = /* @__PURE__ */ new Set();
        loopVars.add(child.itemVar);
        if (child.keyVar) loopVars.add(child.keyVar);
        if (child.indexVar) loopVars.add(child.indexVar);
        const prev = ctx.loopVars;
        ctx.loopVars = loopVars;
        const bodyHTML = child.body.map((c) => renderChild(c, ctx, params, depth + 1)).join("");
        ctx.loopVars = prev;
        const keyAttr = child.keyVar ? ` data-sinth-key="${escAttr(child.keyVar)}"` : "";
        const idxAttr = child.indexVar ? ` data-sinth-index="${escAttr(child.indexVar)}"` : "";
        return `<template data-sinth-for="${escAttr(child.arrayVar)}" data-sinth-item="${escAttr(child.itemVar)}"${keyAttr}${idxAttr}>${bodyHTML}</template>`;
      }
      case "use":
        return renderCompUse(child, ctx, params, depth);
      case "component_expr":
        return child.children.map((c) => renderChild(c, ctx, params, depth + 1)).join("");
    }
  }
  function renderIfBlock(ifBlock, ctx, params, depth) {
    if (depth > 64) throw new SinthError("Maximum if-block nesting depth (64) exceeded.", ifBlock.loc);
    const condJS = compileExprToJS(ifBlock.condition, void 0, ctx.namespace);
    const allChildren = [...ifBlock.body, ...ifBlock.elseBody ?? []];
    const hasAssign = allChildren.some((c) => c.kind === "assign_stmt");
    const hasComp = allChildren.some((c) => c.kind === "use");
    if (!hasAssign && !hasComp) {
      const tplId = ctx.ifIdCounter++;
      const condId2 = registerExpr(ctx, ifBlock.condition);
      const bodyHTML = ifBlock.body.map((c) => renderChild(c, ctx, params, depth + 1)).join("");
      const elseHTML2 = (ifBlock.elseBody ?? []).map((c) => renderChild(c, ctx, params, depth + 1)).join("");
      const persistAttr = ifBlock.persist ? ` data-sinth-if-persist="true"` : "";
      return `<template data-sinth-if-id="${tplId}" data-sinth-if-expr="${condId2}"${persistAttr}>${bodyHTML}</template>` + (elseHTML2 ? `<template data-sinth-else data-sinth-if-id="${tplId}">${elseHTML2}</template>` : "");
    }
    if (hasAssign && !hasComp) {
      ctx.logicBlocks.push(compileIfToJS(ifBlock));
      return "";
    }
    if (!hasAssign && hasComp) {
      const tplId = ctx.ifIdCounter++;
      const condId2 = registerExpr(ctx, ifBlock.condition);
      const bodyHTML = ifBlock.body.map((c) => renderChild(c, ctx, params, depth + 1)).join("");
      const elseHTML2 = (ifBlock.elseBody ?? []).map((c) => renderChild(c, ctx, params, depth + 1)).join("");
      let replaceAttr = "";
      let persistAttr = ifBlock.persist ? ` data-sinth-if-persist="true"` : "";
      const firstComp = ifBlock.body.find((c) => c.kind === "use");
      if (firstComp) {
        const idAttr = firstComp.attrs.find((a) => a.name === "id");
        const replAttr = firstComp.attrs.find((a) => a.name === "replace");
        const wantsReplace = replAttr && (replAttr.value === null || replAttr.value?.kind === "bool" && replAttr.value.value);
        if (idAttr && idAttr.value?.kind === "str" && wantsReplace) {
          replaceAttr = ` data-sinth-if-replace="${escAttr(idAttr.value.value)}"`;
        }
      }
      let delayAttr = "";
      let delayHideAttr = "";
      if (firstComp) {
        const delayA = firstComp.attrs.find((a) => a.name === "delay");
        const hideA = firstComp.attrs.find((a) => a.name === "hide");
        if (delayA && hideA && hideA.value && hideA.value.kind === "bool" && !hideA.value.value) {
          if (delayA.value?.kind === "num") {
            delayAttr = ` data-sinth-if-delay="${delayA.value.value}"`;
          } else if (delayA.value?.kind === "str") {
            const v = litToString(delayA.value);
            if (/^\d+$/.test(v)) delayAttr = ` data-sinth-if-delay="${v}"`;
          }
          delayHideAttr = ` data-sinth-if-delay-hide="false"`;
        }
      }
      let elseDelayAttr = "";
      let elseDelayHideAttr = "";
      const elseFirstComp2 = (ifBlock.elseBody ?? []).find((c) => c.kind === "use");
      if (elseFirstComp2) {
        const delayA = elseFirstComp2.attrs.find((a) => a.name === "delay");
        const hideA = elseFirstComp2.attrs.find((a) => a.name === "hide");
        if (delayA && hideA && hideA.value && hideA.value.kind === "bool" && !hideA.value.value) {
          if (delayA.value?.kind === "num") {
            elseDelayAttr = ` data-sinth-if-delay="${delayA.value.value}"`;
          } else if (delayA.value?.kind === "str") {
            const v = litToString(delayA.value);
            if (/^\d+$/.test(v)) elseDelayAttr = ` data-sinth-if-delay="${v}"`;
          }
          elseDelayHideAttr = ` data-sinth-if-delay-hide="false"`;
        }
      }
      return `<template data-sinth-if-id="${tplId}" data-sinth-if-expr="${condId2}"${replaceAttr}${delayAttr}${delayHideAttr}${persistAttr}>${bodyHTML}</template>` + (elseHTML2 ? `<template data-sinth-else data-sinth-if-id="${tplId}"${elseDelayAttr}${elseDelayHideAttr}>${elseHTML2}</template>` : "");
    }
    const id = `__sm${ctx.mixedCounter++}__`;
    const ifAssignJS = ifBlock.body.filter((c) => c.kind === "assign_stmt").map((c) => {
      const e = c.expression;
      const js = compileExprToJS(e, void 0, ctx.namespace);
      let bump = "";
      if (ctx.diffingEnabled && e.kind === "assign" && e.target) {
        bump = `;window._bump&&window._bump('${e.target.replace(/'/g, "\\'")}')`;
      }
      return `  ${js};${bump}`;
    }).join("\n");
    const ifHTML = ifBlock.body.filter((c) => c.kind !== "assign_stmt").map((c) => renderChild(c, ctx, params, depth + 1)).join("");
    const elseAssignJS = (ifBlock.elseBody ?? []).filter((c) => c.kind === "assign_stmt").map((c) => {
      const e = c.expression;
      const js = compileExprToJS(e, void 0, ctx.namespace);
      let bump = "";
      if (ctx.diffingEnabled && e.kind === "assign" && e.target) {
        bump = `;window._bump&&window._bump('${e.target.replace(/'/g, "\\'")}')`;
      }
      return `  ${js};${bump}`;
    }).join("\n");
    const elseHTML = (ifBlock.elseBody ?? []).filter((c) => c.kind !== "assign_stmt").map((c) => renderChild(c, ctx, params, depth + 1)).join("");
    let replaceId;
    const ifFirstComp = ifBlock.body.find((c) => c.kind === "use");
    const elseFirstComp = (ifBlock.elseBody ?? []).find((c) => c.kind === "use");
    if (ifFirstComp) {
      const ifId = ifFirstComp.attrs.find((a) => a.name === "id")?.value;
      const ifReplace = ifFirstComp.attrs.find((a) => a.name === "replace");
      const ifReplaceVal = ifReplace?.value;
      const ifWantsReplace = ifReplace && (ifReplaceVal === null || ifReplaceVal?.kind === "bool" && ifReplaceVal.value);
      if (ifId && ifId.kind === "str" && ifWantsReplace) {
        if (elseFirstComp) {
          const elseId = elseFirstComp.attrs.find((a) => a.name === "id")?.value;
          const elseReplace = elseFirstComp.attrs.find((a) => a.name === "replace");
          const elseReplaceVal = elseReplace?.value;
          const elseWantsReplace = elseReplace && (elseReplaceVal === null || elseReplaceVal?.kind === "bool" && elseReplaceVal.value);
          if (elseId && elseId.kind === "str" && elseId.value === ifId.value && elseWantsReplace) {
            replaceId = ifId.value;
          }
        }
      }
    }
    const condId = registerExpr(ctx, ifBlock.condition);
    const hasFullscreen = ifHTML.includes("data-sinth-fullscreen") || elseHTML.includes("data-sinth-fullscreen");
    ctx.mixedBlocks.push({ id, conditionJS: String(condId), ifJS: ifAssignJS, ifHTML, elseJS: elseAssignJS, elseHTML, replaceId });
    if (hasFullscreen) {
      return `<span id="${replaceId || id}" data-sinth-mixed data-sinth-mixed-fullscreen="${condId}"></span>`;
    }
    return `<span id="${replaceId || id}" data-sinth-mixed></span>`;
  }
  function renderCompUse(use, ctx, params, depth) {
    const renderFn = ctx.namespace ? "sinthRender_" + ctx.namespace : "sinthRender";
    if (use.name === "__IF_ROOT__") {
      return use.children.map((c) => renderChild(c, ctx, params, depth)).join("");
    }
    if (use.name === "RawHTML") {
      const ca = use.attrs.find((a) => a.name === "content");
      if (!ca || !ca.value) return "";
      return interpolateAttr(litToString(ca.value), params);
    }
    const userDef = ctx.allDefs.get(use.name);
    if (userDef) return expandUserComp(use, userDef, ctx, params, depth + 1);
    const customEl = ctx.customEls.get(use.name);
    if (customEl) {
      const attrParts2 = [`data-s="${ctx.scopeHash}"`];
      for (const attr of use.attrs) {
        if (attr.name === "bind" || attr.name === "model") continue;
        const r = renderAttr(attr, params, ctx);
        if (r) attrParts2.push(r);
      }
      const inner2 = use.children.map((c) => renderChild(c, ctx, params, depth + 1)).join("");
      return `<${customEl.tagName} ${attrParts2.join(" ")}>${inner2}</${customEl.tagName}>`;
    }
    const { tag, defaultClass, voidEl } = resolveBuiltinTag(use.name, use.attrs);
    const isVoid = voidEl || VOID_TAGS.has(tag);
    let attrParts = [`data-s="${ctx.scopeHash}"`];
    let userClass;
    const inlineStyleParts = [];
    for (const attr of use.attrs) {
      if (attr.name === "level" && use.name === "Heading") continue;
      if (INLINE_STYLE_PROPS.has(attr.name) && attr.value) {
        if (attr.value.kind === "str" && attr.value.value.startsWith("__EXPR__")) {
          try {
            const expr = JSON.parse(attr.value.value.substring(8));
            const exprId = registerExpr(ctx, expr);
            inlineStyleParts.push(`${camelToKebab(attr.name)}:__EXPR__${exprId}`);
          } catch {
            inlineStyleParts.push(`${camelToKebab(attr.name)}: ${interpolateAttr(attr.value.value, params)}`);
          }
        } else {
          const val = attr.value.kind === "str" ? interpolateAttr(attr.value.value, params) : litToString(attr.value);
          inlineStyleParts.push(`${camelToKebab(attr.name)}: ${val}`);
        }
        continue;
      }
      if (attr.name === "class") {
        if (attr.value?.kind === "str") userClass = interpolateAttr(attr.value.value, params);
        continue;
      }
      if (use.name === "Checkbox" && (attr.name === "checked" || attr.name === "onChange" || attr.name === "label")) continue;
      if (attr.name === "hide") {
        const rendered2 = renderAttr(attr, params, ctx);
        if (rendered2) attrParts.push(rendered2);
        continue;
      }
      const rendered = renderAttr(attr, params, ctx);
      if (rendered) attrParts.push(rendered);
    }
    const classes = [defaultClass, userClass].filter(Boolean).join(" ");
    if (classes) attrParts.push(`class="${escAttr(classes)}"`);
    if (inlineStyleParts.length > 0) {
      const staticParts = [];
      const exprParts = [];
      for (const p of inlineStyleParts) {
        if (p.includes(":__EXPR__")) {
          exprParts.push(p.replace("__EXPR__", ""));
        } else {
          staticParts.push(p);
        }
      }
      if (staticParts.length > 0) attrParts.push(`style="${escAttr(staticParts.join("; "))}"`);
      if (exprParts.length > 0) attrParts.push(`data-sinth-style="${escAttr(exprParts.join(";"))}"`);
    }
    if (tag === "button" && !use.attrs.some((a) => a.name === "type")) attrParts.push(`type="button"`);
    const delayAttrVal = use.attrs.find((a) => a.name === "delay");
    if (delayAttrVal) {
      const delayMs = delayAttrVal.value?.kind === "num" ? delayAttrVal.value.value : 1e3;
      const eventNames = ["onClick", "onChange", "onInput", "onSubmit"];
      let hasEvent = false;
      for (const en of eventNames) {
        const evName = en.toLowerCase();
        const idx = attrParts.findIndex((p) => p.startsWith(evName + "="));
        if (idx >= 0) {
          hasEvent = true;
          const current = attrParts[idx];
          const match = current.match(/\(function\(\)\{\s*(.+?);\s*sinthRender\(\)/);
          if (match) {
            const action = match[1];
            const qid = `__sq${ctx.ifIdCounter++}`;
            const hideAttr = use.attrs.find((a) => a.name === "hide");
            const hideVal = hideAttr ? hideAttr.value === null ? true : hideAttr.value.kind === "bool" ? hideAttr.value.value : hideAttr.value.kind === "str" && hideAttr.value.value !== "false" : true;
            ctx.actionButtons.push({ qid, delayMs, hide: hideVal });
            const delayIdx = attrParts.findIndex((p) => p.startsWith("data-sinth-delay"));
            if (delayIdx >= 0) attrParts.splice(delayIdx, 1);
            const hideIdx = attrParts.findIndex((p) => p.startsWith("data-sinth-delay-hide"));
            if (hideIdx >= 0) attrParts.splice(hideIdx, 1);
            const doneIdx = attrParts.findIndex((p) => p.startsWith("data-sinth-delay-done"));
            if (doneIdx >= 0) attrParts.splice(doneIdx, 1);
            attrParts.push(`data-sinth-queue-id="${qid}"`);
            if (hideVal) {
              attrParts.push(`style="display:none"`);
            }
            attrParts[idx] = `${evName}="${escAttr(`(function(e){ var el=document.querySelector('[data-sinth-queue-id=${qid}]'); if(!el)return; var hide=${hideVal}; if(hide)el.style.display='none'; var q=window._sinthQ=q||{}; var sq=q.${qid}=q.${qid}||[]; sq.push(function(){ if(hide)el.style.display=''; ${action}; ${renderFn}(); }); if(sq.length===1){ (function p(first){ if(!sq||sq.length===0){delete q.${qid};return;} var a=sq[0]; sq.shift(); var d=first?${delayMs}:0; setTimeout(function(){ a(); if(sq.length>0)setTimeout(function(){p(false)},${delayMs}); },d); })(true); } })()`)}"`;
          }
        }
      }
      if (!hasEvent) {
        if (use.attrs.some((a) => a.name === "hide")) {
          const hideAttr = use.attrs.find((a) => a.name === "hide");
          const hideVal = hideAttr.value;
          const isHidden = hideVal === null || hideVal?.kind === "bool" && hideVal.value || hideVal?.kind === "str" && hideVal.value !== "false";
          attrParts.push(`data-sinth-delay-hide="${isHidden ? "true" : "false"}"`);
          if (!isHidden) {
            attrParts.push(`data-sinth-delay-done="1"`);
          }
        } else {
          attrParts.push(`data-sinth-delay-hide="true"`);
        }
      }
    }
    if (use.name === "Input") {
      const bindAttr = use.attrs.find((a) => a.name === "bind");
      const modelAttr = use.attrs.find((a) => a.name === "model");
      const bindOrModel = bindAttr || modelAttr;
      if (bindOrModel?.value?.kind === "str") {
        let vName = bindOrModel.value.value;
        if (vName.startsWith("__EXPR__")) {
          try {
            const expr = JSON.parse(vName.substring(8));
            if (expr.kind === "variable" && expr.name) vName = expr.name;
          } catch {
          }
        }
        const varDecl = ctx.varDecls?.find((v) => v.name === vName);
        if (!use.attrs.some((a) => a.name === "type")) {
          if (varDecl && varDecl.varType === "int") {
            attrParts.push(`type="number"`);
          } else {
            attrParts.push(`type="text"`);
          }
        }
        if (varDecl && varDecl.varType === "int" && !use.attrs.some((a) => a.name === "step")) {
          attrParts.push(`step="1"`);
        }
        const rhs = varDecl && varDecl.varType === "int" ? `Number(e.target.value) || 0` : `e.target.value`;
        const initialVal = varDecl?.value ? litToString(varDecl.value).replace(/"/g, "&quot;") : "";
        let resolvedName = vName;
        if (ctx.scopePrefix && ctx.scopeVar && ctx.varDecls?.some((v) => v.name === vName)) {
          resolvedName = `${ctx.scopePrefix}${vName}`;
        }
        if (ctx.namespace) resolvedName = ctx.namespace + "_" + resolvedName;
        const renderCall = ctx.scopeVar ? `${ctx.scopeVar}._render()` : renderFn + "()";
        const handlerBody = `${resolvedName} = ${rhs}; ${renderCall}`;
        if (ctx.scopePrefix) {
          attrParts.push(emitCEAction(ctx, "input", handlerBody));
        } else {
          attrParts.push(`oninput="(function(e){ ${handlerBody} })(event)"`);
        }
        attrParts.push(`value="${escAttr(initialVal)}"`);
        const valueExprId = registerExpr(ctx, { kind: "variable", name: vName });
        attrParts.push(`data-sinth-value="${valueExprId}"`);
      }
    }
    if (use.name === "Checkbox") {
      if (!use.attrs.some((a) => a.name === "type")) attrParts.push(`type="checkbox"`);
      const checkedAttr = use.attrs.find((a) => a.name === "checked");
      if (checkedAttr && checkedAttr.value) {
        if (checkedAttr.value.kind === "bool") {
          if (checkedAttr.value.value) attrParts.push(`checked`);
        } else if (checkedAttr.value.kind === "str") {
          let raw = checkedAttr.value.value;
          if (raw.startsWith("__EXPR__")) {
            try {
              const expr = JSON.parse(raw.substring(8));
              if (expr.kind === "variable" && expr.name) {
                const checkedExprId = registerExpr(ctx, { kind: "variable", name: expr.name });
                attrParts.push(`data-sinth-checked="${checkedExprId}"`);
              } else {
                const exprId = registerExpr(ctx, expr);
                attrParts.push(`data-sinth-checked-expr="${exprId}"`);
              }
            } catch {
            }
          } else {
            const checkedExprId = registerExpr(ctx, { kind: "variable", name: raw });
            attrParts.push(`data-sinth-checked="${checkedExprId}"`);
          }
        }
      }
      const onChangeAttr = use.attrs.find((a) => a.name === "onChange");
      if (onChangeAttr && onChangeAttr.value?.kind === "str") {
        let raw = onChangeAttr.value.value;
        if (raw.startsWith("__EXPR__")) {
          try {
            const expr = JSON.parse(raw.substring(8));
            const jsExpr = compileExprToJS(expr, void 0, ctx.namespace);
            attrParts.push(`onchange="(function(){ ${jsExpr}; ${renderFn}(); })(event)"`);
          } catch {
          }
        } else {
          attrParts.push(`onchange="${escAttr(raw)};${renderFn}()"`);
        }
      } else if (!onChangeAttr && checkedAttr) {
        const raw = checkedAttr.value?.kind === "str" ? checkedAttr.value.value : "";
        if (raw.startsWith("__EXPR__")) {
          try {
            const expr = JSON.parse(raw.substring(8));
            if (expr.kind === "variable" && expr.name) {
              attrParts.push(`onchange="(function(e){ ${expr.name} = e.target.checked; ${renderFn}(); })(event)"`);
            }
          } catch {
          }
        } else if (raw.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)) {
          attrParts.push(`onchange="(function(e){ ${raw} = e.target.checked; ${renderFn}(); })(event)"`);
        }
      }
      const labelAttr = use.attrs.find((a) => a.name === "label");
      const labelText = labelAttr?.value?.kind === "str" ? esc(interpolateAttr(labelAttr.value.value, params)) : "";
      if (labelText) {
        const checkAttrStr = attrParts.length ? " " + attrParts.join(" ") : "";
        return `<label data-s="${ctx.scopeHash}"><input${checkAttrStr}> ${labelText}</label>`;
      }
    }
    attrParts = attrParts.filter((p) => !p.startsWith("bind="));
    const attrStr = attrParts.length ? " " + attrParts.join(" ") : "";
    if (isVoid) {
      if (use.children.length > 0) SinthWarning.emit(`<${tag}> is void and cannot have children.`, use.loc);
      return `<${tag}${attrStr}>`;
    }
    const inner = use.children.map((c) => renderChild(c, ctx, params, depth + 1)).join("");
    return `<${tag}${attrStr}>${inner}</${tag}>`;
  }
  function expandUserComp(use, def, ctx, params, depth) {
    if (use.name === def.name && depth > 4) {
      throw new SinthError(`Recursive component '${def.name}' is not allowed.`, use.loc);
    }
    const local = /* @__PURE__ */ new Map();
    for (const p of def.params) {
      if (p.defaultVal !== void 0) local.set(p.name, litToString(p.defaultVal));
    }
    for (const attr of use.attrs) {
      if (attr.value === null) {
        local.set(attr.name, "true");
      } else if (attr.value.kind !== "null") {
        const raw = litToString(attr.value);
        if (raw.startsWith("__EXPR__")) {
          local.set(attr.name, raw);
        } else {
          local.set(attr.name, attr.value.kind === "str" ? interpolateAttr(raw, params) : raw);
        }
      }
    }
    for (const p of def.params) {
      if (!local.has(p.name)) {
        throw new SinthError(
          `Component '${def.name}' requires parameter '${p.name}' but it was not provided.`,
          use.loc
        );
      }
    }
    const slotHTML = use.children.map((c) => renderChild(c, ctx, params, depth)).join("");
    local.set("slot", "__RAW__" + slotHTML);
    for (const block of def.styles) {
      ctx.extraCSS.push(processStyleBlock(block, ctx.scopeHash, local));
    }
    return def.body.map((c) => renderChild(c, ctx, local, depth)).join("");
  }
  function buildRuntime(opts) {
    const { varDecls, bodyHTML, logicBlocks, mixedBlocks, assignedVars, exprRegistry, functionsJS } = opts;
    const ns = opts.namespace ? "_" + opts.namespace : "";
    const renderFn = "sinthRender" + ns;
    const needsMixed = mixedBlocks.length > 0;
    const needsExpr = bodyHTML.includes("sinth-expr") || needsMixed;
    const needsIf = bodyHTML.includes("data-sinth-if") || needsMixed;
    const needsFor = bodyHTML.includes("data-sinth-for") || bodyHTML.includes("data-sinth-for-expr");
    const needsDelay = bodyHTML.includes("data-sinth-delay") || bodyHTML.includes("data-sinth-delay-expr-id") || mixedBlocks.some((mb) => mb.ifHTML.includes("data-sinth-delay") || mb.ifHTML.includes("data-sinth-delay-expr-id") || mb.elseHTML.includes("data-sinth-delay") || mb.elseHTML.includes("data-sinth-delay-expr-id"));
    const needsLogic = logicBlocks.length > 0;
    const needsFullscreen = bodyHTML.includes("data-sinth-fullscreen");
    const needsFullscreenSync = bodyHTML.includes("data-sinth-fullscreen-sync");
    const needsRender = needsExpr || needsIf || needsFor || needsMixed || needsLogic || bodyHTML.includes("data-sinth-hide") || needsFullscreen || needsFullscreenSync || needsDelay;
    const varLines = varDecls.map((v) => {
      const vn = ns ? ns.slice(1) + "_" + v.name : v.name;
      if (!v.value) {
        if (!assignedVars.has(v.name)) {
          const defaults2 = { str: '""', int: "0", bool: "false", "str[]": "[]" };
          SinthWarning.emit(
            `Variable '${v.name}' is declared but never assigned. Defaulting to ${defaults2[v.varType] ?? "undefined"}.`,
            v.loc
          );
        }
        const defaults = { str: '""', int: "0", bool: "false", "str[]": "[]" };
        return `var ${vn} = ${defaults[v.varType] ?? "undefined"};`;
      }
      const val = litToString(v.value);
      if (val.startsWith("__VAR__")) return `var ${vn} = ${val.slice(7)};`;
      if (val.startsWith("__ARR__")) return `var ${vn} = ${val.slice(7)};`;
      if (val.startsWith("__EXPR__")) {
        try {
          const expr = JSON.parse(val.substring(8));
          const js = compileExprToJS(expr);
          const id = exprRegistry.length;
          exprRegistry.push(js);
          return `var ${vn} = __X${ns}[${id}]({});`;
        } catch {
          return `var ${vn} = ${val};`;
        }
      }
      if (v.varType === "obj") return `var ${vn} = ${val};`;
      if (v.varType === "str") return `var ${vn} = ${JSON.stringify(val)};`;
      if (v.varType === "str[]" && typeof val === "string" && val.startsWith("__ARR__")) {
        try {
          const arr = JSON.parse(val.slice(7));
          return `var ${vn} = ${JSON.stringify(arr)};`;
        } catch {
          return `var ${vn} = ${val.slice(7)};`;
        }
      }
      return `var ${vn} = ${val};`;
    }).join("\n");
    const memoVars = /* @__PURE__ */ new Set();
    for (const lb of logicBlocks) {
      let matches = lb.match(/_memo_(\w+)/g);
      if (matches) matches.forEach((m) => memoVars.add(m));
      matches = lb.match(/_memo_(\w+)_done/g);
      if (matches) matches.forEach((m) => memoVars.add(m));
    }
    for (const e of exprRegistry) {
      let matches = e.match(/_memo_(\w+)/g);
      if (matches) matches.forEach((m) => memoVars.add(m));
    }
    const memoVarDecls = [...memoVars].map((m) => `var ${m};`).join("\n");
    if (!needsRender) {
      const out = [varLines, memoVarDecls].filter(Boolean).join("\n");
      return out ? `// Sinth compiled runtime
${out}` : "";
    }
    const helpers = generateHelpers({ needsExpr, needsIf, needsFor, needsDelay, needsMixed, ns });
    const exprVarUpdates = varDecls.filter((v) => v.value && litToString(v.value).startsWith("__EXPR__")).map((v) => {
      try {
        const expr = JSON.parse(litToString(v.value).substring(8));
        const js = compileExprToJS(expr);
        const idx = exprRegistry.indexOf(js);
        const vn2 = ns ? ns.slice(1) + "_" + v.name : v.name;
        return `${vn2} = __X${ns}[${idx}]({});`;
      } catch {
        return "";
      }
    }).filter(Boolean).join("\n    ");
    const renderBody = buildRenderBody({
      bodyHTML,
      logicBlocks,
      mixedBlocks,
      needsLogic,
      needsMixed,
      needsIf,
      needsFor,
      needsExpr,
      needsDelay,
      exprVarUpdates: exprVarUpdates || void 0,
      ns
    });
    let forDataJS = "";
    let forSyncBlock = "";
    if (needsFor) {
      const forArrays = /* @__PURE__ */ new Set();
      const forRegex = /data-sinth-for="([^"]+)"/g;
      let m;
      while ((m = forRegex.exec(bodyHTML)) !== null) {
        forArrays.add(m[1]);
      }
      if (forArrays.size > 0) {
        forDataJS = `var _sinthForData = {};
`;
        forSyncBlock = [...forArrays].map((v) => `_sinthForData['${v.replace(/&quot;/g, '"')}'] = ${v.replace(/&quot;/g, '"')};`).join("\n    ") + "\n    ";
      }
    }
    const exprArrayJS = exprRegistry.length > 0 ? `let __X${ns} = [${exprRegistry.map((js) => `function(_ctx){ return ${js}; }`).join(",")}];
` : "";
    let renderFunc = "";
    if (needsRender) {
      renderFunc = `function ${renderFn}() {
    ${forSyncBlock}${renderBody.replace(/^/gm, "  ")}
}
${renderFn}();`;
    }
    if (needsFullscreenSync) {
      renderFunc += `
(function() {
  let syncedEls = document.querySelectorAll('[data-sinth-fullscreen-sync]');
  if (syncedEls.length > 0) {
    let vars = [];
    syncedEls.forEach(function(el) { vars.push(el.dataset.sinthFullscreenSync); });
    document.addEventListener('fullscreenchange', function() {
      let state = !!document.fullscreenElement;
      vars.forEach(function(varName) { 
        switch(varName) {
          ${[...new Set(varDecls.filter((v) => v.name).map((v) => {
        const vn3 = ns ? ns.slice(1) + "_" + v.name : v.name;
        return `case '${v.name}': ${vn3} = state; break;`;
      }))].join("\n          ")}
        }
      });
      ${renderFn}();
    });
  }
})();`;
    }
    const pageCode = `// Sinth Page Runtime
${forDataJS}
${exprArrayJS}
${memoVarDecls}
${varLines}
${renderFunc}`;
    if (opts.sharedRuntime && helpers.trim()) {
      const sharedCode = `// Sinth shared runtime
${helpers}`;
      return { page: pageCode, shared: sharedCode };
    }
    return `// Sinth compiled runtime
${forDataJS}
${functionsJS ? functionsJS + "\n" : ""}${helpers}
${exprArrayJS}
${memoVarDecls}
${varLines}
${renderFunc}`;
  }

  // ../sinth-package/src/browser/compile.ts
  function compileSinth(source) {
    const tokens = new Lexer(source, "<script>").tokenize();
    const parser = new Parser(tokens, "<script>");
    const file = parser.parse();
    if (!file.isPage) return null;
    const hash = fnv1a("<script>" + Math.random().toString(36));
    const instanceId = "s" + Math.random().toString(36).slice(2, 8);
    const ctx = {
      allDefs: /* @__PURE__ */ new Map(),
      functionDefs: file.functions,
      customEls: /* @__PURE__ */ new Map(),
      cssLinks: [],
      jsLinks: [],
      scopeHash: hash,
      pageFile: "<script>",
      extraCSS: [],
      mixedBlocks: [],
      mixedCounter: 0,
      logicBlocks: [],
      ifIdCounter: 0,
      exprRegistry: [],
      exprMap: /* @__PURE__ */ new Map(),
      varDecls: file.varDecls,
      actionButtons: [],
      diffingEnabled: false,
      declaredVars: new Set(file.varDecls.map((v) => v.name)),
      namespace: instanceId
    };
    const bodyHTML = file.uses.map((u) => renderCompUse(u, ctx, /* @__PURE__ */ new Map(), 0)).join("\n");
    const pageCSS = file.styles.map((s) => processStyleBlock(s, hash, /* @__PURE__ */ new Map())).join("\n");
    const assignedVars = /* @__PURE__ */ new Set();
    for (const v of file.varDecls) {
      if (v.value) assignedVars.add(v.name);
    }
    const runtime = buildRuntime({
      varDecls: file.varDecls,
      bodyHTML,
      logicBlocks: ctx.logicBlocks,
      mixedBlocks: ctx.mixedBlocks,
      assignedVars,
      exprRegistry: ctx.exprRegistry,
      sharedRuntime: false,
      functionsJS: "",
      namespace: instanceId
    });
    const js = typeof runtime === "string" ? runtime : runtime.page;
    const scopedJs = js;
    return {
      html: `<div data-s="${hash}">${bodyHTML}</div><style>${pageCSS}</style>`,
      js: scopedJs
    };
  }
  return __toCommonJS(compile_exports);
})();
return { compile: SinthBrowser.compileSinth }; })();
