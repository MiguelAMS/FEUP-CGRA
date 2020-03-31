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
		this.tangramMaterial = new CGFappearance(scene);
        this.tangramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.loadTexture('images/tangram.png');
        this.tangramMaterial.setTextureWrap('REPEAT', 'REPEAT');
	}
    
    display(){
        this.tangramMaterial.apply();

        this.scene.pushMatrix();
        var tran = [1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    -1.5, -1, 0, 1];
        this.scene.multMatrix(tran);                      
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(-1, 1, 0);                         
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), Math.sqrt(2), 0)
        this.scene.rotate(5*Math.PI/4, 0, 0, 1);
        this.triangleBig.updateTexCoords([1, 0, 0.5, 0.5, 0, 0]);
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2, -1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.triangleSmall.updateTexCoords([0, 0, 0.25, 0.25, 0, 0.5]);                         
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2, -1, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.triangleSmall.updateTexCoords([0.25, 0.75, 0.5, 0.5, 0.75, 0.75]);                      
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2, 2, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3 + Math.sqrt(2), 1 + Math.sqrt(2), 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.triangleBig.updateTexCoords([1, 1, 0.5, 0.5, 1, 0]); 
        this.triangleBig.display();
        this.scene.popMatrix();
    }
}