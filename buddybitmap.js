/* Buddy system bitmap
    Given a complete binary tree with nodes of values of either 1 or 0, the following rules always hold:
    (1) a node's value is 1 if and only if all its subtree nodes' values are 1
    (2) a leaf node can have value either 1 or 0
    Implement the following 2 APIs:
    set_bit(offset, length), set the bits at range from offset to offset+length-1
    clear_bit(offset, length), clear the bits at range from offset to offset+length-1
    
    i.e. The tree is like:
                 0
              /     \
             0        1
           /  \      /  \
          1    0    1    1
         /\   / \   / 
        1  1 1   0 1
        Since it's complete binary tree, the nodes can be stored in an array:
        [0,0,1,1,0,1,1,1,1,1,0,1] 
        
*/

var buddyBitMap = function(tree) {
  this.tree = tree;
}

buddyBitMap.prototype.set_descendants = function(A, x, n) {
  if(x >= n) {
    return;
  }

  if(2*x+1 < n && A[2*x+1] === 0) {
    A[2*x+1] = 1;
    this.set_descendants(A,2*x+1,n);
  }

  if(2*x+2 < n && A[2*x+2] === 0) {
    A[2*x+2] = 1;
    this.set_descendants(A,2*x+2,n);
  }
}

buddyBitMap.prototype.setBit = function(pos, length) {
  var A = this.tree;
  var n = A.length - 1;
  var lastBitSet = Math.min(n+1, Math.min(pos+length, (2*pos)+1));// set only until left child if length goes over left child.. rest taken care by recursion in setDescendants
  
  for(var i=pos; i<lastBitSet; i++) {
    let x = i; // just to copy solution syntax
    
    if(A[x] === 1) {// dont have to do anything if already 1
      continue;
    }
    
    A[x] = 1;

    //set descendants
    this.set_descendants(A, x, n);

    //set ancestors
    while(x > 0) {
      // set ancestor to 1 only if both its childs are 1 -- here A[x] is already set to 1
      if((x%2 === 0 && A[x-1] === 1) || (x%2 === 1 && A[x+1] === 1)) {
        let ancestor = (x-1)/2 >> 0;
        A[ancestor] = 1;
      }
      x = (x-1)/2 >> 0; // go up to its ancestor
    }
  }
  console.log(A);
}



buddyBitMap.prototype.clearBit = function(pos, length) {
  var A = this.tree;
  
  var n = A.length - 1;
  var lastBitSet = Math.min(n+1, pos+length);// set only until left child if length goes over left child.. rest taken care by recursion in setDescendants
  
  for(var i=pos; i<lastBitSet; i++) {
    let x = i;
    
    if(A[x] === 0) {
      continue;
    }
    A[x] = 0;
    
    // set descendants
    while(2*x+1 <= n) {
      A[2*x+1] = 0;
      x = 2*x+1;
    }

    //set ancestors
    while(x>0) {
      if(A[(x-1)/2] === 0) {
        break;
      }
      let ancestor = (x-1)/2 >> 0;
      A[ancestor] = 0;
      x = (x-1)/2 >> 0;
    }
  }
  console.log(A);
  
}
