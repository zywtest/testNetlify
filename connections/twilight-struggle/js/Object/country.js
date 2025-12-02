class country {
  constructor(name, controllPoint) {
    this.name = name;
    this.controll = controllPoint;
    this.canCoup = [true, true];
    this.canAdjust = [true, true];
    this.canChange = [true, true];
    this.influencePoint = [0, 0];
  }

  changeInfluence(idx, val) {
    this.influencePoint[idx] = val;
  }
  getCountryName() {
    return this.name;
  }
  getControllPoint() {
    return this.controllPoint;
  }

  getCoup(idx) {
    return this.canCoup[idx];
  }
  setCoup(idx, flag) {
    this.canCoup[idx] = flag;
  }

  getCanAdjust(idx) {
    return this.canAdjust[idx];
  }
  setCanAdjust(idx, flag) {
    this.canAdjust[idx] = flag;
  }

  getCanChange(idx) {
    return this.canChange[idx];
  }
  setCanChange(idx, flag) {
    this.canChange[idx] = flag;
  }
  bindToHTML() {

  }
}