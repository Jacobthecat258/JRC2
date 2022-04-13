<link rel="stylesheet" href=".md.css">

# Todo

 - Todos on the createObject function (in comment)

 - <done>Make a JRC2 github repo<done>

 - <done>Fix bugs and make basic release</done>
 
 - <done>Add collision support

 - Todos in the comment at the bottom of the code

 - <done>Change from a function to a class</done>

 - <done>Fix typos</done>

 - Add 3D support (also change name to jrc for J HTML Rendering Context, dropping 2D as it can also support 3D, not only 2D)

 - Add support for clicks as well as detecting if L, R, M, 1, or 2, via event.something, working as an event but maybe in the future also just an object set durring jrc2context.tick(); (at this time also add j2c.tick function)

 - Add support for detecting gamepad inputs (this time a function returning navigator.getGamepads(), basicly as an alias, and so that means no setinterval or anything)

 ## Notes

 - jrc2context.tick is a function used to update things such as gamepad inputs. An example of this is `jrc2.createRenderer().tick()`, returning an object {} with the values such as gamepad inputs.

 - j2c stands for jrc2context

 - j2 stands for jrc2

 - jrc2 stands for J HTML rendering context