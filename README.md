# Wizmetria

Wizmetria is a web application that detects alphabetical circular symmetry in words. It arranges the alphabet in a circle and checks if a word has symmetry when its letters are connected in sequence.

## What is Alphabetical Circular Symmetry?

Alphabetical circular symmetry occurs when the letters of a word, when mapped on a circular alphabet, create a pattern that's symmetric across one of 13 possible axes of symmetry.

Each axis always goes through the center of the circle, but can be:
- Between two letters (A-N, B-O, etc.)
- Between the space of two letters (AB-NO, BC-OP, etc.)

## Examples

Famous examples with symmetry include:
- WIZARD
- JAGUAR
- METAPH

## Running the Application

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

- ClojureScript
- Reagent (React wrapper)
- Shadow-CLJS (Build tooling) 