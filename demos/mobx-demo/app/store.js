import { observable, computed } from 'mobx';

class Store {
  @observable name = 'Bartek';
  @computed get decorated() {     // 响应的属性，根据观察变化自动计算
    return `${this.name} is awesome!`;
  }
}

export default Store;
