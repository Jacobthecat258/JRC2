var hrc2 = { //hrc2 = HTML Rendering Context 2D
    createRenderer: function() {
        var renderer = {
            internal: {
                objects: []
            },
            updateDisplay: function() {
                renderer.internal.canvas.width = renderer.resolutionx || renderer.width; //todo: fix 0 is false, so returns width, not resx
                renderer.internal.canvas.height = renderer.resolutiony || renderer.height;
                renderer.internal.canvas.style.width = (renderer.node.width) || (renderer.width + "px");
                renderer.internal.canvas.style.height = (renderer.node.height) || (renderer.height + "px");
                renderer.internal.ctx.clearRect(0, 0, renderer.internal.canvas.width, renderer.internal.canvas.height);
                for (i = 0; i < renderer.internal.objects.length; i++) {
                    let object = renderer.internal.objects[i];;
                    renderer.internal.ctx.fillStyle = object.texture;
                    renderer.internal.ctx.fillRect(object.x, object.y, object.sizex, object.sizey);
                }
            },
            createObject: function() { //todo: rotation, remove function, object id
                var o = {
                    x: 0,
                    y: 0,
                    texture: "#ff0000",
                    sizex: 10,
                    sizey: 10,
                    //rotationx: 0,
                    //rotationY: 0,
                    renderer: renderer
                };
                renderer.internal.objects.push(o);
                return o;
            }
        };
        renderer.node = document.createElement("hrc2_renderer");
        renderer.node.style.display = "inline-block";
        renderer.internal.canvas = document.createElement("canvas");
        renderer.internal.canvas.style.width = "0px";
        renderer.internal.canvas.style.height = "0px";
        renderer.internal.canvas.style.display = "block"
        renderer.node.append(renderer.internal.canvas);
        renderer.internal.canvas.append("Sorry, your browser is not supported. Try upgrading your browser, or use another.");
        renderer.internal.ctx = renderer.internal.canvas.getContext("2d");
        renderer.width = 100;
        renderer.height = 100;
        if (!renderer.internal.ctx) throw "Browser does not support hrc2";
        return renderer;
    }
}


/*
 * Idea for hrc2.createRenderer.createObject();
 *
 * Creates an object (like {}, not an object to be drawn) that has these keys:
 * 
 * - color | texture: A HTML color for what color the object would be. Also might add suppoort for images to be used as textures
 * - visible: If the object is visible (rendered)
 * - position: An object marking the position of the object. Contains the following keys:
 *   + x: The X position
 *   + y: The Y position
 * - rotation: An object making the rotation of the object. Contains the following keys:
 *   + x: The X rotation
 *   + Y: The Y rotation
 * - size: An object making the size of the object. Contains the following keys:
 *   + x: The X size
 *   + Y: The Y size
 * - remove: A function for removing the object
 */