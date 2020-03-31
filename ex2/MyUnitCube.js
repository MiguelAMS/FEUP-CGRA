/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
		    //Qaudrado de z negativo no eixo XY
		    -0.5, -0.5, -0.5,   //0
		    0.5, -0.5, -0.5,    //1
		    0.5, 0.5, -0.5,     //2
		    -0.5, 0.5, -0.5,    //3
		    //Quadrado de z positivo no eixo XY
		    -0.5, -0.5, 0.5,    //4
		    0.5, -0.5, 0.5,     //5
		    0.5, 0.5, 0.5,      //6
		    -0.5, 0.5, 0.5,     //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
		    0, 1, 2,    //face XY com z negativo
		    2, 3, 0,
		    4, 5, 6,    //face XY com z positivo
		    6, 7, 4,
		    4, 5, 1,    //face XZ com y negativo
            1, 0, 4,
		    7, 6, 2,    //face XZ com y positivo
            2, 3, 7,
		    6, 5, 1,    //face YZ com x negativo
            1, 2, 6,
		    7, 4, 0,    //face YZ com x positivo
		    0, 3, 7,
            //Cube shown in both sides
		    2, 1, 0,
		    0, 3, 2,
		    6, 5, 4,
		    4, 7, 6,
		    1, 5, 4,
		    4, 0, 1,
		    2, 6, 7,
		    7, 3, 2,
		    1, 5, 6,
		    6, 2, 1,
		    0, 4, 7,
		    7, 3, 0,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}