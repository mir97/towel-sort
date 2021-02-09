
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if(matrix==undefined){
        return [];
    }

var matrix2 =[];

    for(i=0;i<matrix.length;i++){

        if((i+1)%2==0 && i!=0){
            for(j=matrix[i].length-1;j>=0;j--){
                matrix2.push(matrix[i][j]);
            }

        }
        else{
            for(j=0;j<matrix[i].length;j++){
                matrix2.push(matrix[i][j]);
            }
        }
    }

  return matrix2;
}
