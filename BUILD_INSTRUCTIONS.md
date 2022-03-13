
# Overview

This document explains how to build the web version of SuperTux Advance.

# 1) Update the SuperTux Advance source code

The `SuperTux-Advance-source-code` folder contains the SuperTux Advance source code.

You can make any changes you want to the game (e.g. updating to a newer version).

Note that as part of the web port, specific additional changes have been made to this codebase in order to accommodate the web version. (For instance, we remove the "Quit Game" option since on the web version, you quit by simply closing the browser tab.) Some of these changes are mandatory in order to make the web version work properly.

If you replace the existing codebase, you should ensure that these changes are preserved. These changes are all marked with the string "webBrowserVersionChange", so you can find these changes by searching the SuperTux Advance codebase for this string.

# 2) Update Squirrel.g4

`web-version-source-code/SquirrelLanguageGrammar/Squirrel.g4` is a file defining an ANTLR4 grammar that can parse the Squirrel programming language.

The grammar isn't fully complete, but has enough functionality to properly parse the SuperTux Advance source code. If new changes are made to the SuperTux Advance codebase (e.g. using Squirrel syntax that was previously not used), it may be necessary to update `Squirrel.g4` to recognize the new syntax.

If you end up making no changes to `Squirrel.g4`, you can continue to step 3.

If you do make changes to `Squirrel.g4`, you need to run ANTLR in order to re-create the Squirrel lexer/parser.

* ANTLR is a Java library, so ensure Java is installed.
* Run: `java -jar "./web-version-source-code/SquirrelLanguageGrammar/antlr-4.9.3-complete.jar" -Dlanguage=CSharp -visitor -o "./web-version-source-code/WebVersionGenerator/SquirrelLanguageTranspiler/" "./web-version-source-code/SquirrelLanguageGrammar/Squirrel.g4"`

This will create 6 new files in the `web-version-source-code/WebVersionGenerator/SquirrelLanguageTranspiler/` folder.

* SquirrelBaseListener.cs
* SquirrelBaseVisitor.cs
* SquirrelLexer.cs
* SquirrelListener.cs
* SquirrelParser.cs
* SquirrelVisitor.cs

You may also need to update `web-version-source-code/WebVersionGenerator/SquirrelLanguageTranspiler/SquirrelTranspilerVisitor.cs` to handle whatever changes were made to the grammar. (This file takes the parsed Squirrel code and outputs corresponding javascript code.)
 
# 3) Compile the WebVersionGenerator program

`web-version-source-code/WebVersionGenerator` is a program that creates the web version of SuperTux Advance. Since this program is written in C#, ensure .NET is installed.

Compile this program by running: `MSBuild.exe "./web-version-source-code/WebVersionGenerator/WebVersionGenerator.sln"`

This will create the file `web-version-source-code/WebVersionGenerator/WebVersionGenerator/bin/Debug/WebVersionGenerator.exe`. 

# 4) Execute `WebVersionGenerator.exe`

Run `web-version-source-code/WebVersionGenerator/WebVersionGenerator/bin/Debug/WebVersionGenerator.exe`. This program will create various files in `web-version-source-code/output`.

# 5) Consider changing the `localStorageGuid`

In `web-version-source-code/output/data/localStorageFileSystem.js`, consider changing the value of `localStorageGuid` to a new value.

The `localStorageGuid` is used as a namespace for storing save data. Therefore, if two builds use the same `localStorageGuid`, the save data will be shared between them.

If breaking changes to the save data format were made (with no corresponding migration code), then `localStorageGuid` should be updated. The value can also be updated to allow the user to play two different versions of the game, each maintaining their own save data.

# 6) Verify that the web version works

Execute the resulting web version by running `web-version-source-code/output/SuperTux-Advance-web-version.html` in a web browser.

