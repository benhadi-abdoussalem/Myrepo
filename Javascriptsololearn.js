let tree = {
    height: 6,
    color: 'green',
    grow() {
      this.height += 2;
    }
  };
  tree.grow();
  console.log(tree.height); // 10