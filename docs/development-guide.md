# Wizmetria Development Guide

This guide provides information for developers who want to contribute to or extend the Wizmetria application.

## Development Environment Setup

### Prerequisites

1. **Node.js** (v16 or higher)
2. **npm** (v7 or higher)
3. **Java Development Kit** (JDK 11 or higher, required for ClojureScript)

### Setting Up Local Development Environment

1. Clone the repository:
   ```
   git clone https://github.com/Tok/wizmetria-web.git
   cd wizmetria-web
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:8700](http://localhost:8700)

### Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reloading |
| `npm run build` | Build production version |
| `npm run release` | Create release build with optimizations |
| `npm run clean` | Clean build artifacts |
| `npm run deploy` | Deploy to GitHub Pages |

## Project Structure

```
wizmetria-web/
├── src/
│   └── main/
│       └── wizmetria_web/
│           ├── core.cljs           # Application entry point
│           ├── sym.cljs            # Core symmetry algorithms
│           ├── processing/         # Processing components
│           │   ├── core.cljs       # Core processing utilities
│           │   ├── events.cljs     # Event handlers
│           │   ├── grid.cljs       # Grid visualization
│           │   ├── i18n.cljs       # Internationalization 
│           │   ├── pipeline.cljs   # Text processing pipeline
│           │   ├── symmetry.cljs   # Symmetry detection
│           │   ├── text.cljs       # Text processing
│           │   └── worker.cljs     # Web worker implementation
│           └── views/              # UI components
│               ├── analysis.cljs   # Analysis view
│               ├── error.cljs      # Error handling
│               ├── explanation.cljs # Explanation view
│               ├── layout.cljs     # Main layout
│               ├── stats.cljs      # Statistics view
│               └── symmetry.cljs   # Symmetry visualization
├── public/                         # Static assets
├── js/                             # JavaScript bridge files
├── docs/                           # Documentation
├── deploy.ps1                      # PowerShell deployment script
├── deploy.sh                       # Bash deployment script
├── deploy.bat                      # Windows batch deployment script
└── shadow-cljs.edn                 # ClojureScript build configuration
```

## Architecture Overview

Wizmetria follows a clean architecture based on the Re-frame pattern:

1. **Views**: React/Reagent components that render the UI
2. **Events**: Define how the application responds to user actions
3. **Subscriptions**: Access application state reactively
4. **Effects**: Handle side effects (file I/O, etc.)
5. **DB**: Centralized application state

See `docs/architecture.md` for detailed explanation of the architecture.

## Core Workflows

### Adding a New Feature

1. **Determine feature scope**: Define what functionality to add
2. **Extend the DB schema**: Update the initial DB in `core.cljs` if needed
3. **Add events**: Create event handlers in appropriate namespaces
4. **Add subscriptions**: Create subscriptions for new state data
5. **Add UI components**: Create new components or extend existing ones
6. **Add tests**: Create tests for new functionality

### Implementing a New Symmetry Detection Algorithm

1. Add a new function to `sym.cljs`:
   ```clojure
   (defn my-new-symmetry-algorithm [word]
     ;; Algorithm implementation
     )
   ```

2. Register the algorithm in the `evaluate` function:
   ```clojure
   (defn evaluate [words]
     (->> 26 range 
          (map #(find-sym % words)) 
          (concat (map #(my-new-symmetry-algorithm %) words))
          filter-results))
   ```

3. Create visualization support in the `grid.cljs` if needed:
   ```clojure
   (defn visualize-my-new-symmetry [word]
     ;; Visualization implementation
     )
   ```

4. Update UI components to display the new symmetry type.

## Testing

### Running Tests

```
npm run test
```

### Writing Tests

Create test files in the `test` directory with the same namespace structure as the source files.

Example:
```clojure
(ns wizmetria-web.sym-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [wizmetria-web.sym :as sym]))

(deftest symmetry-detection-test
  (testing "Mirror symmetry detection"
    (is (= true (sym/mirror-symmetric? "WIZARD"))))
  
  (testing "Rotational symmetry detection"
    (is (= false (sym/rotational-symmetric? "WIZARD")))))
```

## Performance Considerations

1. **Large Text Processing**:
   - Always use the chunked processing approach for large files
   - Consider enabling Web Workers for parallel processing

2. **Rendering Optimization**:
   - Use memoization for expensive calculations
   - Implement shouldComponentUpdate for complex components

3. **Memory Management**:
   - Be careful with large data structures
   - Clear worker references when no longer needed

## Internationalization

To add a new language:

1. Add translation keys to `processing/i18n.cljs`:
   ```clojure
   (def translations
     {:en {:app-title "Wizmetria"
           :symmetry-results "Symmetry Results"
           ;; ... more keys
           }
      :es {:app-title "Wizmetria"
           :symmetry-results "Resultados de Simetría"
           ;; ... more keys
           }
      ;; Add your new language here
      :fr {:app-title "Wizmetria"
           :symmetry-results "Résultats de Symétrie"
           ;; ... more keys
           }})
   ```

2. Add language to available-languages list:
   ```clojure
   (def available-languages [:en :es :fr])
   ```

## Deployment

The application can be deployed to GitHub Pages using one of the deployment scripts:

- Windows PowerShell: `./deploy.ps1`
- Windows Command: `deploy.bat`
- Linux/macOS: `./deploy.sh`

These scripts:
1. Create a production build
2. Checkout the gh-pages branch
3. Remove source files
4. Copy build assets
5. Commit and push changes

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Make sure JDK is installed and JAVA_HOME is set
   - Check for syntax errors in ClojureScript files
   - Clear node_modules and reinstall dependencies

2. **Development Server Issues**:
   - Check port conflicts (default: 8700)
   - Clear .shadow-cljs directory

3. **Deployment Issues**:
   - Ensure Git is installed and configured
   - Verify you have write permissions to the repository

## Style Guide

### ClojureScript Style Conventions

1. **Naming**:
   - Use kebab-case for function and variable names
   - Use namespaced keywords for app-db keys

2. **Function Organization**:
   - Group related functions together
   - Order functions from low-level to high-level

3. **Comments**:
   - Add docstrings to all public functions
   - Document complex algorithms with inline comments

4. **Component Structure**:
   - Keep components focused on a single purpose
   - Extract reusable parts into separate components

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for your changes
5. Ensure all tests pass
6. Submit a pull request

Follow the existing code style and include documentation for any new features.

## Resources

- [ClojureScript Documentation](https://clojurescript.org/reference/documentation)
- [Reagent Documentation](https://reagent-project.github.io/)
- [Re-frame Documentation](https://day8.github.io/re-frame/re-frame/)
- [Shadow-CLJS Documentation](https://shadow-cljs.github.io/docs/UsersGuide.html) 