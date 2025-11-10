# Bind It! - Angular Event Binding Assignment

## Project Overview

This Angular application demonstrates event binding, component communication, and dynamic component creation. The project implements a number game where a GameControl component emits incrementing numbers every second, and separate Odd and Even components display these numbers with distinct styling.

## Project Requirements

### Components Created

#### 1. **GameControl Component**
- Create three new components: GameControl, Odd and Even
- The GameControl Component should have buttons to start and stop the game
- When starting the game, an event (holding an incrementing number) should get emitted each second (ref = setInterval())
- The event should be listenable from outside the component
- When stopping the game, no more events should get emitted (clearInterval(ref))

#### 2. **Odd Component**
- A new Odd component should get created for every odd number emitted
- Simply output Odd - NUMBER in the component
- Style the element (e.g. paragraph) holding your output text differently in the Odd component

#### 3. **Even Component**
- A new Even component should get created for every even number emitted
- Simply output Even - NUMBER in the component
- Style the element (e.g. paragraph) holding your output text differently in the Even component

## Implementation Details

### GameControl Component
- **Location**: `src/app/game-control/`
- **Features**:
  - Emits an `@Output() numberEmitted` event
  - Increments a counter every second using `setInterval()`
  - Provides `startGame()` method to begin emitting numbers
  - Provides `stopGame()` method to stop emitting numbers and clear the interval
  - Styled buttons for user control

### Odd Component
- **Location**: `src/app/odd/`
- **Features**:
  - Accepts a number via `@Input() number`
  - Displays "Odd - {number}" format
  - Red background (#f44336) with white text styling
  - Bold, prominent display with padding and border-radius

### Even Component
- **Location**: `src/app/even/`
- **Features**:
  - Accepts a number via `@Input() number`
  - Displays "Even - {number}" format
  - Green background (#4caf50) with white text styling
  - Bold, prominent display with padding and border-radius

### App Component
- **Location**: `src/app/`
- **Features**:
  - Imports and uses all three components
  - Maintains an array of emitted numbers in a signal
  - Listens to the `numberEmitted` event from GameControl
  - Dynamically creates Odd or Even components based on number parity
  - Uses Angular's `@for` directive for conditional rendering

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## How to Use the Application

1. **Start the Game**: Click the "Start Game" button in the GameControl section
2. **Watch Numbers Appear**: Numbers will begin incrementing every second (1, 2, 3, 4, etc.)
3. **Observe Styling**: 
   - Odd numbers appear with a red background
   - Even numbers appear with a green background
4. **Stop the Game**: Click the "Stop Game" button to halt the number emission
5. **View History**: All emitted numbers remain visible in the numbers container

## Technical Stack

- **Framework**: Angular 20+
- **Language**: TypeScript
- **Styling**: CSS
- **Components**: 3 custom components (GameControl, Odd, Even)
- **State Management**: Angular Signals

## Key Concepts Demonstrated

- **Event Binding**: Using `(click)` to trigger component methods
- **@Output Decorators**: Emitting custom events from components
- **@Input Decorators**: Passing data to child components
- **Event Listeners**: Parent component listening to child events
- **Intervals**: Using `setInterval()` and `clearInterval()` for timed operations
- **Conditional Rendering**: Using `@if` and `@else` for component selection
- **Loop Rendering**: Using `@for` directive for displaying lists
- **Signals**: Angular's reactive state management

## File Structure

```
src/
├── app/
│   ├── app.ts                          # Root component
│   ├── app.html                        # Root template
│   ├── app.css                         # Root styles
│   ├── game-control/
│   │   ├── game-control.ts             # GameControl component
│   │   ├── game-control.html           # GameControl template
│   │   └── game-control.css            # GameControl styles
│   ├── odd/
│   │   ├── odd.ts                      # Odd component
│   │   ├── odd.html                    # Odd template
│   │   └── odd.css                     # Odd styles
│   └── even/
│       ├── even.ts                     # Even component
│       ├── even.html                   # Even template
│       └── even.css                    # Even styles
└── main.ts                             # Application entry point
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
