const fs = require('fs');
const path = require('path');

const visDir = path.join(__dirname, '..', 'src', 'components', 'visualizers');

const replacements = [
  [ /কম্পোনেন্ট-ভিত্তিক/g, 'Component-based' ],
  [ /কম্পোনেন্টভিত্তিক/g, 'Component-based' ],
  [ /ভার্চুয়াল ডোম/g, 'Virtual DOM' ],
  [ /ভার্চুয়াল ডোম/g, 'Virtual DOM' ],
  [ /রিয়েল ডোম/g, 'Real DOM' ],
  [ /রিয়েল ডোম/g, 'Real DOM' ],
  [ /সাইড-এফেক্ট/g, 'Side Effect' ],
  [ /সাইড এফেক্ট/g, 'Side Effect' ],
  [ /ইন্টারঅ্যাক্টিভ/g, 'Interactive' ],
  [ /ইন্টার‍অ্যাক্টিভ/g, 'Interactive' ],

  [ /কম্পোনেন্টগুলোর/g, 'Components এর' ],
  [ /কম্পোনেন্টগুলোকে/g, 'Components কে' ],
  [ /কম্পোনেন্টগুলি/g, 'Components' ],
  [ /কম্পোনেন্টগুলো/g, 'Components' ],
  [ /কম্পোনেন্টের/g, 'Component এর' ],
  [ /কম্পোনেন্টকে/g, 'Component কে' ],
  [ /কম্পোনেন্টে/g, 'Component এ' ],
  [ /কম্পোনেন্টটি/g, 'Component টি' ],
  [ /কম্পোনেন্ট/g, 'Component' ],

  [ /প্রপসের/g, 'Props এর' ],
  [ /প্রপসকে/g, 'Props কে' ],
  [ /প্রপসে/g, 'Props এ' ],
  [ /প্রপস/g, 'Props' ],
  [ /প্রপ/g, 'Prop' ],

  [ /স্টেটের/g, 'State এর' ],
  [ /স্টেটকে/g, 'State কে' ],
  [ /স্টেটে/g, 'State এ' ],
  [ /স্টেট/g, 'State' ],

  [ /হুকগুলোর/g, 'Hooks এর' ],
  [ /হুকগুলো/g, 'Hooks' ],
  [ /হুকের/g, 'Hook এর' ],
  [ /হুককে/g, 'Hook কে' ],
  [ /হুকে/g, 'Hook এ' ],
  [ /হুক/g, 'Hook' ],

  [ /রি-রেন্ডারিং/g, 'Re-rendering' ],
  [ /রি-রেন্ডারের/g, 'Re-render এর' ],
  [ /রি-রেন্ডারে/g, 'Re-render এ' ],
  [ /রি-রেন্ডার/g, 'Re-render' ],
  [ /রেন্ডারিং/g, 'Rendering' ],
  [ /রেন্ডারের/g, 'Render এর' ],
  [ /রেন্ডারে/g, 'Render এ' ],
  [ /রেন্ডার/g, 'Render' ],

  [ /প্যারেন্টের/g, 'Parent এর' ],
  [ /প্যারেন্টকে/g, 'Parent কে' ],
  [ /প্যারেন্টে/g, 'Parent এ' ],
  [ /প্যারেন্ট/g, 'Parent' ],
  [ /চাইল্ডের/g, 'Child এর' ],
  [ /চাইল্ডকে/g, 'Child কে' ],
  [ /চাইল্ডে/g, 'Child এ' ],
  [ /চাইল্ড/g, 'Child' ],

  [ /ফাংশনের/g, 'Function এর' ],
  [ /ফাংশনকে/g, 'Function কে' ],
  [ /ফাংশনে/g, 'Function এ' ],
  [ /ফাংশন/g, 'Function' ],
  [ /অবজেক্টের/g, 'Object এর' ],
  [ /অবজেক্টকে/g, 'Object কে' ],
  [ /অবজেক্টে/g, 'Object এ' ],
  [ /অবজেক্ট/g, 'Object' ],
  [ /অ্যারের/g, 'Array এর' ],
  [ /অ্যারেকে/g, 'Array কে' ],
  [ /অ্যারেতে/g, 'Array তে' ],
  [ /অ্যারে/g, 'Array' ],
  [ /ডোম/g, 'DOM' ],
  [ /ব্রাউজারের/g, 'Browser এর' ],
  [ /ব্রাউজারকে/g, 'Browser কে' ],
  [ /ব্রাউজারে/g, 'Browser এ' ],
  [ /ব্রাউজার/g, 'Browser' ],
  [ /কলব্যাকের/g, 'Callback এর' ],
  [ /কলব্যাককে/g, 'Callback কে' ],
  [ /কলব্যাকে/g, 'Callback এ' ],
  [ /কলব্যাক/g, 'Callback' ],

  [ /রাউটিংয়ের/g, 'Routing এর' ],
  [ /রাউটিং/g, 'Routing' ],
  [ /রাউটারের/g, 'Router এর' ],
  [ /রাউটার/g, 'Router' ],
  [ /সার্ভারের/g, 'Server এর' ],
  [ /সার্ভারকে/g, 'Server কে' ],
  [ /সার্ভারে/g, 'Server এ' ],
  [ /সার্ভার/g, 'Server' ],
  [ /ক্লায়েন্টের/g, 'Client এর' ],
  [ /ক্লায়েন্টকে/g, 'Client কে' ],
  [ /ক্লায়েন্টে/g, 'Client এ' ],
  [ /ক্লায়েন্ট/g, 'Client' ],
  [ /প্যাকেজের/g, 'Package এর' ],
  [ /প্যাকেজকে/g, 'Package কে' ],
  [ /প্যাকেজে/g, 'Package এ' ],
  [ /প্যাকেজ/g, 'Package' ],

  [ /মিউটেটের/g, 'Mutate এর' ],
  [ /মিউটেট/g, 'Mutate' ],
  [ /মিউটেশনের/g, 'Mutation এর' ],
  [ /মিউটেশন/g, 'Mutation' ],
  [ /ইমিউটেবল/g, 'Immutable' ],
  [ /ইমিউটেবিলিটি/g, 'Immutability' ],

  [ /ইভেন্টের/g, 'Event এর' ],
  [ /ইভেন্টকে/g, 'Event কে' ],
  [ /ইভেন্টে/g, 'Event এ' ],
  [ /ইভেন্ট/g, 'Event' ],
  [ /সাইড-এফেক্ট/g, 'Side Effect' ],
  [ /সাইড এফেক্ট/g, 'Side Effect' ],
  [ /ফ্রেমওয়ার্কের/g, 'Framework এর' ],
  [ /ফ্রেমওয়ার্ক/g, 'Framework' ],
  [ /লাইব্রেরির/g, 'Library এর' ],
  [ /লাইব্রেরি/g, 'Library' ],
  [ /জাভাস্ক্রিপ্টের/g, 'JavaScript এর' ],
  [ /জাভাস্ক্রিপ্ট/g, 'JavaScript' ],
  [ /রিঅ্যাক্টের/g, 'React এর' ],
  [ /রিঅ্যাক্টকে/g, 'React কে' ],
  [ /রিঅ্যাক্টে/g, 'React এ' ],
  [ /রিঅ্যাক্ট/g, 'React' ]
];

const files = fs.readdirSync(visDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(visDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  replacements.forEach(([regex, replacement]) => {
    content = content.replace(regex, replacement);
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Cleaned terminology in visualizer: ${file}`);
});

console.log('All visualizers cleaned successfully!');
