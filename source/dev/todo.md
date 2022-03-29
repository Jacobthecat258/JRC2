# Todo

 - Todos on the createObject function (in comment)

 - Make a HRC2 github repo

 - Fix bugs and make basic release

 - Add 3D support (also change name to hrc for HTML Rendering Context, dropping 2D as it can also support 3D, not only 2D)

 - Add support for clicks as well as detecting if L, R, M, 1, or 2, via event.something, working as an event but maybe in the future also just an object set durring hrc2context.tick(); (at this time also add h2c.tick function)

 - Add support for detecting gamepad inputs (this time a function returning navigator.getGamepads(), basicly as an alias, and so that means no setinterval or anything)

 ## Notes

 - hrc2context.tick is a function used to update things such as gamepad inputs. An example of this is `hrc2.createRenderer().tick()`, returning an object {} with the values such as gamepad inputs.

 - h2c stands for hrc2context

 - h2 stands for hrc2