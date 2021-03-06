/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);

        this.triangle = new MyTriangle(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.diamond = new MyDiamond(scene);
        this.parallelogram = new MyParallelogram(scene);

        this.displayBlue = true;
        this.displayOrange = true;
        this.displayPink = true;
        this.displayRed = true;
        this.displayYellow = true;
        this.displayGreen = true;
        this.displayPurple = true;
    }
    display(){
        this.scene.pushMatrix();
        var tran = [1.0, 0.0, 0.0, 0.0,
                    0.0, 1.0, 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    -Math.sqrt(2)/2, -Math.sqrt(2) - Math.sqrt(2)/2, 0, 1];
        this.scene.multMatrix(tran);
        var rot = [Math.cos(-Math.PI/4), Math.sin(-Math.PI/4), 0.0, 0.0,
                   -Math.sin(-Math.PI/4), Math.cos(-Math.PI/4), 0.0, 0.0,
                   0.0, 0.0, 1.0, 0.0,
                   0.0, 0.0, 0.0, 1.0];   
        this.scene.multMatrix(rot); 
        this.scene.setColor(0.0, 1.0, 0.0, 1.0);
        if(this.displayGreen){                             
            this.diamond.display();
        }
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.sin(-Math.PI/4), Math.sin(-Math.PI/4), 0.0);
        this.scene.rotate(5*Math.PI/4, 0.0, 0.0, 1);
        this.scene.setColor(1.0, 0.0, 0.0, 1.0);
        if(this.displayRed){                             
            this.triangleSmall.display();
        }
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.cos(-Math.PI/4), -Math.sqrt(2)*3/2, 0.0);
        this.scene.rotate(-5*Math.PI/4, 0, 0, 1);
        this.scene.setColor(0.6, 0.0, 1.0, 1.0);
        if(this.displayPurple){                             
            this.triangleSmall.display();
        }
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.scene.scale(1, -1, 0);
        this.scene.setColor(0.8, 0.8, 0.2, 1.0);
        if(this.displayYellow){                             
            this.parallelogram.display();
        }
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), 0, 0);
        this.scene.rotate(-5*Math.PI/4, 0, 0, 1);
        this.scene.setColor(1.0, 0.6, 1.0, 1.0);
        if(this.displayPink){
            this.triangle.display();
        }
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.scene.setColor(0.7, 0.4, 0.2, 1.0);
        if(this.displayOrange){
            this.triangleBig.display();
        }
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.setColor(0.0, 0.0, 1.0, 1.0);
        if(this.displayBlue){
            this.triangleBig.display();
        }
        this.scene.popMatrix();
    }
}