# Wizmetria

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://tok.github.io/wizmetria-web/)
[![Language](https://img.shields.io/badge/language-ClojureScript-blue.svg)](https://clojurescript.org/)
[![Framework](https://img.shields.io/badge/framework-Reagent-orange.svg)](https://reagent-project.github.io/)

[Live Website](https://tok.github.io/wizmetria-web/)

Wizmetria is a web application that detects alphabetical circular symmetry in words. It arranges the alphabet in a circle and checks if a word has symmetry when its letters are connected in sequence.

## Table of Contents
- [What is Alphabetical Circular Symmetry?](#what-is-alphabetical-circular-symmetry)
- [Examples](#examples)
  - [Visualization of Example Words](#visualization-of-example-words)
  - [More Examples](#more-examples)
- [Running the Application](#running-the-application)
- [Technology Stack](#technology-stack)
- [Technical Implementation](#technical-implementation)
- [How It Works](#how-it-works)
- [Vibe Coded By](#vibe-coded-by)
- [Original Sources](#original-sources)
- [Contributing](#contributing)

## What is Alphabetical Circular Symmetry?

Alphabetical circular symmetry occurs when the letters of a word, when mapped on a circular alphabet, create a pattern that's symmetric across one of 13 possible axes of symmetry.

Each axis always goes through the center of the circle, but can be:
- Between two letters (A-N, B-O, etc.)
- Between the space of two letters (AB-NO, BC-OP, etc.)

The Wizmetria Algorithm checks if a word has symmetry when its letters are connected on a circle defined by the alphabet:

```
    YZ A BC
  X         D
VW           EF
U             G
T             H
SR           JI
  Q         K
    PO N ML
```

There are 2 * 13 possible axes of symmetry. An axis always goes through the center of the circle, but can be between two letters A-N or between the space of two letters AB-NO.

## Examples

Famous examples with symmetry include:
- WIZARD (MN-ZA axis)
- JAGUAR (A-N axis)
- METAPH (JK-WX axis)

### Visualization of Example Words

#### WIZARD
```
          Z--A  B           
       Y   \/      C        
    X      / '.      /D     
  W\      /    \   .'   E   
 V   '-. /      .-'      F  
       .''-.  .'  '.        
U     /    .-''.    \     G 
T    /   .'     '-.  '.   H 
    / .-'           ''..\   
 S .-'                  \I  
  R/                    J   
    Q                 K     
       P           L        
          O  N  M
```

#### JAGUAR
```
          Z  A  B           
       Y  .-' '-.  C        
    X   .' /   \ '.   D     
  W   .'  /     \  '.   E   
 V  .'   /       \   '.  F  
  .'   .'         '.   '.   
U-----/-------------------G 
T    /               \    H 
    /                 \     
 S /                   \ I  
  R                     J   
    Q                 K     
       P           L        
          O  N  M
```

#### METAPH
```
          Z  A  B           
       Y   /       C        
    X    .' /         D     
  W    .'             .'E   
 V   .'    /    ..''/  / F  
   .'     ..''/       /     
U / ..''/ /           /   G 
T.'                  /   /H 
         /          ..''    
 S               .-'     I  
  R     /     .-' /     J   
    Q     .-'     /   K     
       P/        / L        
          O  N  M
```

### More Examples

#### Words with Six or More Letters
- A-N axis: JAGUAR, MAOMAO, PALPAL, UNSING, UNSEWING
- AB-NO axis: VOTING
- B-O axis: PISKUN, PURLIN
- DE-QR axis: PUTONS, UNSPUN
- E-R axis: FIDFAD, REDEFER
- G-T axis: BEMAIL, JIGGED, OXYOPY, TICKET
- HI-UV axis: CHAPIN, PHOBIA
- IJ-VW axis: ANGLER, DORADO
- J-W axis: FOGMEN, LAKISH
- JK-WX axis: AGLINT, METAPH, PINGLE, PLATIE, TAPETA, BATHMATS
- KL-XY axis: CRINET, DEHORS, DIVANS, HERERO, PINING, ROTCHE, CROTCHET
- L-Y axis: EDUCTS, RECUSF, SECLUSE
- LM-YZ axis: EFTEST, TRUDGE
- M-Z axis: FLUENT, HUMMER, NETFUL, VULNED
- MN-ZA axis: HOVELS, WIZARD

#### Words with Five Letters
- A-N axis: ALAPA, ANANA, MUNGO, SANAI
- C-P axis: MUCKS
- D-Q axis: CADGE
- E-R axis: BARIH, EVENE, JEREZ
- F-S axis: KAFKA
- G-T axis: MAGMA, ZYGON
- J-W axis: BOWER, HOWEL
- L-Y axis: KILOM
- M-Z axis: FUMET, LUMEN

#### Words with Four Letters
- A-N axis: AGUA, ANNA, ASIA, GUGU, HEWT, HIST, INNS, ISIS, LISP, MISO, MOMO, OGUM, PAAL, SISI, SUGI, WISE
- AB-NO axis: BABA, NITO, OXEN, TITI, UMPH, YOND
- B-O axis: BOOB, CACA, EYEY, KEYS, NOOP, OOOO, ORLO, POON, QUIM, ROOL, SOOK
- BC-OP axis: ADAD, DADA, JUJU, LOPS, VLSI
- C-P axis: ACCE, BEAD, KUKU, SWIM, WIWI
- CD-PQ axis: HORY, HULY, LULU, MIXT, MORT, MULT, SORN, UROL, XXII
- D-Q axis: CAGE, DECD, GAGA, ODDS, RUMP, SOSO, SUMO, VVLL
- DE-QR axis: HAHA, POTS, PUNS, SNUP, STOP, TOTO, TUNO, ZUNI
- E-R axis: ARRI, FEED, JEEZ, POUT, QUOS, TOUP, VEEN, WEEM
- EF-RS axis: BIBI, SPUR, SUPR
- F-S axis: DICH, KAKA, ROWT, SICS, SOWS
- FG-ST axis: BALK, DALI, FLAG, HALE, HIDE, ONYX, RURU
- G-T axis: LAMB, MAMA, SUSU, YOYO
- GH-TU axis: ANAN, DANK, HANG, JANE, KAND, NANA, TUTU
- H-U axis: AGIO, HIGH, KOAE, LOAD
- HI-UV axis: BLEO, BOBO, CHIN, ENCL, INCH, LOBE, MELD, PAPA, PLEA
- I-V axis: COCO, JOCH, XYST
- IJ-VW axis: ADOR, ARAR, CARP, CRAP, DODO, EARN, FARM, GENL, HARK, LENG, NARE, NENE, NODE, ORAD, PARC, RARA
- J-W axis: ARBS, BOER, GEOM, KIKI, LASH, OKIE, SASA, SIKA
- JK-WX axis: ALIT, BATS, FILO, ITAL, LATI, MATH, PATE, PILE, PLIE, STAB, TEPA
- K-X axis: ARDU, BUAT, CAUS, COGS, GOGO, GUAO, QUAE, REQD
- KL-XY axis: CERT, DINS, DUBS, ERER, FREQ, HERO, HOHO, ISDN, JERM, KERL, KOHL, LINK, NAVI, PING, RAVE, RINE, RUBE, SCTD, SHOD, SIND, TINC, VERA, VINA
- L-Y axis: DAWT, DOIT, DUCT, ECUS, ELLS, ESES, JAWN, JOIN, MAWK, MUCK, WAWA, YAWY
- LM-YZ axis: EPIT, FETS, FUDS, JUDO, PIPI, SPIF, TETE, TIPE
- M-Z axis: GAYS, HUER, KAYO, KOKO, MEUM, MMMM, QUEI, YAYA, YWCA
- MN-ZA axis: BEVY, GIRT, GRIT, HOLS, IZAR, KLOP, LEVO, POLK, TRIG, VIRE, VOLE, WIRD, WOLD, ZIRA

## Try It Yourself

Visit the [live website](https://tok.github.io/wizmetria-web/) to try detecting symmetry in your own words!

1. Type a word in the input field
2. See instant visualization of the word on the alphabet circle
3. Get information about any symmetry axes detected

## Running the Application

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/tok/wizmetria-web.git
cd wizmetria-web

# Install dependencies
npm install
```

### Development
To run the application in development mode:

```bash
npm run dev
```

This will start a local development server at http://localhost:8080.

## Building for Production

To build the application for production:

```bash
npm run build
```

## Technology Stack

- ClojureScript - Functional programming language that compiles to JavaScript
- Reagent - ClojureScript interface to React for building reactive UIs
- Re-frame - Event-driven functional framework for Reagent applications
- Shadow-CLJS - ClojureScript build tooling and dependency management
- Tailwind CSS - Utility-first CSS framework for rapid UI development

## Technical Implementation

### Symmetry Detection Logic

The symmetry detection algorithm uses mathematical properties of alphabetical positions:

1. **Letter Ordinal Values**: Each letter is assigned a numerical value (A=1, B=2, etc.)
2. **Mirror Symmetry**: For each letter pair across an axis, if the sum of their ordinal values is constant, the word has mirror symmetry
3. **Rotational Symmetry**: For each letter, if there's a corresponding letter at position (ordinal + 13) % 26, the word has rotational symmetry
4. **Axis Calculation**: The algorithm determines which of the 26 possible axes (A-N through MN-ZA) the symmetry occurs on

### Async Processing for Large Files

The text analysis feature implements an asynchronous processing pipeline:

1. Files are read in chunks to prevent UI freezing
2. Text processing is divided into multiple steps with progress indicators
3. Each step is processed with small timeouts to keep the UI responsive
4. Results are calculated and displayed incrementally

### Interactive Visualization

The word visualization component:

1. Renders the alphabet in a circular layout
2. Maps letters of input words to their positions
3. Draws connections between consecutive letters
4. Highlights symmetry axes and letter pairings
5. Uses SVG for crisp, responsive graphics

## How It Works

The algorithm works by:

1. Arranging the alphabet in a circle (A through Z)
2. For each word:
   - Convert to uppercase and remove non-alphabetic characters
   - Map each letter to its position on the circle
   - Check if the pattern formed by connecting consecutive letters has symmetry across any of the 26 possible axes
   - The 26 axes correspond to either between two letters (A-N, B-O, etc.) or between spaces (AB-NO, BC-OP, etc.)

The symmetry detection uses an elegant mathematical approach where we check if the sum of the ordinal values of paired letters (with A=1, B=2, etc.) across a potential axis of symmetry is constant.

### Types of Symmetry

Wizmetria detects two types of symmetry:

1. **Mirror Symmetry** - When the word creates a pattern that can be mirrored across an axis
2. **Rotational Symmetry** - When the word creates a pattern that has rotational symmetry around the center

## Vibe Coded By

This application was "vibe coded" by Claude 3.7 Sonnet, an AI assistant from Anthropic. The concept of "vibe coding" involves creating code that not only functions correctly but also has a cohesive aesthetic and user experience "vibe" - in this case, a mystical, symmetry-focused exploration of language patterns.

## Original Sources

This web application is based on the original algorithm developed here:
- Original code: https://repl.it/@Zirteq/Wizmetria
- Wordlists used for discovery: 
   - https://www.gutenberg.org/files/3201/files/SINGLE.TXT
   - https://github.com/first20hours/google-10000-english

## Contributing

Contributions are welcome! Feel free to:
- Add more examples of symmetric words
- Improve the visualization
- Optimize the algorithm
- Add more features

To contribute:
1. Fork the repository
2. Create your feature branch
3. Submit a pull request 

## License

This project is open source and available under the [MIT License](LICENSE). 