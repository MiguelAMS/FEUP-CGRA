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

        this.initMaterials(scene);
    }

	initMaterials(scene) {
		//Green
        this.green = new CGFappearance(scene);
        this.green.setAmbient(0, 1*0.5, 0, 1.0);
        this.green.setDiffuse(0, 1*0.7, 0, 1.0);
        this.green.setSpecular(0, 1, 0, 1.0);
        this.green.setShininess(10.0);

        //Purple
        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(0.58*0.5, 0, 0.827*0.5, 1.0);
        this.purple.setDiffuse(0.58*0.7, 0, 0.827*0.7, 1.0);
        this.purple.setSpecular(0.58, 0, 0.827, 1.0);
        this.purple.setShininess(10.0);

        //Pink
        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(1*0.5, 0.714*0.5, 0.757*0.5, 1.0);
        this.pink.setDiffuse(1*0.7, 0.714*0.7, 0.757*0.7, 1.0);
        this.pink.setSpecular(1, 0.714, 0.757, 1.0);
        this.pink.setShininess(10.0);

        //Red
        this.red = new CGFappearance(scene);
        this.red.setAmbient(1*0.5, 0, 0, 1.0);
        this.red.setDiffuse(1*0.7, 0, 0, 1.0);
        this.red.setSpecular(1, 0, 0, 1.0);
        this.red.setShininess(10.0);

        //Orange
        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(1*0.5, 0.647*0.5, 0, 1.0);
        this.orange.setDiffuse(1*0.7, 0.647*0.7, 0, 1.0);
        this.orange.setSpecular(1, 0.647, 0, 1.0);
        this.orange.setShininess(10.0);        

        //Yellow
        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(1*0.5, 1*0.5, 0, 1.0);
        this.yellow.setDiffuse(1*0.7, 1*0.7, 0, 1.0);
        this.yellow.setSpecular(1, 1, 0, 1.0);
        this.yellow.setShininess(10.0);

        //Blue
        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0, 0.749*0.5, 1*0.5, 1.0);
        this.blue.setDiffuse(0, 0.749*0.7, 1*0.7, 1.0);
        this.blue.setSpecular(0, 0.749, 1, 1.0);
        this.blue.setShininess(10.0);
	}
    
    display(){

        this.scene.pushMatrix();
        var tran = [1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    -1.5, -1, 0, 1];
        this.scene.multMatrix(tran);    
        this.scene.customMaterial.apply();                       
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(-1, 1, 0);
        this.yellow.apply();                          
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), Math.sqrt(2), 0)
        this.scene.rotate(5*Math.PI/4, 0, 0, 1);
        this.blue.apply();
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2, -1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.purple.apply();                        
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2, -1, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.red.apply();                      
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2, 2, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.pink.apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3 + Math.sqrt(2), 1 + Math.sqrt(2), 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.orange.apply();
        this.triangleBig.display();
        this.scene.popMatrix();
    }

    enableNormalViz() {
    	this.diamond.enableNormalViz();
    	this.parallelogram.enableNormalViz();
    	this.triangle.enableNormalViz();
    	this.triangleSmall.enableNormalViz();
    	this.triangleBig.enableNormalViz();
	}

	disableNormalViz() {
		this.diamond.disableNormalViz();
    	this.parallelogram.disableNormalViz();
    	this.triangle.disableNormalViz();
    	this.triangleSmall.disableNormalViz();
    	this.triangleBig.disableNormalViz();
	}

    updateBuffers(complexity) { }
}