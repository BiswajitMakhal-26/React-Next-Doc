import React, { useState } from 'react';
import { Copy, Check, FileCode, Terminal } from 'lucide-react';

// VS Code Syntax Tokenizer for JSX / JavaScript
function tokenizeLine(line) {
  // If whole line or trimmed starts with comment //
  const trimmed = line.trim();
  if (trimmed.startsWith('//')) {
    return [{ type: 'comment', text: line }];
  }

  // Token regex for strings, keywords, hooks, tags, attributes, brackets, numbers, operators
  const tokenRegex = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|<\/?[A-Za-z0-9_$.-]+|\b(?:import|export|default|from|function|return|const|let|var|if|else|switch|case|break|try|catch|finally|async|await|class|extends|new|typeof|interface|type)\b|\b(?:useState|useEffect|useContext|useReducer|useCallback|useMemo|useRef|useId|useTransition|useDeferredValue)\b|\b(?:true|false|null|undefined|NaN|Infinity)\b|\b\d+(?:\.\d+)?\b|\b[A-Za-z0-9_$]+(?=\s*\()|\b[A-Za-z0-9_$]+(?=\s*=)|\{|\}|\(|\)|\[|\]|=>|===|!==|==|!=|<=|>=|&&|\|\||[+\-*/%=<>!&|^~?:;,.])/g;

  const tokens = [];
  let lastIndex = 0;
  let match;

  while ((match = tokenRegex.exec(line)) !== null) {
    // Plain text before match
    if (match.index > lastIndex) {
      tokens.push({ type: 'plain', text: line.substring(lastIndex, match.index) });
    }

    const val = match[0];

    if (val.startsWith('//') || val.startsWith('/*')) {
      tokens.push({ type: 'comment', text: val });
    } else if (val.startsWith('"') || val.startsWith("'") || val.startsWith('`')) {
      tokens.push({ type: 'string', text: val });
    } else if (/^(?:import|export|default|from|function|return|const|let|var|if|else|switch|case|break|try|catch|finally|async|await|class|extends|new|typeof|interface|type)$/.test(val)) {
      tokens.push({ type: 'keyword', text: val });
    } else if (/^(?:useState|useEffect|useContext|useReducer|useCallback|useMemo|useRef|useId|useTransition|useDeferredValue)$/.test(val)) {
      tokens.push({ type: 'hook', text: val });
    } else if (/^(?:true|false|null|undefined|NaN|Infinity)$/.test(val)) {
      tokens.push({ type: 'boolean-null', text: val });
    } else if (/^\d+(?:\.\d+)?$/.test(val)) {
      tokens.push({ type: 'number', text: val });
    } else if (val.startsWith('<') || val.startsWith('</')) {
      tokens.push({ type: 'tag', text: val });
    } else if (val === '{' || val === '}') {
      tokens.push({ type: 'brace-curly', text: val });
    } else if (val === '(' || val === ')') {
      tokens.push({ type: 'brace-round', text: val });
    } else if (val === '[' || val === ']') {
      tokens.push({ type: 'brace-square', text: val });
    } else if (val === '=>') {
      tokens.push({ type: 'arrow', text: val });
    } else if (tokenRegex.lastIndex < line.length && line[tokenRegex.lastIndex] === '(') {
      tokens.push({ type: 'function-call', text: val });
    } else if (tokenRegex.lastIndex < line.length && line[tokenRegex.lastIndex] === '=') {
      tokens.push({ type: 'prop-attr', text: val });
    } else {
      tokens.push({ type: 'operator', text: val });
    }

    lastIndex = tokenRegex.lastIndex;
  }

  // Remainder plain text
  if (lastIndex < line.length) {
    tokens.push({ type: 'plain', text: line.substring(lastIndex) });
  }

  return tokens.length > 0 ? tokens : [{ type: 'plain', text: line }];
}

export default function CodeBlock({ code = '', language = 'jsx', filename }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-slate-800/90 bg-[#14161f] shadow-2xl shadow-black/60 font-mono">
      {/* VS Code Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f111a] border-b border-slate-800/80 text-xs select-none">
        {/* Window controls (Mac/VS Code style) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm"></span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1e2233] border border-slate-700/60 text-slate-200">
            <FileCode className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] font-medium tracking-wide">
              {filename || `Example.${language}`}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-widest uppercase bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 px-2 py-0.5 rounded font-bold">
            VS CODE DARK+
          </span>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 px-2.5 py-1 rounded transition duration-150 active:scale-95"
            title="Copy Code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Area with Line Numbers & Syntax Colored Spans */}
      <div className="p-4 overflow-x-auto text-[13px] leading-relaxed bg-[#14161f]">
        <table className="border-collapse w-full">
          <tbody>
            {lines.map((line, idx) => {
              const tokens = tokenizeLine(line);
              return (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  {/* Line Number */}
                  <td className="w-10 pr-4 text-right text-slate-600 select-none text-[11px] font-mono align-top pt-0.5">
                    {idx + 1}
                  </td>
                  {/* Code Line */}
                  <td className="pl-2 whitespace-pre font-mono">
                    {tokens.map((token, tIdx) => {
                      switch (token.type) {
                        case 'comment':
                          return (
                            <span key={tIdx} className="text-[#6a9955] italic">
                              {token.text}
                            </span>
                          );
                        case 'keyword':
                          return (
                            <span key={tIdx} className="text-[#c678dd] font-semibold">
                              {token.text}
                            </span>
                          );
                        case 'hook':
                          return (
                            <span key={tIdx} className="text-[#e5c07b] font-bold">
                              {token.text}
                            </span>
                          );
                        case 'string':
                          return (
                            <span key={tIdx} className="text-[#98c379]">
                              {token.text}
                            </span>
                          );
                        case 'tag':
                          return (
                            <span key={tIdx} className="text-[#4ec9b0] font-semibold">
                              {token.text}
                            </span>
                          );
                        case 'prop-attr':
                          return (
                            <span key={tIdx} className="text-[#9cdcfe]">
                              {token.text}
                            </span>
                          );
                        case 'function-call':
                          return (
                            <span key={tIdx} className="text-[#61afef]">
                              {token.text}
                            </span>
                          );
                        case 'number':
                          return (
                            <span key={tIdx} className="text-[#d19a66]">
                              {token.text}
                            </span>
                          );
                        case 'boolean-null':
                          return (
                            <span key={tIdx} className="text-[#e06c75] font-semibold">
                              {token.text}
                            </span>
                          );
                        case 'brace-curly':
                          return (
                            <span key={tIdx} className="text-[#ffd700] font-bold">
                              {token.text}
                            </span>
                          );
                        case 'brace-round':
                          return (
                            <span key={tIdx} className="text-[#38bdf8] font-bold">
                              {token.text}
                            </span>
                          );
                        case 'brace-square':
                          return (
                            <span key={tIdx} className="text-[#c084fc] font-bold">
                              {token.text}
                            </span>
                          );
                        case 'arrow':
                          return (
                            <span key={tIdx} className="text-[#569cd6] font-bold">
                              {token.text}
                            </span>
                          );
                        case 'operator':
                          return (
                            <span key={tIdx} className="text-[#abb2bf]">
                              {token.text}
                            </span>
                          );
                        default:
                          return (
                            <span key={tIdx} className="text-[#d4d4d4]">
                              {token.text}
                            </span>
                          );
                      }
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
