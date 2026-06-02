const fs = require('fs');

function patch(file) {
  let content = fs.readFileSync(file, 'utf8');
  const replacements = {
    'bg-\\[#020617\\]': 'bg-[#F7F3E9]',
    'text-amber-500': 'text-[#D4AF37]',
    'text-white': 'text-[#262626]',
    'bg-slate-900/40': 'bg-white/40',
    'border-slate-800/80': 'border-[#262626]/15',
    'border-slate-800': 'border-[#262626]/10',
    'text-slate-400': 'text-[#262626]/70',
    'bg-amber-500/5': 'bg-[#D4AF37]/10',
    'border-amber-500/20': 'border-[#D4AF37]/20',
    'bg-amber-500': 'bg-[#D4AF37]',
    'text-slate-100': 'text-[#262626]',
    'text-slate-300': 'text-[#262626]/80',
    'bg-slate-950/80': 'bg-white/60',
    'text-slate-500': 'text-[#262626]/50',
    'stroke="#fbbf24"': 'stroke="#D4AF37"',
    '--gradient-terracotta': '--gradient-terracota',
    '--shadow-terracotta': '--shadow-terracota',
    'transform-gpu': '',
    'will-change-transform': '',
    '\\[backface-visibility:hidden\\]': '',
    '\\[contain:layout_paint\\]': 'contain-paint'
  };

  for (const [key, value] of Object.entries(replacements)) {
    content = content.replace(new RegExp(key.replace(/\//g, '\\/'), 'g'), value);
  }
  fs.writeFileSync(file, content);
}

patch('src/components/OfferBox.tsx');
patch('src/components/ConversionStack.tsx');
