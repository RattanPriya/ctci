
function rotate(matrix, n) {
	for ( layer = 0; layer < n / 2; ++layer) {
	first =layer;
	 last = n - 1 - layer;
	for( i = first; i < last; ++i) {
	offset = i - first; // savetop
	 top = matrix[first][i];
	// left -> top
	matrix[first][i] = matrix[last-offset][first];
	// bottom -> left
	matrix[last-offset][first] = matrix[last][last - offset];

	// right -> bottom
	matrix[last][last - offset] = matrix[i][last];
	// top -> right
	matrix[i][last] = top ; 
}}}

matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(matrix);
rotate(matrix,4);
console.log(matrix);