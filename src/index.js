
// You should implement your task here.

module.exports = function towelSort (matrix) {
	
	if (!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    }
	
    var arr= matrix.map(function(elem, index){
        return (index%2 === 0) ? elem : elem.reverse();
    });
	
    return arr.flat();
}
