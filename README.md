## Musical Kaleidoscope

### Background

Musical Kaleidoscope is an interactive musical player which lets you visualize the songs your are playing on your keyboard through a Kaleidoscope. The purpose of this project is to make the experience of playing music more vibrant not just through sound but also through colors on the screen.  

### Functionality & MVP  

With the Musical Kaleidoscope, users will be able to:

- [ ] Play music using the keyboard
- [ ] Have the music visualized in the shape of a Kaleidoscope
- [ ] Have a constantly updating Kaleidoscope based on the key played

In addition, this project will include:

- [ ] The ability to play multiple notes at the same time and allow mixing of colors
- [ ] A production Readme

### Design

This app will consist of a single screen for the fractal with an optional pop up menu from the bottom to display the keys played and the colors associated with those keys. The design will be minimalistic to account for the extravagance of the Kaleidoscope, making for an optimal user experience.

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts,
- `howler.js` to implement the different sounds.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Easel.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to learning the `Easel.js` API.  First, build out the `Cell` object to connect to the `Board` object.  Then, use `board.js` to create and render at least the square grid, ideally all 3 grid types.  Build in the ability to toggle the live/dead states on click for each cell.  Goals for the day:

- Complete the `cell.js` module (constructor, update functions)
- Render a square grid to the `Canvas` using `Easel.js`
- Make each cell in the grid clickable, toggling the state of the square on click
- Do the same for triangular and hexagonal grids

**Day 3**: Create the automata logic backend.  Build out modular functions for handling the different grid types along with their unique neighbor checks and rule sets.  Incorporate the automata logic into the `Board.js` rendering.  Goals for the day:

- Export an `Automata` object with correct type and handling logic
- Have a functional grid on the `Canvas` frontend that correctly handles iterations from one generation of the game to the next


**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for game speed, stop, start, reset, and shape type
- Have a styled `Canvas`, nice looking controls and title
- If time: include buttons on the side to toggle the color scheme of the cells


### Bonus features

There are many directions this cellular automata engine could eventually go.  Some anticipated updates are:

- [ ] Fractal design along with Kaleidoscopic design
