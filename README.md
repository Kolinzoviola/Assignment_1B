# JavaScript Practice: Problems 1–5

Beginner-friendly solutions to the first five practice problems from the JavaScript class notes (slides 59–63). Every line has a comment explaining what it does and why.

| # | Problem | File | Concepts |
|---|---------|------|----------|
| 1 | FizzBuzz | `solutions/01-fizzbuzz.js` | `%` operator, conditionals, type conversion |
| 2 | Count Occurrences | `solutions/02-count-occurrences.js` | `for...of`, `===`, counter variable |
| 3 | Reverse a Number | `solutions/03-reverse-number.js` | type conversion, `for` loop, string indexing, `Number()` |
| 4 | Temperature Classifier | `solutions/04-temperature-classifier.js` | `if / else if / else`, comparison operators |
| 5 | Find the Largest Number | `solutions/05-find-largest.js` | comparison operators, conditionals, variables |

## Requirements

- [Node.js](https://nodejs.org) (any recent LTS version)
- VS Code (optional, but recommended)

## How to run

Open the folder in VS Code, then open the terminal (`` Ctrl + ` ``) and run:

```bash
# Run all five problems at once
npm start

# Or run one problem at a time
npm run p1
npm run p2
npm run p3
npm run p4
npm run p5

# Or call Node directly
node solutions/01-fizzbuzz.js
```

## Expected output

```
=== Problem 1: FizzBuzz ===
Fizz
Buzz
FizzBuzz
7
string

=== Problem 2: Count Occurrences ===
2
3
0

=== Problem 3: Reverse a Number ===
4321
5
7
21
number

=== Problem 4: Temperature Classifier ===
Freezing
Cold
Cold
Cool
Cool
Warm
Warm
Hot

=== Problem 5: Find the Largest Number ===
7
10
-1
```

## Pushing to GitHub

1. Create a new, empty repository on GitHub (don't add a README there, since this project has one).
2. In the VS Code terminal, inside this folder:

```bash
git init
git add .
git commit -m "Solve JavaScript problems 1-5 with beginner comments"
git branch -M main
git remote add origin https://github.com/<your-username>/js-problems-1-to-5.git
git push -u origin main
```

## Folder structure

```
js-problems-1-to-5/
├── solutions/
│   ├── 01-fizzbuzz.js
│   ├── 02-count-occurrences.js
│   ├── 03-reverse-number.js
│   ├── 04-temperature-classifier.js
│   └── 05-find-largest.js
├── run-all.js
├── package.json
├── .gitignore
└── README.md
```
