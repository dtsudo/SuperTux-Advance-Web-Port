
# Overview

This is a port of https://github.com/KelvinShadewing/supertux-advance so that it can run in a web browser.

# How to execute the program

Open the `SuperTux-Advance-web-version.html` file in a web browser.

Controls:

* Movement: Arrow keys
* Jump: Z
* Shoot: X
* Alt fire: C
* Special: Left shift
* Item swap: A
* Pause: Esc

# Licensing

The code that generates the web version (the files under `web-version-source-code`) is licensed under GNU Affero General Public License v3.0.

However, note that it uses dependencies and other assets that are licensed under different licenses.

* See the `SuperTux-Advance-source-code` folder for a copy of the SuperTux Advance source code, including its licensing.
* The ANTLR library (https://www.antlr.org/) is used as part of transpiling SuperTux Advance's source code (written in the Squirrel programming language) into javascript. See `web-version-source-code/SquirrelLanguageGrammar/antlr license.txt` for ANTLR's licensing.

# How to build the source code

See `BUILD_INSTRUCTIONS.md` for instructions.
